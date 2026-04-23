"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimationObserver from "@/components/AnimationObserver";
import { useLanguage } from "@/context/LanguageContext";
import { getLocalizedPath } from "@/i18n/routing";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBrain,
  faBriefcase,
  faBullseye,
  faCartShopping,
  faChartLine,
  faChartPie,
  faChevronRight,
  faCoins,
  faGears,
  faGlobe,
  faGaugeHigh,
  faHandshake,
  faLayerGroup,
  faLightbulb,
  faMagnifyingGlassChart,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";

type CategoryFilter = "all" | "pbi" | "consulting";

export default function ServiciosPage() {
  const { t, lang } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("all");

  const showPbi = activeFilter === "all" || activeFilter === "pbi";
  const showConsulting = activeFilter === "all" || activeFilter === "consulting";

  // Re-trigger reveal animations when filter changes
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal:not(.active)');
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [activeFilter]);

  return (
    <>
      <AnimationObserver />
      <Navbar />

      {/* ── Hero Banner (full-width, like Zoho) ── */}
      <section className="svc-hero reveal">
        <h1 className="reveal-delay-1">{t('services.heroTitle')}</h1>
        <div className="svc-hero-line reveal-delay-2"></div>
      </section>

      <main id="main-content" className="container section" style={{ paddingTop: "0" }}>

        {/* ── Catalog: Sidebar + Products ── */}
        <div className="pbi-catalog">

          <aside className="pbi-sidebar reveal">
            <h2 className="reveal-delay-1" style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>{t('services.filterTitle') || 'Categorías'}</h2>
            <nav aria-label="Filtrar servicios">
              <ul className="pbi-cat-list" role="list">
                <li>
                  <button
                    className={`pbi-cat-item ${activeFilter === "all" ? "active" : ""}`}
                    onClick={() => setActiveFilter("all")}
                    aria-pressed={activeFilter === "all"}
                  >
                    <FontAwesomeIcon icon={faLayerGroup} />
                    {t('pbi.cat.all')}
                  </button>
                </li>
                <li>
                  <button
                    className={`pbi-cat-item ${activeFilter === "pbi" ? "active" : ""}`}
                    onClick={() => setActiveFilter("pbi")}
                    aria-pressed={activeFilter === "pbi"}
                  >
                    <FontAwesomeIcon icon={faChartPie} />
                    Power BI
                  </button>
                </li>
                <li>
                  <button
                    className={`pbi-cat-item ${activeFilter === "consulting" ? "active" : ""}`}
                    onClick={() => setActiveFilter("consulting")}
                    aria-pressed={activeFilter === "consulting"}
                  >
                    <FontAwesomeIcon icon={faBriefcase} />
                    {t('services.title')}
                  </button>
                </li>
              </ul>
            </nav>
          </aside>

          {/* Main content */}
          <div className="pbi-products">

            {/* Section: Power BI */}
            {showPbi && (
              <div className="pbi-section-block reveal">
                <div className="pbi-section-title">
                  <h2 dangerouslySetInnerHTML={{__html: t('pbi.title')}}></h2>
                  <p>{t('pbi.desc')}</p>
                </div>

                <div className="pbi-grid">
                  <div className="pbi-card reveal reveal-delay-1">
                    <div className="pbi-icon"><FontAwesomeIcon icon={faGaugeHigh} /></div>
                    <h3>{t('pbi.p1.title')}</h3>
                    <p>{t('pbi.p1.desc')}</p>
                    <Link href={getLocalizedPath(lang, `/servicios/${t('pbi.p1.slug')}`)} className="pbi-cta">{t('pbi.cta')} <FontAwesomeIcon icon={faChevronRight} /></Link>
                  </div>
                  <div className="pbi-card reveal reveal-delay-2">
                    <div className="pbi-icon pbi-icon-blue"><FontAwesomeIcon icon={faCoins} /></div>
                    <h3>{t('pbi.p2.title')}</h3>
                    <p>{t('pbi.p2.desc')}</p>
                    <Link href={getLocalizedPath(lang, `/servicios/${t('pbi.p2.slug')}`)} className="pbi-cta">{t('pbi.cta')} <FontAwesomeIcon icon={faChevronRight} /></Link>
                  </div>
                  <div className="pbi-card reveal reveal-delay-3">
                    <div className="pbi-icon"><FontAwesomeIcon icon={faCartShopping} /></div>
                    <h3>{t('pbi.p3.title')}</h3>
                    <p>{t('pbi.p3.desc')}</p>
                    <Link href={getLocalizedPath(lang, `/servicios/${t('pbi.p3.slug')}`)} className="pbi-cta">{t('pbi.cta')} <FontAwesomeIcon icon={faChevronRight} /></Link>
                  </div>
                  <div className="pbi-card">
                    <div className="pbi-icon pbi-icon-amber"><FontAwesomeIcon icon={faGears} /></div>
                    <h3>{t('pbi.p4.title')}</h3>
                    <p>{t('pbi.p4.desc')}</p>
                    <Link href={getLocalizedPath(lang, `/servicios/${t('pbi.p4.slug')}`)} className="pbi-cta">{t('pbi.cta')} <FontAwesomeIcon icon={faChevronRight} /></Link>
                  </div>
                  <div className="pbi-card">
                    <div className="pbi-icon"><FontAwesomeIcon icon={faMagnifyingGlassChart} /></div>
                    <h3>{t('pbi.p5.title')}</h3>
                    <p>{t('pbi.p5.desc')}</p>
                    <Link href={getLocalizedPath(lang, `/servicios/${t('pbi.p5.slug')}`)} className="pbi-cta">{t('pbi.cta')} <FontAwesomeIcon icon={faChevronRight} /></Link>
                  </div>
                  <div className="pbi-card">
                    <div className="pbi-icon pbi-icon-amber"><FontAwesomeIcon icon={faRobot} /></div>
                    <h3>{t('pbi.p6.title')}</h3>
                    <p>{t('pbi.p6.desc')}</p>
                    <Link href={getLocalizedPath(lang, `/servicios/${t('pbi.p6.slug')}`)} className="pbi-cta">{t('pbi.cta')} <FontAwesomeIcon icon={faChevronRight} /></Link>
                  </div>
                </div>
              </div>
            )}

            {/* Section: Consulting Services */}
            {showConsulting && (
              <div className="pbi-section-block reveal" style={{marginTop: showPbi ? '3rem' : '0'}}>
                <div className="pbi-section-title">
                  <h2>{t('services.title')}</h2>
                  <p>{t('services.desc')}</p>
                </div>

                <div className="pbi-grid">
                  <div className="pbi-card">
                    <div className="pbi-icon"><FontAwesomeIcon icon={faChartLine} /></div>
                    <h3>{t('services.s1.title')}</h3>
                    <p>{t('services.s1.i1')}</p>
                    <Link href={getLocalizedPath(lang, `/servicios/${t('services.s1.slug')}`)} className="pbi-cta">{t('services.cta')} <FontAwesomeIcon icon={faChevronRight} /></Link>
                  </div>
                  <div className="pbi-card">
                    <div className="pbi-icon pbi-icon-amber"><FontAwesomeIcon icon={faHandshake} /></div>
                    <h3>{t('services.s2.title')}</h3>
                    <p>{t('services.s2.i1')}</p>
                    <Link href={getLocalizedPath(lang, `/servicios/${t('services.s2.slug')}`)} className="pbi-cta">{t('services.cta')} <FontAwesomeIcon icon={faChevronRight} /></Link>
                  </div>
                  <div className="pbi-card">
                    <div className="pbi-icon"><FontAwesomeIcon icon={faBullseye} /></div>
                    <h3>{t('services.s3.title')}</h3>
                    <p>{t('services.s3.i1')}</p>
                    <Link href={getLocalizedPath(lang, `/servicios/${t('services.s3.slug')}`)} className="pbi-cta">{t('services.cta')} <FontAwesomeIcon icon={faChevronRight} /></Link>
                  </div>
                  <div className="pbi-card">
                    <div className="pbi-icon pbi-icon-amber"><FontAwesomeIcon icon={faGlobe} /></div>
                    <h3>{t('services.s4.title')}</h3>
                    <p>{t('services.s4.i1')}</p>
                    <Link href={getLocalizedPath(lang, `/servicios/${t('services.s4.slug')}`)} className="pbi-cta">{t('services.cta')} <FontAwesomeIcon icon={faChevronRight} /></Link>
                  </div>
                  <div className="pbi-card">
                    <div className="pbi-icon"><FontAwesomeIcon icon={faLightbulb} /></div>
                    <h3>{t('services.s5.title')}</h3>
                    <p>{t('services.s5.i1')}</p>
                    <Link href={getLocalizedPath(lang, `/servicios/${t('services.s5.slug')}`)} className="pbi-cta">{t('services.cta')} <FontAwesomeIcon icon={faChevronRight} /></Link>
                  </div>
                  <div className="pbi-card">
                    <div className="pbi-icon pbi-icon-amber"><FontAwesomeIcon icon={faBrain} /></div>
                    <h3>{t('services.s6.title')}</h3>
                    <p>{t('services.s6.i1')}</p>
                    <Link href={getLocalizedPath(lang, `/servicios/${t('services.s6.slug')}`)} className="pbi-cta">{t('services.cta')} <FontAwesomeIcon icon={faChevronRight} /></Link>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>

      </main>


      <Footer />
    </>
  );
}
