---
sidebar_position: 1
---

# Tổng quan Sales module

```markmap initialExpandLevel=2
- Sales Modules
  - [Point of Sale (POS)](./Point%20of%20Sale/intro.md)
    - Core Functionalities
      - [Start/Close Session](./Point%20of%20Sale/intro.md#start-a-session)
      - [Sell Products](./Point%20of%20Sale/intro.md#sell-products)
      - [Set Customers/Notes](./Point%20of%20Sale/intro.md#set-customers)
      - [Return and Refunds](./Point%20of%20Sale/intro.md#return-and-refunds-products)
      - [Manage Cash Register (In/Out)](./Point%20of%20Sale/intro.md#manage-the-cash-register)
      - [Analytics/Reporting](./Point%20of%20Sale/reporting.md)
    - Configuration
      - [Access POS Settings](./Point%20of%20Sale/Configuration/intro.md)
      - Make Products Available
      - PoS Product Categories
        - Assign Categories
        - Restrict Categories
      - [IoT System Connection](./Point%20of%20Sale/Configuration/iot-system-configuration.md)
      - [ePOS Printers](./Point%20of%20Sale/Configuration/ePOS-printers.md)
        - Directly Supported
        - IoT System Integration
        - [Self-signed certificate](./Point%20of%20Sale/Configuration/self-signed-certificated-for-epos-printers.md)
      - [Secure Connection (HTTPS)](./Point%20of%20Sale/Configuration/secure-connection.md)
    - Pricing Features
      - [Discounts (Manual/Global/Time-limited)](./Point%20of%20Sale/Pricing%20features/discounts.md)
      - [Discount Tags (Barcode Scanner)](./Point%20of%20Sale/Pricing%20features/discount-tags.md)
      - [Loyalty Programs](./Point%20of%20Sale/Pricing%20features/loyalty-programs.md)
      - [Pricelists](./Point%20of%20Sale/Pricing%20features/pricelists.md)
        - Flexible Pricelists
        - Create Pricelists
      - [Flexible Taxes (Fiscal Position)](./Point%20of%20Sale/Pricing%20features/flexible-taxes.md)
      - [Cash Rounding](./Point%20of%20Sale/Pricing%20features/cash-rounding.md)
      - [Electronic Shelf Labels (ESL)](./Point%20of%20Sale/Pricing%20features/electronic-shelf-labels.md)
    - [Hardware Integration](./Point%20of%20Sale/hardware.md)
      - Customer Display
        - Configuration (USB/HDMI/IoT)
        - Opening Display
      - Scale
        - IoT System Required
        - Product Configuration (per Kg)
      - Barcode Scanner
    - [Restaurant Features](./Point%20of%20Sale/restaurant-feature.md)
      - Floors and Tables
      - Booking (Enterprise)
      - Order Management (Transfer/Merge)
      - Presets (Dine In/Takeout/Delivery)
      - Courses (Kitchen Printing)
      - Bill Splitting
      - Tips (Configuration/Payment)
      - Default Start Screen
    - Orders & Products
      - [Product Combos](./Point%20of%20Sale/product-combos.md)
      - [Self-Ordering (QR Menu/Kiosk)](./Point%20of%20Sale/self-ordering.md)
      - [Sales Orders (Down Payment/Settle)](./Point%20of%20Sale/Shop%20features/sales-orders.md)
      - [Barcodes (Assign/Use)](./Point%20of%20Sale/Shop%20features/barcodes.md)
      - [Serial Numbers and Lots](./Point%20of%20Sale/Shop%20features/serial-numbers-and-lots.md)
      - [Ship Later](./Point%20of%20Sale/Shop%20features/ship-later.md)
    - User/Receipts/Payments
      - [Multi-employee Management](./Point%20of%20Sale/multi-employee-management.md)
        - Access Rights (Minimal/Basic/Advanced)
        - Logging In (PIN/Badges)
      - [Receipts and Invoices](./Point%20of%20Sale/receipts-and-invoices.md)
        - Custom Header/Footer
        - Automatic Printing
        - Invoice a Customer
        - QR Codes to Generate Invoices
      - [Payment Methods](./Point%20of%20Sale/Payment%20methods/intro.md)
        - [Customer Account (Deposit/Settle Debt)](./Point%20of%20Sale/Payment%20methods/customer-account.md)
        - [QR Code Payments (Bank App)](./Point%20of%20Sale/Payment%20methods/qr-code-payments.md)
        - [Configuration (Journal/Integration)](./Point%20of%20Sale/Payment%20methods/intro.md)
      - [Marketing Features](./Point%20of%20Sale/marketing-features.md)
        - Storing Contact Details
        - Email Marketing
        - WhatsApp Marketing
  - Sales Module
    - Quotation Management
      - [Tạo Quotation (Customer/Pricelist/Terms)](./Quotations/create-quotation.md)
      - [Quotation Templates](./Quotations/quotation-templates.md)
      - [Quotation Deadlines/Expiration](./Quotations/quotation-deadlines.md)
      - [Optional Products (Cross-selling)](./Quotations/optional-products.md)
      - [Online Signatures for Confirmation](./Quotations/online-signatures-order-confirmation.md)
      - [Online Payment Order Confirmation](./Quotations/online-payment-order-confirmation.md)
      - [PDF Quote Builder (Dynamic Text)](./Quotations/pdf-quote-builder.md)
      - [Pro-forma Invoices](./Invoicing%20Method/pro-forma-invoices.md)
      - Mass Cancel Quotations/Orders
        - Creation and Editing Rules
        - Recurring Prices (Subscriptions)
    - Pricing and Products
      - [Discounts (Product Lines/Global/Fixed)](./Product%20and%20prices/Manage%20your%20pricing/discounts.md)
        - Rental Rules
        - Customer Application
      - [Discount & Loyalty Programs (Sales/eCommerce/PoS)](./Product%20and%20prices/discount-and-loyalty-program.md)
      - [Foreign Currencies](./Product%20and%20prices/Manage%20your%20pricing/foreign-currencies.md)
      - [eWallets and Gift Cards](./Product%20and%20prices/use-ewallet-and-gift-cards.md)
    - Product Management
      - [Product Variants](./Product%20and%20prices/Manage%20your%20products/product-variants.md)
        - Attributes (Type/Creation Mode)
        - Variant Grid Entry
        - Product Configurator
      - [Import Products (Template/Relation Fields)](./Product%20and%20prices/Manage%20your%20products/import-products.md)
      - [Product Images with Google Images API](./Product%20and%20prices/Manage%20your%20products/product-images-with-google-images.md)
    - Order and Delivery
      - General Sale Flow
      - [Deliveries & Invoices to Different Addresses](./Quotations/deliveries-invoices-to-different-addresses.md)
      - [Returns and Refunds (Before/After Invoicing)](./Product%20and%20prices/returns-and-refunds.md)
    - [Commissions (Sales Incentives)](./commissions.md)
      - Purpose and Setup
      - Structure (Based On: Targets/Achievements)
      - Target-based Plans (Levels)
      - Achievement-based Plans (Percentage of Value)
      - Performance Measures (Amount/Quantity/Margin/MRR)
      - Approval and Management
  - Invoicing Methods
    - [Down Payment](./Invoicing%20Method/down-payment.md)
      - Create Invoices (Percentage/Fixed Amount)
      - Income Account Modification
      - Impact of 100% Down Payment
      - Credit Note Handling
    - [Invoicing Policy](./Invoicing%20Method/invoice-based-on-delivered-or-order-quantities.md)
      - Invoice What Is Ordered (Default)
      - Invoice What Is Delivered
      - Impact on Sales Flow (Inventory App)
    - Project Billing
      - [Invoice Project Milestones (Create Milestones/Tasks)](./Invoicing%20Method/invoice-project-milestones.md)
      - [Invoicing Time and Materials](./Invoicing%20Method/invoicing-based-on-time-and-materials.md)
        - Service Product Configuration (Timesheets)
        - Invoice Time Spent
        - Expense Reinvoicing (Add/Invoice Expenses)
        - Purchase Reinvoicing (Add/Invoice Purchase)
      - [Reinvoice Expenses to Customers](./Invoicing%20Method/reinvoice-expenses-to-customer.md)
  - [Subscriptions Module](./Subscriptions/intro.md)
    - Setup and Configuration
      - [Recurring Plans (Billing Period/Self-Service Options)](./Subscriptions/intro.md#setup-recurring-plans)
      - Product Form Configuration (Service Type)
      - Create Subscriptions Quotation
      - [Subscriptions in eCommerce Shop](./Subscriptions/subscription-in-ecommerce-shop.md)
    - Lifecycle Management
      - [Upsell Subscriptions](./Subscriptions/upsell-subscription.md)
      - [Renew Subscriptions (Manual Renewal)](./Subscriptions/renew-subscriptions.md)
      - [Close Subscriptions (Closable option/Admin/Customer View)](./Subscriptions/close-subscriptions.md)
    - Automated Processes
      - [Subscriptions and Automatic Payments (Tokenization)](./Subscriptions/subscriptions-and-automatic-payments.md)
      - [Scheduled Actions](./Subscriptions/scheduled-actions.md)
        - Generate Recurring Invoices and Payments
        - Subscriptions Expiration (Automatic Closing)
    - Reporting
      - [Subscription Reports (Quantity/Revenue/Status)](./Subscriptions/subscription-reports.md)
      - Retention Analysis
      - MRR Breakdown
      - MRR Timeline
  - Connectors
    - [Shopee Connector](./Connector/shopee.md)
      - Synchronize Confirmed Orders (Shopee to Odoo)
      - Synchronize Inventory (Odoo to Shopee - FBM)
      - Multiple Accounts/Marketplaces Supported
      - Configuration (API Endpoint/Credentials)
      - Product Catalog Mapping (SKU to Internal Reference)
      - Order Synchronization (Status Based/Force Sync)
      - Manage Deliveries in FBM (Shipping Label Fetch)
      - Accounting/Reporting (Dedicated Journal/Sales Team)
    - [Gelato Connector (Print-on-Demand)](./Connector/galeto.md)
      - Sync Sales Orders for Automated Fulfillment
      - Create/Manage Gelato Products in Odoo
      - Configuration (API Keys/Webhooks)
      - Product Synchronization (Template ID/Variants/Images)
      - Ordering Gelato Products (Shipping Options)
      - Order Limit (Only Gelato products per SO)
```

