"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { getLocalizedPath } from "@/i18n/routing";

export default function Footer() {
  const { t, lang } = useLanguage();

  return (
    <footer className="footer section">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href={getLocalizedPath(lang, "/")} className="logo">
              <Image src="/logo.webp" alt="Echopoint AI" className="logo-img" width={200} height={75} />
            </Link>
            <p>
              {t('footer.desc')}
            </p>
          </div>
          
          <div className="footer-nav">
            <h4>{t('footer.nav')}</h4>
            <ul>
              <li><Link href={getLocalizedPath(lang, "/")}>Home</Link></li>
              <li><Link href={getLocalizedPath(lang, "/nosotros")}>{t('nav.about')}</Link></li>
              <li><Link href={getLocalizedPath(lang, "/blog")}>{t('nav.blog')}</Link></li>
              <li><Link href={getLocalizedPath(lang, "/contacto")}>{t('nav.contact')}</Link></li>
            </ul>
          </div>
          <div className="footer-nav">
            <h4>{t('services.title')}</h4>
            <ul>
              <li><Link href={getLocalizedPath(lang, "/servicios")}>Power BI</Link></li>
              <li><Link href={getLocalizedPath(lang, "/servicios")}>{t('services.s1.title')}</Link></li>
              <li><Link href={getLocalizedPath(lang, "/servicios")}>{t('services.s3.title')}</Link></li>
              <li><Link href={getLocalizedPath(lang, "/servicios")}>{t('services.s4.title')}</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>{t('footer.contact')}</h4>
            <ul className="contact-links">
              <li><a href="mailto:contacto@echopointmx.com"><i className="fa-solid fa-envelope"></i> contacto@echopointmx.com</a></li>
              <li><a href="tel:+525525056854"><i className="fa-solid fa-phone"></i> +52 55 25056854</a></li>
              <li><span><i className="fa-solid fa-location-dot"></i> Av. Ricardo Margain Zozaya 335-Piso 4 y 5,<br />Zona Santa Engracia, 66265<br />San Pedro Garza García, N.L.</span></li>
            </ul>
          </div>
          
          <div className="footer-social">
            <h4>{t('footer.follow')}</h4>
            <div className="social-links">
              <a href="https://linkedin.com/company/echopoint-ai" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
              <a href="https://x.com/echopoint_ai" aria-label="X (Twitter)" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-x-twitter"></i></a>
              <a href="https://instagram.com/echopoint_ai" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Echopoint AI. All rights reserved.</p>
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
