"use client";

import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimationObserver from "@/components/AnimationObserver";
import ContactForm from "@/components/ContactForm";

import { useLanguage } from "@/context/LanguageContext";

import { dictionaries } from "@/i18n/dictionaries";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const { t, lang } = useLanguage();

  // Find the service by slug in both 'services' and 'pbi' dictionary sections
  const servicesData = dictionaries[lang].services;
  const pbiData = dictionaries[lang].pbi;
  
  let service: any = Object.values(servicesData).find((s: any) => s && typeof s === 'object' && s.slug === slug);
  if (!service) {
    service = Object.values(pbiData).find((p: any) => p && typeof p === 'object' && p.slug === slug);
  }

  if (!service) {
    return (
      <div className="container" style={{paddingTop: '10rem', textAlign: 'center'}}>
        <h1>404 - Servicio no encontrado</h1>
        <a href="/servicios" className="btn btn-primary">Volver a servicios</a>
      </div>
    );
  }

  return (
    <>
      <AnimationObserver />
      <Navbar />

      <main id="main-content" className="svc-detail-page">
        {/* ── Zoho-style Hero with Form ── */}
        <section className="svc-hero-detail fade-in-up">
          <div className="container svc-hero-grid">
            <div className="svc-hero-text">
              <span className="subtitle">{service.title}</span>
              <h1>{service.heroTitle}</h1>
              <p className="long-desc">{service.longDesc}</p>
              
              <div className="svc-features-list">
                <h3>{t('pbi.common.featuresTitle')}</h3>
                <ul>
                  <li><i className="fa-solid fa-check"></i> {service.i1}</li>
                  <li><i className="fa-solid fa-check"></i> {service.i2}</li>
                  <li><i className="fa-solid fa-check"></i> {service.i3}</li>
                  <li><i className="fa-solid fa-check"></i> {service.i4}</li>
                  {service.i5 && <li><i className="fa-solid fa-check"></i> {service.i5}</li>}
                </ul>
              </div>
            </div>

            <div className="svc-hero-form">
              <div className="form-card">
                <h3>{t('pbi.common.formTitle')}</h3>
                <p>{t('pbi.common.formDesc')} <strong>{service.title}</strong>.</p>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* ── Extra Info Section ── */}
        <section className="section container fade-in-up">
          <div className="section-header" style={{textAlign: 'left', maxWidth: '800px'}}>
            <h2>{t('pbi.common.whyTitle')}</h2>
            <p>{t('pbi.common.whyDesc')}</p>
          </div>
          
          <div className="services-grid" style={{marginTop: '3rem'}}>
             <div className="service-card">
                <div className="icon-box"><i className="fa-solid fa-rocket"></i></div>
                <h3>{t('pbi.common.card1Title')}</h3>
                <p>{t('pbi.common.card1Desc')}</p>
             </div>
             <div className="service-card">
                <div className="icon-box"><i className="fa-solid fa-microchip"></i></div>
                <h3>{t('pbi.common.card2Title')}</h3>
                <p>{t('pbi.common.card2Desc')}</p>
             </div>
             <div className="service-card">
                <div className="icon-box"><i className="fa-solid fa-shield-halved"></i></div>
                <h3>{t('pbi.common.card3Title')}</h3>
                <p>{t('pbi.common.card3Desc')}</p>
             </div>
          </div>
        </section>
      </main>


      <Footer />
    </>
  );
}
