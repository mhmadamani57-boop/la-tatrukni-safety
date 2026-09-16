import { useEffect, useState } from "react";
import { Bell, Bluetooth, Check, ChevronDown, CircleHelp, Heart, Menu, ShieldCheck, Smartphone, ThermometerSun, Waves, X, Zap } from "lucide-react";

const productImage = "./nahni-image.png";

export default function Home() {
  const [temp, setTemp] = useState(32);
  const [menuOpen, setMenuOpen] = useState(false);
  const [alertMode, setAlertMode] = useState(false);

  useEffect(() => {
    const interval = window.setInterval(() => setTemp((current) => current >= 36 ? 31 : current + 1), 4200);
    return () => window.clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <main dir="rtl" className="min-h-screen overflow-hidden bg-[#101016] text-white">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <div className="top-strip"><span className="pulse-dot" /> حماية مستمرة، حتى وأنت بعيد <span className="strip-note">مستشعرات ذكية تعمل على مدار الساعة</span></div>
      <nav className="nav-shell">
        <a className="brand" href="#top" aria-label="لا تتركني"><span className="brand-mark"><Heart size={18} fill="currentColor" /></span><span><strong>لا تتركني</strong><small>حماية ذكية داخل السيارة</small></span></a>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}><button onClick={() => scrollTo("how")}>كيف يعمل</button><button onClick={() => scrollTo("features")}>المزايا</button><button onClick={() => scrollTo("story")}>قصتنا</button></div>
        <button className="nav-cta" onClick={() => scrollTo("order")}>احجز جهازك <ChevronDown size={15} className="rotate-90" /></button>
        <button className="mobile-menu" onClick={() => setMenuOpen((v) => !v)} aria-label="فتح القائمة">{menuOpen ? <X /> : <Menu />}</button>
      </nav>

      <section id="top" className="hero section-pad">
        <div className="hero-copy reveal"><div className="eyebrow"><span>01</span> لأن الطمأنينة لا تنتظر</div><h1>لا تتركني<br /><em>وحيدًا في السيارة.</em></h1><p>جهاز صغير. إحساس كبير بالأمان. يراقب حرارة السيارة ويكتشف وجود طفل أو حيوان، ثم ينبهك فورًا قبل أن يتحول القلق إلى خطر.</p><div className="hero-actions"><button className="primary-btn" onClick={() => scrollTo("order")}>أريد حماية عائلتي <Zap size={17} fill="currentColor" /></button><button className="text-btn" onClick={() => scrollTo("how")}>اكتشف كيف يعمل <span>←</span></button></div><div className="trust-line"><div className="avatars"><span>أ</span><span>م</span><span>س</span><b>+2k</b></div><span>عائلات اختارت راحة البال</span></div></div>
        <div className="hero-visual reveal delay-1"><div className="visual-orbit orbit-a" /><div className="visual-orbit orbit-b" /><div className="image-frame"><img src={productImage} alt="جهاز لا تتركني داخل السيارة" /><div className="image-overlay" /><div className="floating-tag tag-temp"><ThermometerSun size={16} /><span><b>{temp}°</b><small>حرارة المقصورة</small></span></div><div className="floating-tag tag-safe"><span className="check-circle"><Check size={14} /></span><span><b>السيارة آمنة</b><small>آخر تحديث · الآن</small></span></div></div><div className="scan-line" /></div>
      </section>

      <section className="signal-band"><div><span className="signal-label">حساسات دقيقة</span><strong>نقرأ الخطر قبل أن تشعر به.</strong></div><div className="signal-wave"><Waves /><span /><span /><span /><span /></div><div className="signal-state"><span className="pulse-dot green" /> متصل الآن</div></section>

      <section id="how" className="section-pad how-section"><div className="section-heading"><div className="eyebrow"><span>02</span> بسيط، لكنه ذكي</div><h2>ثلاث خطوات تفصل<br /><em>بين القلق والاطمئنان.</em></h2><p>كل ما عليك هو توصيله. الباقي علينا.</p></div><div className="steps"><div className="step-card"><div className="step-no">01</div><div className="step-icon"><Bluetooth /></div><h3>وصّل</h3><p>ضع الجهاز في سيارتك. بدون أسلاك معقدة، وبدون تطبيقات مربكة.</p></div><div className="step-card active"><div className="step-no">02</div><div className="step-icon"><ThermometerSun /></div><h3>نراقب</h3><p>نقيس الحرارة ونحلل الحركة وجود أي طفل أو حيوان لحظة بلحظة.</p></div><div className="step-card"><div className="step-no">03</div><div className="step-icon"><Bell /></div><h3>ننبهك</h3><p>تصلك تنبيهات فورية على هاتفك عند ارتفاع الحرارة أو رصد خطر.</p></div></div></section>

      <section id="features" className="feature-section section-pad"><div className="feature-copy"><div className="eyebrow"><span>03</span> تكنولوجيا تهتم</div><h2>لأن أغلى ما تملك<br /><em>يستحق أكثر من مجرد وعد.</em></h2><p>صممنا «لا تتركني» ليكون عينك حين لا تكون هناك. خفيف، موثوق، وموجود دائمًا عندما تحتاجه.</p><div className="feature-list"><div><ShieldCheck /><span><b>حماية ذكية</b><small>استشعار حراري وحركة بدقة عالية</small></span></div><div><Smartphone /><span><b>تنبيهات فورية</b><small>إشعار على هاتفك أينما كنت</small></span></div><div><Zap /><span><b>بطارية تدوم</b><small>أسابيع من الطمأنينة بشحنة واحدة</small></span></div></div></div><div className="dashboard-card"><div className="dash-top"><span>حالة السيارة</span><span className="live"><i /> مباشر</span></div><div className={`dash-alert ${alertMode ? "danger" : ""}`}><div className="dash-icon"><ThermometerSun /></div><div><strong>{alertMode ? "تنبيه: حرارة مرتفعة" : "السيارة آمنة"}</strong><span>{alertMode ? "ننصحك بالتحقق الآن" : "لا يوجد خطر مكتشف"}</span></div><button onClick={() => setAlertMode((v) => !v)} aria-label="تبديل حالة التنبيه"><span className="toggle-dot" /></button></div><div className="metric"><div><span>حرارة المقصورة</span><strong>{alertMode ? "39" : temp}°C</strong></div><div className="metric-chart"><span /><span /><span /><span /><span /><span /><span /></div></div><div className="dash-footer"><span><Check size={14} /> آخر فحص منذ 4 ثوانٍ</span><span>بطارية 86%</span></div></div></section>

      <section id="story" className="quote-section"><div className="quote-mark">“</div><blockquote>كل رحلة تبدأ بسؤال واحد:<br /><em>هل هم بخير؟</em></blockquote><p>نحن نؤمن أن التكنولوجيا الحقيقية هي التي تمنحك وقتًا أطول لتحب، ووقتًا أقل لتقلق.</p></section>

      <section id="order" className="order-section section-pad"><div><div className="eyebrow"><span>04</span> راحة بالك تبدأ هنا</div><h2>لا تنتظر أن يحدث شيء<br /><em>كي تبدأ بالحماية.</em></h2></div><div className="order-card"><div className="order-price"><small>جهاز الحماية الذكي</small><strong>249 <span>ر.س</span></strong><em>شحن مجاني داخل المملكة</em></div><button className="primary-btn" onClick={() => alert("سنتواصل معك قريبًا لإتمام الحجز 🤍")}>احجز الآن <ChevronDown size={16} className="rotate-90" /></button><div className="order-note"><Check size={14} /> ضمان سنة كاملة · إرجاع خلال 14 يوم</div></div></section>

      <footer><a className="brand" href="#top"><span className="brand-mark"><Heart size={16} fill="currentColor" /></span><span><strong>لا تتركني</strong><small>نبقى قريبين، حتى من بعيد</small></span></a><span>صُنع بعناية لكل من نحب © 2025</span><div><CircleHelp size={17} /> الدعم والمساعدة</div></footer>
    </main>
  );
}
