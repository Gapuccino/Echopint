"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { getLocalizedPath } from "@/i18n/routing";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header className="header">
      <div className="container navbar">
        <Link href={getLocalizedPath(lang, "/")} className="logo" onClick={() => setMobileOpen(false)}>
          <Image 
            src="/logo.webp" 
            alt="Echopoint AI" 
            className="logo-img" 
            width={200} 
            height={65} 
            priority 
            fetchPriority="high"
            sizes="200px"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="nav-menu nav-desktop">
          <ul className="nav-list">
            <li><Link href={getLocalizedPath(lang, "/servicios")} className={`nav-link ${pathname.includes("servicios") || pathname.includes("services") || pathname.includes("servicos") ? "active" : ""}`}>{t('nav.services')}</Link></li>
            <li><Link href={getLocalizedPath(lang, "/nosotros")} className={`nav-link ${pathname.includes("nosotros") || pathname.includes("about") || pathname.includes("a-propos") || pathname.includes("sobre-nos") ? "active" : ""}`}>{t('nav.about')}</Link></li>
            <li><Link href={getLocalizedPath(lang, "/blog")} className={`nav-link ${pathname.includes("blog") ? "active" : ""}`}>{t('nav.blog')}</Link></li>
            <li className="lang-dropdown-container">
              <button className="lang-toggle" aria-haspopup="true" aria-expanded="false" aria-label="Cambiar idioma">
                <FontAwesomeIcon icon={faGlobe} /> {lang}
              </button>
              <ul className="lang-menu" role="menu">
                <li role="none"><button onClick={() => setLang("ES")} role="menuitem">Español (ES)</button></li>
                <li role="none"><button onClick={() => setLang("EN")} role="menuitem">English (EN)</button></li>
                <li role="none"><button onClick={() => setLang("FR")} role="menuitem">Français (FR)</button></li>
                <li role="none"><button onClick={() => setLang("PT")} role="menuitem">Português (PT)</button></li>
              </ul>
            </li>
            <li><Link href={getLocalizedPath(lang, "/contacto")} className="nav-cta">{t('nav.contact')}</Link></li>
          </ul>
        </nav>

        {/* Mobile hamburger button */}
        <button
          className={`mobile-menu-btn ${mobileOpen ? "open" : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
          aria-expanded={mobileOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile overlay menu */}
      <div className={`mobile-overlay ${mobileOpen ? "active" : ""}`}>
        <nav className="mobile-nav">
          <Link href={getLocalizedPath(lang, "/servicios")} className="mobile-link" onClick={() => setMobileOpen(false)}>{t('nav.services')}</Link>
          <Link href={getLocalizedPath(lang, "/nosotros")} className="mobile-link" onClick={() => setMobileOpen(false)}>{t('nav.about')}</Link>
          <Link href={getLocalizedPath(lang, "/blog")} className="mobile-link" onClick={() => setMobileOpen(false)}>{t('nav.blog')}</Link>
          <Link href={getLocalizedPath(lang, "/contacto")} className="mobile-link mobile-cta" onClick={() => setMobileOpen(false)}>{t('nav.contact')}</Link>

          <div className="mobile-lang-selector">
            {(["ES", "EN", "FR", "PT"] as const).map((code) => (
              <button
                key={code}
                className={`mobile-lang-btn ${lang === code ? "active" : ""}`}
                onClick={() => { setLang(code); setMobileOpen(false); }}
              >
                {code}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
