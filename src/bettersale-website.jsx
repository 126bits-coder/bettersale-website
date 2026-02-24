import { useState, useEffect } from "react";

const BRAND = {
  phone: "1800 000 000",
  color: "#1d4ed8",
  colorDark: "#1e3a8a",
  colorLight: "#eff6ff",
  colorMid: "#dbeafe",
};

// ─── RESPONSIVE HOOK ─────────────────────────────────────────────────────────

function useWindowWidth() {
  const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  useEffect(() => {
    const handle = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, []);
  return width;
}

// ─── GLOBAL STYLES ───────────────────────────────────────────────────────────

const globalStyles = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { font-family: 'Georgia', serif; -webkit-font-smoothing: antialiased; }
  a { text-decoration: none; color: inherit; }

  .btn-primary {
    background: #1d4ed8; color: white; padding: 14px 28px; border: none;
    cursor: pointer; font-size: 0.95rem; font-family: 'Helvetica Neue', sans-serif;
    letter-spacing: 0.03em; transition: background 0.2s; border-radius: 2px;
    white-space: nowrap;
  }
  .btn-primary:hover { background: #1e3a8a; }
  .btn-primary:active { transform: scale(0.98); }

  .btn-outline {
    background: transparent; color: #1d4ed8; padding: 13px 27px;
    border: 1.5px solid #1d4ed8; cursor: pointer; font-size: 0.95rem;
    font-family: 'Helvetica Neue', sans-serif; letter-spacing: 0.03em;
    transition: all 0.2s; border-radius: 2px; white-space: nowrap;
  }
  .btn-outline:hover { background: #1d4ed8; color: white; }
  .btn-outline:active { transform: scale(0.98); }

  .btn-full { width: 100%; justify-content: center; }

  .section { padding: 80px 40px; max-width: 1200px; margin: 0 auto; }

  .fade-in { animation: fadeIn 0.5s ease forwards; }
  @keyframes fadeIn { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }

  /* Nav */
  .nav-link {
    font-size: 0.85rem; font-family: 'Helvetica Neue', sans-serif;
    color: #444; transition: color 0.2s; cursor: pointer;
  }
  .nav-link:hover { color: #1d4ed8; }
  .mobile-nav-link {
    display: block; padding: 16px 24px; font-family: 'Helvetica Neue', sans-serif;
    font-size: 1rem; color: #1a1a1a; border-bottom: 1px solid #f0ede8;
    cursor: pointer; transition: background 0.15s;
  }
  .mobile-nav-link:hover { background: #f8f7f5; color: #1d4ed8; }
  .hamburger { background: none; border: none; cursor: pointer; padding: 8px; display: flex; flex-direction: column; gap: 5px; }
  .hamburger span { display: block; width: 24px; height: 2px; background: #1a1a1a; transition: all 0.3s; border-radius: 2px; }
  .hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
  .hamburger.open span:nth-child(2) { opacity: 0; }
  .hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

  /* Steps */
  .step-tab {
    padding: 14px 20px; cursor: pointer; font-family: 'Helvetica Neue', sans-serif;
    font-size: 0.85rem; border-left: 3px solid transparent; transition: all 0.2s; color: #666;
  }
  .step-tab.active { border-left-color: #1d4ed8; color: #1a1a1a; font-weight: 600; }
  .step-tab:hover { color: #1d4ed8; }

  /* Cards */
  .service-card {
    background: white; padding: 28px; border: 1px solid #e8e4df;
    transition: box-shadow 0.2s, transform 0.2s; cursor: pointer; border-radius: 4px;
  }
  .service-card:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.08); transform: translateY(-2px); }

  .prop-card {
    background: white; border: 1px solid #e8e4df; border-radius: 6px;
    overflow: hidden; transition: box-shadow 0.2s, transform 0.2s; cursor: pointer;
  }
  .prop-card:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.1); transform: translateY(-3px); }

  /* FAQ */
  .faq-item { border-bottom: 1px solid #e8e4df; }
  .faq-q {
    padding: 20px 0; cursor: pointer; display: flex; justify-content: space-between;
    align-items: center; font-size: 1rem; font-family: 'Helvetica Neue', sans-serif;
    font-weight: 500; gap: 16px;
  }
  .faq-q:hover { color: #1d4ed8; }
  .faq-a { padding-bottom: 20px; color: #555; font-size: 0.95rem; line-height: 1.7; font-family: 'Helvetica Neue', sans-serif; }

  /* Compare */
  .compare-col { flex: 1; padding: 28px; min-width: 0; }
  .compare-col.ours { background: #eff6ff; border-left: 3px solid #1d4ed8; }
  .compare-col.others { background: #fdf6f6; border-left: 3px solid #e07070; }
  .compare-item {
    display: flex; gap: 10px; margin-bottom: 14px; align-items: flex-start;
    font-family: 'Helvetica Neue', sans-serif; font-size: 0.88rem; line-height: 1.5;
  }

  /* Stats */
  .hero-stat { font-family: 'Helvetica Neue', sans-serif; font-size: 0.82rem; color: #555; display: flex; align-items: center; gap: 8px; }
  .hero-stat::before { content: ''; display: block; width: 6px; height: 6px; background: #1d4ed8; border-radius: 50%; flex-shrink: 0; }

  /* Filters */
  .filter-btn {
    padding: 8px 16px; border-radius: 20px; border: 1.5px solid #ddd;
    background: white; font-family: 'Helvetica Neue', sans-serif; font-size: 0.82rem;
    cursor: pointer; transition: all 0.2s; color: #444; white-space: nowrap;
  }
  .filter-btn.active { border-color: #1d4ed8; background: #1d4ed8; color: white; }
  .filter-btn:hover { border-color: #1d4ed8; color: #1d4ed8; }
  .filter-btn.active:hover { color: white; }

  /* Inputs */
  .input-field {
    width: 100%; padding: 12px 16px; border: 1.5px solid #ddd; border-radius: 2px;
    font-family: 'Helvetica Neue', sans-serif; font-size: 0.9rem; color: #333;
    outline: none; transition: border-color 0.2s; background: white;
    -webkit-appearance: none;
  }
  .input-field:focus { border-color: #1d4ed8; }

  .trust-chip {
    display: flex; align-items: center; gap: 8px; padding: 10px 16px;
    background: white; border: 1px solid #e8e4df; border-radius: 20px;
    font-family: 'Helvetica Neue', sans-serif; font-size: 0.82rem; color: #444;
    white-space: nowrap;
  }

  /* Mobile overrides */
  @media (max-width: 768px) {
    .section { padding: 52px 20px; }
    .btn-primary, .btn-outline { padding: 13px 22px; font-size: 0.9rem; }
    .faq-q { font-size: 0.95rem; }
  }
  @media (max-width: 480px) {
    .section { padding: 44px 16px; }
  }
`;

// ─── SHARED LAYOUT ───────────────────────────────────────────────────────────

function TopBanner() {
  return (
    <div style={{ background: BRAND.color, color: "white", textAlign: "center", padding: "9px 20px", fontSize: "0.8rem", fontFamily: "'Helvetica Neue', sans-serif", letterSpacing: "0.02em" }}>
      Free property appraisals available now —{" "}
      <span style={{ fontWeight: 700, textDecoration: "underline", cursor: "pointer" }}>{BRAND.phone}</span>
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
    { label: "Rent", key: "home" },
    { label: "Property Management", key: "home" },
    { label: "Why Bettersale", key: "home" },
  ];

  const handleNav = (key) => {
    setPage(key);
    setMenuOpen(false);
  };

  return (
    <nav style={{ background: "white", borderBottom: "1px solid #e8e4df", position: "sticky", top: 0, zIndex: 200 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}>
        {/* Logo */}
        <div onClick={() => handleNav("home")} style={{ fontSize: "1.35rem", fontWeight: 700, letterSpacing: "-0.04em", cursor: "pointer", flexShrink: 0 }}>
          better<span style={{ color: BRAND.color }}>sale</span>
        </div>

        {/* Desktop links */}
        {!isMobile && (
          <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
            {links.map((l, i) => (
              <span key={i} className="nav-link" onClick={() => handleNav(l.key)} style={{
                fontWeight: page === "buy" && l.key === "buy" ? 700 : 400,
                color: page === "buy" && l.key === "buy" ? BRAND.color : undefined,
                borderBottom: page === "buy" && l.key === "buy" ? `2px solid ${BRAND.color}` : "2px solid transparent",
                paddingBottom: 2,
              }}>{l.label}</span>
            ))}
          </div>
        )}

        {/* Desktop CTA */}
        {!isMobile && (
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <span style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: "0.85rem", color: "#444", cursor: "pointer" }}>Log in</span>
            <button className="btn-primary" style={{ padding: "9px 18px", fontSize: "0.85rem" }}>Free Appraisal</button>
          </div>
        )}

        {/* Mobile: CTA + Hamburger */}
        {isMobile && (
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <button className="btn-primary" style={{ padding: "8px 14px", fontSize: "0.8rem" }}>Free Appraisal</button>
            <button className={`hamburger ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
              <span /><span /><span />
            </button>
          </div>
        )}
      </div>

      {/* Mobile drawer */}
      {isMobile && menuOpen && (
        <div style={{ background: "white", borderTop: "1px solid #e8e4df", position: "absolute", width: "100%", boxShadow: "0 8px 32px rgba(0,0,0,0.12)", zIndex: 200 }}>
          {links.map((l, i) => (
            <div key={i} className="mobile-nav-link" onClick={() => handleNav(l.key)}
              style={{ fontWeight: page === l.key && l.key !== "home" ? 700 : 400, color: page === l.key && l.key !== "home" ? BRAND.color : undefined }}>
              {l.label}
            </div>
          ))}
          <div style={{ padding: "16px 24px", borderTop: "1px solid #e8e4df" }}>
            <span style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: "0.9rem", color: "#444", cursor: "pointer" }}>Log in</span>
          </div>
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
            <p style={{ fontFamily: "'Helvetica Neue', sans-serif", color: "#888", fontSize: "0.85rem", lineHeight: 1.6 }}>Making property buying and selling smarter, more transparent, and more rewarding for all Australians.</p>
          </div>
          {[
            { title: "Bettersale", links: ["About Us", "Our Agents", "Reviews", "Contact Us", "FAQ"] },
            { title: "Services", links: ["Buy", "Sell", "Rent", "Property Management", "Investment Advisory"] },
            { title: "Contact us", links: [`Sales: ${BRAND.phone}`, "Rentals: 1800 000 001", "hello@bettersale.com.au"] },
          ].map((col) => (
            <div key={col.title}>
              <div style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: "0.72rem", fontWeight: 700, color: "#999", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>{col.title}</div>
              {col.links.map((link) => <div key={link} style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: "0.82rem", color: "#ccc", marginBottom: 9, cursor: "pointer" }}>{link}</div>)}
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid #333", paddingTop: 24, display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "center", gap: 12 }}>
          <p style={{ fontFamily: "'Helvetica Neue', sans-serif", color: "#666", fontSize: "0.75rem" }}>© Bettersale Pty Ltd, 2025. Licensed Real Estate Agent.</p>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
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
  { num: "1", title: "Tell us about your property.", desc: "It all starts with a simple conversation — no pressure, no obligation. Just an honest chat with our team to understand your goals.", icon: "💬" },
  { num: "2", title: "Get your free property appraisal.", desc: "We'll provide a detailed, data-driven appraisal of your property's market value — helping you set the right price.", icon: "📊" },
  { num: "3", title: "We create your marketing campaign.", desc: "Your dedicated agent will craft a tailored strategy — from professional photography to premium listings and social media.", icon: "📸" },
  { num: "4", title: "We manage every inspection and offer.", desc: "We handle all buyer enquiries, open homes, and private inspections — keeping you informed every step of the way.", icon: "🏠" },
  { num: "5", title: "Sell with confidence, settle with ease.", desc: "Once we secure the best offer, we guide you through contracts and settlement — making the finish line as smooth as possible.", icon: "🎉" },
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
    { q: "How do I know Bettersale will get me the best price?", a: "Bettersale agents are among the top performers in their local markets, with a track record of achieving sale prices above the suburb median. We combine deep local knowledge with data-driven pricing and a wide buyer network." },
    { q: "What does it cost to sell with Bettersale?", a: "Our commission structure is transparent and competitive, with no hidden fees. We'll walk you through all costs upfront during your free appraisal — so there are no surprises." },
    { q: "How long does it take to sell a property?", a: "Bettersale's targeted marketing consistently delivers faster results than the industry average. Your agent will give you a realistic timeline based on current market conditions in your area." },
    { q: "Can Bettersale help me buy and sell at the same time?", a: "Absolutely. We specialise in coordinating simultaneous buy-sell transactions, making sure the timing works in your favour." },
    { q: "Do you offer property management services?", a: "Yes. Our property management team handles everything from finding tenants to coordinating maintenance, ensuring your investment is compliant and cared for." },
  ];

  return (
    <>
      {/* Hero */}
      <section style={{ background: "#faf9f7", padding: isMobile ? "52px 20px" : "80px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: "center", gap: isMobile ? 40 : 80 }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: "0.78rem", color: BRAND.color, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16, fontWeight: 600 }}>
              A Trusted Sydney Real Estate Agency
            </div>
            <h1 style={{ fontSize: isMobile ? "2.6rem" : "clamp(2.8rem, 5vw, 4.2rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 20 }}>
              Selling, made<br /><em style={{ color: BRAND.color }}>better.</em>
            </h1>
            <p style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: "1rem", color: "#555", lineHeight: 1.75, marginBottom: 32, maxWidth: 480 }}>
              Bettersale was built on a simple idea — that every Australian deserves a smarter, more transparent way to buy and sell property. No hidden fees, no guesswork, just better results.
            </p>
            <div style={{ display: "flex", gap: 12, marginBottom: 36, flexWrap: "wrap" }}>
              <button className="btn-primary" style={{ flex: isMobile ? 1 : undefined }}>{BRAND.phone}</button>
              <button className="btn-outline" style={{ flex: isMobile ? 1 : undefined }} onClick={() => setPage("buy")}>Browse Properties</button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
              {["4,200+ 5-star reviews", "Over 2,000 properties sold", "100% Australian owned"].map((s) => (
                <div key={s} className="hero-stat">{s}</div>
              ))}
            </div>
          </div>
          {!isMobile && (
            <div style={{ flex: 1 }}>
              <div style={{ width: "100%", aspectRatio: "4/3", borderRadius: 10, overflow: "hidden", position: "relative", boxShadow: "0 24px 64px rgba(0,0,0,0.13)" }}>
                <img
                  src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=900&auto=format&fit=crop&q=80"
                  alt="Beautiful Australian home"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
                {/* Overlay badge */}
                <div style={{ position: "absolute", bottom: 20, left: 20, background: "white", borderRadius: 6, padding: "12px 18px", boxShadow: "0 4px 20px rgba(0,0,0,0.12)", display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ background: BRAND.colorLight, borderRadius: 6, width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", flexShrink: 0 }}>🏆</div>
                  <div>
                    <div style={{ fontFamily: "'Helvetica Neue', sans-serif", fontWeight: 700, fontSize: "0.85rem", color: "#1a1a1a" }}>Award winning results</div>
                    <div style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: "0.72rem", color: "#888", marginTop: 2 }}>because your property deserves nothing less</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Awards strip */}
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

      {/* Process */}
      <section style={{ background: "white" }}>
        <div className="section">
          <h2 style={{ fontSize: isMobile ? "1.7rem" : "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 400, marginBottom: 10, letterSpacing: "-0.02em" }}>A smarter process, because selling shouldn't be stressful.</h2>
          <p style={{ fontFamily: "'Helvetica Neue', sans-serif", color: "#666", marginBottom: 44, fontSize: "0.95rem" }}>Five simple steps to get you the best price for your property.</p>

          {isMobile ? (
            // Mobile: card-style steps
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {HOME_STEPS.map((s, i) => (
                <div key={i} style={{ padding: "20px", background: i === activeStep ? BRAND.colorLight : "#faf9f7", border: `1px solid ${i === activeStep ? BRAND.colorMid : "#e8e4df"}`, borderRadius: 6, borderLeft: `3px solid ${i === activeStep ? BRAND.color : "#ddd"}`, cursor: "pointer", transition: "all 0.2s" }} onClick={() => setActiveStep(i)}>
                  <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <div style={{ fontSize: "1.8rem", flexShrink: 0 }}>{s.icon}</div>
                    <div>
                      <div style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: "0.72rem", color: BRAND.color, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>Step {s.num}</div>
                      <div style={{ fontFamily: "'Helvetica Neue', sans-serif", fontWeight: 600, fontSize: "0.95rem", marginBottom: 6 }}>{s.title}</div>
                      {i === activeStep && <p style={{ fontFamily: "'Helvetica Neue', sans-serif", color: "#555", fontSize: "0.88rem", lineHeight: 1.65 }}>{s.desc}</p>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Desktop: side-by-side
            <div style={{ display: "flex", gap: 60 }}>
              <div style={{ minWidth: 220, borderLeft: "1px solid #e8e4df" }}>
                {HOME_STEPS.map((s, i) => (
                  <div key={i} className={`step-tab ${activeStep === i ? "active" : ""}`} onClick={() => setActiveStep(i)}>
                    <span style={{ color: BRAND.color, fontWeight: 700, marginRight: 8 }}>{s.num}</span>{s.title}
                  </div>
                ))}
              </div>
              <div style={{ flex: 1, display: "flex", gap: 40 }}>
                <div key={activeStep} className="fade-in" style={{ flex: 1 }}>
                  <div style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: "0.72rem", color: BRAND.color, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 700, marginBottom: 14 }}>Step {HOME_STEPS[activeStep].num} of {HOME_STEPS.length}</div>
                  <h3 style={{ fontSize: "1.7rem", fontWeight: 400, letterSpacing: "-0.02em", marginBottom: 14 }}>{HOME_STEPS[activeStep].title}</h3>
                  <p style={{ fontFamily: "'Helvetica Neue', sans-serif", color: "#555", lineHeight: 1.75 }}>{HOME_STEPS[activeStep].desc}</p>
                  <div style={{ marginTop: 28, display: "flex", gap: 8 }}>
                    {HOME_STEPS.map((_, i) => (
                      <div key={i} onClick={() => setActiveStep(i)} style={{ width: 28, height: 3, background: activeStep === i ? BRAND.color : "#ddd", cursor: "pointer", transition: "background 0.3s", borderRadius: 2 }} />
                    ))}
                  </div>
                </div>
                <div style={{ width: 260, height: 210, background: `linear-gradient(135deg, ${BRAND.colorLight}, ${BRAND.colorMid})`, borderRadius: 6, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "4rem" }}>
                  {HOME_STEPS[activeStep].icon}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Services */}
      <section style={{ background: "#faf9f7" }}>
        <div className="section">
          <h2 style={{ fontSize: isMobile ? "1.6rem" : "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 400, marginBottom: 32, letterSpacing: "-0.02em" }}>How can we help?</h2>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(3, 1fr)", gap: 16 }}>
            {[
              { icon: "🏡", title: "Sell your property", desc: "Expert agents use proven strategies and local knowledge to achieve outstanding results for sellers across Australia.", cta: "Learn more" },
              { icon: "🔍", title: "Find your next home", desc: "Browse curated listings and let our buyer's agents help you find the perfect property at the right price.", cta: "Search properties", action: () => setPage("buy") },
              { icon: "📋", title: "Property management", desc: "Our experienced managers take the stress out of being a landlord — tenant screening, maintenance and beyond.", cta: "Learn more" },
              { icon: "📊", title: "Free market appraisal", desc: "Thinking of selling? Get a free, no-obligation appraisal from a local expert and discover what your property is worth.", cta: "Book appraisal" },
              { icon: "🏘️", title: "Investment advisory", desc: "Whether you're a first-time investor or growing a portfolio, we provide the insights to make smart property decisions.", cta: "Learn more" },
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

      {/* Compare */}
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

      {/* Trust */}
      <section style={{ background: BRAND.colorDark }}>
        <div className="section">
          <h2 style={{ fontSize: isMobile ? "1.5rem" : "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 400, marginBottom: 40, letterSpacing: "-0.02em", color: "white" }}>With Bettersale, you can rest assured knowing that...</h2>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 36 }}>
            {[
              { icon: "🇦🇺", title: "100% Australian owned", desc: "Bettersale is proudly Australian — built by locals, for locals. We understand the nuances of Australian property markets." },
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

      {/* FAQs */}
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
          <div style={{ marginTop: 28 }}><span style={{ fontFamily: "'Helvetica Neue', sans-serif", color: BRAND.color, fontSize: "0.9rem", fontWeight: 600, cursor: "pointer" }}>View all FAQs →</span></div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: BRAND.colorLight, padding: isMobile ? "52px 20px" : "80px 40px", textAlign: "center" }}>
        <h2 style={{ fontSize: isMobile ? "1.7rem" : "clamp(1.8rem, 4vw, 3rem)", fontWeight: 400, letterSpacing: "-0.02em", marginBottom: 14 }}>Ready to get a better result?</h2>
        <p style={{ fontFamily: "'Helvetica Neue', sans-serif", color: "#555", marginBottom: 32, fontSize: "0.95rem" }}>Our expert agents are available 7 days a week, ready to help you buy, sell or invest with confidence.</p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <button className="btn-primary" style={{ fontSize: "1rem", padding: "15px 28px" }}>Book a Free Appraisal</button>
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
        <span style={{ position: "absolute", top: 10, right: 10, background: "rgba(0,0,0,0.5)", color: "white", padding: "3px 8px", borderRadius: 2, fontFamily: "'Helvetica Neue', sans-serif", fontSize: "0.68rem" }}>
          {l.days === 1 ? "New today" : `${l.days}d ago`}
        </span>
      </div>
      <div style={{ padding: 18 }}>
        <div style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: "1.1rem", fontWeight: 700, color: BRAND.color, marginBottom: 4 }}>{l.price}</div>
        <div style={{ fontFamily: "'Helvetica Neue', sans-serif", fontWeight: 600, fontSize: "0.88rem", marginBottom: 3 }}>{l.address}</div>
        <div style={{ fontFamily: "'Helvetica Neue', sans-serif", color: "#888", fontSize: "0.78rem", marginBottom: 12 }}>{l.suburb}</div>
        <div style={{ display: "flex", gap: 12, fontFamily: "'Helvetica Neue', sans-serif", fontSize: "0.8rem", color: "#555", borderTop: "1px solid #f0ede8", paddingTop: 12, flexWrap: "wrap" }}>
          <span>🛏 {l.beds}</span>
          <span>🚿 {l.baths}</span>
          <span>🚗 {l.cars}</span>
          <span>📐 {l.sqm}m²</span>
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

  const buyFaqs = [
    { q: "How does Bettersale help buyers?", a: "We take the stress out of searching by giving you access to exclusive listings, matching you with properties that suit your brief, and connecting you with a dedicated buyer's agent who negotiates on your behalf." },
    { q: "Do I need a buyer's agent?", a: "While it's not compulsory, a buyer's agent can save you significant time and money. We have access to off-market properties and the negotiation experience to help you avoid overpaying in competitive markets." },
    { q: "How do I know if a property is fairly priced?", a: "Every Bettersale listing comes with a free suburb report, recent comparable sales data, and an honest assessment from your agent." },
    { q: "What are the hidden costs of buying?", a: "Buying involves more than just the purchase price. Budget for stamp duty, conveyancing fees, building and pest inspections, and moving costs. Your agent will give you a clear breakdown upfront." },
    { q: "Can I access properties before they're publicly listed?", a: "Yes. Bettersale has an exclusive network of off-market and pre-market properties. Register your brief and we'll contact you before properties hit the public portals." },
  ];

  return (
    <>
      {/* Hero / Search */}
      <section style={{ background: `linear-gradient(135deg, ${BRAND.colorDark} 0%, ${BRAND.color} 100%)`, padding: isMobile ? "52px 20px 44px" : "70px 40px 60px", color: "white" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: "0.75rem", color: "rgba(255,255,255,0.7)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12, fontWeight: 600 }}>Find Your Next Home</div>
          <h1 style={{ fontSize: isMobile ? "2.4rem" : "clamp(2.4rem, 5vw, 3.6rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 12 }}>
            Buy with<br /><em>confidence.</em>
          </h1>
          <p style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: "0.95rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.7, maxWidth: 480, marginBottom: 36 }}>
            Access exclusive listings, off-market properties, and expert buyer's agents who put your interests first.
          </p>

          {/* Search box */}
          <div style={{ background: "white", borderRadius: 6, padding: isMobile ? "16px" : "20px 24px", display: "flex", flexDirection: isMobile ? "column" : "row", gap: 12, alignItems: isMobile ? "stretch" : "flex-end", maxWidth: 900 }}>
            <div style={{ flex: 2, minWidth: 0 }}>
              <label style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: "0.68rem", fontWeight: 700, color: "#888", letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: 6 }}>Suburb or address</label>
              <input className="input-field" placeholder="e.g. Bondi Beach, Manly..." value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
            {(!isMobile || showFilters) && (
              <>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <label style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: "0.68rem", fontWeight: 700, color: "#888", letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: 6 }}>Property type</label>
                  <select className="input-field" value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
                    <option value="All">All types</option>
                    <option value="House">House</option>
                    <option value="Apartment">Apartment</option>
                  </select>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <label style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: "0.68rem", fontWeight: 700, color: "#888", letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: 6 }}>Bedrooms</label>
                  <select className="input-field" value={beds} onChange={(e) => setBeds(e.target.value)}>
                    {["Any", "1", "2", "3", "4"].map((b) => <option key={b} value={b}>{b === "Any" ? "Any" : `${b}+`}</option>)}
                  </select>
                </div>
              </>
            )}
            <div style={{ display: "flex", gap: 8 }}>
              {isMobile && (
                <button className="btn-outline" style={{ flex: 1, padding: "12px", fontSize: "0.85rem" }} onClick={() => setShowFilters(!showFilters)}>
                  {showFilters ? "Less ▲" : "Filters ▼"}
                </button>
              )}
              <button className="btn-primary" style={{ flex: isMobile ? 1 : undefined, padding: "12px 24px" }}>Search</button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust chips */}
      <section style={{ background: "#faf9f7", padding: "20px", borderBottom: "1px solid #e8e4df", overflowX: "auto" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: 10, flexWrap: isMobile ? "nowrap" : "wrap" }}>
          {[["🔒", "Off-market access"], ["🤝", "Dedicated buyer's agent"], ["📊", "Free suburb reports"], ["💰", "No buyer's fee"], ["⭐", "4.9-star rated"]].map(([icon, text]) => (
            <div key={text} className="trust-chip"><span>{icon}</span><span>{text}</span></div>
          ))}
        </div>
      </section>

      {/* Listings */}
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
            ? <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(3, 1fr)", gap: 20 }}>
                {filtered.map((l) => <PropCard key={l.id} l={l} />)}
              </div>
            : (
              <div style={{ textAlign: "center", padding: "64px 20px", color: "#888" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: 14 }}>🔍</div>
                <p style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: "1rem", marginBottom: 8 }}>No properties match your search.</p>
                <p style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: "0.85rem" }}>Try adjusting your filters or <span style={{ color: BRAND.color, cursor: "pointer", fontWeight: 600 }}>register your brief</span>.</p>
              </div>
            )}

          <div style={{ marginTop: 44, paddingTop: 36, borderTop: "1px solid #e8e4df", textAlign: "center" }}>
            <p style={{ fontFamily: "'Helvetica Neue', sans-serif", color: "#666", marginBottom: 18, fontSize: "0.9rem" }}>Can't find what you're looking for? Register your brief and we'll match you — including off-market opportunities.</p>
            <button className="btn-primary">Register My Brief</button>
          </div>
        </div>
      </section>

      {/* How buying works */}
      <section style={{ background: "#faf9f7" }}>
        <div className="section">
          <h2 style={{ fontSize: isMobile ? "1.5rem" : "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 400, marginBottom: 10, letterSpacing: "-0.02em" }}>How buying with Bettersale works.</h2>
          <p style={{ fontFamily: "'Helvetica Neue', sans-serif", color: "#666", marginBottom: 40, fontSize: "0.95rem" }}>We take the complexity out of buying so you can focus on finding the right home.</p>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)", gap: isMobile ? 20 : 32 }}>
            {[
              { num: "01", icon: "📋", title: "Tell us your brief.", desc: "Share your must-haves, budget, and preferred suburbs with your buyer's agent." },
              { num: "02", icon: "🔍", title: "We search for you.", desc: "We tap into public listings, off-market properties, and our exclusive network." },
              { num: "03", icon: "🏠", title: "We inspect & shortlist.", desc: "Your agent attends inspections on your behalf and presents only the best." },
              { num: "04", icon: "🤝", title: "We negotiate & settle.", desc: "We handle all negotiations, paperwork and liaise with solicitors for you." },
            ].map((s) => (
              <div key={s.num} style={{ background: "white", padding: "20px", borderRadius: 6, border: "1px solid #e8e4df" }}>
                <div style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: "0.68rem", fontWeight: 700, color: BRAND.color, letterSpacing: "0.12em", marginBottom: 10 }}>{s.num}</div>
                <div style={{ fontSize: "1.6rem", marginBottom: 10 }}>{s.icon}</div>
                <h3 style={{ fontFamily: "'Helvetica Neue', sans-serif", fontWeight: 600, fontSize: "0.9rem", marginBottom: 7 }}>{s.title}</h3>
                <p style={{ fontFamily: "'Helvetica Neue', sans-serif", color: "#666", fontSize: "0.82rem", lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Buyer trust */}
      <section style={{ background: BRAND.colorDark }}>
        <div className="section">
          <h2 style={{ fontSize: isMobile ? "1.5rem" : "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 400, marginBottom: 40, letterSpacing: "-0.02em", color: "white" }}>Why buyers choose Bettersale.</h2>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 36 }}>
            {[
              { icon: "🏆", title: "Access to off-market listings", desc: "Many of our best properties are never publicly advertised. Registered buyers get first access." },
              { icon: "💼", title: "Expert negotiation on your side", desc: "Our buyer's agents work exclusively for you — not the seller. We know how to secure the right price." },
              { icon: "📊", title: "Data-driven suburb insights", desc: "Every recommendation comes with recent sales data, growth trends, and honest advice." },
              { icon: "🆓", title: "No cost to buyers", desc: "Our buyer's agent service is completely free for residential buyers. Expert representation at no extra cost." },
            ].map((t) => (
              <div key={t.title}>
                <div style={{ fontSize: "1.8rem", marginBottom: 10 }}>{t.icon}</div>
                <h3 style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: "0.95rem", fontWeight: 600, marginBottom: 8, color: "white" }}>{t.title}</h3>
                <p style={{ fontFamily: "'Helvetica Neue', sans-serif", color: "rgba(255,255,255,0.7)", fontSize: "0.88rem", lineHeight: 1.65 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section style={{ background: "white" }}>
        <div className="section" style={{ maxWidth: 800 }}>
          <h2 style={{ fontSize: isMobile ? "1.5rem" : "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 400, marginBottom: 40, letterSpacing: "-0.02em" }}>Buyer FAQs.</h2>
          {buyFaqs.map((faq, i) => (
            <div key={i} className="faq-item">
              <div className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <span>{faq.q}</span>
                <span style={{ color: BRAND.color, fontSize: "1.4rem", flexShrink: 0, display: "inline-block", transform: openFaq === i ? "rotate(45deg)" : "none", transition: "transform 0.2s" }}>+</span>
              </div>
              {openFaq === i && <div className="faq-a fade-in">{faq.a}</div>}
            </div>
          ))}
          <div style={{ marginTop: 28 }}><span style={{ fontFamily: "'Helvetica Neue', sans-serif", color: BRAND.color, fontSize: "0.9rem", fontWeight: 600, cursor: "pointer" }}>View all buyer FAQs →</span></div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: BRAND.colorLight, padding: isMobile ? "52px 20px" : "80px 40px", textAlign: "center" }}>
        <h2 style={{ fontSize: isMobile ? "1.7rem" : "clamp(1.8rem, 4vw, 3rem)", fontWeight: 400, letterSpacing: "-0.02em", marginBottom: 14 }}>Ready to find your next home?</h2>
        <p style={{ fontFamily: "'Helvetica Neue', sans-serif", color: "#555", marginBottom: 32, fontSize: "0.95rem" }}>Speak with a Bettersale buyer's agent today — obligation free.</p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <button className="btn-primary" style={{ fontSize: "1rem", padding: "15px 28px" }}>Register My Brief</button>
          <button className="btn-outline" style={{ fontSize: "1rem", padding: "15px 28px" }}>{BRAND.phone}</button>
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
