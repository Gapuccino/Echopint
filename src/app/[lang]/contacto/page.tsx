"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimationObserver from "@/components/AnimationObserver";
import ContactForm from "@/components/ContactForm";
import FaqAccordion from "@/components/FaqAccordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

import { useLanguage } from "@/context/LanguageContext";

export default function ContactoPage() {
  const { t } = useLanguage();

  return (
    <>
      <AnimationObserver />
      <Navbar />

      <main id="main-content" className="container section" style={{ paddingTop: "8rem" }}>
        <div className="section-header fade-in-up">
          <h1>{t('contact.title')}</h1>
          <p>{t('contact.desc')}</p>
        </div>

        <div className="contact-grid fade-in-up" style={{ marginTop: "4rem" }}>
          <div className="contact-info">
            <h2>{t('contact.infoTitle')}</h2>
            <p>{t('contact.infoDesc')}</p>
            
            <div className="info-list" style={{ marginTop: "2rem" }}>
              <div className="info-item">
                <div className="icon"><FontAwesomeIcon icon={faEnvelope} /></div>
                <a href="mailto:contacto@echopointmx.com">contacto@echopointmx.com</a>
              </div>
              <div className="info-item">
                <div className="icon"><FontAwesomeIcon icon={faPhone} /></div>
                <a href="tel:+525525056854">+52 55 25056854</a>
              </div>
              <div className="info-item">
                <div className="icon"><FontAwesomeIcon icon={faLocationDot} /></div>
                <span>Av. Ricardo Margain Zozaya 335-Piso 4 y 5,<br/>Zona Santa Engracia, 66265<br/>San Pedro Garza García, N.L.</span>
              </div>
            </div>
          </div>
          
          <ContactForm />
        </div>
      </main>

      <section className="section faq-section" style={{ background: "var(--bg-secondary)" }}>
        <div className="container">
          <div className="section-header fade-in-up">
            <h2>{t('contact.faqTitle')}</h2>
            <p>{t('contact.faqDesc')}</p>
          </div>
          <FaqAccordion />
        </div>
      </section>


      <Footer />
    </>
  );
}
