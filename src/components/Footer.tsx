"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { getLocalizedPath } from "@/i18n/routing";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faEnvelope, 
  faPhone, 
  faLocationDot 
} from "@fortawesome/free-solid-svg-icons";
import { 
  faLinkedinIn, 
  faXTwitter, 
  faInstagram 
} from "@fortawesome/free-brands-svg-icons";

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
            <h3>{t('footer.nav')}</h3>
            <ul>
              <li><Link href={getLocalizedPath(lang, "/")}>Home</Link></li>
              <li><Link href={getLocalizedPath(lang, "/nosotros")}>{t('nav.about')}</Link></li>
              <li><Link href={getLocalizedPath(lang, "/blog")}>{t('nav.blog')}</Link></li>
              <li><Link href={getLocalizedPath(lang, "/contacto")}>{t('nav.contact')}</Link></li>
            </ul>
          </div>
          <div className="footer-nav">
            <h3>{t('nav.services')}</h3>
            <ul>
              <li><Link href={getLocalizedPath(lang, "/servicios")}>Power BI</Link></li>
              <li><Link href={getLocalizedPath(lang, "/servicios")}>{t('services.s1.title')}</Link></li>
              <li><Link href={getLocalizedPath(lang, "/servicios")}>{t('services.s3.title')}</Link></li>
              <li><Link href={getLocalizedPath(lang, "/servicios")}>{t('services.s4.title')}</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>{t('footer.contact')}</h3>
            <ul className="contact-links">
              <li><a href="mailto:contacto@echopointmx.com"><FontAwesomeIcon icon={faEnvelope} /> contacto@echopointmx.com</a></li>
              <li><a href="tel:+525525056854"><FontAwesomeIcon icon={faPhone} /> +52 55 25056854</a></li>
              <li><span><FontAwesomeIcon icon={faLocationDot} /> Av. Ricardo Margain Zozaya 335-Piso 4 y 5,<br />Zona Santa Engracia, 66265<br />San Pedro Garza García, N.L.</span></li>
            </ul>
          </div>
          
          <div className="footer-social">
            <h3>{t('footer.follow')}</h3>
            <div className="social-links">
              <a href="https://linkedin.com/company/echopoint-ai" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a>
              <a href="https://x.com/echopoint_ai" aria-label="X (Twitter)" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faXTwitter} /></a>
              <a href="https://instagram.com/echopoint_ai" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
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
