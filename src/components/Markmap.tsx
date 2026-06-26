import React, { useEffect, useRef } from 'react'
import { useHistory } from '@docusaurus/router'

// Lazy-load to avoid SSR issues
const loadMarkmap = async () => {
  const { Markmap } = await import('markmap-view')
  const { Transformer } = await import('markmap-lib')
  return { Markmap, Transformer }
}

function resolveRelativePath(relative: string, currentPath: string): string {
  const hashIdx = relative.indexOf('#')
  let hash = ''
  let pathPart = relative
  if (hashIdx !== -1) {
    hash = relative.slice(hashIdx)
    pathPart = relative.slice(0, hashIdx)
  }

  // Check if it's a directory (no file extension)
  const isDirectory = !/\.mdx?($|\?|#)/.test(pathPart)

  if (isDirectory) {
    const parts = pathPart.split('/').filter(Boolean)
    const lastSegment = parts[parts.length - 1] || ''
    const decodedSegment = decodeURIComponent(lastSegment)

    // Slugify the decoded segment (kebab-case)
    const slug = decodedSegment
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // remove Vietnamese accents
      .replace(/[^a-z0-9]+/g, '-')     // replace non-alphanumeric with hyphens
      .replace(/(^-|-$)/g, '')         // trim leading/trailing hyphens

    return `/docs/category/${slug}${hash}`
  }

  let resolved = ''
  if (pathPart.startsWith('/')) {
    resolved = pathPart.replace(/\.mdx?$/, '')
  } else {
    // Remove leading ./ if any
    let cleanRelative = pathPart
    if (cleanRelative.startsWith('./')) {
      cleanRelative = cleanRelative.slice(2)
    }

    // Get directory of currentPath
    const segments = currentPath.split('/').filter(Boolean)
    if (segments.length > 0) {
      segments.pop() // Remove the current file name (e.g. 'intro')
    }

    // Handle ../
    const relativeSegments = cleanRelative.split('/')
    for (const seg of relativeSegments) {
      if (seg === '..') {
        segments.pop()
      } else if (seg !== '.' && seg !== '') {
        segments.push(seg)
      }
    }

    resolved = '/' + segments.join('/')
    resolved = resolved.replace(/\.mdx?$/, '')
  }

  return decodeURIComponent(resolved) + hash
}

interface Props {
  content: string
  height?: string | number
  initialExpandLevel?: number | string
}

export default function MarkmapComponent({ content, height = 400, initialExpandLevel }: Props) {
  const svgRef = useRef<SVGSVGElement | null>(null)
  const history = useHistory()

  useEffect(() => {
    let disposed = false
    let mm: any
    const svgEl = svgRef.current

    const handleSvgClick = (event: MouseEvent) => {
      const target = event.target as Element

      // Intercept anchor link clicks
      const anchorEl = target.closest('a')
      if (anchorEl) {
        const href = anchorEl.getAttribute('href')
        if (href) {
          // If relative link, intercept and route using Docusaurus history
          if (!/^(https?:|mailto:|tel:|\/\/|#)/.test(href)) {
            event.preventDefault()
            const resolvedPath = resolveRelativePath(href, window.location.pathname)
            history.push(resolvedPath)
          }
        }
        return
      }

      const nodeEl = target.closest('.markmap-node')
      if (!nodeEl) return

      // Don't intercept if clicked on fold/unfold circle
      if (target.closest('circle')) {
        return
      }

      const textContent = nodeEl.textContent?.trim()
      if (!textContent) return

      const normalize = (text: string) => {
        return text
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '') // remove Vietnamese accents
          .replace(/[^a-z0-9\s]/g, '')     // remove special characters except space
          .replace(/\s+/g, ' ')            // collapse multiple spaces
          .trim()
      }

      const normalizedNode = normalize(textContent)
      if (!normalizedNode || normalizedNode.length < 2) return

      const headings = Array.from(
        document.querySelectorAll(
          'article h1, article h2, article h3, article h4, article h5, article h6, .markdown h1, .markdown h2, .markdown h3, .markdown h4, .markdown h5, .markdown h6'
        )
      )

      let bestMatch: HTMLElement | null = null
      let bestScore = 0

      for (const heading of headings) {
        const headingHtmlEl = heading as HTMLElement
        const headingText = headingHtmlEl.textContent || ''
        const normalizedHeading = normalize(headingText)
        if (!normalizedHeading) continue

        if (normalizedHeading === normalizedNode) {
          bestMatch = headingHtmlEl
          break
        }

        if (normalizedHeading.includes(normalizedNode)) {
          const score = normalizedNode.length / normalizedHeading.length
          if (score > bestScore) {
            bestScore = score;
            bestMatch = headingHtmlEl
          }
        } else if (normalizedNode.includes(normalizedHeading)) {
          const score = normalizedHeading.length / normalizedNode.length
          if (score > bestScore) {
            bestScore = score;
            bestMatch = headingHtmlEl
          }
        }
      }

      if (bestMatch) {
        bestMatch.scrollIntoView({ behavior: 'smooth', block: 'start' })
        if (bestMatch.id) {
          window.history.pushState(null, '', `#${bestMatch.id}`)
        }
      }
    }

    const render = async () => {
      if (!svgRef.current) return
      const cleanContent = (content ?? '').trim()
      if (!cleanContent) return

      try {
        const { Markmap, Transformer } = await loadMarkmap()
        const transformer = new Transformer()
        const { root } = transformer.transform(cleanContent)

        // clear trước khi render lại
        svgRef.current.innerHTML = ''
        if (disposed) return

        const level =
          initialExpandLevel === undefined || initialExpandLevel === null
            ? undefined
            : Number(initialExpandLevel)
        const options = Number.isFinite(level) ? { initialExpandLevel: level as number } : {}
        mm = Markmap.create(svgRef.current, options as any, root)
        setTimeout(() => mm?.fit?.(), 50)

        svgRef.current.addEventListener('click', handleSvgClick)
      } catch (err) {
        if (svgRef.current) {
          svgRef.current.innerHTML = '<text x="10" y="20" fill="red">Failed to render markmap</text>'
        }
        // eslint-disable-next-line no-console
        console.error('Markmap render error:', err)
      }
    }

    render()

    return () => {
      disposed = true
      if (svgEl) {
        svgEl.innerHTML = ''
        svgEl.removeEventListener('click', handleSvgClick)
      }
      mm = null
    }
  }, [content])

  const computedHeight =
    height === undefined ? undefined : typeof height === 'number' ? `${height}px` : height

  return (
    <svg
      ref={svgRef}
      style={{ width: '100%', height: computedHeight, display: 'block' }}
    />
  )
}


