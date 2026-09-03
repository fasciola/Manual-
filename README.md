# Quartzite Orders System User Manual

Detailed bilingual English/Arabic operating guide for the Quartzite Orders system.

The manual is role-based and covers the operational journey from login through Sales, Procurement, Warehouse, Logistics, Accounts Receivable, Accounts Payable, Expenses, General Ledger, Cash & Bank, Profit Analytics and System Administration.

## Run locally

```bash
npm install
npm run check
npm run dev
```

## Production build

```bash
npm run build
```

## Screenshot assets

The React manual references the screenshot library under `public/screenshots/` using the same filenames generated for the Quartzite user-manual screenshot set. If a screenshot file is not present, the interface shows a clear placeholder rather than breaking the page.

Expected structure includes:

```text
public/screenshots/
├── 00_general/
├── 01_sales_crm/
├── 02_procurement/
├── 03_warehouse_inventory/
├── 04_logistics_delivery/
├── 05_accounts_receivable/
├── 06_accounts_payable/
├── 07_expenses/
├── 08_general_ledger/
├── 09_cash_bank/
├── 10_profit_analytics/
└── 11_system_admin/
```

## Current business rules documented

- Customer quotations/sales are shown in USD where configured.
- Supplier purchasing, inventory valuation, COGS and core accounting are maintained in AED.
- Purchase orders must be confirmed before controlled goods receipt.
- Goods receipt posts inventory valuation from trusted PO cost.
- Customer delivery posts actual COGS and reduces inventory asset.
- Partial delivery uses actual COGS for delivered quantity and estimated cost only for remaining quantity in Profit Analytics.
- Customer receipts and supplier payments must flow through AR/AP rather than manual cash adjustments.
- Product Selling Price AED is automatically calculated from Base Cost + Unit Weight using configured shipping/margin/freight/customs/overhead settings.
- Normal users must not bypass workflows by editing database records or forcing statuses.
