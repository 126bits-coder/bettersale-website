import { useState, useEffect } from "react";

const BRAND = {
  phone: "1800 000 000",
  color: "#1d4ed8",
  colorDark: "#1e3a8a",
  colorLight: "#eff6ff",
  colorMid: "#dbeafe",
};

function useWindowWidth() {
  const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  useEffect(() => {
    const handle = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, []);
  return width;
}

const globalStyles = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  a { text-decoration: none; color: inherit; }
  .btn-primary { background: #1d4ed8; color: white; padding: 14px 28px; border: none; cursor: pointer; font-size: 0.95rem; font-family: 'Helvetica Neue', sans-serif; letter-spacing: 0.03em; transition: background 0.2s; border-radius: 2px; white-space: nowrap; }
  .btn-primary:hover { background: #1e3a8a; }
  .btn-primary:active { transform: scale(0.98); }
  .btn-outline { background: transparent; color: #1d4ed8; padding: 13px 27px; border: 1.5px solid #1d4ed8; cursor: pointer; font-size: 0.95rem; font-family: 'Helvetica Neue', sans-serif; letter-spacing: 0.03em; transition: all 0.2s; border-radius: 2px; white-space: nowrap; }
  .btn-outline:hover { background: #1d4ed8; color: white; }
  .section { padding: 80px 40px; max-width: 1200px; margin: 0 auto; }
  .fade-in { animation: fadeIn 0.5s ease forwards; }
  @keyframes fadeIn { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
  .nav-link { font-size: 0.85rem; font-family: 'Helvetica Neue', sans-serif; color: #444; transition: color 0.2s; cursor: pointer; }
  .nav-link:hover { color: #1d4ed8; }
  .mobile-nav-link { display: block; padding: 16px 24px; font-family: 'Helvetica Neue', sans-serif; font-size: 1rem; color: #1a1a1a; border-bottom: 1px solid #f0ede8; cursor: pointer; transition: background 0.15s; }
  .mobile-nav-link:hover { background: #f8f7f5; color: #1d4ed8; }
  .hamburger { background: none; border: none; cursor: pointer; padding: 8px; display: flex; flex-direction: column; gap: 5px; }
  .hamburger span { display: block; width: 24px; height: 2px; background: #1a1a1a; transition: all 0.3s; border-radius: 2px; }
  .hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
  .hamburger.open span:nth-child(2) { opacity: 0; }
  .hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
  .step-tab { padding: 14px 20px; cursor: pointer; font-family: 'Helvetica Neue', sans-serif; font-size: 0.85rem; border-left: 3px solid transparent; transition: all 0.2s; color: #666; }
  .step-tab.active { border-left-color: #1d4ed8; color: #1a1a1a; font-weight: 600; }
  .step-tab:hover { color: #1d4ed8; }
  .service-card { background: white; padding: 28px; border: 1px solid #e8e4df; transition: box-shadow 0.2s, transform 0.2s; cursor: pointer; border-radius: 4px; }
  .service-card:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.08); transform: translateY(-2px); }
  .prop-card { background: white; border: 1px solid #e8e4df; border-radius: 6px; overflow: hidden; transition: box-shadow 0.2s, transform 0.2s; cursor: pointer; }
  .prop-card:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.1); transform: translateY(-3px); }
  .faq-item { border-bottom: 1px solid #e8e4df; }
  .faq-q { padding: 20px 0; cursor: pointer; display: flex; justify-content: space-between; align-items: center; font-size: 1rem; font-family: 'Helvetica Neue', sans-serif; font-weight: 500; gap: 16px; }
  .faq-q:hover { color: #1d4ed8; }
  .faq-a { padding-bottom: 20px; color: #555; font-size: 0.95rem; line-height: 1.7; font-family: 'Helvetica Neue', sans-serif; }
  .compare-col { flex: 1; padding: 28px; min-width: 0; }
  .compare-col.ours { background: #eff6ff; border-left: 3px solid #1d4ed8; }
  .compare-col.others { background: #fdf6f6; border-left: 3px solid #e07070; }
  .compare-item { display: flex; gap: 10px; margin-bottom: 14px; align-items: flex-start; font-family: 'Helvetica Neue', sans-serif; font-size: 0.88rem; line-height: 1.5; }
  .hero-stat { font-family: 'Helvetica Neue', sans-serif; font-size: 0.82rem; color: #555; display: flex; align-items: center; gap: 8px; }
  .hero-stat::before { content: ''; display: block; width: 6px; height: 6px; background: #1d4ed8; border-radius: 50%; flex-shrink: 0; }
  .filter-btn { padding: 8px 16px; border-radius: 20px; border: 1.5px solid #ddd; background: white; font-family: 'Helvetica Neue', sans-serif; font-size: 0.82rem; cursor: pointer; transition: all 0.2s; color: #444; white-space: nowrap; }
  .filter-btn.active { border-color: #1d4ed8; background: #1d4ed8; color: white; }
  .filter-btn:hover { border-color: #1d4ed8; color: #1d4ed8; }
  .filter-btn.active:hover { color: white; }
  .input-field { width: 100%; padding: 12px 16px; border: 1.5px solid #ddd; border-radius: 2px; font-family: 'Helvetica Neue', sans-serif; font-size: 0.9rem; color: #333; outline: none; transition: border-color 0.2s; background: white; }
  .input-field:focus { border-color: #1d4ed8; }
  .trust-chip { display: flex; align-items: center; gap: 8px; padding: 10px 16px; background: white; border: 1px solid #e8e4df; border-radius: 20px; font-family: 'Helvetica Neue', sans-serif; font-size: 0.82rem; color: #444; white-space: nowrap; }
  .form-group { margin-bottom: 20px; }
  .form-label { display: block; font-family: 'Helvetica Neue', sans-serif; font-size: 0.8rem; font-weight: 600; color: #555; letter-spacing: 0.06em; text-transform: uppercase; margin-bottom: 7px; }
  .form-input { width: 100%; padding: 13px 16px; border: 1.5px solid #ddd; border-radius: 4px; font-family: 'Helvetica Neue', sans-serif; font-size: 0.92rem; color: #333; outline: none; transition: border-color 0.2s; background: white; }
  .form-input:focus { border-color: #1d4ed8; box-shadow: 0 0 0 3px rgba(29,78,216,0.08); }
  .form-select { width: 100%; padding: 13px 16px; border: 1.5px solid #ddd; border-radius: 4px; font-family: 'Helvetica Neue', sans-serif; font-size: 0.92rem; color: #333; outline: none; background: white; cursor: pointer; }
  .form-select:focus { border-color: #1d4ed8; }
  .form-textarea { width: 100%; padding: 13px 16px; border: 1.5px solid #ddd; border-radius: 4px; font-family: 'Helvetica Neue', sans-serif; font-size: 0.92rem; color: #333; outline: none; resize: vertical; min-height: 120px; transition: border-color 0.2s; background: white; }
  .form-textarea:focus { border-color: #1d4ed8; box-shadow: 0 0 0 3px rgba(29,78,216,0.08); }
  .rental-card { background: white; border: 1px solid #e8e4df; border-radius: 6px; overflow: hidden; transition: box-shadow 0.2s, transform 0.2s; cursor: pointer; }
  .rental-card:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.1); transform: translateY(-3px); }
  .pm-card { background: white; padding: 28px; border: 1px solid #e8e4df; border-radius: 8px; transition: box-shadow 0.2s; }
  .pm-card:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.08); }
  .why-card { background: white; padding: 32px; border-radius: 8px; border: 1px solid #e8e4df; text-align: center; transition: box-shadow 0.2s, transform 0.2s; }
  .why-card:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.08); transform: translateY(-3px); }
  .stat-box { text-align: center; padding: 32px 20px; }
  @media (max-width: 768px) {
    .section { padding: 52px 20px; }
    .btn-primary, .btn-outline { padding: 13px 22px; font-size: 0.9rem; }
    .faq-q { font-size: 0.95rem; }
  }
  @media (max-width: 480px) { .section { padding: 44px 16px; } }
`;

// ─── SHARED ───────────────────────────────────────────────────────────────────

function TopBanner({ setPage }) {
  return (
    <div style={{ background: BRAND.color, color: "white", textAlign: "center", padding: "9px 20px", fontSize: "0.8rem", fontFamily: "'Helvetica Neue', sans-serif" }}>
      Free property appraisals available now —{" "}
      <span onClick={() => setPage("appraisal")} style={{ fontWeight: 700, textDecoration: "underline", cursor: "pointer" }}>{BRAND.phone}</span>
    </div>
  );
}

function Navbar({ page, setPage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const width = useWindowWidth();
  const isMobile = width < 900;
  const links = [
    { label: "Buy", key: "buy" },
    { label: "Sell", key: "home" },
    { label: "Rent", key: "rent" },
    { label: "Property Management", key: "pm" },
    { label: "Why Bettersale", key: "why" },
  ];
  const handleNav = (key) => { setPage(key); setMenuOpen(false); };
  return (
    <nav style={{ background: "white", borderBottom: "1px solid #e8e4df", position: "sticky", top: 0, zIndex: 200 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}>
        <div onClick={() => handleNav("home")} style={{ fontSize: "1.35rem", fontWeight: 700, letterSpacing: "-0.04em", cursor: "pointer", flexShrink: 0 }}>
          better<span style={{ color: BRAND.color }}>sale</span>
        </div>
        {!isMobile && (
          <div style={{ display: "flex", gap: 22, alignItems: "center" }}>
            {links.map((l, i) => (
              <span key={i} className="nav-link" onClick={() => handleNav(l.key)} style={{
                fontWeight: page === l.key ? 700 : 400,
                color: page === l.key ? BRAND.color : undefined,
                borderBottom: page === l.key ? `2px solid ${BRAND.color}` : "2px solid transparent",
                paddingBottom: 2,
              }}>{l.label}</span>
            ))}
          </div>
        )}
        {!isMobile && (
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <span style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: "0.85rem", color: "#444", cursor: "pointer" }}>Log in</span>
            <button className="btn-primary" style={{ padding: "9px 18px", fontSize: "0.85rem" }} onClick={() => handleNav("appraisal")}>Free Appraisal</button>
          </div>
        )}
        {isMobile && (
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <button className="btn-primary" style={{ padding: "8px 14px", fontSize: "0.8rem" }} onClick={() => handleNav("appraisal")}>Free Appraisal</button>
            <button className={`hamburger ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}><span /><span /><span /></button>
          </div>
        )}
      </div>
      {isMobile && menuOpen && (
        <div style={{ background: "white", borderTop: "1px solid #e8e4df", position: "absolute", width: "100%", boxShadow: "0 8px 32px rgba(0,0,0,0.12)", zIndex: 200 }}>
          {links.map((l, i) => <div key={i} className="mobile-nav-link" onClick={() => handleNav(l.key)} style={{ fontWeight: page === l.key ? 700 : 400, color: page === l.key ? BRAND.color : undefined }}>{l.label}</div>)}
          <div style={{ padding: "16px 24px", borderTop: "1px solid #e8e4df" }}><span style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: "0.9rem", color: "#444" }}>Log in</span></div>
        </div>
      )}
    </nav>
  );
}

function Footer({ setPage }) {
  const width = useWindowWidth();
  const isMobile = width < 768;
  return (
    <footer style={{ background: "#1a1a1a", color: "white", padding: isMobile ? "48px 20px 32px" : "60px 40px 40px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)", gap: isMobile ? 32 : 40, marginBottom: 48 }}>
          <div style={{ gridColumn: isMobile ? "1 / -1" : undefined }}>
            <div onClick={() => setPage("home")} style={{ fontSize: "1.4rem", fontWeight: 700, letterSpacing: "-0.04em", marginBottom: 14, cursor: "pointer" }}>
              better<span style={{ color: "#60a5fa" }}>sale</span>
            </div>
            <p style={{ fontFamily: "'Helvetica Neue', sans-serif", color: "#888", fontSize: "0.85rem", lineHeight: 1.6 }}>Making property buying and selling smarter, more transparent, and more rewarding for all Sydneysiders.</p>
          </div>
          {[
            { title: "Bettersale", links: [["About Us", "why"], ["Reviews", "why"], ["Contact Us", "appraisal"], ["FAQ", "why"]] },
            { title: "Services", links: [["Buy", "buy"], ["Sell", "home"], ["Rent", "rent"], ["Property Management", "pm"], ["Free Appraisal", "appraisal"]] },
            { title: "Contact us", links: [[`Sales: ${BRAND.phone}`, null], ["Rentals: 1800 000 001", null], ["hello@bettersale.com.au", null]] },
          ].map((col) => (
            <div key={col.title}>
              <div style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: "0.72rem", fontWeight: 700, color: "#999", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>{col.title}</div>
              {col.links.map(([link, pg]) => <div key={link} onClick={() => pg && setPage(pg)} style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: "0.82rem", color: "#ccc", marginBottom: 9, cursor: pg ? "pointer" : "default" }}>{link}</div>)}
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid #333", paddingTop: 24, display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", gap: 12 }}>
          <p style={{ fontFamily: "'Helvetica Neue', sans-serif", color: "#666", fontSize: "0.75rem" }}>© Bettersale Pty Ltd, 2025. Licensed Real Estate Agent.</p>
          <div style={{ display: "flex", gap: 20 }}>
            {["Privacy Policy", "Terms of Use", "Complaints"].map((l) => <span key={l} style={{ fontFamily: "'Helvetica Neue', sans-serif", color: "#555", fontSize: "0.75rem", cursor: "pointer" }}>{l}</span>)}
          </div>
        </div>
      </div>
    </footer>
  );
}

function PageHero({ label, title, subtitle, dark }) {
  const isMobile = useWindowWidth() < 768;
  return (
    <section style={{ background: dark ? `linear-gradient(135deg, ${BRAND.colorDark}, ${BRAND.color})` : "#faf9f7", padding: isMobile ? "52px 20px" : "72px 40px", color: dark ? "white" : "#1a1a1a" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: "0.75rem", color: dark ? "rgba(255,255,255,0.7)" : BRAND.color, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14, fontWeight: 600 }}>{label}</div>
        <h1 style={{ fontSize: isMobile ? "2.4rem" : "clamp(2.6rem, 5vw, 3.8rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: title }} />
        <p style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: "1rem", color: dark ? "rgba(255,255,255,0.8)" : "#555", lineHeight: 1.75, maxWidth: 560 }}>{subtitle}</p>
      </div>
    </section>
  );
}

// ─── HOME PAGE ────────────────────────────────────────────────────────────────

const HOME_STEPS = [
  { num: "1", title: "Tell us about your property", desc: "It all starts with a simple conversation — no pressure, no obligation. Just an honest chat with our team to understand your goals.", icon: "💬" },
  { num: "2", title: "Get your free property appraisal", desc: "We'll provide a detailed, data-driven appraisal of your property's market value — helping you set the right price.", icon: "📊" },
  { num: "3", title: "We create your marketing campaign", desc: "Your dedicated agent will craft a tailored strategy — from professional photography to premium listings and social media.", icon: "📸" },
  { num: "4", title: "We manage every inspection and offer", desc: "We handle all buyer enquiries, open homes, and private inspections — keeping you informed every step of the way.", icon: "🏠" },
  { num: "5", title: "Sell with confidence, settle with ease", desc: "Once we secure the best offer, we guide you through contracts and settlement — making the finish line as smooth as possible.", icon: "🎉" },
];

function HomePage({ setPage }) {
  const [activeStep, setActiveStep] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const width = useWindowWidth();
  const isMobile = width < 768;
  const isTablet = width < 1024;

  useEffect(() => {
    const iv = setInterval(() => setActiveStep((s) => (s + 1) % HOME_STEPS.length), 4000);
    return () => clearInterval(iv);
  }, []);

  const faqs = [
    { q: "How do I know Bettersale will get me the best price?", a: "Bettersale agents are among the top performers in their local markets, with a track record of achieving sale prices above the suburb median." },
    { q: "What does it cost to sell with Bettersale?", a: "Our commission structure is transparent and competitive, with no hidden fees. We'll walk you through all costs upfront during your free appraisal." },
    { q: "How long does it take to sell a property?", a: "Bettersale's targeted marketing consistently delivers faster results than the industry average." },
    { q: "Can Bettersale help me buy and sell at the same time?", a: "Absolutely. We specialise in coordinating simultaneous buy-sell transactions, making sure the timing works in your favour." },
    { q: "Do you offer property management services?", a: "Yes. Our property management team handles everything from finding tenants to coordinating maintenance." },
  ];

  return (
    <>
      <section style={{ background: "#faf9f7", padding: isMobile ? "52px 20px" : "80px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: "center", gap: isMobile ? 40 : 80 }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: "0.78rem", color: BRAND.color, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16, fontWeight: 600 }}>A Trusted Sydney Real Estate Agency</div>
            <h1 style={{ fontSize: isMobile ? "2.6rem" : "clamp(2.8rem, 5vw, 4.2rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 20 }}>Selling, made<br /><em style={{ color: BRAND.color }}>better.</em></h1>
            <p style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: "1rem", color: "#555", lineHeight: 1.75, marginBottom: 32, maxWidth: 480 }}>Bettersale was built on a simple idea — that every Australian deserves a smarter, more transparent way to buy and sell property. No hidden fees, no guesswork, just better results.</p>
            <div style={{ display: "flex", gap: 12, marginBottom: 36, flexWrap: "wrap" }}>
              <button className="btn-primary" style={{ flex: isMobile ? 1 : undefined }} onClick={() => setPage("appraisal")}>{BRAND.phone}</button>
              <button className="btn-outline" style={{ flex: isMobile ? 1 : undefined }} onClick={() => setPage("buy")}>Browse Properties</button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
              {["4,200+ 5-star reviews", "Over 2,000 properties sold", "100% Australian owned"].map((s) => <div key={s} className="hero-stat">{s}</div>)}
            </div>
          </div>
          {!isMobile && (
            <div style={{ flex: 1 }}>
              <div style={{ width: "100%", aspectRatio: "4/3", borderRadius: 10, overflow: "hidden", position: "relative", boxShadow: "0 24px 64px rgba(0,0,0,0.13)" }}>
                <img src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=900&auto=format&fit=crop&q=80" alt="Beautiful Sydney home" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", bottom: 20, left: 20, background: "white", borderRadius: 6, padding: "12px 18px", boxShadow: "0 4px 20px rgba(0,0,0,0.12)", display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ background: BRAND.colorLight, borderRadius: 6, width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem" }}>🏆</div>
                  <div>
                    <div style={{ fontFamily: "'Helvetica Neue', sans-serif", fontWeight: 700, fontSize: "0.85rem" }}>Award winning results</div>
                    <div style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: "0.72rem", color: "#888", marginTop: 2 }}>because your property deserves nothing less</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section style={{ background: "#1a1a1a", padding: "24px 20px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: "'Helvetica Neue', sans-serif", color: "#999", fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14 }}>Sydney's Most Awarded Real Estate Agency</p>
          <div style={{ display: "flex", justifyContent: "center", gap: 10, flexWrap: "wrap" }}>
            {["RateMyAgent 2026", "Finder Awards 2025", "Australian Achiever 2025", "Most Innovative", "Financial Review Fast Starters"].map((a) => (
              <div key={a} style={{ background: "#2a2a2a", padding: "7px 14px", borderRadius: 2, fontFamily: "'Helvetica Neue', sans-serif", fontSize: "0.7rem", color: "#aaa", border: "1px solid #333" }}>{a}</div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "white" }}>
        <div className="section">
          <h2 style={{ fontSize: isMobile ? "1.7rem" : "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 400, marginBottom: 10, letterSpacing: "-0.02em" }}>A smarter process, because selling shouldn't be stressful.</h2>
          <p style={{ fontFamily: "'Helvetica Neue', sans-serif", color: "#666", marginBottom: 44, fontSize: "0.95rem" }}>Five simple steps to get you the best price for your property.</p>
          {isMobile ? (
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {HOME_STEPS.map((s, i) => (
                <div key={i} onClick={() => setActiveStep(i)} style={{ padding: "18px", background: i === activeStep ? BRAND.colorLight : "#faf9f7", border: `1px solid ${i === activeStep ? BRAND.colorMid : "#e8e4df"}`, borderRadius: 6, borderLeft: `3px solid ${i === activeStep ? BRAND.color : "#ddd"}`, cursor: "pointer" }}>
                  <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <div style={{ fontSize: "1.6rem", flexShrink: 0 }}>{s.icon}</div>
                    <div>
                      <div style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: "0.7rem", color: BRAND.color, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>Step {s.num}</div>
                      <div style={{ fontFamily: "'Helvetica Neue', sans-serif", fontWeight: 600, fontSize: "0.92rem", marginBottom: 4 }}>{s.title}</div>
                      {i === activeStep && <p style={{ fontFamily: "'Helvetica Neue', sans-serif", color: "#555", fontSize: "0.85rem", lineHeight: 1.65 }}>{s.desc}</p>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ display: "flex", gap: 60 }}>
              <div style={{ minWidth: 220, borderLeft: "1px solid #e8e4df" }}>
                {HOME_STEPS.map((s, i) => <div key={i} className={`step-tab ${activeStep === i ? "active" : ""}`} onClick={() => setActiveStep(i)}><span style={{ color: BRAND.color, fontWeight: 700, marginRight: 8 }}>{s.num}</span>{s.title}</div>)}
              </div>
              <div style={{ flex: 1, display: "flex", gap: 40 }}>
                <div key={activeStep} className="fade-in" style={{ flex: 1 }}>
                  <div style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: "0.72rem", color: BRAND.color, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 700, marginBottom: 14 }}>Step {HOME_STEPS[activeStep].num} of {HOME_STEPS.length}</div>
                  <h3 style={{ fontSize: "1.7rem", fontWeight: 400, letterSpacing: "-0.02em", marginBottom: 14 }}>{HOME_STEPS[activeStep].title}</h3>
                  <p style={{ fontFamily: "'Helvetica Neue', sans-serif", color: "#555", lineHeight: 1.75 }}>{HOME_STEPS[activeStep].desc}</p>
                  <div style={{ marginTop: 28, display: "flex", gap: 8 }}>
                    {HOME_STEPS.map((_, i) => <div key={i} onClick={() => setActiveStep(i)} style={{ width: 28, height: 3, background: activeStep === i ? BRAND.color : "#ddd", cursor: "pointer", borderRadius: 2, transition: "background 0.3s" }} />)}
                  </div>
                </div>
                <div style={{ width: 260, height: 210, background: `linear-gradient(135deg, ${BRAND.colorLight}, ${BRAND.colorMid})`, borderRadius: 6, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "4rem" }}>{HOME_STEPS[activeStep].icon}</div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section style={{ background: "#faf9f7" }}>
        <div className="section">
          <h2 style={{ fontSize: isMobile ? "1.6rem" : "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 400, marginBottom: 32, letterSpacing: "-0.02em" }}>How can we help?</h2>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(3, 1fr)", gap: 16 }}>
            {[
              { icon: "🏡", title: "Sell your property", desc: "Expert agents use proven strategies and local knowledge to achieve outstanding results for Sydney sellers.", cta: "Learn more", action: () => setPage("home") },
              { icon: "🔍", title: "Find your next home", desc: "Browse curated listings and let our buyer's agents help you find the perfect property at the right price.", cta: "Search properties", action: () => setPage("buy") },
              { icon: "🏘️", title: "Rent a property", desc: "Discover quality rental properties across Sydney, managed by a team that genuinely cares about tenants.", cta: "View rentals", action: () => setPage("rent") },
              { icon: "📋", title: "Property management", desc: "Our experienced managers take the stress out of being a landlord — tenant screening, maintenance and beyond.", cta: "Learn more", action: () => setPage("pm") },
              { icon: "📊", title: "Free market appraisal", desc: "Thinking of selling? Get a free, no-obligation appraisal and discover what your property is worth today.", cta: "Book appraisal", action: () => setPage("appraisal") },
            ].map((s) => (
              <div key={s.title} className="service-card" onClick={s.action}>
                <div style={{ fontSize: "1.5rem", marginBottom: 14 }}>{s.icon}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: 8, fontFamily: "'Helvetica Neue', sans-serif" }}>{s.title}</h3>
                <p style={{ fontFamily: "'Helvetica Neue', sans-serif", color: "#666", fontSize: "0.86rem", lineHeight: 1.6, marginBottom: 14 }}>{s.desc}</p>
                <span style={{ fontFamily: "'Helvetica Neue', sans-serif", color: BRAND.color, fontSize: "0.84rem", fontWeight: 600 }}>{s.cta} →</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "white" }}>
        <div className="section">
          <h2 style={{ fontSize: isMobile ? "1.5rem" : "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 400, marginBottom: 32, letterSpacing: "-0.02em", maxWidth: 640 }}>We've put sellers and buyers first — not commissions.</h2>
          <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: 2 }}>
            <div className="compare-col ours">
              <div style={{ fontFamily: "'Helvetica Neue', sans-serif", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: BRAND.color, marginBottom: 20 }}>✓ With Bettersale</div>
              {["A dedicated agent who knows your local market inside out", "Transparent, fixed commission — no nasty surprises at settlement", "Premium marketing included: professional photos, floor plans & more", "Flexible scheduling that works around your life", "Ongoing support from appraisal to settlement and beyond", "We'll never push you to accept an offer that isn't right for you"].map((item) => (
                <div key={item} className="compare-item"><span style={{ color: BRAND.color, flexShrink: 0 }}>✓</span><span style={{ color: "#444" }}>{item}</span></div>
              ))}
            </div>
            <div className="compare-col others">
              <div style={{ fontFamily: "'Helvetica Neue', sans-serif", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#c0504d", marginBottom: 20 }}>✗ Traditional Agencies</div>
              {["Passed between agents with no consistent point of contact", "Hidden fees and inflated commission rates baked in", "Extra charges for marketing, photography and listing upgrades", "Open homes scheduled for the agency's convenience", "Support that disappears the moment the contract is signed", "Pressure to accept low offers to hit monthly sales targets"].map((item) => (
                <div key={item} className="compare-item"><span style={{ color: "#c0504d", flexShrink: 0 }}>✗</span><span style={{ color: "#666" }}>{item}</span></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: BRAND.colorDark }}>
        <div className="section">
          <h2 style={{ fontSize: isMobile ? "1.5rem" : "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 400, marginBottom: 40, letterSpacing: "-0.02em", color: "white" }}>With Bettersale, you can rest assured knowing that...</h2>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 36 }}>
            {[
              { icon: "🇦🇺", title: "100% Australian owned", desc: "Bettersale is proudly Australian — built by locals, for locals. We understand the nuances of the Sydney property market." },
              { icon: "🤝", title: "A dedicated agent, start to finish", desc: "You'll have one point of contact throughout your entire sale — no handoffs, no confusion." },
              { icon: "💰", title: "Transparent fees, no surprises", desc: "We believe in honest pricing. Every fee is explained upfront, and we never charge hidden costs." },
              { icon: "⭐", title: "Thousands of happy clients", desc: "With over 2,000 successful transactions and a 4.9-star average rating, Bettersale is one of Sydney's most trusted agencies." },
            ].map((t) => (
              <div key={t.title}>
                <div style={{ fontSize: "2rem", marginBottom: 10 }}>{t.icon}</div>
                <h3 style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: "0.95rem", fontWeight: 600, marginBottom: 8, color: "white" }}>{t.title}</h3>
                <p style={{ fontFamily: "'Helvetica Neue', sans-serif", color: "rgba(255,255,255,0.7)", fontSize: "0.88rem", lineHeight: 1.65 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "white" }}>
        <div className="section" style={{ maxWidth: 800 }}>
          <h2 style={{ fontSize: isMobile ? "1.5rem" : "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 400, marginBottom: 40, letterSpacing: "-0.02em" }}>Frequently asked questions.</h2>
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item">
              <div className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <span>{faq.q}</span>
                <span style={{ color: BRAND.color, fontSize: "1.4rem", flexShrink: 0, display: "inline-block", transform: openFaq === i ? "rotate(45deg)" : "none", transition: "transform 0.2s" }}>+</span>
              </div>
              {openFaq === i && <div className="faq-a fade-in">{faq.a}</div>}
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: BRAND.colorLight, padding: isMobile ? "52px 20px" : "80px 40px", textAlign: "center" }}>
        <h2 style={{ fontSize: isMobile ? "1.7rem" : "clamp(1.8rem, 4vw, 3rem)", fontWeight: 400, letterSpacing: "-0.02em", marginBottom: 14 }}>Ready to get a better result?</h2>
        <p style={{ fontFamily: "'Helvetica Neue', sans-serif", color: "#555", marginBottom: 32, fontSize: "0.95rem" }}>Our expert agents are available 7 days a week, ready to help you buy, sell or invest with confidence.</p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <button className="btn-primary" style={{ fontSize: "1rem", padding: "15px 28px" }} onClick={() => setPage("appraisal")}>Book a Free Appraisal</button>
          <button className="btn-outline" style={{ fontSize: "1rem", padding: "15px 28px" }} onClick={() => setPage("buy")}>Browse Properties</button>
        </div>
      </section>
    </>
  );
}

// ─── BUY PAGE ────────────────────────────────────────────────────────────────

const LISTINGS = [
  { id: 1, address: "14 Addison Road", suburb: "Manly, NSW 2095", price: "$3,250,000", beds: 4, baths: 3, cars: 2, sqm: 520, type: "House", status: "For Sale", statusColor: "#1d4ed8", img: "🏠", days: 2 },
  { id: 2, address: "5/18 Campbell Parade", suburb: "Bondi Beach, NSW 2026", price: "$1,450,000", beds: 2, baths: 2, cars: 1, sqm: 112, type: "Apartment", status: "For Sale", statusColor: "#1d4ed8", img: "🏢", days: 5 },
  { id: 3, address: "32 Wolseley Road", suburb: "Point Piper, NSW 2027", price: "$8,900,000", beds: 5, baths: 4, cars: 3, sqm: 980, type: "House", status: "For Sale", statusColor: "#1d4ed8", img: "🏡", days: 1 },
  { id: 4, address: "11/2 Macquarie Street", suburb: "Sydney CBD, NSW 2000", price: "$1,850,000", beds: 3, baths: 2, cars: 2, sqm: 195, type: "Apartment", status: "Under Offer", statusColor: "#ea580c", img: "🏢", days: 10 },
  { id: 5, address: "27 Serpentine Road", suburb: "Cronulla, NSW 2230", price: "$2,100,000", beds: 4, baths: 2, cars: 2, sqm: 610, type: "House", status: "For Sale", statusColor: "#1d4ed8", img: "🏠", days: 4 },
  { id: 6, address: "88 Longueville Road", suburb: "Lane Cove, NSW 2066", price: "$2,750,000", beds: 4, baths: 3, cars: 2, sqm: 740, type: "House", status: "Sold", statusColor: "#16a34a", img: "🏡", days: 18 },
];

function PropCard({ l }) {
  return (
    <div className="prop-card">
      <div style={{ height: 180, background: `linear-gradient(135deg, ${BRAND.colorLight}, ${BRAND.colorMid})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "3.5rem", position: "relative" }}>
        {l.img}
        <span style={{ position: "absolute", top: 10, left: 10, background: l.statusColor, color: "white", padding: "3px 9px", borderRadius: 2, fontFamily: "'Helvetica Neue', sans-serif", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" }}>{l.status}</span>
        <span style={{ position: "absolute", top: 10, right: 10, background: "rgba(0,0,0,0.5)", color: "white", padding: "3px 8px", borderRadius: 2, fontFamily: "'Helvetica Neue', sans-serif", fontSize: "0.68rem" }}>{l.days === 1 ? "New today" : `${l.days}d ago`}</span>
      </div>
      <div style={{ padding: 18 }}>
        <div style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: "1.1rem", fontWeight: 700, color: BRAND.color, marginBottom: 4 }}>{l.price}</div>
        <div style={{ fontFamily: "'Helvetica Neue', sans-serif", fontWeight: 600, fontSize: "0.88rem", marginBottom: 3 }}>{l.address}</div>
        <div style={{ fontFamily: "'Helvetica Neue', sans-serif", color: "#888", fontSize: "0.78rem", marginBottom: 12 }}>{l.suburb}</div>
        <div style={{ display: "flex", gap: 12, fontFamily: "'Helvetica Neue', sans-serif", fontSize: "0.8rem", color: "#555", borderTop: "1px solid #f0ede8", paddingTop: 12, flexWrap: "wrap" }}>
          <span>🛏 {l.beds}</span><span>🚿 {l.baths}</span><span>🚗 {l.cars}</span><span>📐 {l.sqm}m²</span>
        </div>
      </div>
    </div>
  );
}

function BuyPage({ setPage }) {
  const [typeFilter, setTypeFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [beds, setBeds] = useState("Any");
  const [openFaq, setOpenFaq] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const width = useWindowWidth();
  const isMobile = width < 768;
  const isTablet = width < 1024;

  const filtered = LISTINGS.filter((l) => {
    const matchType = typeFilter === "All" || l.type === typeFilter;
    const matchStatus = statusFilter === "All" || l.status === statusFilter;
    const matchSearch = !search || l.address.toLowerCase().includes(search.toLowerCase()) || l.suburb.toLowerCase().includes(search.toLowerCase());
    const matchBeds = beds === "Any" || l.beds >= parseInt(beds);
    return matchType && matchStatus && matchSearch && matchBeds;
  });

  return (
    <>
      <section style={{ background: `linear-gradient(135deg, ${BRAND.colorDark} 0%, ${BRAND.color} 100%)`, padding: isMobile ? "52px 20px 44px" : "70px 40px 60px", color: "white" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: "0.75rem", color: "rgba(255,255,255,0.7)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12, fontWeight: 600 }}>Find Your Next Home</div>
          <h1 style={{ fontSize: isMobile ? "2.4rem" : "clamp(2.4rem, 5vw, 3.6rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 12 }}>Buy with<br /><em>confidence.</em></h1>
          <p style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: "0.95rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.7, maxWidth: 480, marginBottom: 36 }}>Access exclusive listings, off-market properties, and expert buyer's agents who put your interests first.</p>
          <div style={{ background: "white", borderRadius: 6, padding: isMobile ? "16px" : "20px 24px", display: "flex", flexDirection: isMobile ? "column" : "row", gap: 12, alignItems: isMobile ? "stretch" : "flex-end", maxWidth: 900 }}>
            <div style={{ flex: 2, minWidth: 0 }}>
              <label style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: "0.68rem", fontWeight: 700, color: "#888", letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: 6 }}>Suburb or address</label>
              <input className="input-field" placeholder="e.g. Bondi Beach, Manly..." value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
            {(!isMobile || showFilters) && (<>
              <div style={{ flex: 1, minWidth: 0 }}>
                <label style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: "0.68rem", fontWeight: 700, color: "#888", letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: 6 }}>Type</label>
                <select className="input-field" value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
                  <option value="All">All types</option><option value="House">House</option><option value="Apartment">Apartment</option>
                </select>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <label style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: "0.68rem", fontWeight: 700, color: "#888", letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: 6 }}>Bedrooms</label>
                <select className="input-field" value={beds} onChange={(e) => setBeds(e.target.value)}>
                  {["Any", "1", "2", "3", "4"].map((b) => <option key={b} value={b}>{b === "Any" ? "Any" : `${b}+`}</option>)}
                </select>
              </div>
            </>)}
            <div style={{ display: "flex", gap: 8 }}>
              {isMobile && <button className="btn-outline" style={{ flex: 1, padding: "12px" }} onClick={() => setShowFilters(!showFilters)}>{showFilters ? "Less ▲" : "Filters ▼"}</button>}
              <button className="btn-primary" style={{ flex: isMobile ? 1 : undefined, padding: "12px 24px" }}>Search</button>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#faf9f7", padding: "20px", borderBottom: "1px solid #e8e4df", overflowX: "auto" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: 10, flexWrap: isMobile ? "nowrap" : "wrap" }}>
          {[["🔒", "Off-market access"], ["🤝", "Dedicated buyer's agent"], ["📊", "Free suburb reports"], ["💰", "No buyer's fee"], ["⭐", "4.9-star rated"]].map(([icon, text]) => (
            <div key={text} className="trust-chip"><span>{icon}</span><span>{text}</span></div>
          ))}
        </div>
      </section>

      <section style={{ background: "white" }}>
        <div className="section">
          <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "center", marginBottom: 28, gap: 16 }}>
            <div>
              <h2 style={{ fontSize: isMobile ? "1.3rem" : "1.7rem", fontWeight: 400, letterSpacing: "-0.02em", marginBottom: 4 }}>Available Properties</h2>
              <p style={{ fontFamily: "'Helvetica Neue', sans-serif", color: "#888", fontSize: "0.83rem" }}>{filtered.length} {filtered.length === 1 ? "property" : "properties"} {search ? `matching "${search}"` : "across Sydney"}</p>
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {["All", "For Sale", "Under Offer", "Sold"].map((f) => (
                <button key={f} className={`filter-btn ${statusFilter === f ? "active" : ""}`} onClick={() => setStatusFilter(f)}>{f}</button>
              ))}
            </div>
          </div>
          {filtered.length > 0
            ? <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(3, 1fr)", gap: 20 }}>{filtered.map((l) => <PropCard key={l.id} l={l} />)}</div>
            : <div style={{ textAlign: "center", padding: "64px 20px", color: "#888" }}><div style={{ fontSize: "2.5rem", marginBottom: 14 }}>🔍</div><p style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>No properties match your search.</p></div>
          }
          <div style={{ marginTop: 44, paddingTop: 36, borderTop: "1px solid #e8e4df", textAlign: "center" }}>
            <p style={{ fontFamily: "'Helvetica Neue', sans-serif", color: "#666", marginBottom: 18, fontSize: "0.9rem" }}>Can't find what you're looking for? Register your brief and we'll match you — including off-market opportunities.</p>
            <button className="btn-primary" onClick={() => setPage("appraisal")}>Register My Brief</button>
          </div>
        </div>
      </section>

      <section style={{ background: BRAND.colorLight, padding: isMobile ? "52px 20px" : "80px 40px", textAlign: "center" }}>
        <h2 style={{ fontSize: isMobile ? "1.7rem" : "clamp(1.8rem, 4vw, 3rem)", fontWeight: 400, letterSpacing: "-0.02em", marginBottom: 14 }}>Ready to find your next home?</h2>
        <p style={{ fontFamily: "'Helvetica Neue', sans-serif", color: "#555", marginBottom: 32 }}>Speak with a Bettersale buyer's agent today — obligation free.</p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <button className="btn-primary" style={{ fontSize: "1rem", padding: "15px 28px" }} onClick={() => setPage("appraisal")}>Register My Brief</button>
          <button className="btn-outline" style={{ fontSize: "1rem", padding: "15px 28px" }}>{BRAND.phone}</button>
        </div>
      </section>
    </>
  );
}

// ─── RENT PAGE ────────────────────────────────────────────────────────────────

const RENTALS = [
  { id: 1, address: "4/22 Roscoe Street", suburb: "Bondi Beach, NSW 2026", price: "$1,200/wk", beds: 2, baths: 1, cars: 1, sqm: 85, type: "Apartment", img: "🏢", available: "Now" },
  { id: 2, address: "19 Awaba Street", suburb: "Mosman, NSW 2088", price: "$2,800/wk", beds: 4, baths: 3, cars: 2, sqm: 680, type: "House", img: "🏡", available: "Now" },
  { id: 3, address: "12/80 Alfred Street", suburb: "Milsons Point, NSW 2061", price: "$950/wk", beds: 1, baths: 1, cars: 1, sqm: 62, type: "Apartment", img: "🏢", available: "15 Mar" },
  { id: 4, address: "7 Kardinia Road", suburb: "Clifton Gardens, NSW 2088", price: "$3,500/wk", beds: 5, baths: 3, cars: 2, sqm: 820, type: "House", img: "🏠", available: "Now" },
  { id: 5, address: "3/14 Wylde Street", suburb: "Potts Point, NSW 2011", price: "$750/wk", beds: 1, baths: 1, cars: 0, sqm: 48, type: "Apartment", img: "🏢", available: "1 Apr" },
  { id: 6, address: "55 Rawson Street", suburb: "Neutral Bay, NSW 2089", price: "$1,850/wk", beds: 3, baths: 2, cars: 1, sqm: 340, type: "House", img: "🏡", available: "Now" },
];

function RentPage({ setPage }) {
  const width = useWindowWidth();
  const isMobile = width < 768;
  const isTablet = width < 1024;
  const [typeFilter, setTypeFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = RENTALS.filter((l) => {
    const matchType = typeFilter === "All" || l.type === typeFilter;
    const matchSearch = !search || l.address.toLowerCase().includes(search.toLowerCase()) || l.suburb.toLowerCase().includes(search.toLowerCase());
    return matchType && matchSearch;
  });

  return (
    <>
      <PageHero dark label="Rental Properties" title="Find your perfect<br /><em>Sydney rental.</em>" subtitle="Browse quality rental properties across Sydney's best suburbs — managed by a team that cares about making tenants feel at home." />

      <section style={{ background: "#faf9f7", padding: "28px 20px", borderBottom: "1px solid #e8e4df" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
          <div style={{ flex: 1, minWidth: 240 }}>
            <input className="input-field" placeholder="Search suburb or address..." value={search} onChange={(e) => setSearch(e.target.value)} style={{ borderRadius: 4 }} />
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            {["All", "House", "Apartment"].map((f) => <button key={f} className={`filter-btn ${typeFilter === f ? "active" : ""}`} onClick={() => setTypeFilter(f)}>{f}</button>)}
          </div>
        </div>
      </section>

      <section style={{ background: "white" }}>
        <div className="section">
          <p style={{ fontFamily: "'Helvetica Neue', sans-serif", color: "#888", fontSize: "0.83rem", marginBottom: 28 }}>{filtered.length} rental {filtered.length === 1 ? "property" : "properties"} available across Sydney</p>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(3, 1fr)", gap: 20 }}>
            {filtered.map((l) => (
              <div key={l.id} className="rental-card">
                <div style={{ height: 170, background: `linear-gradient(135deg, ${BRAND.colorLight}, ${BRAND.colorMid})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "3.2rem", position: "relative" }}>
                  {l.img}
                  <span style={{ position: "absolute", top: 10, left: 10, background: l.available === "Now" ? "#16a34a" : BRAND.color, color: "white", padding: "3px 9px", borderRadius: 2, fontFamily: "'Helvetica Neue', sans-serif", fontSize: "0.68rem", fontWeight: 700, textTransform: "uppercase" }}>
                    {l.available === "Now" ? "Available Now" : `From ${l.available}`}
                  </span>
                </div>
                <div style={{ padding: 18 }}>
                  <div style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: "1.1rem", fontWeight: 700, color: BRAND.color, marginBottom: 4 }}>{l.price}</div>
                  <div style={{ fontFamily: "'Helvetica Neue', sans-serif", fontWeight: 600, fontSize: "0.88rem", marginBottom: 3 }}>{l.address}</div>
                  <div style={{ fontFamily: "'Helvetica Neue', sans-serif", color: "#888", fontSize: "0.78rem", marginBottom: 12 }}>{l.suburb}</div>
                  <div style={{ display: "flex", gap: 12, fontFamily: "'Helvetica Neue', sans-serif", fontSize: "0.8rem", color: "#555", borderTop: "1px solid #f0ede8", paddingTop: 12, flexWrap: "wrap" }}>
                    <span>🛏 {l.beds}</span><span>🚿 {l.baths}</span>{l.cars > 0 && <span>🚗 {l.cars}</span>}<span>📐 {l.sqm}m²</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#faf9f7" }}>
        <div className="section">
          <h2 style={{ fontSize: isMobile ? "1.5rem" : "2rem", fontWeight: 400, marginBottom: 40, letterSpacing: "-0.02em" }}>Why rent with Bettersale?</h2>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(4, 1fr)", gap: 20 }}>
            {[
              { icon: "⚡", title: "Fast applications", desc: "Apply online in minutes with our simple digital application process." },
              { icon: "🔧", title: "Quick maintenance", desc: "Maintenance requests handled promptly through our online portal." },
              { icon: "📱", title: "Tenant portal", desc: "Pay rent, submit requests and manage your tenancy online, 24/7." },
              { icon: "🤝", title: "Responsive team", desc: "A dedicated property manager who actually answers the phone." },
            ].map((c) => (
              <div key={c.title} className="pm-card">
                <div style={{ fontSize: "1.8rem", marginBottom: 12 }}>{c.icon}</div>
                <h3 style={{ fontFamily: "'Helvetica Neue', sans-serif", fontWeight: 600, fontSize: "0.95rem", marginBottom: 8 }}>{c.title}</h3>
                <p style={{ fontFamily: "'Helvetica Neue', sans-serif", color: "#666", fontSize: "0.85rem", lineHeight: 1.6 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: BRAND.colorLight, padding: isMobile ? "52px 20px" : "80px 40px", textAlign: "center" }}>
        <h2 style={{ fontSize: isMobile ? "1.7rem" : "2.5rem", fontWeight: 400, letterSpacing: "-0.02em", marginBottom: 14 }}>Can't find what you're looking for?</h2>
        <p style={{ fontFamily: "'Helvetica Neue', sans-serif", color: "#555", marginBottom: 32 }}>Register your rental brief and we'll notify you as soon as a suitable property becomes available.</p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <button className="btn-primary" style={{ padding: "15px 28px" }} onClick={() => setPage("appraisal")}>Register Your Brief</button>
          <button className="btn-outline" style={{ padding: "15px 28px" }}>{BRAND.phone}</button>
        </div>
      </section>
    </>
  );
}

// ─── PROPERTY MANAGEMENT PAGE ─────────────────────────────────────────────────

function PMPage({ setPage }) {
  const width = useWindowWidth();
  const isMobile = width < 768;
  const isTablet = width < 1024;
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    { q: "What does Bettersale charge for property management?", a: "Our management fees are transparent and competitive. We'll walk you through our fee structure upfront — no hidden charges, no surprises on your monthly statement." },
    { q: "How do you find and screen tenants?", a: "We advertise on all major portals and conduct thorough background, reference, and employment checks on every applicant. You only see the best candidates." },
    { q: "What happens if a tenant doesn't pay rent?", a: "We monitor rent payments daily. If a tenant falls behind, we follow up immediately and escalate through the appropriate legal channels if needed — protecting your investment at every step." },
    { q: "Can I switch from my current property manager?", a: "Absolutely. We handle the entire handover process for you — just let us know and we'll take it from there with minimal disruption." },
    { q: "How often will I receive financial statements?", a: "You'll receive detailed monthly statements plus an annual summary for tax purposes. Everything is accessible online through your owner portal 24/7." },
  ];

  return (
    <>
      <PageHero dark label="Property Management" title="Stress-free property<br /><em>management.</em>" subtitle="Let Bettersale handle every aspect of managing your investment property — from finding great tenants to handling maintenance, so you don't have to." />

      <section style={{ background: "#faf9f7" }}>
        <div className="section">
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(3, 1fr)", gap: 24 }}>
            {[
              { icon: "🔍", title: "Tenant sourcing & screening", desc: "We advertise on all major portals and run thorough background, employment, and reference checks on every applicant to find you reliable, long-term tenants." },
              { icon: "💰", title: "Rent collection & disbursement", desc: "We collect rent on your behalf and disburse funds directly to your nominated account, with detailed monthly statements for complete transparency." },
              { icon: "🔧", title: "Maintenance coordination", desc: "We manage all maintenance requests through our trusted network of tradespeople — getting issues resolved quickly and cost-effectively." },
              { icon: "📋", title: "Lease management", desc: "From preparing lease agreements to handling renewals, inspections, and end-of-lease procedures, we manage the full tenancy lifecycle." },
              { icon: "⚖️", title: "Legal compliance", desc: "We stay on top of all NSW legislation changes so your property always meets current regulatory requirements — protecting you from costly issues." },
              { icon: "📊", title: "Financial reporting", desc: "Monthly statements, annual tax summaries, and 24/7 access to your owner portal keep you fully informed of your property's performance." },
            ].map((s) => (
              <div key={s.title} className="pm-card">
                <div style={{ fontSize: "1.8rem", marginBottom: 14 }}>{s.icon}</div>
                <h3 style={{ fontFamily: "'Helvetica Neue', sans-serif", fontWeight: 600, fontSize: "1rem", marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontFamily: "'Helvetica Neue', sans-serif", color: "#666", fontSize: "0.86rem", lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: BRAND.colorDark }}>
        <div className="section">
          <h2 style={{ fontSize: isMobile ? "1.5rem" : "2rem", fontWeight: 400, marginBottom: 48, letterSpacing: "-0.02em", color: "white", textAlign: "center" }}>Our results speak for themselves.</h2>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)", gap: 2 }}>
            {[
              { stat: "98%", label: "Tenant retention rate" },
              { stat: "< 7 days", label: "Average days to lease" },
              { stat: "500+", label: "Properties managed" },
              { stat: "4.9★", label: "Landlord satisfaction" },
            ].map((s) => (
              <div key={s.label} className="stat-box">
                <div style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: isMobile ? "1.8rem" : "2.4rem", fontWeight: 700, color: "white", marginBottom: 8 }}>{s.stat}</div>
                <div style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: "0.82rem", color: "rgba(255,255,255,0.65)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "white" }}>
        <div className="section" style={{ maxWidth: 800 }}>
          <h2 style={{ fontSize: isMobile ? "1.5rem" : "2rem", fontWeight: 400, marginBottom: 40, letterSpacing: "-0.02em" }}>Property management FAQs.</h2>
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item">
              <div className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <span>{faq.q}</span>
                <span style={{ color: BRAND.color, fontSize: "1.4rem", flexShrink: 0, display: "inline-block", transform: openFaq === i ? "rotate(45deg)" : "none", transition: "transform 0.2s" }}>+</span>
              </div>
              {openFaq === i && <div className="faq-a fade-in">{faq.a}</div>}
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: BRAND.colorLight, padding: isMobile ? "52px 20px" : "80px 40px", textAlign: "center" }}>
        <h2 style={{ fontSize: isMobile ? "1.7rem" : "2.5rem", fontWeight: 400, letterSpacing: "-0.02em", marginBottom: 14 }}>Ready to hand over the hard work?</h2>
        <p style={{ fontFamily: "'Helvetica Neue', sans-serif", color: "#555", marginBottom: 32 }}>Get a free property management appraisal and find out how we can maximise your investment returns.</p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <button className="btn-primary" style={{ padding: "15px 28px" }} onClick={() => setPage("appraisal")}>Get a Free Appraisal</button>
          <button className="btn-outline" style={{ padding: "15px 28px" }}>{BRAND.phone}</button>
        </div>
      </section>
    </>
  );
}

// ─── WHY BETTERSALE PAGE ──────────────────────────────────────────────────────

function WhyPage({ setPage }) {
  const width = useWindowWidth();
  const isMobile = width < 768;
  const isTablet = width < 1024;

  const reviews = [
    { name: "Sarah M.", suburb: "Mosman", stars: 5, text: "Bettersale sold our home in 9 days, $85k above reserve. Our agent was incredible — always available, always honest. I couldn't recommend them more highly." },
    { name: "James & Lisa T.", suburb: "Manly", stars: 5, text: "We were nervous about selling. Our Bettersale agent walked us through everything, kept us calm and got us a result we never expected. Absolutely five stars." },
    { name: "David K.", suburb: "Bondi Beach", stars: 5, text: "As an investor, I've used a lot of agencies. Bettersale is by far the most transparent and results-driven. The property management team are second to none." },
    { name: "Priya R.", suburb: "Neutral Bay", stars: 5, text: "Found our dream home through Bettersale. Our buyer's agent was patient, knowledgeable and negotiated brilliantly. We saved money and stress." },
    { name: "Tom W.", suburb: "Lane Cove", stars: 5, text: "Switched to Bettersale for property management and it's night and day. Fast responses, great tenants, and monthly statements I can actually understand." },
    { name: "Michelle C.", suburb: "Cronulla", stars: 5, text: "The appraisal was free, accurate and pressure-free. We listed, sold in two weeks, and the whole process was seamless. Thank you Bettersale!" },
  ];

  return (
    <>
      <PageHero label="Why Bettersale" title="A better way to<br /><em>buy and sell.</em>" subtitle="Bettersale was founded with a simple mission: to build a real estate agency that Australians could actually trust. Here's why thousands of Sydney homeowners choose us." />

      <section style={{ background: BRAND.colorDark }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: isMobile ? "52px 20px" : "72px 40px" }}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)", gap: 2 }}>
            {[
              { stat: "2,000+", label: "Properties sold" },
              { stat: "4.9★", label: "Average rating" },
              { stat: "98%", label: "Client satisfaction" },
              { stat: "< 21 days", label: "Average days on market" },
            ].map((s) => (
              <div key={s.label} className="stat-box">
                <div style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: isMobile ? "1.8rem" : "2.6rem", fontWeight: 700, color: "white", marginBottom: 8 }}>{s.stat}</div>
                <div style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: "0.82rem", color: "rgba(255,255,255,0.65)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#faf9f7" }}>
        <div className="section">
          <h2 style={{ fontSize: isMobile ? "1.5rem" : "2rem", fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>The Bettersale difference.</h2>
          <p style={{ fontFamily: "'Helvetica Neue', sans-serif", color: "#666", marginBottom: 44, maxWidth: 560 }}>We've rethought every part of the real estate experience to make it faster, fairer and more transparent for everyone.</p>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(3, 1fr)", gap: 20 }}>
            {[
              { icon: "🎯", title: "Local expertise, Sydney-wide", desc: "Our agents live and breathe Sydney property. From Bondi to Manly, the Northern Beaches to the Inner West — we know every suburb, every street." },
              { icon: "💡", title: "Tech-powered marketing", desc: "We use cutting-edge digital marketing, 3D virtual tours, drone photography, and targeted social campaigns to get your property in front of the right buyers." },
              { icon: "🤝", title: "One agent, start to finish", desc: "No handoffs. No junior agents. The experienced person you meet at your appraisal is the one who sells your home — every time." },
              { icon: "📊", title: "Data-driven pricing", desc: "We use real-time sales data, suburb analytics and our deep market knowledge to price your property to sell — not just to attract enquiry." },
              { icon: "💬", title: "Radical transparency", desc: "Weekly written updates. Honest feedback from every inspection. No sugar-coating. You'll always know exactly where your sale stands." },
              { icon: "🏆", title: "A results-first culture", desc: "Our agents are rewarded for results, not volume. That means your property gets the attention it deserves — not treated like a number." },
            ].map((c) => (
              <div key={c.title} className="why-card">
                <div style={{ fontSize: "2rem", marginBottom: 16 }}>{c.icon}</div>
                <h3 style={{ fontFamily: "'Helvetica Neue', sans-serif", fontWeight: 600, fontSize: "1rem", marginBottom: 10 }}>{c.title}</h3>
                <p style={{ fontFamily: "'Helvetica Neue', sans-serif", color: "#666", fontSize: "0.86rem", lineHeight: 1.65 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "white" }}>
        <div className="section">
          <h2 style={{ fontSize: isMobile ? "1.5rem" : "2rem", fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>What our clients say.</h2>
          <p style={{ fontFamily: "'Helvetica Neue', sans-serif", color: "#666", marginBottom: 44 }}>Don't take our word for it — here's what real Bettersale clients have to say.</p>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(3, 1fr)", gap: 20 }}>
            {reviews.map((r) => (
              <div key={r.name} style={{ background: "#faf9f7", border: "1px solid #e8e4df", borderRadius: 8, padding: "24px" }}>
                <div style={{ color: "#f59e0b", fontSize: "1rem", marginBottom: 12, letterSpacing: 2 }}>{"★".repeat(r.stars)}</div>
                <p style={{ fontFamily: "'Helvetica Neue', sans-serif", color: "#333", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: 16, fontStyle: "italic" }}>"{r.text}"</p>
                <div style={{ fontFamily: "'Helvetica Neue', sans-serif", fontWeight: 700, fontSize: "0.85rem" }}>{r.name}</div>
                <div style={{ fontFamily: "'Helvetica Neue', sans-serif", color: "#888", fontSize: "0.78rem", marginTop: 2 }}>{r.suburb}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: BRAND.colorLight, padding: isMobile ? "52px 20px" : "80px 40px", textAlign: "center" }}>
        <h2 style={{ fontSize: isMobile ? "1.7rem" : "2.5rem", fontWeight: 400, letterSpacing: "-0.02em", marginBottom: 14 }}>Experience the Bettersale difference.</h2>
        <p style={{ fontFamily: "'Helvetica Neue', sans-serif", color: "#555", marginBottom: 32 }}>Book a free, no-obligation appraisal and see exactly what we can do for you.</p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <button className="btn-primary" style={{ padding: "15px 28px" }} onClick={() => setPage("appraisal")}>Book a Free Appraisal</button>
          <button className="btn-outline" style={{ padding: "15px 28px" }} onClick={() => setPage("buy")}>Browse Properties</button>
        </div>
      </section>
    </>
  );
}

// ─── FREE APPRAISAL PAGE ──────────────────────────────────────────────────────

function AppraisalPage() {
  const width = useWindowWidth();
  const isMobile = width < 768;
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", address: "", suburb: "", type: "", service: "", message: "" });

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = () => {
    if (form.firstName && form.email && form.phone && form.address) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#faf9f7", padding: "40px 20px" }}>
        <div style={{ textAlign: "center", maxWidth: 520 }}>
          <div style={{ fontSize: "3.5rem", marginBottom: 24 }}>🎉</div>
          <h2 style={{ fontSize: "2rem", fontWeight: 400, letterSpacing: "-0.02em", marginBottom: 16 }}>Thanks, we'll be in touch!</h2>
          <p style={{ fontFamily: "'Helvetica Neue', sans-serif", color: "#555", lineHeight: 1.75, marginBottom: 32 }}>One of our expert agents will call you within 2 business hours to arrange your free property appraisal at a time that suits you.</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <div style={{ background: BRAND.colorLight, border: `1px solid ${BRAND.colorMid}`, borderRadius: 6, padding: "16px 24px", fontFamily: "'Helvetica Neue', sans-serif" }}>
              <div style={{ fontSize: "0.72rem", color: BRAND.color, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>What happens next</div>
              <div style={{ fontSize: "0.88rem", color: "#444" }}>📞 Agent call within 2 hours</div>
              <div style={{ fontSize: "0.88rem", color: "#444", marginTop: 4 }}>🏡 On-site appraisal scheduled</div>
              <div style={{ fontSize: "0.88rem", color: "#444", marginTop: 4 }}>📊 Detailed report provided free</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <section style={{ background: `linear-gradient(135deg, ${BRAND.colorDark}, ${BRAND.color})`, padding: isMobile ? "52px 20px" : "72px 40px", color: "white" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: isMobile ? "column" : "row", gap: 60, alignItems: "flex-start" }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: "0.75rem", color: "rgba(255,255,255,0.7)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14, fontWeight: 600 }}>Free & No Obligation</div>
            <h1 style={{ fontSize: isMobile ? "2.4rem" : "clamp(2.4rem, 4vw, 3.4rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 20 }}>Get your free<br /><em>property appraisal.</em></h1>
            <p style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.75, marginBottom: 36, maxWidth: 460 }}>Find out exactly what your property is worth in today's market — completely free, with no obligation to sell. One of our expert Sydney agents will be in touch within 2 business hours.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { icon: "✅", text: "100% free — no strings attached" },
                { icon: "⚡", text: "Agent response within 2 business hours" },
                { icon: "📊", text: "Detailed market report included" },
                { icon: "🤝", text: "No pressure, no obligation" },
              ].map((i) => (
                <div key={i.text} style={{ display: "flex", gap: 12, alignItems: "center", fontFamily: "'Helvetica Neue', sans-serif", fontSize: "0.9rem", color: "rgba(255,255,255,0.9)" }}>
                  <span>{i.icon}</span><span>{i.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div style={{ flex: 1, background: "white", borderRadius: 10, padding: isMobile ? "28px 20px" : "40px", boxShadow: "0 24px 64px rgba(0,0,0,0.15)", width: isMobile ? "100%" : undefined }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 600, marginBottom: 6, fontFamily: "'Helvetica Neue', sans-serif" }}>Book your free appraisal</h2>
            <p style={{ fontFamily: "'Helvetica Neue', sans-serif", color: "#888", fontSize: "0.82rem", marginBottom: 28 }}>Fill in your details and we'll be in touch shortly.</p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 16px" }}>
              <div className="form-group">
                <label className="form-label">First name *</label>
                <input className="form-input" placeholder="Sarah" value={form.firstName} onChange={(e) => set("firstName", e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">Last name</label>
                <input className="form-input" placeholder="Smith" value={form.lastName} onChange={(e) => set("lastName", e.target.value)} />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Email address *</label>
              <input className="form-input" type="email" placeholder="sarah@email.com" value={form.email} onChange={(e) => set("email", e.target.value)} />
            </div>

            <div className="form-group">
              <label className="form-label">Phone number *</label>
              <input className="form-input" type="tel" placeholder="0400 000 000" value={form.phone} onChange={(e) => set("phone", e.target.value)} />
            </div>

            <div className="form-group">
              <label className="form-label">Property address *</label>
              <input className="form-input" placeholder="123 Example Street" value={form.address} onChange={(e) => set("address", e.target.value)} />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 16px" }}>
              <div className="form-group">
                <label className="form-label">Suburb</label>
                <input className="form-input" placeholder="Bondi Beach" value={form.suburb} onChange={(e) => set("suburb", e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">Property type</label>
                <select className="form-select" value={form.type} onChange={(e) => set("type", e.target.value)}>
                  <option value="">Select type</option>
                  <option>House</option><option>Apartment</option><option>Townhouse</option><option>Villa</option><option>Land</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">I'm interested in</label>
              <select className="form-select" value={form.service} onChange={(e) => set("service", e.target.value)}>
                <option value="">Select service</option>
                <option>Selling my property</option>
                <option>Buying a property</option>
                <option>Renting out my property</option>
                <option>Property management</option>
                <option>General enquiry</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Additional comments</label>
              <textarea className="form-textarea" placeholder="Tell us anything else that might be helpful..." value={form.message} onChange={(e) => set("message", e.target.value)} />
            </div>

            <button className="btn-primary" style={{ width: "100%", fontSize: "1rem", padding: "15px", justifyContent: "center" }} onClick={handleSubmit}>
              Book My Free Appraisal →
            </button>
            <p style={{ fontFamily: "'Helvetica Neue', sans-serif", color: "#aaa", fontSize: "0.75rem", textAlign: "center", marginTop: 14 }}>By submitting, you agree to our Privacy Policy. We'll never share your details.</p>
          </div>
        </div>
      </section>

      <section style={{ background: "white", padding: isMobile ? "44px 20px" : "64px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: 32 }}>
            {[
              { icon: "📞", title: "Step 1 — We call you", desc: "Within 2 business hours of your enquiry, one of our local agents will call to introduce themselves and understand your situation." },
              { icon: "🏡", title: "Step 2 — On-site appraisal", desc: "We'll arrange a convenient time to visit your property, assess it in person, and discuss current market conditions with you." },
              { icon: "📊", title: "Step 3 — Receive your report", desc: "You'll receive a detailed written appraisal with comparable sales data, our recommended price guide, and a tailored marketing strategy." },
            ].map((s) => (
              <div key={s.title} style={{ textAlign: "center", padding: "20px" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: 16 }}>{s.icon}</div>
                <h3 style={{ fontFamily: "'Helvetica Neue', sans-serif", fontWeight: 600, fontSize: "1rem", marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontFamily: "'Helvetica Neue', sans-serif", color: "#666", fontSize: "0.88rem", lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// ─── APP ROOT ─────────────────────────────────────────────────────────────────

export default function App() {
  const [page, setPage] = useState("home");
  const handleSetPage = (p) => { setPage(p); };

  return (
    <div style={{ fontFamily: "'Georgia', 'Times New Roman', serif", color: "#1a1a1a", background: "#faf9f7" }}>
      <style>{globalStyles}</style>
      <TopBanner setPage={handleSetPage} />
      <Navbar page={page} setPage={handleSetPage} />
      <div className="fade-in" key={page}>
        {page === "home" && <HomePage setPage={handleSetPage} />}
        {page === "buy" && <BuyPage setPage={handleSetPage} />}
        {page === "rent" && <RentPage setPage={handleSetPage} />}
        {page === "pm" && <PMPage setPage={handleSetPage} />}
        {page === "why" && <WhyPage setPage={handleSetPage} />}
        {page === "appraisal" && <AppraisalPage />}
      </div>
      <Footer setPage={handleSetPage} />
    </div>
  );
}
