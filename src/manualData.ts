export type Language = "en" | "ar";

export type ManualStep = {
  title: string;
  text: string;
  screenshot?: string;
};

export type ManualSection = {
  id: string;
  number: string;
  en: {
    title: string;
    audience: string;
    purpose: string;
    before: string[];
    steps: ManualStep[];
    controls: string[];
    result: string[];
    accounting?: string[];
  };
  ar: {
    title: string;
    audience: string;
    purpose: string;
    before: string[];
    steps: ManualStep[];
    controls: string[];
    result: string[];
    accounting?: string[];
  };
};

export const sections: ManualSection[] = [
  {
    id: "basics",
    number: "01",
    en: {
      title: "System basics, login and navigation",
      audience: "All users",
      purpose: "Sign in securely, understand the dashboard, navigate to the correct module, and recognise role-based access before entering live transactions.",
      before: [
        "Use only the account assigned to you. Never share usernames or passwords.",
        "Confirm that you are working in the correct company and production environment before entering data.",
        "Know your assigned role because menus and action buttons are permission controlled."
      ],
      steps: [
        { title: "Open Quartzite Orders", text: "Open https://quartzite-orders.online and wait for the login screen. Enter the credentials assigned by the administrator. If login fails, do not create another account; ask the administrator to verify your user profile.", screenshot: "/screenshots/00_general/01_general_login_screen.png" },
        { title: "Review the dashboard", text: "After login, confirm that the dashboard loads without an access error. Read the operational cards and alerts. These cards are summaries; open the source module before acting on a transaction.", screenshot: "/screenshots/00_general/02_general_main_dashboard.png" },
        { title: "Use the left navigation", text: "Use the left menu to move between Sales, Procurement & Warehouse, Finance & Operations, and Admin. Do not use browser Back while a save/approval/payment modal is open; finish or close the modal first.", screenshot: "/screenshots/00_general/03_general_left_nav_admin.png" },
        { title: "Understand role-based visibility", text: "A missing button may be intentional. Sales users, procurement users, finance users and administrators do not necessarily see the same actions. Verify record status and your role before reporting a missing action.", screenshot: "/screenshots/00_general/04_general_role_dashboard_view.png" }
      ],
      controls: [
        "Never use another employee's account to bypass a permission restriction.",
        "Do not submit the same action from two tabs or by double-clicking.",
        "If a successful transaction appears unchanged, refresh the record before repeating the action."
      ],
      result: ["You are signed in with the correct role.", "You know where each major business process starts.", "You understand that status and permission determine the actions shown on screen."]
    },
    ar: {
      title: "أساسيات النظام وتسجيل الدخول والتنقل",
      audience: "جميع المستخدمين",
      purpose: "تسجيل الدخول بأمان، فهم لوحة المعلومات، الوصول إلى الوحدة الصحيحة، ومعرفة أن القوائم والأزرار تعتمد على الدور والصلاحيات.",
      before: [
        "استخدم الحساب المخصص لك فقط ولا تشارك بيانات الدخول مع أي شخص.",
        "تأكد من أنك تعمل في الشركة والبيئة الصحيحتين قبل إدخال بيانات فعلية.",
        "اعرف دورك الوظيفي لأن القوائم والأزرار تخضع للصلاحيات."
      ],
      steps: [
        { title: "فتح النظام", text: "افتح https://quartzite-orders.online وانتظر شاشة تسجيل الدخول. أدخل بيانات الحساب المخصصة لك. إذا فشل الدخول فلا تنشئ حساباً بديلاً؛ اطلب من مسؤول النظام التحقق من ملف المستخدم.", screenshot: "/screenshots/00_general/01_general_login_screen.png" },
        { title: "مراجعة لوحة المعلومات", text: "بعد الدخول تأكد من تحميل لوحة المعلومات دون رسالة منع وصول. راجع بطاقات العمليات والتنبيهات. هذه البطاقات ملخصات، لذلك افتح الوحدة الأصلية قبل اتخاذ أي إجراء على معاملة.", screenshot: "/screenshots/00_general/02_general_main_dashboard.png" },
        { title: "استخدام القائمة الجانبية", text: "استخدم القائمة الجانبية للتنقل بين المبيعات والمشتريات والمخزن والمالية والإدارة. لا تستخدم زر الرجوع في المتصفح أثناء فتح نافذة حفظ أو اعتماد أو دفع؛ أكمل النافذة أو أغلقها أولاً.", screenshot: "/screenshots/00_general/03_general_left_nav_admin.png" },
        { title: "فهم اختلاف الواجهة حسب الدور", text: "قد يكون عدم ظهور زر معين أمراً مقصوداً. لا يرى مستخدم المبيعات أو المشتريات أو المالية أو الإدارة نفس الإجراءات دائماً. تحقق من حالة السجل ودورك قبل الإبلاغ عن زر مفقود.", screenshot: "/screenshots/00_general/04_general_role_dashboard_view.png" }
      ],
      controls: ["لا تستخدم حساب مستخدم آخر لتجاوز الصلاحيات.", "لا ترسل نفس العملية من أكثر من تبويب ولا تضغط زر الحفظ مرتين.", "إذا نجحت العملية ولم تتغير الشاشة فحدّث السجل قبل تكرار الإجراء."],
      result: ["تم تسجيل الدخول بالدور الصحيح.", "تعرف أين تبدأ العمليات الرئيسية.", "تفهم أن الحالة والصلاحية تحددان الأزرار المتاحة."]
    }
  },
  {
    id: "sales",
    number: "02",
    en: {
      title: "Sales & CRM: customers, quotations and sales orders",
      audience: "Sales users, sales managers and authorised administrators",
      purpose: "Maintain customer information, create quotations in the correct customer currency, revise and accept quotations, convert them to sales orders, and move orders through the approved lifecycle.",
      before: [
        "Confirm that the customer/account already exists before creating a duplicate.",
        "Verify the contact person, quotation currency, product, quantity, size, colour and selling price.",
        "Customer selling price is different from supplier/base cost. Do not copy AED procurement cost into a USD customer quotation.",
        "Use the product catalogue whenever possible so product references remain traceable."
      ],
      steps: [
        { title: "Find or create the customer account", text: "Open the customer/account list and search by legal or trading name. Open the existing account if found. Create a new account only when the customer does not already exist.", screenshot: "/screenshots/01_sales_crm/01_sales_customer_account_list.png" },
        { title: "Check the contact", text: "Open Contacts and confirm the correct person, email, phone and company relationship. The quotation should be linked to the customer contact who will receive it.", screenshot: "/screenshots/01_sales_crm/02_sales_contact_list.png" },
        { title: "Create a quotation", text: "Open Quotations and choose Create Quotation. Select the customer and contact, confirm validity dates and currency, then add the required products or manual lines.", screenshot: "/screenshots/01_sales_crm/03_sales_create_quotation_screen.png" },
        { title: "Select products and quantities", text: "Choose the correct product/SKU and, where applicable, size and colour. Enter the requested quantity. Review the selling price in the quotation currency before saving.", screenshot: "/screenshots/01_sales_crm/04_sales_quotation_product_selection.png" },
        { title: "Review the draft", text: "Before sending, check customer name, contact, line descriptions, quantities, unit prices, totals, validity date and notes. A draft is still editable.", screenshot: "/screenshots/01_sales_crm/04_sales_quotation_draft_state.png" },
        { title: "Open quotation detail", text: "After saving, open the quotation detail page and confirm the quotation number, status, customer, products and total. Use this reference number in communication with the customer.", screenshot: "/screenshots/01_sales_crm/05_sales_quotation_detail.png" },
        { title: "Revise instead of overwriting a sent quotation", text: "If a sent quotation must change, use the revision flow. This preserves the history of the original commercial offer while creating a new editable revision.", screenshot: "/screenshots/01_sales_crm/05_sales_quotation_edit_revision_flow.png" },
        { title: "Print or save the quotation PDF", text: "Use Print / PDF and verify the Quartzite logo, company name, customer information, products, totals and validity before sending the document externally.", screenshot: "/screenshots/01_sales_crm/06_sales_quotation_pdf_print_preview.png" },
        { title: "Accept the quotation only after customer approval", text: "When the customer confirms the offer, use the quotation acceptance action. Do not mark a quotation accepted only to unlock downstream processing.", screenshot: "/screenshots/01_sales_crm/07_sales_quotation_accept_action.png" },
        { title: "Verify accepted quotation", text: "Confirm the quotation status is Accepted and that the commercial values are final. The accepted quotation becomes the basis for the sales order.", screenshot: "/screenshots/01_sales_crm/08_sales_accepted_quotation_overview.png" },
        { title: "Convert to sales order", text: "Create/convert the sales order from the accepted quotation. Open Sales Orders and verify the order reference, customer, products, quantities and status.", screenshot: "/screenshots/01_sales_crm/09_sales_orders_list.png" },
        { title: "Move the order through the controlled statuses", text: "Use the application workflow to progress the order through Submitted, Under Review, Confirmed and Processing. Do not edit the status directly in the database.", screenshot: "/screenshots/01_sales_crm/13_order_progression_01_submitted.png" },
        { title: "Under Review", text: "During review, verify stock/procurement needs, delivery expectations and commercial correctness before confirmation.", screenshot: "/screenshots/01_sales_crm/14_order_progression_02_under_review.png" },
        { title: "Processing", text: "A processing order is actively being fulfilled. Procurement, warehouse and logistics should work from the same order and related references.", screenshot: "/screenshots/01_sales_crm/16_order_progression_04_processing.png" },
        { title: "Deliver goods", text: "When stock is physically ready and available, use Deliver Goods. Select the warehouse/location and enter the quantities delivered. The system validates stock and inventory valuation before posting.", screenshot: "/screenshots/01_sales_crm/17_sales_deliver_goods_modal.png" },
        { title: "Handle partial delivery", text: "If only part of the order is delivered, post only the actual quantity. The order becomes Partially Delivered and the remaining quantity stays open for a later delivery.", screenshot: "/screenshots/01_sales_crm/19_sales_order_partially_delivered.png" },
        { title: "Verify delivered order", text: "After the final quantity is delivered, confirm the order status is Delivered and that delivery, inventory movement and COGS were posted successfully.", screenshot: "/screenshots/01_sales_crm/10_sales_order_status_delivered.png" }
      ],
      controls: [
        "Do not manually change a quotation, order or delivery status in the database.",
        "Do not deliver more than the outstanding order quantity.",
        "Do not deliver from a warehouse that does not contain the required stock/valuation.",
        "A sent quotation should be revised, not silently overwritten.",
        "Confirm the customer currency before issuing the quotation."
      ],
      result: ["Customer commitment is traceable from quotation to order.", "Order status reflects the real fulfilment stage.", "Delivered quantities create the required inventory and accounting effects."],
      accounting: [
        "Quotation creation itself does not post revenue.",
        "Customer delivery issues inventory at the current trusted valuation and posts COGS.",
        "Revenue is recognised through the customer invoice workflow, not by manually editing the order."
      ]
    },
    ar: {
      title: "المبيعات وCRM: العملاء وعروض الأسعار وطلبات المبيعات",
      audience: "مستخدمو المبيعات ومديرو المبيعات والمسؤولون المخولون",
      purpose: "إدارة بيانات العميل، إنشاء عروض الأسعار بعملة العميل الصحيحة، إجراء المراجعات والقبول، تحويل العرض إلى طلب مبيعات، وتحريك الطلب عبر الحالات المعتمدة.",
      before: [
        "ابحث عن العميل أو الحساب الحالي قبل إنشاء سجل مكرر.",
        "تحقق من جهة الاتصال والعملة والمنتج والكمية والمقاس واللون وسعر البيع.",
        "سعر بيع العميل يختلف عن تكلفة المورد أو تكلفة الأساس؛ لا تنسخ تكلفة الشراء بالدرهم إلى عرض عميل بالدولار.",
        "استخدم كتالوج المنتجات كلما أمكن للحفاظ على التتبع."
      ],
      steps: [
        { title: "البحث عن حساب العميل", text: "افتح قائمة العملاء/الحسابات وابحث بالاسم القانوني أو التجاري. افتح السجل الموجود إن وجد، وأنشئ حساباً جديداً فقط إذا لم يكن العميل موجوداً.", screenshot: "/screenshots/01_sales_crm/01_sales_customer_account_list.png" },
        { title: "التحقق من جهة الاتصال", text: "افتح جهات الاتصال وتأكد من الشخص الصحيح والبريد والهاتف وعلاقته بالشركة. يجب ربط عرض السعر بجهة الاتصال التي ستستلمه.", screenshot: "/screenshots/01_sales_crm/02_sales_contact_list.png" },
        { title: "إنشاء عرض سعر", text: "افتح عروض الأسعار واختر إنشاء عرض. حدد العميل وجهة الاتصال وتاريخ الصلاحية والعملة ثم أضف المنتجات أو البنود اليدوية المطلوبة.", screenshot: "/screenshots/01_sales_crm/03_sales_create_quotation_screen.png" },
        { title: "اختيار المنتجات والكميات", text: "اختر المنتج/SKU الصحيح وحدد المقاس واللون عند الحاجة. أدخل الكمية المطلوبة وراجع سعر البيع بعملة العرض قبل الحفظ.", screenshot: "/screenshots/01_sales_crm/04_sales_quotation_product_selection.png" },
        { title: "مراجعة المسودة", text: "قبل الإرسال راجع اسم العميل وجهة الاتصال والبنود والكميات والأسعار والإجماليات وتاريخ الصلاحية والملاحظات. المسودة ما زالت قابلة للتعديل.", screenshot: "/screenshots/01_sales_crm/04_sales_quotation_draft_state.png" },
        { title: "فتح تفاصيل العرض", text: "بعد الحفظ افتح تفاصيل العرض وتأكد من رقم العرض والحالة والعميل والمنتجات والإجمالي. استخدم رقم المرجع في التواصل مع العميل.", screenshot: "/screenshots/01_sales_crm/05_sales_quotation_detail.png" },
        { title: "إنشاء مراجعة بدلاً من الكتابة فوق العرض المرسل", text: "إذا احتاج العرض المرسل إلى تعديل فاستخدم مسار المراجعة حتى يحتفظ النظام بتاريخ النسخة الأصلية وينشئ نسخة جديدة قابلة للتحرير.", screenshot: "/screenshots/01_sales_crm/05_sales_quotation_edit_revision_flow.png" },
        { title: "طباعة أو حفظ PDF", text: "استخدم Print / PDF وتحقق من ظهور شعار Quartzite واسم الشركة وبيانات العميل والبنود والإجمالي وتاريخ الصلاحية قبل إرسال المستند.", screenshot: "/screenshots/01_sales_crm/06_sales_quotation_pdf_print_preview.png" },
        { title: "قبول العرض بعد موافقة العميل", text: "عند تأكيد العميل استخدم إجراء قبول العرض. لا تستخدم حالة Accepted فقط لفتح المراحل التالية بدون موافقة حقيقية.", screenshot: "/screenshots/01_sales_crm/07_sales_quotation_accept_action.png" },
        { title: "التحقق من العرض المقبول", text: "تأكد أن الحالة Accepted وأن القيم التجارية نهائية؛ العرض المقبول يصبح أساس طلب المبيعات.", screenshot: "/screenshots/01_sales_crm/08_sales_accepted_quotation_overview.png" },
        { title: "التحويل إلى طلب مبيعات", text: "حوّل العرض المقبول إلى طلب مبيعات ثم افتح قائمة الطلبات وتحقق من المرجع والعميل والبنود والكميات والحالة.", screenshot: "/screenshots/01_sales_crm/09_sales_orders_list.png" },
        { title: "تحريك الطلب عبر الحالات المعتمدة", text: "استخدم أزرار النظام للانتقال عبر Submitted ثم Under Review ثم Confirmed ثم Processing. لا تعدل الحالة مباشرة في قاعدة البيانات.", screenshot: "/screenshots/01_sales_crm/13_order_progression_01_submitted.png" },
        { title: "مرحلة المراجعة", text: "خلال Under Review تحقق من الاحتياج للمخزون أو الشراء وتوقعات التسليم وصحة القيم التجارية قبل التأكيد.", screenshot: "/screenshots/01_sales_crm/14_order_progression_02_under_review.png" },
        { title: "مرحلة التنفيذ", text: "الحالة Processing تعني أن الطلب قيد التنفيذ فعلياً، ويجب أن تعمل المشتريات والمخزن واللوجستيات على نفس المراجع المرتبطة.", screenshot: "/screenshots/01_sales_crm/16_order_progression_04_processing.png" },
        { title: "تسليم البضاعة", text: "عند جاهزية المخزون فعلياً استخدم Deliver Goods وحدد المخزن/الموقع والكمية المسلمة. يتحقق النظام من المخزون والتقييم قبل الترحيل.", screenshot: "/screenshots/01_sales_crm/17_sales_deliver_goods_modal.png" },
        { title: "التسليم الجزئي", text: "إذا تم تسليم جزء فقط فسجل الكمية الفعلية فقط. تتحول الحالة إلى Partially Delivered وتبقى الكمية المتبقية مفتوحة.", screenshot: "/screenshots/01_sales_crm/19_sales_order_partially_delivered.png" },
        { title: "التحقق من الطلب المسلم", text: "بعد تسليم كامل الكمية تحقق من أن الحالة Delivered وأن حركة المخزون وتكلفة البضاعة المباعة تم ترحيلهما بنجاح.", screenshot: "/screenshots/01_sales_crm/10_sales_order_status_delivered.png" }
      ],
      controls: ["لا تعدل حالات العرض أو الطلب أو التسليم من قاعدة البيانات.", "لا تسلم كمية أكبر من المتبقي.", "لا تسلم من مخزن لا يحتوي على مخزون وتقييم متاح.", "العرض المرسل يجب مراجعته عبر Revision وليس استبداله بصمت.", "تحقق من عملة العميل قبل إصدار العرض."],
      result: ["يمكن تتبع التزام العميل من عرض السعر حتى الطلب.", "تعكس حالة الطلب مرحلة التنفيذ الحقيقية.", "الكميات المسلمة تنشئ آثار المخزون والمحاسبة المطلوبة."],
      accounting: ["إنشاء العرض لا يثبت الإيراد.", "تسليم العميل يخرج المخزون بالتقييم الموثوق ويسجل COGS.", "يتم إثبات الإيراد عبر فاتورة العميل وليس بتعديل الطلب يدوياً."]
    }
  },
  {
    id: "procurement",
    number: "03",
    en: {
      title: "Procurement: inventory requests, approvals and purchase orders",
      audience: "Procurement users, approvers and authorised administrators",
      purpose: "Convert operational demand into an approved purchase order using trusted supplier costs and a controlled goods-receipt workflow.",
      before: [
        "Confirm the requested product, variant and quantity before submitting the inventory request.",
        "Use supplier costs in AED and verify the supplier/product relationship.",
        "A purchase order must be confirmed before the simplified Receive Goods workflow is used.",
        "Never receive goods that have not physically arrived."
      ],
      steps: [
        { title: "Open inventory requests", text: "Open Procurement & Warehouse → Inventory Requests. Search existing requests before creating another request for the same need.", screenshot: "/screenshots/02_procurement/01_procurement_inventory_request_list.png" },
        { title: "Create a new inventory request", text: "Choose New Request, search the product by name or SKU, select the correct variant and enter the required quantity. Add notes that help procurement understand the need.", screenshot: "/screenshots/02_procurement/02_procurement_new_inventory_request_screen.png" },
        { title: "Use the quantity matrix", text: "Where products have colour/size variants, enter quantities in the correct matrix cells. Review the total quantity before submission.", screenshot: "/screenshots/02_procurement/03_procurement_product_matrix_selection.png" },
        { title: "Review and approve", text: "Authorised approvers use Approvals Inbox to review the request. Verify business need, quantity and estimated cost before approval or rejection.", screenshot: "/screenshots/02_procurement/04_procurement_approvals_inbox.png" },
        { title: "Open request detail", text: "Open the approved request and verify request number, requester, items, quantities and notes. Keep the request reference linked to the purchasing action.", screenshot: "/screenshots/02_procurement/11_procurement_inventory_request_detail.png" },
        { title: "Create the purchase order", text: "Create a PO from the approved requirement. Select the correct supplier and use the supplier/product cost in AED. Review line quantities and totals before saving.", screenshot: "/screenshots/02_procurement/06_procurement_create_po_modal.png" },
        { title: "Review supplier and PO lines", text: "Verify supplier, product, quantity, AED unit cost and total. Correct supplier pricing before confirmation rather than compensating later in receipt/accounting.", screenshot: "/screenshots/02_procurement/07_procurement_po_supplier_and_items.png" },
        { title: "Review PO detail", text: "Open the PO details drawer and confirm the order is ready for commitment. A submitted PO is not yet the same as a confirmed PO.", screenshot: "/screenshots/02_procurement/17_procurement_po_details_drawer.png" },
        { title: "Confirm the PO", text: "Use Confirm Purchase Order when the supplier commitment is final. Confirmation unlocks the controlled goods-receipt step.", screenshot: "/screenshots/02_procurement/18_procurement_confirm_po_action.png" },
        { title: "Receive full quantity", text: "When all goods physically arrive, use Receive Goods, select the correct warehouse/location, enter the actual quantity and post the receipt. The system uses trusted PO cost for valuation.", screenshot: "/screenshots/02_procurement/20_procurement_receive_goods_modal_full.png" },
        { title: "Receive partial quantity", text: "If only part arrives, enter only the actual received quantity. The PO becomes Partially Received and the remaining quantity stays open.", screenshot: "/screenshots/02_procurement/21_procurement_receive_goods_modal_partial.png" },
        { title: "Verify partially received state", text: "Confirm received and remaining quantities are correct before posting another receipt later.", screenshot: "/screenshots/02_procurement/22_procurement_po_partially_received_state.png" },
        { title: "Maintain supplier records", text: "Use Supplier Management to keep supplier contact, terms and product relationships accurate. Avoid duplicate suppliers.", screenshot: "/screenshots/02_procurement/08_procurement_supplier_management_list.png" },
        { title: "Review supplier detail", text: "Open the supplier profile to confirm the correct entity and linked products before using that supplier on a PO.", screenshot: "/screenshots/02_procurement/09_procurement_supplier_detail_profile.png" }
      ],
      controls: [
        "Do not confirm a PO before supplier, quantity and price are checked.",
        "Do not receive more than the remaining PO quantity.",
        "Use the warehouse/location where the goods were actually received.",
        "Do not change inventory directly to imitate a receipt.",
        "Shipping shown operationally is not automatically capitalised into inventory under the current Phase 4A design unless a later policy explicitly changes this."
      ],
      result: ["Demand is approved and traceable to a PO.", "Received quantities update physical stock and valuation.", "PO status reflects partial or full receipt accurately."],
      accounting: ["Goods receipt: Dr 1400 Inventory Asset / Cr 1200 Inventory-Purchases Clearing.", "Receipt valuation uses trusted server-side PO item cost.", "The current simplified receipt flow does not automatically capitalise freight/shipping into inventory valuation."]
    },
    ar: {
      title: "المشتريات: طلبات المخزون والاعتمادات وأوامر الشراء",
      audience: "مستخدمو المشتريات والمعتمدون والمسؤولون المخولون",
      purpose: "تحويل الاحتياج التشغيلي إلى أمر شراء معتمد باستخدام تكلفة مورد موثوقة ومسار استلام مضبوط.",
      before: ["تحقق من المنتج والمتغير والكمية قبل إرسال طلب المخزون.", "استخدم تكلفة المورد بالدرهم وتحقق من علاقة المورد بالمنتج.", "يجب تأكيد أمر الشراء قبل استخدام Receive Goods.", "لا تسجل استلاماً لبضاعة لم تصل فعلياً."],
      steps: [
        { title: "فتح طلبات المخزون", text: "افتح Procurement & Warehouse → Inventory Requests وابحث عن الطلبات الحالية قبل إنشاء طلب جديد لنفس الحاجة.", screenshot: "/screenshots/02_procurement/01_procurement_inventory_request_list.png" },
        { title: "إنشاء طلب مخزون", text: "اختر New Request وابحث عن المنتج بالاسم أو SKU وحدد المتغير الصحيح وأدخل الكمية وأضف ملاحظات تساعد المشتريات.", screenshot: "/screenshots/02_procurement/02_procurement_new_inventory_request_screen.png" },
        { title: "استخدام مصفوفة الكميات", text: "للمنتجات ذات المقاسات والألوان أدخل الكميات في الخلايا الصحيحة وراجع إجمالي الكمية قبل الإرسال.", screenshot: "/screenshots/02_procurement/03_procurement_product_matrix_selection.png" },
        { title: "المراجعة والاعتماد", text: "يستخدم المعتمد Approvals Inbox لمراجعة الاحتياج والكمية والتكلفة التقديرية قبل القبول أو الرفض.", screenshot: "/screenshots/02_procurement/04_procurement_approvals_inbox.png" },
        { title: "فتح تفاصيل الطلب", text: "تحقق من رقم الطلب وصاحبه والبنود والكميات والملاحظات واحتفظ بالمرجع مرتبطاً بإجراء الشراء.", screenshot: "/screenshots/02_procurement/11_procurement_inventory_request_detail.png" },
        { title: "إنشاء أمر الشراء", text: "أنشئ PO من الاحتياج المعتمد، حدد المورد الصحيح واستخدم تكلفة المورد بالدرهم ثم راجع الكميات والإجمالي.", screenshot: "/screenshots/02_procurement/06_procurement_create_po_modal.png" },
        { title: "مراجعة المورد وبنود PO", text: "تحقق من المورد والمنتج والكمية وتكلفة الوحدة بالدرهم والإجمالي قبل التأكيد.", screenshot: "/screenshots/02_procurement/07_procurement_po_supplier_and_items.png" },
        { title: "مراجعة تفاصيل PO", text: "افتح تفاصيل أمر الشراء وتأكد أنه جاهز للالتزام. حالة Submitted لا تعني أن الأمر Confirmed.", screenshot: "/screenshots/02_procurement/17_procurement_po_details_drawer.png" },
        { title: "تأكيد أمر الشراء", text: "استخدم Confirm Purchase Order عندما يصبح الالتزام مع المورد نهائياً؛ عندها يفتح النظام مسار الاستلام.", screenshot: "/screenshots/02_procurement/18_procurement_confirm_po_action.png" },
        { title: "استلام كامل الكمية", text: "عند وصول كامل البضاعة استخدم Receive Goods وحدد المخزن/الموقع وأدخل الكمية الفعلية. يستخدم النظام تكلفة PO الموثوقة في التقييم.", screenshot: "/screenshots/02_procurement/20_procurement_receive_goods_modal_full.png" },
        { title: "الاستلام الجزئي", text: "إذا وصل جزء فقط أدخل الكمية الفعلية فقط. يتحول PO إلى Partially Received وتبقى الكمية المتبقية مفتوحة.", screenshot: "/screenshots/02_procurement/21_procurement_receive_goods_modal_partial.png" },
        { title: "التحقق من الحالة الجزئية", text: "تأكد من الكمية المستلمة والمتبقية قبل تسجيل استلام آخر لاحقاً.", screenshot: "/screenshots/02_procurement/22_procurement_po_partially_received_state.png" },
        { title: "إدارة الموردين", text: "استخدم Supplier Management للحفاظ على بيانات المورد وشروطه وعلاقته بالمنتجات ومنع التكرار.", screenshot: "/screenshots/02_procurement/08_procurement_supplier_management_list.png" },
        { title: "مراجعة تفاصيل المورد", text: "افتح ملف المورد وتأكد من الكيان الصحيح والمنتجات المرتبطة قبل استخدامه في PO.", screenshot: "/screenshots/02_procurement/09_procurement_supplier_detail_profile.png" }
      ],
      controls: ["لا تؤكد PO قبل مراجعة المورد والكمية والسعر.", "لا تستلم أكثر من الكمية المتبقية.", "استخدم الموقع الذي استلم البضاعة فعلياً.", "لا تعدل المخزون مباشرة لتقليد الاستلام.", "الشحن التشغيلي المعروض حالياً لا يتم رسملته تلقائياً ضمن المخزون في تصميم Phase 4A الحالي."],
      result: ["الاحتياج معتمد ويمكن تتبعه إلى PO.", "الاستلام يحدث المخزون الفعلي والتقييم.", "تعكس حالة PO الاستلام الجزئي أو الكامل بدقة."],
      accounting: ["قيد الاستلام: مدين 1400 Inventory Asset / دائن 1200 Inventory-Purchases Clearing.", "يعتمد التقييم على تكلفة بند PO الموثوقة من الخادم.", "لا يضيف مسار الاستلام الحالي تكلفة الشحن تلقائياً إلى قيمة المخزون."]
    }
  },
  {
    id: "warehouse",
    number: "04",
    en: {
      title: "Warehouse & inventory: stock, movements and transfers",
      audience: "Warehouse users, procurement users and operations managers",
      purpose: "Monitor stock by location, validate goods-receipt effects, initiate controlled transfers and use the movement ledger as the audit trail.",
      before: ["Select the correct warehouse/location before reading stock.", "Use on-hand, reserved and available quantities correctly.", "Do not manually edit stock quantities outside approved workflows."],
      steps: [
        { title: "Review stock levels", text: "Open Warehouse Stock Levels and select the required location. Confirm SKU, on-hand quantity, reserved quantity and available quantity.", screenshot: "/screenshots/03_warehouse_inventory/01_warehouse_stock_levels_overview.png" },
        { title: "Filter by warehouse/location", text: "Use the location selector before comparing quantities. Stock belongs to a specific warehouse/location, not only to the product.", screenshot: "/screenshots/03_warehouse_inventory/02_warehouse_location_selector_filtered.png" },
        { title: "Use the movement ledger", text: "Open Movement Ledger to see how stock changed. Use movement references to trace receipts, transfers and customer deliveries.", screenshot: "/screenshots/03_warehouse_inventory/03_warehouse_movement_ledger.png" },
        { title: "Verify stock before and after receipt", text: "After Receive Goods, refresh the stock page and confirm the received quantity increased in the correct location. If it did not, investigate the receipt instead of adding stock manually.", screenshot: "/screenshots/03_warehouse_inventory/04_warehouse_stock_levels_after_receipt.png" },
        { title: "Initiate a stock transfer", text: "Open Stock Transfers and choose the source and destination locations, product and quantity. Enter only the quantity physically being transferred.", screenshot: "/screenshots/03_warehouse_inventory/06_warehouse_initiate_transfer_modal.png" },
        { title: "Enter transfer quantity carefully", text: "The transfer quantity must not exceed the available stock in the source location. Verify both locations before confirming.", screenshot: "/screenshots/03_warehouse_inventory/07_warehouse_transfer_quantity_entry.png" },
        { title: "Audit completed movements", text: "Use the movement ledger to confirm the transfer or sale/receipt movement was recorded and to investigate discrepancies.", screenshot: "/screenshots/03_warehouse_inventory/08_warehouse_movements_ledger_audit.png" }
      ],
      controls: ["Never compensate for a failed receipt or delivery by editing stock manually.", "Do not transfer reserved or unavailable stock without resolving the underlying reservation.", "Always verify source and destination location codes."],
      result: ["Stock balances match operational movements.", "Transfers remain traceable between locations.", "Goods receipt and delivery effects can be audited."],
      accounting: ["Warehouse quantity and inventory valuation are reconciled by controlled workflows.", "Transfers should preserve total company inventory value while moving location ownership."]
    },
    ar: {
      title: "المخزن والمخزون: الأرصدة والحركات والتحويلات",
      audience: "مستخدمو المخزن والمشتريات ومديرو العمليات",
      purpose: "متابعة المخزون حسب الموقع، التحقق من أثر الاستلام، تنفيذ تحويلات مضبوطة واستخدام سجل الحركات للتدقيق.",
      before: ["حدد المخزن/الموقع الصحيح قبل قراءة الرصيد.", "افهم الفرق بين On Hand وReserved وAvailable.", "لا تعدل كميات المخزون يدوياً خارج مسارات النظام."],
      steps: [
        { title: "مراجعة أرصدة المخزون", text: "افتح Warehouse Stock Levels وحدد الموقع المطلوب ثم راجع SKU والكمية الفعلية والمحجوزة والمتاحة.", screenshot: "/screenshots/03_warehouse_inventory/01_warehouse_stock_levels_overview.png" },
        { title: "التصفية حسب الموقع", text: "استخدم محدد الموقع قبل مقارنة الكميات لأن الرصيد مرتبط بمخزن/موقع محدد وليس بالمنتج فقط.", screenshot: "/screenshots/03_warehouse_inventory/02_warehouse_location_selector_filtered.png" },
        { title: "استخدام سجل الحركات", text: "افتح Movement Ledger لمعرفة سبب تغير الرصيد واستخدم المراجع لتتبع الاستلام والتحويل وتسليم العميل.", screenshot: "/screenshots/03_warehouse_inventory/03_warehouse_movement_ledger.png" },
        { title: "التحقق من الرصيد بعد الاستلام", text: "بعد Receive Goods حدّث صفحة المخزون وتأكد أن الكمية زادت في الموقع الصحيح. إذا لم يحدث ذلك فحقق في الاستلام ولا تضف مخزوناً يدوياً.", screenshot: "/screenshots/03_warehouse_inventory/04_warehouse_stock_levels_after_receipt.png" },
        { title: "بدء تحويل مخزون", text: "افتح Stock Transfers وحدد المصدر والوجهة والمنتج والكمية الفعلية التي سيتم نقلها.", screenshot: "/screenshots/03_warehouse_inventory/06_warehouse_initiate_transfer_modal.png" },
        { title: "إدخال كمية التحويل", text: "يجب ألا تتجاوز الكمية الرصيد المتاح في المصدر. تحقق من الموقعين قبل التأكيد.", screenshot: "/screenshots/03_warehouse_inventory/07_warehouse_transfer_quantity_entry.png" },
        { title: "تدقيق الحركات", text: "استخدم Movement Ledger للتأكد من تسجيل التحويل أو الاستلام أو البيع والتحقيق في أي فرق.", screenshot: "/screenshots/03_warehouse_inventory/08_warehouse_movements_ledger_audit.png" }
      ],
      controls: ["لا تعالج فشل الاستلام أو التسليم بتعديل المخزون يدوياً.", "لا تحول مخزوناً محجوزاً أو غير متاح قبل حل الحجز.", "تحقق دائماً من كود المصدر والوجهة."],
      result: ["أرصدة المخزون متوافقة مع الحركات.", "التحويلات قابلة للتتبع.", "يمكن تدقيق أثر الاستلام والتسليم."],
      accounting: ["تتم مطابقة الكمية والتقييم عبر المسارات المضبوطة.", "التحويل ينقل المخزون بين المواقع دون تغيير إجمالي قيمة مخزون الشركة."]
    }
  },
  {
    id: "logistics",
    number: "05",
    en: {
      title: "Logistics & customer delivery",
      audience: "Logistics, warehouse, operations and authorised sales users",
      purpose: "Coordinate delivery status and post the final customer delivery only when goods have physically left the controlled warehouse.",
      before: ["Confirm the order is eligible for delivery.", "Confirm the warehouse has sufficient stock and valuation.", "Use the actual delivered quantity, especially for partial delivery."],
      steps: [
        { title: "Open Logistics & Deliveries", text: "Review deliveries and use the order/delivery reference to find the correct customer fulfilment record.", screenshot: "/screenshots/04_logistics_delivery/01_logistics_deliveries_list.png" },
        { title: "Review delivery detail", text: "Confirm customer, address/status, expected/actual delivery dates and linked order before progressing.", screenshot: "/screenshots/04_logistics_delivery/02_logistics_delivery_detail.png" },
        { title: "Maintain operational status", text: "Update logistics tracking according to actual events. Do not use a delivered status before the goods are physically delivered.", screenshot: "/screenshots/04_logistics_delivery/03_logistics_status_tracking_fields.png" },
        { title: "Use Deliver Goods", text: "Post customer delivery using the Deliver Goods workflow. Select the correct inventory location and quantities.", screenshot: "/screenshots/04_logistics_delivery/04_logistics_deliver_goods_modal.png" },
        { title: "Verify confirmation", text: "After posting, verify the success message and resulting order/delivery status. Then confirm inventory and COGS entries when required.", screenshot: "/screenshots/04_logistics_delivery/05_logistics_delivery_confirmation.png" }
      ],
      controls: ["Do not post delivery from a location that did not supply the goods.", "Do not post future or expected quantities as delivered.", "If delivery fails, investigate the error rather than forcing the status."],
      result: ["Delivery status matches reality.", "Inventory is relieved for the actual delivered quantity.", "The order can proceed to invoicing and profitability reporting."],
      accounting: ["Customer delivery posts Dr 5000 Cost of Goods Sold / Cr 1400 Inventory Asset using authoritative valuation cost."]
    },
    ar: {
      title: "اللوجستيات وتسليم العميل",
      audience: "اللوجستيات والمخزن والعمليات ومستخدمو المبيعات المخولون",
      purpose: "متابعة حالة التسليم وترحيل تسليم العميل النهائي فقط عندما تخرج البضاعة فعلياً من المخزن المضبوط.",
      before: ["تأكد أن الطلب مؤهل للتسليم.", "تأكد من توفر كمية وتقييم كافيين في المخزن.", "استخدم الكمية المسلمة فعلياً خصوصاً في التسليم الجزئي."],
      steps: [
        { title: "فتح Logistics & Deliveries", text: "راجع قائمة التسليمات واستخدم مرجع الطلب/التسليم للوصول إلى السجل الصحيح.", screenshot: "/screenshots/04_logistics_delivery/01_logistics_deliveries_list.png" },
        { title: "مراجعة تفاصيل التسليم", text: "تحقق من العميل والعنوان والحالة والتواريخ والطلب المرتبط قبل التقدم.", screenshot: "/screenshots/04_logistics_delivery/02_logistics_delivery_detail.png" },
        { title: "تحديث الحالة التشغيلية", text: "حدّث التتبع وفق الحدث الفعلي ولا تستخدم Delivered قبل التسليم الحقيقي.", screenshot: "/screenshots/04_logistics_delivery/03_logistics_status_tracking_fields.png" },
        { title: "استخدام Deliver Goods", text: "رحّل تسليم العميل عبر المسار المعتمد وحدد موقع المخزون والكمية الصحيحة.", screenshot: "/screenshots/04_logistics_delivery/04_logistics_deliver_goods_modal.png" },
        { title: "التحقق من التأكيد", text: "بعد الترحيل تحقق من رسالة النجاح وحالة الطلب/التسليم ثم راجع المخزون وCOGS عند الحاجة.", screenshot: "/screenshots/04_logistics_delivery/05_logistics_delivery_confirmation.png" }
      ],
      controls: ["لا ترحّل التسليم من موقع لم يخرج منه المخزون.", "لا تسجل كميات متوقعة أو مستقبلية كأنها مسلمة.", "إذا فشل التسليم فحقق في الخطأ ولا تفرض الحالة يدوياً."],
      result: ["حالة التسليم مطابقة للواقع.", "يتم إخراج المخزون للكمية الفعلية.", "يمكن متابعة الفوترة والربحية."],
      accounting: ["تسليم العميل يرحّل: مدين 5000 Cost of Goods Sold / دائن 1400 Inventory Asset بالتكلفة الموثوقة."]
    }
  },
  {
    id: "ar",
    number: "06",
    en: {
      title: "Accounts Receivable: customer invoices and receipts",
      audience: "Finance/AR users and authorised administrators",
      purpose: "Invoice eligible customer orders, monitor receivables, record customer payments and close outstanding balances with a complete audit trail.",
      before: ["Verify the order/customer and invoice amount before issuing.", "Record only money actually received.", "Use the correct payment reference and bank/cash account."],
      steps: [
        { title: "Open AR dashboard", text: "Review issued, received and outstanding totals before processing a new transaction.", screenshot: "/screenshots/05_accounts_receivable/01_ar_dashboard_overview.png" },
        { title: "Review AR Aging", text: "Use aging to identify overdue balances and prioritise collection follow-up.", screenshot: "/screenshots/05_accounts_receivable/02_ar_aging_tab.png" },
        { title: "Review Payments tab", text: "Use the payment registry to confirm whether a payment has already been recorded before entering another one.", screenshot: "/screenshots/05_accounts_receivable/03_ar_payments_tab.png" },
        { title: "Invoice the order", text: "Use Invoice Order, select the eligible order, review customer and amount, then create/issue the invoice.", screenshot: "/screenshots/05_accounts_receivable/04_ar_invoice_order_modal.png" },
        { title: "Review invoice detail", text: "Confirm invoice number, customer, total, status and outstanding balance. Customer invoices are normally presented in the configured customer currency while accounting is maintained in AED.", screenshot: "/screenshots/05_accounts_receivable/06_ar_customer_invoice_detail.png" },
        { title: "Record customer payment", text: "When money is actually received, use Record Payment. Enter amount, date, method/reference and the correct bank/cash account.", screenshot: "/screenshots/05_accounts_receivable/05_ar_record_payment_modal.png" },
        { title: "Verify paid state", text: "After payment, confirm the invoice balance is zero when fully settled and the invoice status is Paid.", screenshot: "/screenshots/05_accounts_receivable/07_ar_paid_invoice_state.png" },
        { title: "Verify ledger entry", text: "Open the ledger/accounting view and confirm the payment posted correctly rather than relying only on the invoice badge.", screenshot: "/screenshots/05_accounts_receivable/07_ar_paid_invoice_ledger_entry.png" }
      ],
      controls: ["Do not mark an invoice paid without a real receipt transaction.", "Do not record the same customer payment twice.", "Verify currency conversion and bank account before posting."],
      result: ["Customer invoice is traceable to the order.", "Outstanding balance matches actual receipts.", "Paid invoices and cash movements reconcile."],
      accounting: ["Customer invoice: Dr Accounts Receivable / Cr Sales Revenue.", "Customer payment: Dr Cash/Bank / Cr Accounts Receivable."]
    },
    ar: {
      title: "الحسابات المدينة: فواتير العملاء والتحصيل",
      audience: "مستخدمو المالية/AR والمسؤولون المخولون",
      purpose: "إصدار فواتير للطلبات المؤهلة، متابعة الذمم، تسجيل تحصيلات العملاء وإغلاق الأرصدة مع سجل تدقيق كامل.",
      before: ["تحقق من الطلب والعميل وقيمة الفاتورة قبل الإصدار.", "سجل فقط الأموال المستلمة فعلياً.", "استخدم مرجع الدفع وحساب البنك/النقد الصحيح."],
      steps: [
        { title: "فتح لوحة AR", text: "راجع إجمالي Issued وReceived وOutstanding قبل معالجة معاملة جديدة.", screenshot: "/screenshots/05_accounts_receivable/01_ar_dashboard_overview.png" },
        { title: "مراجعة AR Aging", text: "استخدم تقرير الأعمار لتحديد الأرصدة المتأخرة وأولوية التحصيل.", screenshot: "/screenshots/05_accounts_receivable/02_ar_aging_tab.png" },
        { title: "مراجعة المدفوعات", text: "راجع Payments للتأكد من أن الدفعة لم تُسجل سابقاً قبل إدخالها مرة أخرى.", screenshot: "/screenshots/05_accounts_receivable/03_ar_payments_tab.png" },
        { title: "إصدار فاتورة للطلب", text: "استخدم Invoice Order وحدد الطلب المؤهل وراجع العميل والقيمة ثم أنشئ/أصدر الفاتورة.", screenshot: "/screenshots/05_accounts_receivable/04_ar_invoice_order_modal.png" },
        { title: "مراجعة تفاصيل الفاتورة", text: "تحقق من رقم الفاتورة والعميل والإجمالي والحالة والمتبقي. قد تعرض فاتورة العميل بعملة العميل بينما تمسك المحاسبة الأساسية بالدرهم.", screenshot: "/screenshots/05_accounts_receivable/06_ar_customer_invoice_detail.png" },
        { title: "تسجيل تحصيل العميل", text: "عند استلام المال فعلياً استخدم Record Payment وأدخل القيمة والتاريخ والطريقة والمرجع وحساب البنك/النقد الصحيح.", screenshot: "/screenshots/05_accounts_receivable/05_ar_record_payment_modal.png" },
        { title: "التحقق من حالة Paid", text: "بعد الدفع الكامل تأكد أن الرصيد صفر وأن الحالة Paid.", screenshot: "/screenshots/05_accounts_receivable/07_ar_paid_invoice_state.png" },
        { title: "التحقق من القيد", text: "راجع القيد المحاسبي/دفتر الأستاذ وتأكد من الترحيل الصحيح بدلاً من الاعتماد على شارة الحالة فقط.", screenshot: "/screenshots/05_accounts_receivable/07_ar_paid_invoice_ledger_entry.png" }
      ],
      controls: ["لا تعتبر الفاتورة مدفوعة بدون حركة تحصيل حقيقية.", "لا تسجل نفس الدفعة مرتين.", "تحقق من العملة وحساب البنك قبل الترحيل."],
      result: ["الفاتورة مرتبطة بالطلب.", "الرصيد المتبقي يطابق التحصيلات الفعلية.", "الفواتير المدفوعة وحركات النقد متطابقة."],
      accounting: ["فاتورة العميل: مدين Accounts Receivable / دائن Sales Revenue.", "تحصيل العميل: مدين Cash/Bank / دائن Accounts Receivable."]
    }
  },
  {
    id: "ap",
    number: "07",
    en: {
      title: "Accounts Payable: supplier bills and payments",
      audience: "Finance/AP users and authorised approvers",
      purpose: "Record supplier liabilities, monitor due balances, pay suppliers and reconcile AP with cash and the general ledger.",
      before: ["Confirm supplier, invoice/bill reference, amount and supporting document.", "Avoid duplicate supplier bills.", "Use the correct bank/cash account for payment."],
      steps: [
        { title: "Open AP dashboard", text: "Review supplier bills, outstanding balances and due amounts.", screenshot: "/screenshots/06_accounts_payable/01_ap_dashboard_overview.png" },
        { title: "Review AP Aging", text: "Use aging to identify due and overdue supplier obligations.", screenshot: "/screenshots/06_accounts_payable/02_ap_aging_tab.png" },
        { title: "Review supplier payments", text: "Check the Payments tab before posting another payment for the same bill.", screenshot: "/screenshots/06_accounts_payable/03_ap_payments_tab.png" },
        { title: "Create supplier bill", text: "Use New Supplier Bill and enter the correct supplier, bill/invoice reference, date, amount and related context. Review before posting.", screenshot: "/screenshots/06_accounts_payable/04_ap_new_supplier_bill_modal.png" },
        { title: "Review bill detail", text: "Open the supplier bill and confirm outstanding amount and status before paying.", screenshot: "/screenshots/06_accounts_payable/07_ap_supplier_bill_detail.png" },
        { title: "Pay supplier", text: "Use Pay Supplier only after the payment is authorised and actually being made. Enter the payment date, amount, reference and cash/bank account.", screenshot: "/screenshots/06_accounts_payable/06_ap_pay_supplier_modal.png" },
        { title: "Verify paid bill", text: "After full settlement, confirm bill status and outstanding balance. Then verify the cash and ledger movements.", screenshot: "/screenshots/06_accounts_payable/08_ap_paid_supplier_bill_state.png" }
      ],
      controls: ["Do not create a second bill to correct a payment issue.", "Do not mark a supplier bill paid without a payment transaction.", "Verify supplier and bank account carefully before payment."],
      result: ["Supplier liability is accurately recorded.", "AP aging reflects real obligations.", "Supplier payments reconcile with cash/bank."],
      accounting: ["Supplier bill typically clears the purchasing/inventory clearing side and recognises AP according to the configured workflow.", "Supplier payment: Dr Accounts Payable / Cr Cash/Bank."]
    },
    ar: {
      title: "الحسابات الدائنة: فواتير الموردين والمدفوعات",
      audience: "مستخدمو المالية/AP والمعتمدون",
      purpose: "تسجيل التزامات الموردين ومتابعة الاستحقاقات ودفع الموردين ومطابقة AP مع النقد ودفتر الأستاذ.",
      before: ["تحقق من المورد ومرجع الفاتورة والقيمة والمستند المؤيد.", "تجنب إنشاء فاتورة مورد مكررة.", "استخدم حساب البنك/النقد الصحيح."],
      steps: [
        { title: "فتح لوحة AP", text: "راجع فواتير الموردين والأرصدة والاستحقاقات.", screenshot: "/screenshots/06_accounts_payable/01_ap_dashboard_overview.png" },
        { title: "مراجعة AP Aging", text: "استخدم تقرير الأعمار لتحديد الالتزامات المستحقة والمتأخرة.", screenshot: "/screenshots/06_accounts_payable/02_ap_aging_tab.png" },
        { title: "مراجعة مدفوعات الموردين", text: "راجع Payments قبل ترحيل دفعة جديدة لنفس الفاتورة.", screenshot: "/screenshots/06_accounts_payable/03_ap_payments_tab.png" },
        { title: "إنشاء فاتورة مورد", text: "استخدم New Supplier Bill وأدخل المورد والمرجع والتاريخ والقيمة والسياق الصحيح ثم راجع قبل الحفظ.", screenshot: "/screenshots/06_accounts_payable/04_ap_new_supplier_bill_modal.png" },
        { title: "مراجعة تفاصيل الفاتورة", text: "افتح فاتورة المورد وتحقق من الرصيد والحالة قبل الدفع.", screenshot: "/screenshots/06_accounts_payable/07_ap_supplier_bill_detail.png" },
        { title: "دفع المورد", text: "استخدم Pay Supplier بعد اعتماد الدفع وعند تنفيذه فعلياً، وأدخل التاريخ والقيمة والمرجع وحساب البنك/النقد.", screenshot: "/screenshots/06_accounts_payable/06_ap_pay_supplier_modal.png" },
        { title: "التحقق من Paid", text: "بعد التسوية الكاملة تحقق من الحالة والرصيد ثم راجع حركة النقد والقيد.", screenshot: "/screenshots/06_accounts_payable/08_ap_paid_supplier_bill_state.png" }
      ],
      controls: ["لا تنشئ فاتورة ثانية لمعالجة مشكلة دفع.", "لا تعتبر الفاتورة مدفوعة بدون حركة دفع.", "تحقق من المورد والحساب البنكي قبل الترحيل."],
      result: ["التزام المورد مسجل بدقة.", "AP Aging يعكس الالتزامات الحقيقية.", "مدفوعات الموردين متطابقة مع النقد والبنك."],
      accounting: ["فاتورة المورد تعترف بالالتزام وفق مسار الربط/التسوية المحاسبي.", "دفع المورد: مدين Accounts Payable / دائن Cash/Bank."]
    }
  },
  {
    id: "expenses",
    number: "08",
    en: {
      title: "Expense claims: submission, approval and payment",
      audience: "Employees, approvers and finance users",
      purpose: "Capture operational expenses with evidence, approve them under the correct authority and pay only approved claims.",
      before: ["Keep the supporting receipt/invoice and a clear business reason.", "Enter the correct amount/date/category.", "Approval and payment should be separate controlled actions where roles require segregation."],
      steps: [
        { title: "Open Expense Claims", text: "Review existing claims and statuses before creating a new one.", screenshot: "/screenshots/07_expenses/01_expenses_claims_list.png" },
        { title: "Create claim", text: "Enter expense date, category, description, amount and supporting information. Submit only a real business expense.", screenshot: "/screenshots/07_expenses/02_expenses_create_claim_modal.png" },
        { title: "Review submitted claims", text: "Approvers filter or open submitted claims and verify evidence, reason and amount.", screenshot: "/screenshots/07_expenses/04_expenses_submitted_claims_filter.png" },
        { title: "Approve or reject", text: "Approve only when the expense is valid and within authority. Reject or return incorrect claims rather than paying them and correcting later.", screenshot: "/screenshots/07_expenses/04_expenses_claim_approval_action.png" },
        { title: "Verify approved claim", text: "An approved claim is eligible for payment but is not yet the same as a paid claim.", screenshot: "/screenshots/07_expenses/05_expenses_approved_claim.png" },
        { title: "Pay the expense", text: "Finance uses the payment action after approval, selecting the correct payment account and reference. Verify the final paid status.", screenshot: "/screenshots/07_expenses/06_expenses_payment_action.png" }
      ],
      controls: ["Do not pay a submitted/unapproved claim.", "Do not split one expense to avoid an approval threshold.", "Do not use expense claims to record supplier inventory purchases that belong in procurement/AP."],
      result: ["Expense is documented and approved.", "Payment is traceable to the claim.", "Expense and cash impact are visible in finance reporting."],
      accounting: ["Approved/paid expenses post according to the configured expense and cash/bank workflow."]
    },
    ar: {
      title: "المصروفات: التقديم والاعتماد والدفع",
      audience: "الموظفون والمعتمدون ومستخدمو المالية",
      purpose: "تسجيل المصروف التشغيلي مع الإثبات واعتماده حسب الصلاحية ودفع المطالبات المعتمدة فقط.",
      before: ["احتفظ بالإيصال/الفاتورة وسبب العمل.", "أدخل التاريخ والفئة والقيمة الصحيحة.", "يجب فصل الاعتماد عن الدفع عندما يتطلب نموذج الصلاحيات ذلك."],
      steps: [
        { title: "فتح Expense Claims", text: "راجع المطالبات الحالية وحالاتها قبل إنشاء واحدة جديدة.", screenshot: "/screenshots/07_expenses/01_expenses_claims_list.png" },
        { title: "إنشاء مطالبة", text: "أدخل التاريخ والفئة والوصف والقيمة والمعلومات المؤيدة وقدّم فقط مصروفاً حقيقياً متعلقاً بالعمل.", screenshot: "/screenshots/07_expenses/02_expenses_create_claim_modal.png" },
        { title: "مراجعة المطالبات المرسلة", text: "يراجع المعتمد المطالبات Submitted ويتحقق من الإثبات والسبب والقيمة.", screenshot: "/screenshots/07_expenses/04_expenses_submitted_claims_filter.png" },
        { title: "الاعتماد أو الرفض", text: "اعتمد فقط المصروف الصحيح وضمن صلاحيتك، وارفض أو أعد المطالبة الخاطئة بدلاً من دفعها وتصحيحها لاحقاً.", screenshot: "/screenshots/07_expenses/04_expenses_claim_approval_action.png" },
        { title: "التحقق من Approved", text: "المطالبة Approved مؤهلة للدفع لكنها ليست Paid بعد.", screenshot: "/screenshots/07_expenses/05_expenses_approved_claim.png" },
        { title: "دفع المصروف", text: "تستخدم المالية إجراء الدفع بعد الاعتماد وتحدد حساب الدفع والمرجع ثم تتحقق من الحالة النهائية.", screenshot: "/screenshots/07_expenses/06_expenses_payment_action.png" }
      ],
      controls: ["لا تدفع مطالبة غير معتمدة.", "لا تقسّم المصروف لتجاوز حد الاعتماد.", "لا تستخدم Expense Claims لمشتريات المخزون التي يجب أن تمر عبر المشتريات/AP."],
      result: ["المصروف موثق ومعتمد.", "الدفعة مرتبطة بالمطالبة.", "أثر المصروف والنقد ظاهر في التقارير."],
      accounting: ["يتم ترحيل المصروف والدفع حسب حسابات المصروف والنقد/البنك المهيأة."]
    }
  },
  {
    id: "gl",
    number: "09",
    en: {
      title: "General Ledger: understand and verify system postings",
      audience: "Finance users, management and authorised auditors",
      purpose: "Use the ledger to verify that operational workflows generated balanced accounting entries without manually editing posted history.",
      before: ["Know the business event and its source reference before reviewing a journal.", "Use journal/reference numbers to trace the transaction.", "Do not alter posted accounting data outside an approved correction process."],
      steps: [
        { title: "Open the operational/general ledger", text: "Use the ledger to review posting date, journal number, source reference, accounts, debit and credit.", screenshot: "/screenshots/08_general_ledger/01_gl_operational_ledger_overview.png" },
        { title: "Verify inventory receipt posting", text: "A valid goods receipt increases Inventory Asset and credits Inventory/Purchases Clearing for the trusted received cost.", screenshot: "/screenshots/08_general_ledger/03_gl_inventory_valuation_journal.png" },
        { title: "Verify customer invoice revenue", text: "Customer invoice should create the receivable and sales revenue entry using the accounting currency and configured conversion.", screenshot: "/screenshots/08_general_ledger/04_gl_customer_invoice_revenue_journal.png" },
        { title: "Verify customer receipt", text: "Customer payment should debit Cash/Bank and credit Accounts Receivable.", screenshot: "/screenshots/08_general_ledger/05_gl_customer_receipt_journal.png" },
        { title: "Verify COGS delivery", text: "Customer delivery should debit Cost of Goods Sold and credit Inventory Asset for the actual delivered valuation cost.", screenshot: "/screenshots/08_general_ledger/06_gl_cogs_delivery_journal.png" },
        { title: "Verify supplier payment", text: "Supplier payment should reduce Accounts Payable and reduce Cash/Bank.", screenshot: "/screenshots/08_general_ledger/07_gl_supplier_payment_journal.png" }
      ],
      controls: ["Every journal must balance debits and credits.", "Investigate the source workflow before attempting a correction.", "Do not create manual journals merely to hide an operational process error."],
      result: ["Operational transactions reconcile to accounting.", "Inventory, AR, AP and cash movements are traceable.", "Finance can investigate exceptions using references."],
      accounting: ["Receipt: Dr Inventory Asset / Cr Inventory-Purchases Clearing.", "Delivery: Dr COGS / Cr Inventory Asset.", "Invoice: Dr AR / Cr Sales Revenue.", "Customer receipt: Dr Cash/Bank / Cr AR.", "Supplier payment: Dr AP / Cr Cash/Bank."]
    },
    ar: {
      title: "دفتر الأستاذ العام: فهم والتحقق من القيود",
      audience: "المالية والإدارة والمدققون المخولون",
      purpose: "استخدام دفتر الأستاذ للتحقق من أن مسارات التشغيل أنشأت قيوداً متوازنة دون تعديل التاريخ المرحّل يدوياً.",
      before: ["اعرف الحدث التجاري ومرجعه قبل مراجعة القيد.", "استخدم أرقام القيود والمراجع للتتبع.", "لا تعدل القيود المرحّلة خارج إجراء تصحيح معتمد."],
      steps: [
        { title: "فتح دفتر الأستاذ", text: "راجع تاريخ الترحيل ورقم القيد والمرجع والحسابات والمدين والدائن.", screenshot: "/screenshots/08_general_ledger/01_gl_operational_ledger_overview.png" },
        { title: "التحقق من قيد الاستلام", text: "استلام البضاعة الصحيح يزيد Inventory Asset ويقيد Inventory/Purchases Clearing بالتكلفة الموثوقة.", screenshot: "/screenshots/08_general_ledger/03_gl_inventory_valuation_journal.png" },
        { title: "التحقق من إيراد فاتورة العميل", text: "فاتورة العميل تنشئ الذمم المدينة وإيراد المبيعات بعملة المحاسبة والتحويل المهيأ.", screenshot: "/screenshots/08_general_ledger/04_gl_customer_invoice_revenue_journal.png" },
        { title: "التحقق من تحصيل العميل", text: "دفعة العميل يجب أن تكون مدين Cash/Bank ودائن Accounts Receivable.", screenshot: "/screenshots/08_general_ledger/05_gl_customer_receipt_journal.png" },
        { title: "التحقق من COGS عند التسليم", text: "تسليم العميل يجب أن يكون مدين Cost of Goods Sold ودائن Inventory Asset بالتكلفة الفعلية للتقييم.", screenshot: "/screenshots/08_general_ledger/06_gl_cogs_delivery_journal.png" },
        { title: "التحقق من دفع المورد", text: "دفع المورد يخفض Accounts Payable ويخفض Cash/Bank.", screenshot: "/screenshots/08_general_ledger/07_gl_supplier_payment_journal.png" }
      ],
      controls: ["كل قيد يجب أن يكون متوازناً.", "حقق في العملية المصدر قبل التصحيح.", "لا تنشئ قيوداً يدوية فقط لإخفاء خطأ تشغيلي."],
      result: ["العمليات التشغيلية متطابقة مع المحاسبة.", "المخزون وAR وAP والنقد قابلة للتتبع.", "يمكن التحقيق في الاستثناءات بالمراجع."],
      accounting: ["الاستلام: مدين Inventory Asset / دائن Inventory-Purchases Clearing.", "التسليم: مدين COGS / دائن Inventory Asset.", "الفاتورة: مدين AR / دائن Sales Revenue.", "تحصيل العميل: مدين Cash/Bank / دائن AR.", "دفع المورد: مدين AP / دائن Cash/Bank."]
    }
  },
  {
    id: "cash",
    number: "10",
    en: {
      title: "Cash & Bank: monitor actual money movement",
      audience: "Finance users and management",
      purpose: "Monitor bank/cash balances and reconcile customer receipts, supplier payments and expense payments to the source transaction.",
      before: ["Know the source transaction before reviewing or posting cash movement.", "Use the correct bank account and reference.", "Never use a cash entry to bypass AR/AP workflows."],
      steps: [
        { title: "Open Cash & Bank dashboard", text: "Review total balance, Cash In, Cash Out and individual bank/cash accounts.", screenshot: "/screenshots/09_cash_bank/01_cash_bank_dashboard_overview.png" },
        { title: "Review movement ledger", text: "Use the movement table to trace receipts and payments by date, source and reference.", screenshot: "/screenshots/09_cash_bank/02_cash_bank_movements_ledger.png" },
        { title: "Review account balances", text: "Compare bank/cash account balances with recorded movements and investigate unexplained differences.", screenshot: "/screenshots/09_cash_bank/03_cash_bank_account_balances_kpis.png" }
      ],
      controls: ["Customer receipts should originate from Record Payment.", "Supplier payments should originate from Pay Supplier.", "Expense payments should originate from the approved expense workflow."],
      result: ["Cash movement is linked to source transactions.", "Balances can be reconciled to AR/AP/expenses."]
    },
    ar: {
      title: "النقد والبنك: متابعة حركة الأموال الفعلية",
      audience: "المالية والإدارة",
      purpose: "متابعة أرصدة البنك والنقد ومطابقة تحصيلات العملاء ومدفوعات الموردين والمصروفات مع المعاملات المصدر.",
      before: ["اعرف المعاملة المصدر قبل مراجعة أو تسجيل الحركة.", "استخدم الحساب والمرجع الصحيحين.", "لا تستخدم حركة نقدية لتجاوز مسارات AR/AP."],
      steps: [
        { title: "فتح لوحة Cash & Bank", text: "راجع الرصيد الإجمالي وCash In وCash Out والحسابات الفردية.", screenshot: "/screenshots/09_cash_bank/01_cash_bank_dashboard_overview.png" },
        { title: "مراجعة سجل الحركات", text: "استخدم الجدول لتتبع التحصيلات والمدفوعات بالتاريخ والمصدر والمرجع.", screenshot: "/screenshots/09_cash_bank/02_cash_bank_movements_ledger.png" },
        { title: "مراجعة أرصدة الحسابات", text: "قارن أرصدة البنك/النقد بالحركات المسجلة وحقق في أي فرق غير مفسر.", screenshot: "/screenshots/09_cash_bank/03_cash_bank_account_balances_kpis.png" }
      ],
      controls: ["تحصيل العميل يجب أن يأتي من Record Payment.", "دفع المورد يجب أن يأتي من Pay Supplier.", "دفع المصروف يجب أن يأتي من مسار المصروف المعتمد."],
      result: ["كل حركة نقد مرتبطة بمعاملة مصدر.", "يمكن مطابقة الأرصدة مع AR/AP والمصروفات."]
    }
  },
  {
    id: "profit",
    number: "11",
    en: {
      title: "Profit Analytics: revenue, actual COGS and estimated remaining cost",
      audience: "Management, finance and authorised sales leadership",
      purpose: "Understand profitability using actual COGS for delivered quantities and estimated cost only for quantities not yet delivered.",
      before: ["Use products with valid base/valuation cost.", "Remember that delivered and undelivered quantities may use different cost bases in the analysis.", "Do not interpret estimated COGS as posted accounting COGS."],
      steps: [
        { title: "Open Profit Analytics", text: "Review sales revenue, COGS, gross profit, gross margin, expenses and net profit for the selected period/context.", screenshot: "/screenshots/10_profit_analytics/01_profit_analytics_dashboard_overview.png" },
        { title: "Review COGS breakdown", text: "Use the table to identify which orders use actual delivered COGS and which still contain estimated cost.", screenshot: "/screenshots/10_profit_analytics/02_profit_analytics_cogs_breakdown_table.png" },
        { title: "Read revenue and COGS KPIs", text: "For a fully delivered order, actual COGS should come from the delivery valuation posting, not from the old landed-cost estimate.", screenshot: "/screenshots/10_profit_analytics/03_profit_analytics_revenue_and_cogs_kpis.png" },
        { title: "Understand actual vs estimated split", text: "For partially delivered orders, delivered quantity uses actual COGS while remaining quantity may use estimated COGS until delivery.", screenshot: "/screenshots/10_profit_analytics/04_profit_analytics_cogs_actual_vs_estimated_split.png" },
        { title: "Review partially delivered order", text: "Use the order-level breakdown to understand how delivered and remaining quantities contribute to profitability.", screenshot: "/screenshots/10_profit_analytics/05_profit_analytics_partially_delivered_order_breakdown.png" }
      ],
      controls: ["Do not compare revenue in USD directly with AED cost without the configured conversion.", "Missing or zero product cost makes estimates unreliable.", "Actual COGS should reconcile to the GL delivery journals."],
      result: ["Management can distinguish posted cost from estimates.", "Gross profit reflects actual delivered cost as fulfilment occurs.", "Partially delivered orders remain understandable before final completion."]
    },
    ar: {
      title: "تحليل الربحية: الإيراد وCOGS الفعلي والتكلفة التقديرية المتبقية",
      audience: "الإدارة والمالية وقيادة المبيعات المخولة",
      purpose: "فهم الربحية باستخدام COGS الفعلي للكميات المسلمة والتكلفة التقديرية فقط للكميات التي لم تُسلم بعد.",
      before: ["استخدم منتجات بتكلفة/تقييم صحيح.", "قد تستخدم الكمية المسلمة وغير المسلمة أساس تكلفة مختلفاً في التحليل.", "لا تعتبر Estimated COGS قيداً محاسبياً مرحلاً."],
      steps: [
        { title: "فتح Profit Analytics", text: "راجع الإيراد وCOGS والربح الإجمالي والهامش والمصروفات وصافي الربح.", screenshot: "/screenshots/10_profit_analytics/01_profit_analytics_dashboard_overview.png" },
        { title: "مراجعة تفصيل COGS", text: "استخدم الجدول لمعرفة الطلبات التي تستخدم COGS فعلياً والطلبات التي ما زالت تحتوي على تقدير.", screenshot: "/screenshots/10_profit_analytics/02_profit_analytics_cogs_breakdown_table.png" },
        { title: "قراءة KPIs", text: "للطلب المسلم بالكامل يجب أن يأتي COGS الفعلي من تقييم التسليم وليس من تقدير landed cost القديم.", screenshot: "/screenshots/10_profit_analytics/03_profit_analytics_revenue_and_cogs_kpis.png" },
        { title: "فهم Actual وEstimated", text: "في الطلب الجزئي تستخدم الكمية المسلمة COGS الفعلي بينما قد تستخدم الكمية المتبقية تقديراً حتى التسليم.", screenshot: "/screenshots/10_profit_analytics/04_profit_analytics_cogs_actual_vs_estimated_split.png" },
        { title: "مراجعة الطلب الجزئي", text: "راجع التفصيل على مستوى الطلب لفهم مساهمة الكمية المسلمة والمتبقية في الربحية.", screenshot: "/screenshots/10_profit_analytics/05_profit_analytics_partially_delivered_order_breakdown.png" }
      ],
      controls: ["لا تقارن إيراد USD مباشرة بتكلفة AED دون التحويل المهيأ.", "التكلفة الصفرية أو المفقودة تجعل التقدير غير موثوق.", "COGS الفعلي يجب أن يتطابق مع قيود التسليم في GL."],
      result: ["يمكن التمييز بين التكلفة المرحلة والتقدير.", "يعكس الربح الإجمالي التكلفة الفعلية مع تقدم التسليم.", "تبقى الطلبات الجزئية مفهومة قبل الإكمال النهائي."]
    }
  },
  {
    id: "admin",
    number: "12",
    en: {
      title: "System administration: companies, products, pricing, users and permissions",
      audience: "Super Admin and specifically authorised administrators",
      purpose: "Maintain the master data and access controls that every operational and accounting workflow depends on.",
      before: ["Administrative changes can affect all users and future transactions.", "Use least-privilege access.", "Do not use master-data screens to rewrite historical accounting transactions."],
      steps: [
        { title: "Manage companies", text: "Search the company registry before creating a company. Maintain legal/trading names and relevant details accurately.", screenshot: "/screenshots/11_system_admin/01_admin_companies_registry.png" },
        { title: "Edit company details", text: "Update only verified legal/business information. Company changes can affect how future documents and transactions display.", screenshot: "/screenshots/11_system_admin/02_admin_edit_company_modal.png" },
        { title: "Manage categories", text: "Use Categories Manager to maintain consistent English/Arabic product classification.", screenshot: "/screenshots/11_system_admin/03_admin_categories_manager.png" },
        { title: "Manage products", text: "Review SKU, names, category, Base Cost AED, Unit Weight, image and active status. Missing/zero cost makes procurement and profitability unreliable.", screenshot: "/screenshots/11_system_admin/04_admin_product_management_catalog.png" },
        { title: "Add product", text: "Create a unique SKU and enter the correct product names, category, base cost and weight. Do not invent a cost just to remove a warning.", screenshot: "/screenshots/11_system_admin/05_admin_add_product_drawer.png" },
        { title: "Understand automatic selling price", text: "Selling Price AED is automatically calculated from Base Cost + Unit Weight using the configured shipping rate and margin/freight/customs/overhead settings. The user should not manually type the selling price when auto-pricing is enabled.", screenshot: "/screenshots/11_system_admin/07_admin_product_pricing_calculation.png" },
        { title: "Manage users", text: "Review the user directory, account status and assigned role. Disable or correct access instead of sharing accounts.", screenshot: "/screenshots/11_system_admin/06_admin_user_directory.png" },
        { title: "Provision a user", text: "Create the account with correct name, email, company relationship and least-privilege role. Verify access after provisioning.", screenshot: "/screenshots/11_system_admin/09_admin_provision_user_form.png" },
        { title: "Review permissions matrix", text: "Use the matrix to understand read/create/update/approve/pay/admin permissions. Do not widen permissions only to bypass a workflow problem.", screenshot: "/screenshots/11_system_admin/08_admin_permissions_matrix.png" },
        { title: "Review pricing settings", text: "Shipping rate, margin, freight, customs and overhead settings influence automatic selling prices. Change them only with management approval because they can affect many products.", screenshot: "/screenshots/11_system_admin/10_admin_pricing_engine_settings.png" },
        { title: "Use audit logs", text: "Review Audit Logs to investigate who changed data/settings and when. Audit logs support investigation but do not replace proper permissions.", screenshot: "/screenshots/11_system_admin/11_admin_audit_logs.png" }
      ],
      controls: ["Do not use Super Admin for ordinary daily work when a lower role is sufficient.", "Do not grant payment/approval/admin permissions for convenience.", "Base Cost and Unit Weight affect auto-selling price.", "Global pricing settings can recalculate product prices.", "Do not modify the production database directly for normal administration."],
      result: ["Master data remains accurate and non-duplicated.", "Users operate with least privilege.", "Selling prices are calculated from controlled inputs/settings.", "Administrative changes remain auditable."]
    },
    ar: {
      title: "إدارة النظام: الشركات والمنتجات والتسعير والمستخدمون والصلاحيات",
      audience: "Super Admin والمسؤولون المخولون تحديداً",
      purpose: "إدارة البيانات الأساسية وضوابط الوصول التي تعتمد عليها العمليات التشغيلية والمحاسبية.",
      before: ["التغييرات الإدارية قد تؤثر على جميع المستخدمين والمعاملات المستقبلية.", "استخدم مبدأ أقل صلاحية.", "لا تستخدم شاشات البيانات الأساسية لإعادة كتابة التاريخ المحاسبي."],
      steps: [
        { title: "إدارة الشركات", text: "ابحث في سجل الشركات قبل الإنشاء وحافظ على الأسماء القانونية والتجارية والبيانات ذات الصلة بدقة.", screenshot: "/screenshots/11_system_admin/01_admin_companies_registry.png" },
        { title: "تعديل بيانات الشركة", text: "عدّل فقط المعلومات القانونية/التجارية الموثقة لأن التغيير قد يؤثر على عرض المستندات والمعاملات المستقبلية.", screenshot: "/screenshots/11_system_admin/02_admin_edit_company_modal.png" },
        { title: "إدارة الفئات", text: "استخدم Categories Manager للحفاظ على تصنيف متسق للمنتجات بالإنجليزية والعربية.", screenshot: "/screenshots/11_system_admin/03_admin_categories_manager.png" },
        { title: "إدارة المنتجات", text: "راجع SKU والأسماء والفئة وBase Cost AED والوزن والصورة والحالة. التكلفة المفقودة أو الصفرية تجعل المشتريات والربحية غير موثوقة.", screenshot: "/screenshots/11_system_admin/04_admin_product_management_catalog.png" },
        { title: "إضافة منتج", text: "أنشئ SKU فريداً وأدخل الاسم والفئة والتكلفة والوزن الصحيحين. لا تخترع تكلفة فقط لإزالة التحذير.", screenshot: "/screenshots/11_system_admin/05_admin_add_product_drawer.png" },
        { title: "فهم سعر البيع التلقائي", text: "يتم حساب Selling Price AED تلقائياً من Base Cost + Unit Weight وفق معدل الشحن والهامش والشحن والجمارك والمصاريف العامة. لا يحتاج المستخدم لإدخال السعر يدوياً عندما يكون التسعير التلقائي مفعلاً.", screenshot: "/screenshots/11_system_admin/07_admin_product_pricing_calculation.png" },
        { title: "إدارة المستخدمين", text: "راجع دليل المستخدمين وحالة الحساب والدور. عطّل أو صحح الوصول بدلاً من مشاركة الحسابات.", screenshot: "/screenshots/11_system_admin/06_admin_user_directory.png" },
        { title: "إنشاء مستخدم", text: "أنشئ الحساب بالاسم والبريد والربط بالشركة وأقل دور يكفي للعمل ثم تحقق من الوصول.", screenshot: "/screenshots/11_system_admin/09_admin_provision_user_form.png" },
        { title: "مراجعة Permissions Matrix", text: "استخدم المصفوفة لفهم صلاحيات القراءة والإنشاء والتعديل والاعتماد والدفع والإدارة، ولا توسع الصلاحيات فقط لتجاوز مشكلة في سير العمل.", screenshot: "/screenshots/11_system_admin/08_admin_permissions_matrix.png" },
        { title: "مراجعة إعدادات التسعير", text: "معدل الشحن والهامش والشحن والجمارك والمصاريف العامة تؤثر على السعر التلقائي، لذلك لا تغيرها بدون اعتماد الإدارة.", screenshot: "/screenshots/11_system_admin/10_admin_pricing_engine_settings.png" },
        { title: "استخدام Audit Logs", text: "راجع سجل التدقيق لمعرفة من غيّر البيانات أو الإعدادات ومتى. سجل التدقيق أداة تحقيق وليس بديلاً عن الصلاحيات الصحيحة.", screenshot: "/screenshots/11_system_admin/11_admin_audit_logs.png" }
      ],
      controls: ["لا تستخدم Super Admin للعمل اليومي إذا كان دور أقل كافياً.", "لا تمنح صلاحيات دفع/اعتماد/إدارة لمجرد السهولة.", "Base Cost والوزن يؤثران على سعر البيع.", "الإعدادات العامة قد تعيد حساب أسعار المنتجات.", "لا تعدل قاعدة الإنتاج مباشرة للإدارة اليومية."],
      result: ["البيانات الأساسية صحيحة وغير مكررة.", "المستخدمون يعملون بأقل صلاحية.", "أسعار البيع تحسب من مدخلات وإعدادات مضبوطة.", "التغييرات الإدارية قابلة للتدقيق."]
    }
  }
];
