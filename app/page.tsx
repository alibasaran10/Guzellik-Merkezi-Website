"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const hizmetler = [
    {
      isim: "Lazer Epilasyon",
      aciklama: "Son teknoloji lazer cihazlarıyla kalıcı ve ağrısız epilasyon çözümleri. Tüm cilt tiplerine uygun uygulama.",
      ikon: "✦",
    },
    {
      isim: "Cilt Uygulamaları",
      aciklama: "Cildinizi yenileyen profesyonel cilt bakım uygulamaları. Hydrafacial, dermapen ve daha fazlası.",
      ikon: "◈",
    },
    {
      isim: "Bölgesel İncelme",
      aciklama: "Vücudunuzu şekillendiren özel bölgesel incelme seansları ile istediğiniz forma kavuşun.",
      ikon: "◇",
    },
    {
      isim: "Profesyonel Bakım",
      aciklama: "Kişiye özel hazırlanan profesyonel bakım programları ile güzelliğinizi ortaya çıkarıyoruz.",
      ikon: "❋",
    },
    {
      isim: "CO2 Carboxy Terapi",
      aciklama: "Karbondioksit gazı ile uygulanan yenilikçi terapi yöntemi. Cilt yenileme ve sıkılaştırma.",
      ikon: "◉",
    },
    {
      isim: "Kaş Laminasyonu",
      aciklama: "Kaşlarınıza doğal ve dolgun bir görünüm kazandıran laminasyon işlemi ile mükemmel kaşlara sahip olun.",
      ikon: "⌘",
    },
    {
      isim: "Kaş & Kirpik Liftingi",
      aciklama: "Kaş ve kirpiklerinizi şekillendiren lifting işlemi ile gözlerinize derinlik ve ifade katın.",
      ikon: "✿",
    },
  ];

  const navLinks = [
    { href: "#anasayfa", label: "ANASAYFA" },
    { href: "#hizmetler", label: "HİZMETLER" },
    { href: "#hakkimizda", label: "HAKKIMIZDA" },
    { href: "#iletisim", label: "İLETİŞİM" },
  ];

  return (
      <>
        <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Montserrat:wght@300;400;500;600&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        :root {
          --gold: #C9A84C;
          --gold-light: #E2C97E;
          --gold-dark: #9A7B2F;
          --black: #0A0A0A;
          --black-soft: #111111;
          --black-card: #161616;
          --white: #F8F4EE;
          --white-soft: #EDE8DF;
          --gray: #888880;
        }

        html { scroll-behavior: smooth; }

        body {
          background: var(--black);
          color: var(--white);
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          overflow-x: hidden;
        }

        /* NAV */
        nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          padding: 24px 60px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: all 0.4s ease;
        }
        nav.scrolled {
          background: rgba(10,10,10,0.95);
          backdrop-filter: blur(12px);
          padding: 16px 60px;
          border-bottom: 1px solid rgba(201,168,76,0.15);
        }
        .nav-logo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 20px;
          font-weight: 500;
          letter-spacing: 3px;
          color: var(--gold);
          text-decoration: none;
          text-transform: uppercase;
        }
        .nav-logo span {
          display: block;
          font-size: 11px;
          letter-spacing: 5px;
          color: var(--white-soft);
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
        }
        .nav-links {
          display: flex;
          gap: 40px;
          list-style: none;
        }
        .nav-links a {
          color: var(--white-soft);
          text-decoration: none;
          font-size: 11px;
          letter-spacing: 3px;
          font-weight: 500;
          transition: color 0.3s;
          position: relative;
        }
        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -4px; left: 0;
          width: 0; height: 1px;
          background: var(--gold);
          transition: width 0.3s;
        }
        .nav-links a:hover { color: var(--gold); }
        .nav-links a:hover::after { width: 100%; }
        .nav-phone {
          color: var(--gold);
          text-decoration: none;
          font-size: 12px;
          letter-spacing: 2px;
          font-weight: 500;
          border: 1px solid rgba(201,168,76,0.4);
          padding: 8px 20px;
          transition: all 0.3s;
        }
        .nav-phone:hover {
          background: var(--gold);
          color: var(--black);
        }
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          background: none;
          border: none;
          padding: 4px;
        }
        .hamburger span {
          display: block;
          width: 24px;
          height: 1px;
          background: var(--gold);
          transition: all 0.3s;
        }
        .mobile-menu {
          display: none;
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: var(--black);
          z-index: 99;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 40px;
        }
        .mobile-menu.open { display: flex; }
        .mobile-menu a {
          color: var(--white);
          text-decoration: none;
          font-family: 'Cormorant Garamond', serif;
          font-size: 36px;
          letter-spacing: 4px;
          transition: color 0.3s;
        }
        .mobile-menu a:hover { color: var(--gold); }
        .mobile-close {
          position: absolute;
          top: 24px; right: 30px;
          background: none;
          border: none;
          color: var(--gold);
          font-size: 28px;
          cursor: pointer;
        }

        /* HERO */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          background: var(--black);
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(ellipse 60% 60% at 70% 50%, rgba(201,168,76,0.06) 0%, transparent 70%),
            radial-gradient(ellipse 40% 40% at 20% 80%, rgba(201,168,76,0.04) 0%, transparent 60%);
        }
        .hero-lines {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px);
          background-size: 80px 80px;
        }
        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 0 20px;
          max-width: 900px;
        }
        .hero-badge {
          display: inline-block;
          font-size: 10px;
          letter-spacing: 6px;
          color: var(--gold);
          border: 1px solid rgba(201,168,76,0.3);
          padding: 8px 24px;
          margin-bottom: 48px;
          text-transform: uppercase;
        }
        .hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(52px, 8vw, 96px);
          font-weight: 300;
          line-height: 1.05;
          letter-spacing: 2px;
          color: var(--white);
          margin-bottom: 12px;
        }
        .hero-title em {
          font-style: italic;
          color: var(--gold);
        }
        .hero-subtitle {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(28px, 4vw, 48px);
          font-weight: 300;
          color: var(--white-soft);
          letter-spacing: 6px;
          margin-bottom: 40px;
          text-transform: uppercase;
        }
        .hero-desc {
          font-size: 13px;
          letter-spacing: 1px;
          color: var(--gray);
          line-height: 2;
          max-width: 500px;
          margin: 0 auto 56px;
        }
        .hero-btns {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .btn-gold {
          background: var(--gold);
          color: var(--black);
          padding: 16px 40px;
          font-size: 11px;
          letter-spacing: 3px;
          font-weight: 600;
          text-decoration: none;
          text-transform: uppercase;
          transition: all 0.3s;
          display: inline-block;
        }
        .btn-gold:hover { background: var(--gold-light); }
        .btn-outline {
          border: 1px solid rgba(201,168,76,0.4);
          color: var(--gold);
          padding: 16px 40px;
          font-size: 11px;
          letter-spacing: 3px;
          font-weight: 500;
          text-decoration: none;
          text-transform: uppercase;
          transition: all 0.3s;
          display: inline-block;
        }
        .btn-outline:hover {
          background: rgba(201,168,76,0.08);
          border-color: var(--gold);
        }
        .hero-scroll {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          color: var(--gray);
          font-size: 10px;
          letter-spacing: 3px;
          text-transform: uppercase;
        }
        .scroll-line {
          width: 1px;
          height: 48px;
          background: linear-gradient(to bottom, var(--gold), transparent);
          animation: scrollAnim 2s ease-in-out infinite;
        }
        @keyframes scrollAnim {
          0%, 100% { opacity: 0.3; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.2); }
        }

        /* SECTION */
        section { padding: 120px 60px; }
        .section-label {
          font-size: 10px;
          letter-spacing: 6px;
          color: var(--gold);
          text-transform: uppercase;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .section-label::before {
          content: '';
          display: block;
          width: 40px;
          height: 1px;
          background: var(--gold);
        }
        .section-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(36px, 5vw, 60px);
          font-weight: 300;
          line-height: 1.1;
          color: var(--white);
          margin-bottom: 24px;
        }
        .section-title em {
          font-style: italic;
          color: var(--gold);
        }
        .section-desc {
          color: var(--gray);
          font-size: 13px;
          line-height: 2;
          max-width: 500px;
        }
        .divider {
          width: 60px;
          height: 1px;
          background: var(--gold);
          margin: 40px 0;
        }

        /* HİZMETLER */
        .hizmetler-section { background: var(--black-soft); }
        .hizmetler-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2px;
          margin-top: 72px;
        }
        .hizmet-card {
          background: var(--black-card);
          padding: 48px 40px;
          border: 1px solid rgba(201,168,76,0.06);
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }
        .hizmet-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 0; height: 2px;
          background: var(--gold);
          transition: width 0.4s ease;
        }
        .hizmet-card:hover::before { width: 100%; }
        .hizmet-card:hover {
          background: #1A1A1A;
          transform: translateY(-4px);
        }
        .hizmet-ikon {
          font-size: 24px;
          color: var(--gold);
          margin-bottom: 24px;
          display: block;
        }
        .hizmet-isim {
          font-family: 'Cormorant Garamond', serif;
          font-size: 24px;
          font-weight: 500;
          color: var(--white);
          margin-bottom: 16px;
          letter-spacing: 1px;
        }
        .hizmet-aciklama {
          color: var(--gray);
          font-size: 12px;
          line-height: 2;
        }

        /* HAKKIMIZDA */
        .hakkimizda-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 100px;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }
        .hakkimizda-visual {
          position: relative;
        }
        .hakkimizda-box {
          aspect-ratio: 3/4;
          background: var(--black-card);
          border: 1px solid rgba(201,168,76,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
        .hakkimizda-box-inner {
          font-family: 'Cormorant Garamond', serif;
          font-size: 80px;
          color: rgba(201,168,76,0.08);
          letter-spacing: 4px;
          text-align: center;
          font-style: italic;
        }
        .hakkimizda-badge {
          position: absolute;
          bottom: -24px;
          right: -24px;
          width: 120px;
          height: 120px;
          background: var(--gold);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .hakkimizda-badge-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 40px;
          font-weight: 600;
          color: var(--black);
          line-height: 1;
        }
        .hakkimizda-badge-text {
          font-size: 9px;
          letter-spacing: 2px;
          color: var(--black);
          text-transform: uppercase;
          text-align: center;
        }
        .ozellik {
          display: flex;
          gap: 20px;
          margin-bottom: 32px;
          align-items: flex-start;
        }
        .ozellik-ikon {
          color: var(--gold);
          font-size: 18px;
          margin-top: 2px;
          flex-shrink: 0;
        }
        .ozellik-baslik {
          font-family: 'Cormorant Garamond', serif;
          font-size: 20px;
          font-weight: 500;
          color: var(--white);
          margin-bottom: 6px;
        }
        .ozellik-aciklama {
          font-size: 12px;
          color: var(--gray);
          line-height: 1.8;
        }

        /* İLETİŞİM */
        .iletisim-section { background: var(--black-soft); }
        .iletisim-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          max-width: 1100px;
          margin: 72px auto 0;
        }
        .iletisim-info-item {
          display: flex;
          gap: 20px;
          margin-bottom: 40px;
          align-items: flex-start;
        }
        .iletisim-ikon {
          color: var(--gold);
          font-size: 18px;
          margin-top: 2px;
          flex-shrink: 0;
        }
        .iletisim-label {
          font-size: 10px;
          letter-spacing: 3px;
          color: var(--gold);
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        .iletisim-value {
          font-family: 'Cormorant Garamond', serif;
          font-size: 20px;
          color: var(--white);
          line-height: 1.6;
        }
        .iletisim-value a {
          color: var(--white);
          text-decoration: none;
          transition: color 0.3s;
        }
        .iletisim-value a:hover { color: var(--gold); }
        .sosyal-linkler {
          display: flex;
          gap: 16px;
          margin-top: 40px;
        }
        .sosyal-link {
          border: 1px solid rgba(201,168,76,0.3);
          color: var(--gold);
          text-decoration: none;
          padding: 12px 24px;
          font-size: 11px;
          letter-spacing: 2px;
          transition: all 0.3s;
          text-transform: uppercase;
        }
        .sosyal-link:hover {
          background: var(--gold);
          color: var(--black);
        }
        .randevu-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .randevu-form input,
        .randevu-form select,
        .randevu-form textarea {
          background: var(--black-card);
          border: 1px solid rgba(201,168,76,0.15);
          color: var(--white);
          padding: 16px 20px;
          font-family: 'Montserrat', sans-serif;
          font-size: 12px;
          letter-spacing: 1px;
          outline: none;
          transition: border-color 0.3s;
          width: 100%;
        }
        .randevu-form input:focus,
        .randevu-form select:focus,
        .randevu-form textarea:focus {
          border-color: var(--gold);
        }
        .randevu-form select option { background: var(--black-card); }
        .randevu-form textarea { resize: none; height: 120px; }
        .randevu-form input::placeholder,
        .randevu-form textarea::placeholder { color: var(--gray); }

        /* CTA */
        .cta-section {
          text-align: center;
          background: var(--black);
          padding: 100px 60px;
          position: relative;
          overflow: hidden;
        }
        .cta-bg {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 50% 80% at 50% 50%, rgba(201,168,76,0.05) 0%, transparent 70%);
        }
        .cta-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(36px, 5vw, 60px);
          font-weight: 300;
          color: var(--white);
          margin-bottom: 24px;
          position: relative;
        }
        .cta-title em { color: var(--gold); font-style: italic; }
        .cta-btns {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
          position: relative;
          margin-top: 40px;
        }

        /* FOOTER */
        footer {
          background: var(--black);
          border-top: 1px solid rgba(201,168,76,0.1);
          padding: 48px 60px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
        }
        .footer-logo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 18px;
          color: var(--gold);
          letter-spacing: 3px;
        }
        .footer-copy {
          font-size: 11px;
          color: var(--gray);
          letter-spacing: 1px;
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          nav { padding: 20px 24px; }
          nav.scrolled { padding: 14px 24px; }
          .nav-links, .nav-phone { display: none; }
          .hamburger { display: flex; }
          section { padding: 80px 24px; }
          .hakkimizda-inner { grid-template-columns: 1fr; gap: 60px; }
          .hakkimizda-visual { display: none; }
          .iletisim-inner { grid-template-columns: 1fr; gap: 48px; }
          footer { padding: 32px 24px; flex-direction: column; text-align: center; }
          .cta-section { padding: 80px 24px; }
        }
      `}</style>

        {/* NAV */}
        <nav className={scrolled ? "scrolled" : ""}>
          <a href="#anasayfa" className="nav-logo">
            Büşra Ak
            <span>Güzellik Merkezi</span>
          </a>
          <ul className="nav-links">
            {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
            ))}
          </ul>
          <a href="tel:05468794610" className="nav-phone">0546 879 46 10</a>
          <button className="hamburger" onClick={() => setMenuOpen(true)}>
            <span /><span /><span />
          </button>
        </nav>

        {/* MOBİL MENU */}
        <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
          <button className="mobile-close" onClick={() => setMenuOpen(false)}>✕</button>
          {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
          ))}
          <a href="tel:05468794610" onClick={() => setMenuOpen(false)} style={{fontSize: "20px", letterSpacing: "2px"}}>0546 879 46 10</a>
        </div>

        {/* HERO */}
        <section id="anasayfa" className="hero">
          <div className="hero-bg" />
          <div className="hero-lines" />
          <div className="hero-content">
            <div className="hero-badge">✦ Premium Güzellik Merkezi — Balıkesir</div>
            <h1 className="hero-title">
              Güzelliğinize<br /><em>Değer Katıyoruz</em>
            </h1>
            <p className="hero-subtitle">Büşra Ak Güzellik</p>
            <p className="hero-desc">
              Profesyonel ekibimiz ve son teknoloji cihazlarımızla, güzelliğinizi ön plana çıkarıyor, kendinizi özel hissetmenizi sağlıyoruz.
            </p>
            <div className="hero-btns">
              <a href="#iletisim" className="btn-gold">Randevu Al</a>
              <a href="#hizmetler" className="btn-outline">Hizmetlerimiz</a>
            </div>
          </div>
          <div className="hero-scroll">
            <div className="scroll-line" />
            <span>Keşfet</span>
          </div>
        </section>

        {/* HİZMETLER */}
        <section id="hizmetler" className="hizmetler-section">
          <div style={{maxWidth: "1200px", margin: "0 auto"}}>
            <div className="section-label">Hizmetlerimiz</div>
            <h2 className="section-title">Profesyonel<br /><em>Güzellik Hizmetleri</em></h2>
            <p className="section-desc">
              En son teknoloji ve uzman ekibimizle, güzellik ihtiyaçlarınız için kapsamlı çözümler sunuyoruz. Her uygulama kişiye özel planlanır.
            </p>
            <div className="hizmetler-grid">
              {hizmetler.map((h) => (
                  <div key={h.isim} className="hizmet-card">
                    <span className="hizmet-ikon">{h.ikon}</span>
                    <div className="hizmet-isim">{h.isim}</div>
                    <p className="hizmet-aciklama">{h.aciklama}</p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* HAKKIMIZDA */}
        <section id="hakkimizda">
          <div className="hakkimizda-inner">
            <div className="hakkimizda-visual">
              <div className="hakkimizda-box">
                <div className="hakkimizda-box-inner">Güzellik<br />Sanatı</div>
              </div>
              <div className="hakkimizda-badge">
                <div className="hakkimizda-badge-num">7/24</div>
                <div className="hakkimizda-badge-text">Hizmet<br />Anlayışı</div>
              </div>
            </div>
            <div>
              <div className="section-label">Hakkımızda</div>
              <h2 className="section-title">Güzelliğin<br /><em>Adresi</em></h2>
              <p className="section-desc">
                Büşra Ak Güzellik Merkezi olarak Balıkesir&apos;de profesyonel güzellik hizmetleri sunuyoruz. Uzman ekibimiz ve modern cihazlarımızla her müşterimize özel çözümler üretiyoruz.
              </p>
              <div className="divider" />
              {[
                { ikon: "✦", baslik: "Uzman Kadro", aciklama: "Alanında deneyimli, sertifikalı güzellik uzmanlarımızla güvende olun." },
                { ikon: "◈", baslik: "Son Teknoloji", aciklama: "En güncel cihazlar ve tekniklerle üstün sonuçlar elde ediyoruz." },
                { ikon: "❋", baslik: "Kişiye Özel", aciklama: "Her müşterimize özel bakım programı hazırlıyor, bireysel ihtiyaçları gözetiyoruz." },
              ].map((o) => (
                  <div key={o.baslik} className="ozellik">
                    <div className="ozellik-ikon">{o.ikon}</div>
                    <div>
                      <div className="ozellik-baslik">{o.baslik}</div>
                      <div className="ozellik-aciklama">{o.aciklama}</div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <div className="cta-bg" />
          <div className="section-label" style={{justifyContent: "center"}}>Randevu</div>
          <h2 className="cta-title">Güzelliğinizi<br /><em>Keşfedin</em></h2>
          <p style={{color: "var(--gray)", fontSize: "13px", letterSpacing: "1px", position: "relative"}}>
            Profesyonel ekibimizle tanışın ve kişiye özel bakım programınızı oluşturalım.
          </p>
          <div className="cta-btns">
            <a href="tel:05468794610" className="btn-gold">Hemen Ara</a>
            <a href="https://wa.me/905468794610" target="_blank" rel="noopener noreferrer" className="btn-outline">WhatsApp</a>
          </div>
        </section>

        {/* İLETİŞİM */}
        <section id="iletisim" className="iletisim-section">
          <div style={{maxWidth: "1100px", margin: "0 auto"}}>
            <div className="section-label">İletişim</div>
            <h2 className="section-title">Bizimle<br /><em>İletişime Geçin</em></h2>
            <div className="iletisim-inner">
              <div>
                {[
                  { ikon: "◎", label: "Adres", value: <>Eski Kuyumcular Mah. Milli Kuvvetler Cad.<br />No:52, Balıkesir</> },
                  { ikon: "✆", label: "Telefon", value: <a href="tel:05468794610">0546 879 46 10</a> },
                  { ikon: "◷", label: "Çalışma Saatleri", value: <>Haftanın 7 Günü<br />10:00 — 00:00</> },
                ].map((item) => (
                    <div key={item.label} className="iletisim-info-item">
                      <div className="iletisim-ikon">{item.ikon}</div>
                      <div>
                        <div className="iletisim-label">{item.label}</div>
                        <div className="iletisim-value">{item.value}</div>
                      </div>
                    </div>
                ))}
                <div className="sosyal-linkler">
                  <a href="https://instagram.com/busraakguzellik" target="_blank" rel="noopener noreferrer" className="sosyal-link">
                    Instagram
                  </a>
                  <a href="https://wa.me/905468794610" target="_blank" rel="noopener noreferrer" className="sosyal-link">
                    WhatsApp
                  </a>
                </div>
              </div>
              <div>
                <div className="section-label" style={{marginBottom: "32px"}}>Randevu Formu</div>
                <div className="randevu-form">
                  <input type="text" placeholder="Adınız Soyadınız" />
                  <input type="tel" placeholder="Telefon Numaranız" />
                  <select>
                    <option value="">Hizmet Seçiniz</option>
                    {hizmetler.map((h) => (
                        <option key={h.isim} value={h.isim}>{h.isim}</option>
                    ))}
                  </select>
                  <textarea placeholder="Notunuz (isteğe bağlı)" />
                  <a href="https://wa.me/905468794610" target="_blank" rel="noopener noreferrer" className="btn-gold" style={{textAlign: "center"}}>
                    Randevu Talebi Gönder
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer>
          <div className="footer-logo">Büşra Ak Güzellik Merkezi</div>
          <div className="footer-copy">© 2026 Büşra Ak Güzellik Merkezi. Tüm hakları saklıdır.</div>
        </footer>
      </>
  );
}
