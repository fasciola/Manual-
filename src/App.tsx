import { useMemo, useState } from "react";
import { BookOpen, CheckCircle2, ChevronRight, Globe2, Menu, ShieldCheck, X } from "lucide-react";
import { Language, sections } from "./manualData";
import { featureSections } from "./featureUpdates";

const allSections = [...sections, ...featureSections];

const copy = {
  en: {
    guide: "Quartzite Orders System User Manual",
    subtitle: "Detailed bilingual operating guide · September 2026",
    intro: "Use this manual as the official step-by-step operating guide for Sales, Procurement, Warehouse, Logistics, Finance, Management and System Administration. Follow the steps in order and use workflow buttons rather than forcing record statuses.",
    audience: "Who uses this",
    purpose: "Purpose",
    before: "Before you start",
    steps: "Step-by-step procedure",
    controls: "Controls and common mistakes",
    result: "Expected result",
    accounting: "Accounting / financial effect",
    screenshot: "System screenshot",
    noScreenshot: "Screenshot asset not loaded in this repository yet.",
    open: "Open Quartzite Orders",
    end: "End-to-end operating flow",
    flow: "Quotation → Sales Order → Inventory Request → Approval → Purchase Order → Confirm PO → Receive Goods → Stock & Valuation → Stock Count / Adjust Stock (when required) → Deliver Goods → COGS → Customer Invoice → Customer Receipt → Cash & Bank → Profit Analytics",
    top: "Back to top"
  },
  ar: {
    guide: "دليل استخدام نظام كوارتزايت أوردرز",
    subtitle: "دليل تشغيلي تفصيلي ثنائي اللغة · سبتمبر 2026",
    intro: "استخدم هذا الدليل كمرجع رسمي خطوة بخطوة للمبيعات والمشتريات والمخزن واللوجستيات والمالية والإدارة وإدارة النظام. اتبع الخطوات بالترتيب واستخدم أزرار سير العمل بدلاً من فرض الحالات يدوياً.",
    audience: "من يستخدم هذا الإجراء",
    purpose: "الهدف",
    before: "قبل البدء",
    steps: "الإجراء خطوة بخطوة",
    controls: "الضوابط والأخطاء الشائعة",
    result: "النتيجة المتوقعة",
    accounting: "الأثر المحاسبي / المالي",
    screenshot: "صورة من النظام",
    noScreenshot: "ملف الصورة غير موجود في المستودع حتى الآن.",
    open: "فتح نظام كوارتزايت أوردرز",
    end: "المسار التشغيلي من البداية للنهاية",
    flow: "عرض السعر ← طلب المبيعات ← طلب المخزون ← الاعتماد ← أمر الشراء ← تأكيد PO ← استلام البضائع ← المخزون والتقييم ← الجرد / تعديل المخزون عند الحاجة ← تسليم العميل ← COGS ← فاتورة العميل ← التحصيل ← النقد والبنك ← تحليل الربحية",
    top: "العودة للأعلى"
  }
};

function Screenshot({ src, caption, lang }: { src?: string; caption: string; lang: Language }) {
  const [failed, setFailed] = useState(false);
  const c = copy[lang];
  if (!src || failed) {
    return <div className="shot shot-missing"><strong>{c.screenshot}</strong><span>{caption}</span><small>{c.noScreenshot}</small></div>;
  }
  return (
    <figure className="shot">
      <img src={src} alt={caption} loading="lazy" onError={() => setFailed(true)} />
      <figcaption>{c.screenshot} · {caption}</figcaption>
    </figure>
  );
}

