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
          text: "From the left navigation, open Procurement & Warehouse → Warehouse Stock Levels. Confirm the warehouse shown at the top of the page. Stock count adjustments are location-specific."
        },
        {
          title: "Start Count / Adjust Stock",
          text: "In the Physical Stock Count panel, click Count / Adjust Stock. The controlled inventory window opens below the application top navigation so all fields and action buttons remain accessible."
        },
        {
          title: "Select the product",
          text: "Search by SKU or product name, then select the exact product. The system displays the current system quantity, reserved quantity and product base cost where available."
        },
        {
          title: "Enter the actual counted quantity",
          text: "Enter the total quantity physically counted in the selected warehouse. Example: if the system says 1 but warehouse staff physically count 11, enter 11 — do not enter +10. The system calculates the adjustment automatically."
        },
        {
          title: "Choose the reason and add notes",
          text: "Choose Initial physical stock count, Cycle count correction, Warehouse recount, or Damaged / missing stock correction. Add a useful note such as the count sheet, bin reference or explanation."
        },
        {
          title: "Review the calculated adjustment",
          text: "Before posting, verify System Qty, Reserved, Base Cost and Adjustment. A positive adjustment adds newly discovered stock. A negative adjustment removes stock using the current trusted valuation."
        },
        {
          title: "Post Stock Count",
          text: "Click Post Stock Count once. The system updates the physical stock balance, inventory valuation, General Ledger and audit trail together. Historical goods receipts and customer deliveries are not rewritten."
        },
        {
          title: "Verify the new balance",
          text: "After posting, refresh Warehouse Stock Levels and confirm the new on-hand quantity. Check that the stock count status is COUNTED where shown and that the Movement Ledger contains the adjustment."
        },
        {
          title: "Verify accounting",
          text: "For an upward count, only newly discovered units are valued using the current product base cost, with trusted weighted-average cost used as fallback where applicable. Existing inventory retains its historical value. Downward counts use the current trusted weighted-average cost."
        },
        {
          title: "Continue normal delivery workflow",
          text: "Once quantity and valuation are reconciled, Sales/Logistics can use Deliver Goods normally. Do not use Stock Count merely to bypass an insufficient-stock warning; the entered quantity must represent a real physical count."
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
        "Upward stock count: Dr Inventory Asset (1400) / Cr Inventory Adjustment Gain (4100) for the value of newly discovered units.",
        "Downward stock count: Dr Inventory Shrinkage Expense (5100) / Cr Inventory Asset (1400) using the trusted weighted-average cost.",
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
          text: "من القائمة الجانبية افتح المشتريات والمستودع ← مستويات مخزون المستودع. تأكد من اسم المستودع الظاهر أعلى الصفحة لأن كل عملية جرد مرتبطة بموقع محدد."
        },
        {
          title: "بدء الجرد / تعديل المخزون",
          text: "من بطاقة الجرد الفعلي للمخزون اضغط جرد / تعديل المخزون. تفتح نافذة الإجراء المنضبط أسفل شريط التنقل العلوي بحيث تبقى جميع الحقول والأزرار قابلة للوصول."
        },
        {
          title: "اختيار المنتج",
          text: "ابحث برمز SKU أو اسم المنتج ثم اختر المنتج الصحيح. يعرض النظام كمية النظام الحالية والكمية المحجوزة وتكلفة الأساس إذا كانت متاحة."
        },
        {
          title: "إدخال الكمية الفعلية التي تم جردها",
          text: "أدخل إجمالي الكمية الموجودة فعلياً في المستودع المحدد. مثال: إذا كان النظام يعرض 1 وتم عد 11 قطعة فعلياً، أدخل 11 وليس +10. يحسب النظام التعديل تلقائياً."
        },
        {
          title: "اختيار السبب وإضافة الملاحظات",
          text: "اختر جرد فعلي أولي أو تصحيح جرد دوري أو إعادة عد المستودع أو تصحيح مخزون تالف/مفقود. أضف ملاحظة مفيدة مثل رقم ورقة الجرد أو موقع التخزين أو سبب التعديل."
        },
        {
          title: "مراجعة التعديل المحسوب",
          text: "قبل الترحيل راجع كمية النظام والمحجوز والتكلفة الأساسية وقيمة التعديل. التعديل الموجب يضيف مخزوناً تم اكتشافه حديثاً، والتعديل السالب يخفض المخزون وفق التقييم الموثوق الحالي."
        },
        {
          title: "ترحيل الجرد",
          text: "اضغط ترحيل الجرد مرة واحدة. يقوم النظام بتحديث الكمية الفعلية وتقييم المخزون ودفتر الأستاذ وسجل التدقيق معاً، دون إعادة كتابة الاستلامات أو تسليمات العملاء التاريخية."
        },
        {
          title: "التحقق من الرصيد الجديد",
          text: "بعد الترحيل حدّث صفحة مستويات المخزون وتأكد من الكمية الجديدة. تحقق من ظهور حالة COUNTED حيثما كانت معروضة ومن وجود حركة التعديل في سجل الحركات."
        },
        {
          title: "التحقق من الأثر المحاسبي",
          text: "في حالة زيادة الجرد يتم تقييم الوحدات المكتشفة حديثاً فقط بتكلفة الأساس الحالية للمنتج، مع استخدام متوسط التكلفة المرجح الموثوق كبديل عند الحاجة. يحتفظ المخزون الحالي بقيمته التاريخية. أما النقص فيستخدم متوسط التكلفة المرجح الموثوق الحالي."
        },
        {
          title: "العودة إلى مسار التسليم الطبيعي",
          text: "بعد مطابقة الكمية والتقييم يمكن للمبيعات/اللوجستيات استخدام تسليم البضائع بشكل طبيعي. لا تستخدم الجرد لتجاوز رسالة عدم كفاية المخزون؛ يجب أن تمثل الكمية المدخلة جرداً فعلياً حقيقياً."
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
        "زيادة الجرد: مدين أصل المخزون (1400) / دائن أرباح تعديل المخزون (4100) بقيمة الوحدات المكتشفة حديثاً.",
        "نقص الجرد: مدين مصروف عجز المخزون (5100) / دائن أصل المخزون (1400) باستخدام متوسط التكلفة المرجح الموثوق.",
        "تحتفظ الوحدات الحالية بتقييمها التاريخي ويعيد النظام احتساب متوسط التكلفة الناتج دون إعادة كتابة المعاملات السابقة.",
        "مثال: وحدة موجودة بقيمة 23 درهماً، الجرد الفعلي 11، تكلفة الأساس الحالية 30 درهماً ← إضافة 10 وحدات × 30 = 300 درهم؛ قيمة المخزون الجديدة 323 درهماً؛ متوسط التكلفة الجديد ≈ 29.3636 درهماً."
      ]
    }
  }
];