# Tổng quan Sales

- Bản giá/Báo giá là một tài liệu gửi đến khách hàng, trong đó chứa thông tin về chi phí, điều khoản ước tính cho hàng hóa hoặc dịch vụ.
  Báo giá được chuyển thành đơn đặt hàng (sale orders) là thỏa thuận cuối cùng trước khi giao hàng và lập hóa đơn (invoice).

## Tổng quan về Sale flow.

- Flow điển hình thường theo các steps sau:
  1. Báo giá: Một bản đề xuất được gửi tới khách hàng kèm thông tin chi tiết về sản phẩm và giá cả.
  2. Sale order: Đơn đặt hàng được tạo tự động khi khách hàng chấp nhận bảng báo giá và xác nhận bán hàng.
  3. Giao hàng: Sản phẩm được vận chuyển hoặc dịch vụ được giao tới khách hàng.
  4. Hóa đơn: Hóa đơn cuối cùng đucợ xuất dựa trên hóa đơn bán hàng hoặc sản phẩm/dịch vụ được giao.
  5. Thanh toán: Khách hàng thanh toán hóa đơn, hoàn tất chu trình bán hàng.

- Quotation được config trong Sales app. Chúng có thể được sinh ra từ các apps khác như 1 phần của sale workflow.
  - `CRM`: chuyển đổi opportunities thành báo giá để theo dõi các giao dịch tiềm năng.
  - `Helpdesk`: Sinh ra báo giá từ ticket khi cung cấp dịch vụ/sản phẩm có trả phí.
  - `Subscriptions`: Cung cấp dịch vụ định kỳ khi bắt đầu chu trình thanh toán tự động.