export default function App() {
  const [lang, setLang] = useState<Language>("en");
  const [menu, setMenu] = useState(false);
  const c = copy[lang];
  const rtl = lang === "ar";
  const chapterLinks = useMemo(() => allSections.map(s => ({ id: s.id, number: s.number, title: s[lang].title })), [lang]);

  return (
    <div id="top" dir={rtl ? "rtl" : "ltr"} className="app">
      <header className="topbar">
        <a href="#top" className="brand"><span className="brand-icon"><BookOpen size={20} /></span><span><strong>Quartzite Orders</strong><small>{c.guide}</small></span></a>
        <nav className="desktop-nav">{chapterLinks.map(x => <a key={x.id} href={`#${x.id}`}>{x.number}</a>)}</nav>
        <div className="actions">
          <button className="lang-btn" onClick={() => setLang(lang === "en" ? "ar" : "en")}><Globe2 size={16} />{lang === "en" ? "العربية" : "English"}</button>
          <button className="menu-btn" onClick={() => setMenu(!menu)}>{menu ? <X size={18}/> : <Menu size={18}/>}</button>
        </div>
      </header>

      {menu && <div className="mobile-nav">{chapterLinks.map(x => <a key={x.id} href={`#${x.id}`} onClick={() => setMenu(false)}><span>{x.number} · {x.title}</span><ChevronRight size={15}/></a>)}</div>}

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">{c.subtitle}</p>
            <h1>{c.guide}</h1>
            <p>{c.intro}</p>
            <div className="hero-actions"><a className="primary" href="#basics">{lang === "en" ? "Start with system basics" : "ابدأ بأساسيات النظام"}<ChevronRight size={16}/></a><a className="secondary" href="https://quartzite-orders.online" target="_blank" rel="noreferrer">{c.open}</a></div>
          </div>
          <div className="rules">
            <div><strong>{lang === "en" ? "Currency rule" : "قاعدة العملات"}</strong><p>{lang === "en" ? "Customer quotations, sales orders and customer invoices are presented in USD where configured. Supplier purchasing, inventory valuation, COGS and core accounting are maintained in AED." : "تظهر عروض الأسعار وطلبات المبيعات وفواتير العملاء بالدولار عند تفعيل ذلك، بينما تتم المشتريات وتقييم المخزون وCOGS والمحاسبة الأساسية بالدرهم."}</p></div>
            <div><strong>{lang === "en" ? "Workflow rule" : "قاعدة سير العمل"}</strong><p>{lang === "en" ? "Use Confirm, Receive Goods, Stock Count / Adjust Stock, Deliver Goods, Record Payment and Pay Supplier. These actions create controlled stock, valuation, audit and accounting effects." : "استخدم أزرار Confirm وReceive Goods وStock Count / Adjust Stock وDeliver Goods وRecord Payment وPay Supplier لأنها تنشئ حركات مخزون وتقييم وتدقيق وقيوداً محاسبية مضبوطة."}</p></div>
          </div>
        </section>

        <section className="contents"><h2>{lang === "en" ? "Manual chapters" : "فصول الدليل"}</h2><div className="chapter-grid">{chapterLinks.map(x => <a key={x.id} href={`#${x.id}`}><span>{x.number}</span><strong>{x.title}</strong></a>)}</div></section>

        {allSections.map(section => {
          const d = section[lang];
          return (
            <section className="manual-section" id={section.id} key={section.id}>
              <aside className="section-side"><span className="section-number">{section.number}</span><h2>{d.title}</h2><div className="meta"><div><strong>{c.audience}</strong><p>{d.audience}</p></div><div><strong>{c.purpose}</strong><p>{d.purpose}</p></div></div></aside>
              <article className="section-main">
                <div className="panel"><h3><CheckCircle2 size={18}/>{c.before}</h3><ul>{d.before.map((x,i)=><li key={i}>{x}</li>)}</ul></div>
                <div className="procedure"><h3>{c.steps}</h3>{d.steps.map((step,i)=><div className="step" key={`${section.id}-${i}`}><div className="step-head"><span>{i+1}</span><div><h4>{step.title}</h4><p>{step.text}</p></div></div><Screenshot src={step.screenshot} caption={step.title} lang={lang}/></div>)}</div>
                <div className="two-col"><div className="panel warning"><h3><ShieldCheck size={18}/>{c.controls}</h3><ul>{d.controls.map((x,i)=><li key={i}>{x}</li>)}</ul></div><div className="panel success"><h3><CheckCircle2 size={18}/>{c.result}</h3><ul>{d.result.map((x,i)=><li key={i}>{x}</li>)}</ul></div></div>
                {d.accounting && <div className="panel accounting"><h3>{c.accounting}</h3><ul>{d.accounting.map((x,i)=><li key={i}>{x}</li>)}</ul></div>}
              </article>
            </section>
          );
        })}

        <section className="footer-flow"><div><small>Quartzite Orders</small><h2>{c.end}</h2><p>{c.flow}</p></div><a href="#top">{c.top}</a></section>
      </main>
    </div>
  );
}
