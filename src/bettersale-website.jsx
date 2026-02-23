import { useState, useEffect } from "react";

// ─── BRAND ───────────────────────────────────────────────────────────────────

const BRAND = {
  phone: "1800 000 000",
  color: "#1d4ed8",
  colorDark: "#1e3a8a",
  colorLight: "#eff6ff",
  colorMid: "#dbeafe",
};

// ─── GLOBAL STYLES ───────────────────────────────────────────────────────────

const globalStyles = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  a { text-decoration: none; color: inherit; }
  .nav-link { font-size: 0.85rem; font-family: 'Helvetica Neue', sans-serif; color: #444; transition: color 0.2s; cursor: pointer; }
  .nav-link:hover { color: #1d4ed8; }
  .btn-primary { background: #1d4ed8; color: white; padding: 14px 28px; border: none; cursor: pointer; font-size: 0.95rem; font-family: 'Helvetica Neue', sans-serif; letter-spacing: 0.03em; transition: background 0.2s; border-radius: 2px; }
  .btn-primary:hover { background: #1e3a8a; }
  .btn-outline { background: transparent; color: #1d4ed8; padding: 13px 27px; border: 1.5px solid #1d4ed8; cursor: pointer; font-size: 0.95rem; font-family: 'Helvetica Neue', sans-serif; letter-spacing: 0.03em; transition: all 0.2s; border-radius: 2px; }
  .btn-outline:hover { background: #1d4ed8; color: white; }
  .section { padding: 80px 40px; max-width: 1200px; margin: 0 auto; }
  .fade-in { animation: fadeIn 0.5s ease forwards; }
  @keyframes fadeIn { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
  .step-tab { padding: 14px 20px; cursor: pointer; font-family: 'Helvetica Neue', sans-serif; font-size: 0.85rem; border-left: 3px solid transparent; transition: all 0.2s; color: #666; }
  .step-tab.active { border-left-color: #1d4ed8; color: #1a1a1a; font-weight: 600; }
  .step-tab:hover { color: #1d4ed8; }
  .service-card { background: white; padding: 32px; border: 1px solid #e8e4df; transition: box-shadow 0.2s, transform 0.2s; cursor: pointer; }
  .service-card:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.08); transform: translateY(-2px); }
  .faq-item { border-bottom: 1px solid #e8e4df; }
  .faq-q { padding: 20px 0; cursor: pointer; display: flex; justify-content: space-between; align-items: center; font-size: 1rem; font-family: 'Helvetica Neue', sans-serif; font-weight: 500; }
  .faq-q:hover { color: #1d4ed8; }
  .faq-a { padding-bottom: 20px; color: #555; font-size: 0.95rem; line-height: 1.7; font-family: 'Helvetica Neue', sans-serif; }
  .compare-col { flex: 1; padding: 32px; }
  .compare-col.ours { background: #eff6ff; border-left: 3px solid #1d4ed8; }
  .compare-col.others { background: #fdf6f6; border-left: 3px solid #e07070; }
  .compare-item { display: flex; gap: 10px; margin-bottom: 14px; align-items: flex-start; font-family: 'Helvetica Neue', sans-serif; font-size: 0.9rem; line-height: 1.5; }
  .hero-stat { font-family: 'Helvetica Neue', sans-serif; font-size: 0.82rem; color: #555; display: flex; align-items: center; gap: 8px; }
  .hero-stat::before { content: ''; display: block; width: 6px; height: 6px; background: #1d4ed8; border-radius: 50%; flex-shrink: 0; }
  .prop-card { background: white; border: 1px solid #e8e4df; border-radius: 4px; overflow: hidden; transition: box-shadow 0.2s, transform 0.2s; cursor: pointer; }
  .prop-card:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.1); transform: translateY(-3px); }
  .badge { display: inline-block; padding: 4px 10px; border-radius: 2px; font-family: 'Helvetica Neue', sans-serif; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; }
  .filter-btn { padding: 8px 18px; border-radius: 20px; border: 1.5px solid #ddd; background: white; font-family: 'Helvetica Neue', sans-serif; font-size: 0.82rem; cursor: pointer; transition: all 0.2s; color: #444; }
  .filter-btn.active { border-color: #1d4ed8; background: #1d4ed8; color: white; }
  .filter-btn:hover { border-color: #1d4ed8; color: #1d4ed8; }
  .filter-btn.active:hover { color: white; }
  .input-field { width: 100%; padding: 12px 16px; border: 1.5px solid #ddd; border-radius: 2px; font-family: 'Helvetica Neue', sans-serif; font-size: 0.9rem; color: #333; outline: none; transition: border-color 0.2s; background: white; }
  .input-field:focus { border-color: #1d4ed8; }
  .trust-chip { display: flex; align-items: center; gap: 10px; padding: 12px 18px; background: white; border: 1px solid #e8e4df; border-radius: 2px; font-family: 'Helvetica Neue', sans-serif; font-size: 0.83rem; color: #444; }
  @media (max-width: 768px) {
    .section { padding: 60px 20px; }
    .hero-grid { flex-direction: column !important; }
    .compare-row { flex-direction: column !important; }
    .services-grid { grid-template-columns: 1fr !important; }
    .trust-grid { grid-template-columns: 1fr !important; }
    .step-layout { flex-direction: column !important; }
    .props-grid { grid-template-columns: 1fr !important; }
    .how-grid { grid-template-columns: 1fr 1fr !important; }
  }
`;

// ─── SHARED LAYOUT ───────────────────────────────────────────────────────────

function TopBanner() {
  return (
    <div style={{ background: BRAND.color, color: "white", textAlign: "center", padding: "10px 20px", fontSize: "0.82rem", fontFamily: "'Helvetica Neue', sans-serif", letterSpacing: "0.03em" }}>
      Free property appraisals available now —{" "}
      <span style={{ fontWeight: 600, textDecoration: "underline", cursor: "pointer" }}>{BRAND.phone}</span>
    </div>
  );
}

function Navbar({ page, setPage }) {
  const links = [
    { label: "Buy", key: "buy" },
    { label: "Sell", key: "home" },
    { label: "Rent", key: "home" },
    { label: "Property Management", key: "home" },
    { label: "Why Bettersale", key: "home" },
  ];
  return (
    <nav style={{ background: "white", borderBottom: "1px solid #e8e4df", position: "sticky", top: 0, zIndex: 100 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <div onClick={() => setPage("home")} style={{ fontSize: "1.4rem", fontWeight: 700, letterSpacing: "-0.04em", cursor: "pointer" }}>
          better<span style={{ color: BRAND.color }}>sale</span>
        </div>
        <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {links.map((l, i) => (
            <span
              key={i}
              className="nav-link"
              onClick={() => setPage(l.key)}
              style={{
                fontWeight: page === "buy" && l.key === "buy" ? 700 : 400,
                color: page === "buy" && l.key === "buy" ? BRAND.color : undefined,
                borderBottom: page === "buy" && l.key === "buy" ? `2px solid ${BRAND.color}` : "2px solid transparent",
                paddingBottom: 2,
              }}
            >{l.label}</span>
          ))}
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <span style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: "0.85rem", color: "#444", cursor: "pointer" }}>Log in</span>
          <button className="btn-primary" style={{ padding: "10px 20px", fontSize: "0.85rem" }}>Free Appraisal</button>
        </div>
      </div>
    </nav>
  );
}

function Footer({ setPage }) {
  return (
    <footer style={{ background: "#1a1a1a", color: "white", padding: "60px 40px 40px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 40, marginBottom: 60 }}>
          <div>
            <div onClick={() => setPage("home")} style={{ fontSize: "1.4rem", fontWeight: 700, letterSpacing: "-0.04em", marginBottom: 20, cursor: "pointer" }}>
              better<span style={{ color: "#60a5fa" }}>sale</span>
            </div>
            <p style={{ fontFamily: "'Helvetica Neue', sans-serif", color: "#888", fontSize: "0.85rem", lineHeight: 1.6 }}>Making property buying and selling smarter, more transparent, and more rewarding for all Australians.</p>
          </div>
          {[
            { title: "Bettersale", links: ["About Us", "Our Agents", "Reviews", "Contact Us", "FAQ"] },
            { title: "Services", links: ["Buy", "Sell", "Rent", "Property Management", "Investment Advisory"] },
            { title: "Contact us", links: ["Sales: 1800 000 000", "Rentals: 1800 000 001", "hello@bettersale.com.au"] },
          ].map((col) => (
            <div key={col.title}>
              <div style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: "0.78rem", fontWeight: 700, color: "#999", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>{col.title}</div>
              {col.links.map((link) => <div key={link} style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: "0.85rem", color: "#ccc", marginBottom: 10, cursor: "pointer" }}>{link}</div>)}
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid #333", paddingTop: 28, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <p style={{ fontFamily: "'Helvetica Neue', sans-serif", color: "#666", fontSize: "0.78rem" }}>© Bettersale Pty Ltd, 2025. Licensed Real Estate Agent.</p>
          <div style={{ display: "flex", gap: 24 }}>
            {["Privacy Policy", "Terms of Use", "Complaints"].map((l) => (
              <span key={l} style={{ fontFamily: "'Helvetica Neue', sans-serif", color: "#555", fontSize: "0.75rem", cursor: "pointer" }}>{l}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── HOME PAGE ────────────────────────────────────────────────────────────────

const HOME_STEPS = [
  { num: "1", title: "Tell us about your property.", desc: "It all starts with a simple conversation — no pressure, no obligation. Just an honest chat with our team to understand your goals and see how Bettersale can get you the best result.", icon: "💬" },
  { num: "2", title: "Get your free property appraisal.", desc: "We'll provide a detailed, data-driven appraisal of your property's market value — helping you set the right price to attract serious buyers and maximise your return.", icon: "📊" },
  { num: "3", title: "We create your marketing campaign.", desc: "Your dedicated Bettersale agent will craft a tailored marketing strategy — from professional photography and floor plans to premium listings and social media reach.", icon: "📸" },
  { num: "4", title: "We manage every inspection and offer.", desc: "We handle all buyer enquiries, open homes, and private inspections on your behalf — keeping you informed every step of the way.", icon: "🏠" },
  { num: "5", title: "Sell with confidence, settle with ease.", desc: "Once we secure the best offer, we guide you through the contract and settlement process — making sure the finish line is as smooth as the journey.", icon: "🎉" },
];

function HomePage({ setPage }) {
  const [activeStep, setActiveStep] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const iv = setInterval(() => setActiveStep((s) => (s + 1) % HOME_STEPS.length), 4000);
    return () => clearInterval(iv);
  }, []);

  const faqs = [
    { q: "How do I know Bettersale will get me the best price?", a: "Bettersale agents are among the top performers in their local markets, with a track record of achieving sale prices above the suburb median. We combine deep local knowledge with data-driven pricing and a wide buyer network." },
    { q: "What does it cost to sell with Bettersale?", a: "Our commission structure is transparent and competitive, with no hidden fees. We'll walk you through all costs upfront during your free appraisal — so there are no surprises." },
    { q: "How long does it take to sell a property?", a: "Bettersale's targeted marketing consistently delivers faster results than the industry average. Your agent will give you a realistic timeline based on current market conditions in your area." },
    { q: "Can Bettersale help me buy and sell at the same time?", a: "Absolutely. We specialise in coordinating simultaneous buy-sell transactions, making sure the timing works in your favour." },
    { q: "Do you offer property management services?", a: "Yes. Our property management team handles everything from finding tenants to coordinating maintenance, ensuring your investment is compliant and cared for." },
  ];

  return (
    <>
      {/* Hero */}
      <section style={{ background: "#faf9f7", padding: "80px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", gap: 80 }} className="hero-grid">
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: "0.82rem", color: BRAND.color, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 20, fontWeight: 600 }}>Australia's Most Trusted Real Estate Agency</div>
            <h1 style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 24 }}>
              Selling, made<br /><em style={{ color: BRAND.color }}>better.</em>
            </h1>
            <p style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: "1.05rem", color: "#555", lineHeight: 1.7, marginBottom: 36, maxWidth: 480 }}>
              Bettersale was built on a simple idea — that every Australian deserves a smarter, more transparent way to buy and sell property. No hidden fees, no guesswork, just better results.
            </p>
            <div style={{ display: "flex", gap: 16, marginBottom: 40, flexWrap: "wrap" }}>
              <button className="btn-primary">{BRAND.phone}</button>
              <button className="btn-outline" onClick={() => setPage("buy")}>Browse Properties</button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {["4,200+ 5-star reviews.", "Over 10,000 properties sold.", "100% Australian owned."].map((s) => (
                <div key={s} className="hero-stat">{s}</div>
              ))}
            </div>
          </div>
          <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <div style={{ width: "100%", maxWidth: 500, aspectRatio: "4/3", background: `linear-gradient(135deg, ${BRAND.colorLight}, ${BRAND.colorMid})`, borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ textAlign: "center", padding: 40 }}>
                <div style={{ fontSize: "3rem", marginBottom: 12 }}>🏡</div>
                <div style={{ fontFamily: "'Helvetica Neue', sans-serif", color: BRAND.color, fontSize: "0.9rem", fontWeight: 500 }}>Award winning results</div>
                <div style={{ fontFamily: "'Helvetica Neue', sans-serif", color: "#555", fontSize: "0.8rem", marginTop: 4 }}>because your property deserves nothing less</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards strip */}
      <section style={{ background: "#1a1a1a", padding: "28px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: "'Helvetica Neue', sans-serif", color: "#999", fontSize: "0.78rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>Australia's Most Awarded Real Estate Agency</p>
          <div style={{ display: "flex", justifyContent: "center", gap: 20, flexWrap: "wrap" }}>
            {["RateMyAgent 2026", "Finder Awards 2025", "Australian Achiever 2025", "Most Innovative Agency", "Financial Review Fast Starters", "Deloitte Tech 50"].map((a) => (
              <div key={a} style={{ background: "#2a2a2a", padding: "8px 16px", borderRadius: 2, fontFamily: "'Helvetica Neue', sans-serif", fontSize: "0.72rem", color: "#aaa", border: "1px solid #333" }}>{a}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ background: "white" }}>
        <div className="section">
          <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>A smarter process, because selling shouldn't be stressful.</h2>
          <p style={{ fontFamily: "'Helvetica Neue', sans-serif", color: "#666", marginBottom: 56 }}>Five simple steps to get you the best price for your property.</p>
          <div style={{ display: "flex", gap: 60 }} className="step-layout">
            <div style={{ minWidth: 240, borderLeft: "1px solid #e8e4df" }}>
              {HOME_STEPS.map((s, i) => (
                <div key={i} className={`step-tab ${activeStep === i ? "active" : ""}`} onClick={() => setActiveStep(i)}>
                  <span style={{ color: BRAND.color, fontWeight: 700, marginRight: 8 }}>{s.num}</span>{s.title}
                </div>
              ))}
            </div>
            <div style={{ flex: 1, display: "flex", gap: 40 }}>
              <div key={activeStep} className="fade-in" style={{ flex: 1 }}>
                <div style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: "0.78rem", color: BRAND.color, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, marginBottom: 16 }}>Step {HOME_STEPS[activeStep].num} of {HOME_STEPS.length}</div>
                <h3 style={{ fontSize: "1.8rem", fontWeight: 400, letterSpacing: "-0.02em", marginBottom: 16 }}>{HOME_STEPS[activeStep].title}</h3>
                <p style={{ fontFamily: "'Helvetica Neue', sans-serif", color: "#555", lineHeight: 1.75 }}>{HOME_STEPS[activeStep].desc}</p>
                <div style={{ marginTop: 32, display: "flex", gap: 8 }}>
                  {HOME_STEPS.map((_, i) => (
                    <div key={i} onClick={() => setActiveStep(i)} style={{ width: 28, height: 3, background: activeStep === i ? BRAND.color : "#ddd", cursor: "pointer", transition: "background 0.3s", borderRadius: 2 }} />
                  ))}
                </div>
              </div>
              <div style={{ width: 280, height: 220, background: `linear-gradient(135deg, ${BRAND.colorLight}, ${BRAND.colorMid})`, borderRadius: 4, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "4rem" }}>
                {HOME_STEPS[activeStep].icon}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ background: "#faf9f7" }}>
        <div className="section">
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 400, marginBottom: 40, letterSpacing: "-0.02em" }}>How can we help?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="services-grid">
            {[
              { icon: "🏡", title: "Sell your property.", desc: "Expert agents use proven strategies and local knowledge to achieve outstanding results for sellers across Australia.", cta: "Learn more" },
              { icon: "🔍", title: "Find your next home.", desc: "Browse curated listings and let our buyer's agents help you find the perfect property at the right price, in the right suburb.", cta: "Search properties", action: () => setPage("buy") },
              { icon: "📋", title: "Property management.", desc: "Our experienced managers take the stress out of being a landlord — tenant screening, maintenance and beyond.", cta: "Learn more" },
              { icon: "📊", title: "Free market appraisal.", desc: "Thinking of selling? Get a free, no-obligation appraisal from a local expert and discover what your property is worth.", cta: "Book appraisal" },
              { icon: "🏘️", title: "Investment advisory.", desc: "Whether you're a first-time investor or growing a portfolio, we provide the insights to make smart property decisions.", cta: "Learn more" },
            ].map((s) => (
              <div key={s.title} className="service-card" onClick={s.action}>
                <div style={{ fontSize: "1.6rem", marginBottom: 16 }}>{s.icon}</div>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 500, marginBottom: 10, fontFamily: "'Helvetica Neue', sans-serif" }}>{s.title}</h3>
                <p style={{ fontFamily: "'Helvetica Neue', sans-serif", color: "#666", fontSize: "0.88rem", lineHeight: 1.6, marginBottom: 16 }}>{s.desc}</p>
                <span style={{ fontFamily: "'Helvetica Neue', sans-serif", color: BRAND.color, fontSize: "0.85rem", fontWeight: 600 }}>{s.cta} →</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compare */}
      <section style={{ background: "white" }}>
        <div className="section">
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 400, marginBottom: 40, letterSpacing: "-0.02em", maxWidth: 680 }}>We've put sellers and buyers first — not commissions.</h2>
          <div style={{ display: "flex", gap: 2 }} className="compare-row">
            <div className="compare-col ours">
              <div style={{ fontFamily: "'Helvetica Neue', sans-serif", fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", color: BRAND.color, marginBottom: 24 }}>✓ With Bettersale</div>
              {["A dedicated agent who knows your local market inside out.", "Transparent, fixed commission — no nasty surprises at settlement.", "Premium marketing included: professional photos, floor plans & more.", "Flexible open home scheduling that works around your life.", "Ongoing support from appraisal to settlement and beyond.", "We'll never push you to accept an offer that isn't right for you."].map((item) => (
                <div key={item} className="compare-item"><span style={{ color: BRAND.color, flexShrink: 0 }}>✓</span><span style={{ color: "#444" }}>{item}</span></div>
              ))}
            </div>
            <div className="compare-col others">
              <div style={{ fontFamily: "'Helvetica Neue', sans-serif", fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#c0504d", marginBottom: 24 }}>✗ Traditional Agencies</div>
              {["Passed between agents with no consistent point of contact.", "Hidden fees and inflated commission rates baked into the process.", "Extra charges for marketing, photography and listing upgrades.", "Open homes scheduled for the agency's convenience, not yours.", "Support that disappears the moment the contract is signed.", "Pressure to accept low offers just to hit monthly sales targets."].map((item) => (
                <div key={item} className="compare-item"><span style={{ color: "#c0504d", flexShrink: 0 }}>✗</span><span style={{ color: "#666" }}>{item}</span></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section style={{ background: BRAND.colorDark, color: "white" }}>
        <div className="section">
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 400, marginBottom: 48, letterSpacing: "-0.02em", color: "white" }}>With Bettersale, you can rest assured knowing that...</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 40 }} className="trust-grid">
            {[
              { icon: "🇦🇺", title: "100% Australian owned.", desc: "Bettersale is proudly Australian — built by locals, for locals. We understand the nuances of Australian property markets and go the extra mile for every client." },
              { icon: "🤝", title: "A dedicated agent, start to finish.", desc: "You'll have one point of contact throughout your entire sale — no handoffs, no confusion. Just consistent, personalised service from day one." },
              { icon: "💰", title: "Transparent fees, no surprises.", desc: "We believe in honest pricing. Every fee is explained upfront, and we never charge hidden costs or lock you into unfair contracts." },
              { icon: "⭐", title: "Thousands of happy clients.", desc: "With over 10,000 successful transactions and a 4.9-star average rating, Bettersale is one of Australia's most trusted real estate agencies." },
            ].map((t) => (
              <div key={t.title}>
                <div style={{ fontSize: "2rem", marginBottom: 12 }}>{t.icon}</div>
                <h3 style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: "1rem", fontWeight: 600, marginBottom: 8, color: "white" }}>{t.title}</h3>
                <p style={{ fontFamily: "'Helvetica Neue', sans-serif", color: "rgba(255,255,255,0.7)", fontSize: "0.9rem", lineHeight: 1.65 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section style={{ background: "white" }}>
        <div className="section" style={{ maxWidth: 800 }}>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 400, marginBottom: 48, letterSpacing: "-0.02em" }}>Frequently asked questions.</h2>
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item">
              <div className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <span>{faq.q}</span>
                <span style={{ color: BRAND.color, fontSize: "1.3rem", display: "inline-block", transform: openFaq === i ? "rotate(45deg)" : "none", transition: "transform 0.2s" }}>+</span>
              </div>
              {openFaq === i && <div className="faq-a fade-in">{faq.a}</div>}
            </div>
          ))}
          <div style={{ marginTop: 32 }}><span style={{ fontFamily: "'Helvetica Neue', sans-serif", color: BRAND.color, fontSize: "0.9rem", fontWeight: 600, cursor: "pointer" }}>View all FAQs →</span></div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: BRAND.colorLight, padding: "80px 40px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 400, letterSpacing: "-0.02em", marginBottom: 16 }}>Ready to get a better result?</h2>
        <p style={{ fontFamily: "'Helvetica Neue', sans-serif", color: "#555", marginBottom: 36 }}>Our expert agents are available 7 days a week, ready to help you buy, sell or invest with confidence.</p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <button className="btn-primary" style={{ fontSize: "1rem", padding: "16px 32px" }}>Book a Free Appraisal</button>
          <button className="btn-outline" style={{ fontSize: "1rem", padding: "16px 32px" }} onClick={() => setPage("buy")}>Browse Properties</button>
        </div>
      </section>
    </>
  );
}

// ─── BUY PAGE ────────────────────────────────────────────────────────────────

const LISTINGS = [
  { id: 1, address: "12 Harbour View Terrace", suburb: "Manly, NSW 2095", price: "$2,450,000", beds: 4, baths: 2, cars: 2, sqm: 420, type: "House", status: "For Sale", statusColor: "#1d4ed8", img: "🏠", days: 3 },
  { id: 2, address: "8/24 Beach Road", suburb: "Bondi Beach, NSW 2026", price: "$1,180,000", beds: 2, baths: 1, cars: 1, sqm: 98, type: "Apartment", status: "For Sale", statusColor: "#1d4ed8", img: "🏢", days: 7 },
  { id: 3, address: "55 Gum Tree Drive", suburb: "Eltham, VIC 3095", price: "$1,320,000", beds: 4, baths: 2, cars: 2, sqm: 680, type: "House", status: "For Sale", statusColor: "#1d4ed8", img: "🏡", days: 1 },
  { id: 4, address: "3/10 Queen Street", suburb: "Brisbane City, QLD 4000", price: "$795,000", beds: 2, baths: 2, cars: 1, sqm: 110, type: "Apartment", status: "Under Offer", statusColor: "#ea580c", img: "🏢", days: 14 },
  { id: 5, address: "42 Wattle Street", suburb: "Subiaco, WA 6008", price: "$1,650,000", beds: 3, baths: 2, cars: 2, sqm: 510, type: "House", status: "For Sale", statusColor: "#1d4ed8", img: "🏠", days: 5 },
  { id: 6, address: "7 Olive Lane", suburb: "Norwood, SA 5067", price: "$985,000", beds: 3, baths: 1, cars: 1, sqm: 380, type: "House", status: "Sold", statusColor: "#16a34a", img: "🏡", days: 21 },
];

function PropCard({ l }) {
  return (
    <div className="prop-card">
      <div style={{ height: 190, background: `linear-gradient(135deg, ${BRAND.colorLight}, ${BRAND.colorMid})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "4rem", position: "relative" }}>
        {l.img}
        <span style={{ position: "absolute", top: 12, left: 12, background: l.statusColor, color: "white", padding: "4px 10px", borderRadius: 2, fontFamily: "'Helvetica Neue', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" }}>{l.status}</span>
        <span style={{ position: "absolute", top: 12, right: 12, background: "rgba(0,0,0,0.5)", color: "white", padding: "3px 8px", borderRadius: 2, fontFamily: "'Helvetica Neue', sans-serif", fontSize: "0.7rem" }}>
          {l.days === 1 ? "New today" : `${l.days}d ago`}
        </span>
      </div>
      <div style={{ padding: 20 }}>
        <div style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: "1.15rem", fontWeight: 700, color: BRAND.color, marginBottom: 4 }}>{l.price}</div>
        <div style={{ fontFamily: "'Helvetica Neue', sans-serif", fontWeight: 600, fontSize: "0.9rem", marginBottom: 2 }}>{l.address}</div>
        <div style={{ fontFamily: "'Helvetica Neue', sans-serif", color: "#888", fontSize: "0.8rem", marginBottom: 14 }}>{l.suburb}</div>
        <div style={{ display: "flex", gap: 14, fontFamily: "'Helvetica Neue', sans-serif", fontSize: "0.82rem", color: "#555", borderTop: "1px solid #f0ede8", paddingTop: 14 }}>
          <span>🛏 {l.beds}</span>
          <span>🚿 {l.baths}</span>
          <span>🚗 {l.cars}</span>
          <span>📐 {l.sqm}m²</span>
          <span style={{ marginLeft: "auto", color: "#999", fontSize: "0.76rem" }}>{l.type}</span>
        </div>
      </div>
    </div>
  );
}

function BuyPage() {
  const [typeFilter, setTypeFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [beds, setBeds] = useState("Any");
  const [openFaq, setOpenFaq] = useState(null);

  const filtered = LISTINGS.filter((l) => {
    const matchType = typeFilter === "All" || l.type === typeFilter;
    const matchStatus = statusFilter === "All" || l.status === statusFilter;
    const matchSearch = !search || l.address.toLowerCase().includes(search.toLowerCase()) || l.suburb.toLowerCase().includes(search.toLowerCase());
    const matchBeds = beds === "Any" || l.beds >= parseInt(beds);
    return matchType && matchStatus && matchSearch && matchBeds;
  });

  const buyFaqs = [
    { q: "How does Bettersale help buyers?", a: "We take the stress out of searching by giving you access to exclusive listings, matching you with properties that suit your brief, and connecting you with a dedicated buyer's agent who negotiates on your behalf." },
    { q: "Do I need a buyer's agent?", a: "While it's not compulsory, a buyer's agent can save you significant time and money. We have access to off-market properties and the negotiation experience to help you avoid overpaying in competitive markets." },
    { q: "How do I know if a property is fairly priced?", a: "Every Bettersale listing comes with a free suburb report, recent comparable sales data, and an honest assessment from your agent. We'll never push you toward a property that isn't the right fit or the right price." },
    { q: "What are the hidden costs of buying?", a: "Buying involves more than just the purchase price. Budget for stamp duty, conveyancing fees, building and pest inspections, and moving costs. Your agent will give you a clear breakdown upfront." },
    { q: "Can I access properties before they're publicly listed?", a: "Yes. Bettersale has an exclusive network of off-market and pre-market properties. Register your brief with us and we'll contact you before properties hit the public portals." },
  ];

  return (
    <>
      {/* Hero / Search */}
      <section style={{ background: `linear-gradient(135deg, ${BRAND.colorDark} 0%, ${BRAND.color} 100%)`, padding: "70px 40px 60px", color: "white" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: "0.82rem", color: "rgba(255,255,255,0.7)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16, fontWeight: 600 }}>Find Your Next Home</div>
          <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 12 }}>
            Buy with<br /><em>confidence.</em>
          </h1>
          <p style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.7, maxWidth: 500, marginBottom: 40 }}>
            Access exclusive listings, off-market properties, and expert buyer's agents who put your interests first — not the seller's commission.
          </p>
          {/* Search box */}
          <div style={{ background: "white", borderRadius: 4, padding: "20px 24px", display: "flex", gap: 14, alignItems: "flex-end", flexWrap: "wrap", maxWidth: 900 }}>
            <div style={{ flex: 2, minWidth: 200 }}>
              <label style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: "0.7rem", fontWeight: 700, color: "#888", letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: 6 }}>Suburb or address</label>
              <input className="input-field" placeholder="e.g. Bondi Beach, Manly..." value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
            <div style={{ flex: 1, minWidth: 120 }}>
              <label style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: "0.7rem", fontWeight: 700, color: "#888", letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: 6 }}>Property type</label>
              <select className="input-field" value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
                <option value="All">All types</option>
                <option value="House">House</option>
                <option value="Apartment">Apartment</option>
              </select>
            </div>
            <div style={{ flex: 1, minWidth: 100 }}>
              <label style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: "0.7rem", fontWeight: 700, color: "#888", letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: 6 }}>Bedrooms</label>
              <select className="input-field" value={beds} onChange={(e) => setBeds(e.target.value)}>
                {["Any", "1", "2", "3", "4"].map((b) => <option key={b} value={b}>{b === "Any" ? "Any" : `${b}+`}</option>)}
              </select>
            </div>
            <button className="btn-primary" style={{ padding: "13px 28px", flexShrink: 0 }}>Search</button>
          </div>
        </div>
      </section>

      {/* Trust chips */}
      <section style={{ background: "#faf9f7", padding: "24px 40px", borderBottom: "1px solid #e8e4df" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: 14, flexWrap: "wrap" }}>
          {[["🔒", "Off-market access"], ["🤝", "Dedicated buyer's agent"], ["📊", "Free suburb reports"], ["💰", "No buyer's fee"], ["⭐", "4.9-star rated"]].map(([icon, text]) => (
            <div key={text} className="trust-chip"><span>{icon}</span><span>{text}</span></div>
          ))}
        </div>
      </section>

      {/* Listings */}
      <section style={{ background: "white" }}>
        <div className="section">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 32, flexWrap: "wrap", gap: 16 }}>
            <div>
              <h2 style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", fontWeight: 400, letterSpacing: "-0.02em", marginBottom: 6 }}>Available Properties</h2>
              <p style={{ fontFamily: "'Helvetica Neue', sans-serif", color: "#888", fontSize: "0.85rem" }}>{filtered.length} {filtered.length === 1 ? "property" : "properties"} {search ? `matching "${search}"` : "across Australia"}</p>
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
              {["All", "For Sale", "Under Offer", "Sold"].map((f) => (
                <button key={f} className={`filter-btn ${statusFilter === f ? "active" : ""}`} onClick={() => setStatusFilter(f)}>{f}</button>
              ))}
            </div>
          </div>

          {filtered.length > 0
            ? <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="props-grid">{filtered.map((l) => <PropCard key={l.id} l={l} />)}</div>
            : (
              <div style={{ textAlign: "center", padding: "80px 20px", color: "#888" }}>
                <div style={{ fontSize: "3rem", marginBottom: 16 }}>🔍</div>
                <p style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: "1rem", marginBottom: 8 }}>No properties match your search.</p>
                <p style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: "0.85rem" }}>Try adjusting your filters or <span style={{ color: BRAND.color, cursor: "pointer", fontWeight: 600 }}>register your brief</span> and we'll alert you when something matches.</p>
              </div>
            )}

          <div style={{ marginTop: 48, paddingTop: 40, borderTop: "1px solid #e8e4df", textAlign: "center" }}>
            <p style={{ fontFamily: "'Helvetica Neue', sans-serif", color: "#666", marginBottom: 20 }}>Can't find what you're looking for? Register your brief and we'll match you with properties — including off-market opportunities.</p>
            <button className="btn-primary">Register My Brief</button>
          </div>
        </div>
      </section>

      {/* How buying works */}
      <section style={{ background: "#faf9f7" }}>
        <div className="section">
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>How buying with Bettersale works.</h2>
          <p style={{ fontFamily: "'Helvetica Neue', sans-serif", color: "#666", marginBottom: 48 }}>We take the complexity out of buying so you can focus on finding the right home.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }} className="how-grid">
            {[
              { num: "01", icon: "📋", title: "Tell us your brief.", desc: "Share your must-haves, budget, and preferred suburbs with your dedicated buyer's agent." },
              { num: "02", icon: "🔍", title: "We search for you.", desc: "We tap into public listings, off-market properties, and our exclusive agent network to find your match." },
              { num: "03", icon: "🏠", title: "We inspect and shortlist.", desc: "Your agent attends inspections on your behalf and presents only the properties worth your time." },
              { num: "04", icon: "🤝", title: "We negotiate and settle.", desc: "We handle all negotiations, paperwork and liaise with solicitors to get you to settlement stress-free." },
            ].map((s) => (
              <div key={s.num}>
                <div style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: "0.72rem", fontWeight: 700, color: BRAND.color, letterSpacing: "0.12em", marginBottom: 12 }}>{s.num}</div>
                <div style={{ fontSize: "1.8rem", marginBottom: 12 }}>{s.icon}</div>
                <h3 style={{ fontFamily: "'Helvetica Neue', sans-serif", fontWeight: 600, fontSize: "0.95rem", marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontFamily: "'Helvetica Neue', sans-serif", color: "#666", fontSize: "0.85rem", lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Buyer trust */}
      <section style={{ background: BRAND.colorDark, color: "white" }}>
        <div className="section">
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 400, marginBottom: 48, letterSpacing: "-0.02em", color: "white" }}>Why buyers choose Bettersale.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 40 }} className="trust-grid">
            {[
              { icon: "🏆", title: "Access to off-market listings.", desc: "Many of our best properties are never publicly advertised. Registered buyers get first access to exclusive pre-market opportunities." },
              { icon: "💼", title: "Expert negotiation on your side.", desc: "Our buyer's agents work exclusively for you — not the seller. We know how to secure the right property at the right price." },
              { icon: "📊", title: "Data-driven suburb insights.", desc: "Every recommendation comes with recent sales data, growth trends, and honest advice so you can make a confident decision." },
              { icon: "🆓", title: "No cost to buyers.", desc: "Our buyer's agent service is completely free for residential buyers. You get expert representation at no extra cost." },
            ].map((t) => (
              <div key={t.title}>
                <div style={{ fontSize: "2rem", marginBottom: 12 }}>{t.icon}</div>
                <h3 style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: "1rem", fontWeight: 600, marginBottom: 8, color: "white" }}>{t.title}</h3>
                <p style={{ fontFamily: "'Helvetica Neue', sans-serif", color: "rgba(255,255,255,0.7)", fontSize: "0.9rem", lineHeight: 1.65 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section style={{ background: "white" }}>
        <div className="section" style={{ maxWidth: 800 }}>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 400, marginBottom: 48, letterSpacing: "-0.02em" }}>Buyer FAQs.</h2>
          {buyFaqs.map((faq, i) => (
            <div key={i} className="faq-item">
              <div className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <span>{faq.q}</span>
                <span style={{ color: BRAND.color, fontSize: "1.3rem", display: "inline-block", transform: openFaq === i ? "rotate(45deg)" : "none", transition: "transform 0.2s" }}>+</span>
              </div>
              {openFaq === i && <div className="faq-a fade-in">{faq.a}</div>}
            </div>
          ))}
          <div style={{ marginTop: 32 }}><span style={{ fontFamily: "'Helvetica Neue', sans-serif", color: BRAND.color, fontSize: "0.9rem", fontWeight: 600, cursor: "pointer" }}>View all buyer FAQs →</span></div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: BRAND.colorLight, padding: "80px 40px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 400, letterSpacing: "-0.02em", marginBottom: 16 }}>Ready to find your next home?</h2>
        <p style={{ fontFamily: "'Helvetica Neue', sans-serif", color: "#555", marginBottom: 36 }}>Speak with a Bettersale buyer's agent today — obligation free.</p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <button className="btn-primary" style={{ fontSize: "1rem", padding: "16px 32px" }}>Register My Brief</button>
          <button className="btn-outline" style={{ fontSize: "1rem", padding: "16px 32px" }}>{BRAND.phone}</button>
        </div>
      </section>
    </>
  );
}

// ─── ROOT ─────────────────────────────────────────────────────────────────────

export default function App() {
  const [page, setPage] = useState("home");

  const handleSetPage = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div style={{ fontFamily: "'Georgia', 'Times New Roman', serif", color: "#1a1a1a", background: "#faf9f7" }}>
      <style>{globalStyles}</style>
      <TopBanner />
      <Navbar page={page} setPage={handleSetPage} />
      <div className="fade-in" key={page}>
        {page === "home" && <HomePage setPage={handleSetPage} />}
        {page === "buy" && <BuyPage />}
      </div>
      <Footer setPage={handleSetPage} />
    </div>
  );
}
