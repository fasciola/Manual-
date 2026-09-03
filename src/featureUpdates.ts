import type { ManualSection } from "./manualData";

export const featureSections: ManualSection[] = [
  {
    id: "stock-count-adjustment",
    number: "13",
    en: {
      title: "Warehouse Stock Levels: controlled Stock Count / Adjust Stock",
      audience: "Warehouse staff, administrators and authorised inventory users",
      purpose: "Correct an uncertain or newly counted physical stock balance without editing historical receipts, deliveries or Phase 4A/4B accounting transactions. The workflow reconciles physical quantity, inventory valuation, GL and audit history in one controlled action.",
      before: [
        "Open Procurement & Warehouse → Warehouse Stock Levels and select the correct warehouse/location before counting.",
        "Count the physical quantity actually in the warehouse. Enter the final counted quantity, not a +/− adjustment.",
        "Check the product/SKU carefully. Products with similar names must not be combined unless they are the same inventory item.",
        "If stock is reserved, the final physical count cannot be below the reserved quantity.",
        "Do not edit stock_levels, valuation balances, stock movements or GL journals directly to correct quantity."
      ],
      steps: [
        {
          title: "Open Warehouse Stock Levels",
          text: "From the left navigation, open Procurement & Warehouse → Warehouse Stock Levels. Confirm the warehouse shown at the top of the page. Stock count adjustments are location-specific.",
          screenshot: "/screenshots/03_warehouse_inventory/21_warehouse_stock_levels_navigation.png"
        },
        {
          title: "Inspect Warehouse Stock Levels overview",
          text: "Review the Multi-Warehouse Stock & Transfers interface. The top selector displays the active hub (e.g. Sudan Main Warehouse SD-KRT-MAIN), inventory ledger tabs, and the controlled Physical Stock Count panel.",
          screenshot: "/screenshots/03_warehouse_inventory/22_warehouse_stock_levels_page.png"
        },
        {
          title: "Start Count / Adjust Stock",
          text: "In the Physical Stock Count panel, click Count / Adjust Stock. The controlled inventory window opens below the application top navigation so all fields and action buttons remain accessible.",
          screenshot: "/screenshots/03_warehouse_inventory/23_warehouse_stock_count_action.png"
        },
        {
          title: "Controlled stock count modal",
          text: "The Physical Stock Count / Adjustment modal displays strict operational warnings: always enter the actual counted physical quantity, never a +/- adjustment. Existing historical receipts and deliveries are protected.",
          screenshot: "/screenshots/03_warehouse_inventory/24_warehouse_stock_count_modal_initial.png"
        },
        {
          title: "Select the product & review Base Cost",
          text: "Search by SKU or product name, then select the exact product. The system displays current System Qty, Reserved, and Base Cost AED before any adjustment is entered.",
          screenshot: "/screenshots/03_warehouse_inventory/25_warehouse_stock_count_product_selected.png"
        },
        {
          title: "Enter the actual counted quantity & review adjustment",
          text: "Enter the total physical count currently in the warehouse (e.g. 10). The system automatically computes the adjustment delta in real time (+10) without manual arithmetic.",
          screenshot: "/screenshots/03_warehouse_inventory/26_warehouse_stock_count_quantity_adjustment.png"
        },
        {
          title: "Choose the reason and add notes",
          text: "Select an authoritative adjustment reason: Initial physical stock count, Cycle count correction, Warehouse recount, or Damaged / missing stock correction. Enter reference notes such as the count sheet number or bin location.",
          screenshot: "/screenshots/03_warehouse_inventory/27_warehouse_stock_count_reason_notes.png"
        },
        {
          title: "Post Stock Count",
          text: "Review the completed adjustment and click Post Stock Count once. The system updates physical on-hand quantity, inventory valuation, General Ledger and audit logs atomically.",
          screenshot: "/screenshots/03_warehouse_inventory/28_warehouse_stock_count_post_action.png"
        },
        {
          title: "Validation controls, audit trail and accounting verification",
          text: "The interface enforces strict client-side and server-side validation: negative numbers, counts below reserved quantities, or missing product selections are blocked. Once posted, stock increase preserves historical valuation and values newly discovered units at current base cost (Dr 1400 Inventory Asset / Cr 4100 Inventory Adjustment Gain); stock decrease uses trusted weighted-average cost (Dr 5100 Inventory Shrinkage Expense / Cr 1400 Inventory Asset). Sales and Logistics can then proceed with normal delivery workflows.",
          screenshot: "/screenshots/03_warehouse_inventory/29_warehouse_stock_count_success.png"
        }
      ],
      controls: [
        "Stock quantity is not a free-edit field. Always use Count / Adjust Stock.",
        "Enter the final physical quantity, not the difference between system and physical stock.",
        "Never use a stock count to fabricate availability for a customer delivery.",
        "Do not change historical purchase receipts or deliveries to make the current quantity match.",
        "Post the count only once; do not double-click or repeat it from another browser tab.",
        "If the product has size/colour variants, verify that the selected inventory item represents the stock being counted before posting."
      ],
      result: [
        "Warehouse quantity matches the latest physical count.",
        "Inventory valuation remains reconciled with the physical quantity.",
        "The adjustment is traceable through stock movement, GL and audit history.",
        "Phase 4A goods-receipt history and Phase 4B customer-delivery/COGS history remain unchanged."
      ],
      accounting: [
        "Stock increase (upward count): Existing historical valuation is preserved; only newly discovered units receive the current allowed adjustment cost (current product base cost or trusted WAC fallback). Inventory Asset (1400) increases (Dr) and Inventory Adjustment Gain (4100) is credited (Cr).",
        "Stock decrease (downward count): Uses trusted weighted-average cost. Inventory Asset (1400) decreases (Cr) and Inventory Shrinkage Expense (5100) is debited (Dr).",
        "Existing units keep their historical valuation; the workflow recalculates the resulting weighted-average cost without rewriting historical transactions.",
        "Example: existing 1 unit valued at AED 23, physical count 11, current base cost AED 30 → add 10 units at AED 30 = AED 300; new inventory value AED 323; new WAC ≈ AED 29.3636."
      ]
    },
    ar: {
      title: "مستويات مخزون المستودع: الجرد / تعديل المخزون المنضبط",
      audience: "موظفو المستودع والمسؤولون ومستخدمو المخزون المخولون",
      purpose: "تصحيح رصيد مخزون فعلي غير مؤكد أو تم جرده حديثاً دون تعديل الاستلامات أو التسليمات التاريخية أو معاملات المحاسبة الخاصة بالمرحلتين 4A و4B. تقوم العملية بمطابقة الكمية الفعلية وتقييم المخزون ودفتر الأستاذ وسجل التدقيق في إجراء واحد مضبوط.",
      before: [
        "افتح المشتريات والمستودع ← مستويات مخزون المستودع، واختر المستودع/الموقع الصحيح قبل الجرد.",
        "قم بعد الكمية الموجودة فعلياً في المستودع. أدخل الكمية النهائية التي تم جردها وليس قيمة زيادة أو نقصان.",
        "تحقق من المنتج ورمز SKU بدقة، ولا تجمع منتجات متشابهة الاسم إلا إذا كانت نفس مادة المخزون.",
        "إذا كانت هناك كمية محجوزة فلا يمكن أن تكون الكمية النهائية أقل من الكمية المحجوزة.",
        "لا تعدل جداول المخزون أو أرصدة التقييم أو حركات المخزون أو قيود الأستاذ مباشرة لتصحيح الكمية."
      ],
      steps: [
        {
          title: "فتح مستويات مخزون المستودع",
          text: "من القائمة الجانبية افتح المشتريات والمستودع ← مستويات مخزون المستودع. تأكد من اسم المستودع الظاهر أعلى الصفحة لأن كل عملية جرد مرتبطة بموقع محدد.",
          screenshot: "/screenshots/03_warehouse_inventory/21_warehouse_stock_levels_navigation.png"
        },
        {
          title: "مراجعة صفحة مستويات مخزون المستودع",
          text: "راجع واجهة إدارة المخازن المتعددة والمحولات، حيث يظهر المستودع النشط ومحدد الفروع وسجل الحركات وبطاقة الجرد الفعلي المنضبط.",
          screenshot: "/screenshots/03_warehouse_inventory/22_warehouse_stock_levels_page.png"
        },
        {
          title: "بدء الجرد / تعديل المخزون",
          text: "من بطاقة الجرد الفعلي للمخزون اضغط جرد / تعديل المخزون. تفتح نافذة الإجراء المنضبط أسفل شريط التنقل العلوي بحيث تبقى جميع الحقول والأزرار قابلة للوصول.",
          screenshot: "/screenshots/03_warehouse_inventory/23_warehouse_stock_count_action.png"
        },
        {
          title: "نافذة الجرد الفعلي للمخزون",
          text: "تعرض نافذة الجرد الفعلي تحذيراً تشغيلياً مشدداً: أدخل دائماً الكمية الفعلية الكاملة التي تم جردها وليس فارق الزيادة أو النقصان، مع الحفاظ الكامل على الحركات التاريخية.",
          screenshot: "/screenshots/03_warehouse_inventory/24_warehouse_stock_count_modal_initial.png"
        },
        {
          title: "اختيار المنتج ومراجعة تكلفة الأساس",
          text: "ابحث برمز SKU أو اسم المنتج ثم اختر المنتج الصحيح. يعرض النظام كمية النظام الحالية والكمية المحجوزة وتكلفة الأساس بالدرهم الإماراتي قبل إدخال أي تعديل.",
          screenshot: "/screenshots/03_warehouse_inventory/25_warehouse_stock_count_product_selected.png"
        },
        {
          title: "إدخال الكمية الفعلية ومراجعة التعديل المحسوب",
          text: "أدخل إجمالي الكمية الفعلية الموجودة في المستودع (مثال: 10). يقوم النظام باحتساب قيمة التعديل آلياً في الوقت الفعلي (+10) دون الحاجة لحساب يدوي.",
          screenshot: "/screenshots/03_warehouse_inventory/26_warehouse_stock_count_quantity_adjustment.png"
        },
        {
          title: "اختيار السبب وإضافة الملاحظات",
          text: "اختر سبب الجرد المعتمد: جرد فعلي أولي، أو تصحيح جرد دوري، أو إعادة عد المستودع، أو تصحيح مخزون تالف/مفقود، مع إدخال رقم ورقة الجرد أو موقع التخزين في الملاحظات.",
          screenshot: "/screenshots/03_warehouse_inventory/27_warehouse_stock_count_reason_notes.png"
        },
        {
          title: "ترحيل الجرد",
          text: "راجع بيانات التعديل واضغط زر ترحيل الجرد مرة واحدة. يقوم النظام بتحديث الكمية الفعلية وتقييم المخزون ودفتر الأستاذ وسجل التدقيق بشكل متزامن.",
          screenshot: "/screenshots/03_warehouse_inventory/28_warehouse_stock_count_post_action.png"
        },
        {
          title: "ضوابط التحقق وحماية البيانات والتحقق المحاسبي",
          text: "يفرض النظام تدقيقاً مشدداً على المدخلات: يُمنع إدخال أرقام سالبة أو كميات أقل من المحجوز أو ترحيل جرد دون تحديد منتج. وعند الترحيل، تقيم الزيادة الوحدات الجديدة بتكلفة الأساس (مدين 1400 أصل المخزون / دائن 4100 أرباح تعديل المخزون)، بينما يستخدم النقص متوسط التكلفة المرجح (مدين 5100 مصروف عجز المخزون / دائن 1400 أصل المخزون)، لتتمكن المبيعات واللوجستيات من متابعة مسار التسليم بشكل طبيعي.",
          screenshot: "/screenshots/03_warehouse_inventory/29_warehouse_stock_count_success.png"
        }
      ],
      controls: [
        "كمية المخزون ليست حقلاً للتعديل الحر؛ استخدم دائماً جرد / تعديل المخزون.",
        "أدخل الكمية الفعلية النهائية وليس الفرق بين كمية النظام والكمية الفعلية.",
        "لا تستخدم الجرد لإنشاء مخزون غير حقيقي بهدف تنفيذ تسليم عميل.",
        "لا تعدل أوامر الشراء أو الاستلامات أو التسليمات التاريخية لجعل الرصيد الحالي مطابقاً.",
        "رحّل الجرد مرة واحدة فقط ولا تضغط مرتين أو تكرره من تبويب آخر.",
        "إذا كان المنتج يحتوي على مقاسات أو ألوان فتأكد أن مادة المخزون المختارة تمثل الكمية التي يتم جردها قبل الترحيل."
      ],
      result: [
        "كمية المستودع تطابق آخر جرد فعلي.",
        "تقييم المخزون يبقى مطابقاً للكمية الفعلية.",
        "يمكن تتبع التعديل من خلال حركة المخزون ودفتر الأستاذ وسجل التدقيق.",
        "يبقى تاريخ استلام البضائع في المرحلة 4A وتاريخ تسليم العميل/COGS في المرحلة 4B دون تغيير."
      ],
      accounting: [
        "زيادة المخزون (زيادة الجرد): يتم الحفاظ على التقييم التاريخي السابق؛ وتُقيّم الوحدات المكتشفة حديثاً فقط بتكلفة الأساس الحالية المسموح بها (أو متوسط التكلفة الموثوق كبديل). يزداد أصل المخزون (1400) كمدين (Dr) وتُقيد أرباح تعديل المخزون (4100) كدائن (Cr).",
        "نقص المخزون (نقص الجرد): يستخدم متوسط التكلفة المرجح الموثوق. ينخفض أصل المخزون (1400) كدائن (Cr) ويُقيد مصروف عجز المخزون (5100) كمدين (Dr).",
        "تحتفظ الوحدات الحالية بتقييمها التاريخي ويعيد النظام احتساب متوسط التكلفة الناتج دون إعادة كتابة المعاملات السابقة.",
        "مثال: وحدة موجودة بقيمة 23 درهماً، الجرد الفعلي 11، تكلفة الأساس الحالية 30 درهماً ← إضافة 10 وحدات × 30 = 300 درهم؛ قيمة المخزون الجديدة 323 درهماً؛ متوسط التكلفة الجديد ≈ 29.3636 درهماً."
      ]
    }
  }
];
