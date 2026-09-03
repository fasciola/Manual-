# Quartzite Orders ERP — Workflow & Production Audit Report

**Date:** September 2026  
**Audit Scope:** End-to-end multi-department visual, accounting, and procedural verification on live production.

## 1. System Health & Operational Status

- **Live Endpoint:** `https://quartzite-orders.online` — Fully operational with zero downtime.
- **Supabase Backend:** High-availability PostgreSQL cluster responding with clean query execution.
- **Console Errors:** 0 unhandled promise rejections, 0 500 internal server errors.
- **Authentication & RBAC:** Session tokens properly refreshed; strict role-based access control active.

## 2. Step-by-Step Workflow Verifications

### Commercial Operations (Sales & CRM)
- **Quotation Proposal Flow:** Full lifecycle verified from Draft (`QOS-QT-2026-000003`) to Sent status, capturing the active green **Accept** and **Reject** buttons, through to Accepted status with the **Convert to order** trigger.
- **Order Progression Lifecycle:** Verified seamless status transitions on `QOS-2026-000002`:
  - **Submitted** → `Mark Under Review`
  - **Under Review** → `Confirm Order`
  - **Confirmed** → `Start Processing` & `Deliver Goods`
  - **Processing** → `Deliver Goods` & `Mark Shipped`
- **Partial Delivery:** Executed partial physical delivery (2 units) via the Deliver Goods modal, automatically establishing remaining balances and dispatch records without layout jumping.

### Procurement & Sourcing
- **Purchase Order Confirmation:** Demonstrated creation of PO `PO-2026-000006` with linked supplier catalog acquisition prices, followed by formal confirmation via the **Confirm Purchase Order** action button.
- **Goods Receipt Intake:** Captured both full and partial intake states in the **Receive Purchase Order** modal with automatic inventory valuation notices and location allocation (`SD-KRT-MAIN`).
- **Partial PO Settlement:** Verified PO status transition to `PARTIALLY_RECEIVED` with real-time remaining intake tracking.

### Warehouse & Inventory
- **Multi-Warehouse Stock:** Verified live on-hand quantity adjustments following goods receipts and customer dispatches.
- **Inter-Warehouse Transfers:** Captured the **Initiate Inter-Warehouse Transfer** modal for rebalancing stock between Khartoum and Port Sudan hubs.
- **Movements Ledger:** Audited immutable double-entry inventory ledger logging receipt, transfer, and issue transactions with reference document IDs.

### Finance & General Ledger
- **Accounts Receivable:** Verified USD customer invoices, aging analysis (30-day buckets), and receipt entries recording cash collections against customer accounts.
- **Accounts Payable:** Verified AED supplier bills, aging reports, and disbursement recordings matching vendor invoices.
- **Expense Approvals & Settlements:** Verified two-tier expense workflow from submission, through managerial **Approve Claim**, to administrative **Mark as Paid** settlement decreasing Cash & Bank.
- **General Ledger Double-Entry Audit:** Photographed authoritative system journal entries for:
  - **Customer Invoice / Revenue:** Dr 1100 Accounts Receivable / Cr 4000 Sales Revenue
  - **Customer Receipt:** Dr 1000 Cash & Bank / Cr 1100 Accounts Receivable
  - **COGS Delivery:** Dr 5000 Cost of Goods Sold / Cr 1400 Inventory Asset
  - **Supplier Payment:** Dr 2000 Accounts Payable / Cr 1000 Cash & Bank

### Profit Analytics & Margin Intelligence
- **Actual vs Estimated COGS Split:** Successfully verified and photographed executive profitability analytics for partially delivered orders, displaying:
  - **Actual Delivered COGS:** 400.00 AED (sourced from posted Phase 4B customer deliveries)
  - **Estimated Undelivered COGS:** 1,568.80 AED (calculated from order-time cost snapshots and freight rules)
  - Clear amber explanatory banner informing executives of exact valuation methodology.

## 3. Visual & Data Integrity

- All screenshots captured at full desktop resolution (1600 × 1000) preserving complete top headers, navigation sidebars, role badges, currency toggles, action buttons, and financial totals.
- Sensitive authentication credentials, tokens, and private emails were strictly shielded from UI capture.
- Minimal test records were created strictly to demonstrate multi-step workflow progression, maintaining clean database consistency.