## Sale quotations trong giao dịch kinh doanh

- Sales quotation phục vụ như một bước quan trọng trong tiến trình sales. Kết nối khoảng cách giữa việc thăm dò về hàng hóa và dịch vụ
  của khách hàng với hợp đồng thanh toán và giao hàng sau cùng. Quotation còn cung cấp một sự minh bạch về giá, giúp hai bên đàm phán
  và dễ dàng hoàn thiện các điều khoản trước khi đưa ra cam kết.

## Các thành phần chính của một sales quotation

- Một sales quotation sẽ gồm có các thành phần như sau:
  - _Quotation number and date_: Một định danh duy nhất cho việc tracking và referencing (tham chiếu), cũng như ngày phát hành và ngày hết hạn.
    Trong Odoo, quotation number được gán dưới một quy ước đặt tên tiêu chuẩn sau khi được xác nhận.
  - _Customer information_: Tên và thông tin liên hệ của khách hàng, cũng như hóa đơn và địa chỉ giao hàng.
  - _Products and services_: Danh sách chi tiết các mặt hàng cần mua, bao gồm số lượng, thông số kỹ thuật (nếu cần) và đơn giá.
  - _Payment terms and pricelists_: Các thỏa thuận và quy tắc được cấu hình để định giá và thanh toán cho báo giá bán hàng cụ thể.
  - _Special pricing_: Tùy chọn giảm giá và giá khuyến mại để cập nhật/sửa đổi từng dòng sản phẩm.
  - _Total cost and currency_: Tổng giá sản phẩm hoặc dịch vụ và giá vận chuyển, bao gồm các loại thuế liên quan.
  - **Lưu ý: bản enterprise và community sẽ khác nhau một chút trong giao diện quotation**
    ![sale quotation community](./img/sales_quotation_com.png)

    ![sale quotaion enterprise](./img/sales_quotation.png)
