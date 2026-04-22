"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimationObserver from "@/components/AnimationObserver";
import Chatbot from "@/components/Chatbot";
import { useLanguage } from "@/context/LanguageContext";

export default function NosotrosPage() {
  const { t } = useLanguage();

  return (
    <>
      <AnimationObserver />
      <Navbar />

      {/* ── Hero Banner ── */}
      <section className="about-hero reveal">
        <div className="about-hero-bg">
          <Image 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Corporate office" 
            fill 
            style={{ objectFit: 'cover' }} 
            priority
            className="about-hero-img"
          />
          <div className="about-hero-overlay"></div>
        </div>
        <div className="container about-hero-content">
          <h1>
            {t('about.headerDesc')}
          </h1>
          <div className="svc-hero-line"></div>
        </div>
      </section>

      <main id="main-content" className="container section">
        
        {/* ── The Vision ── */}
        <div className="split-section" style={{ marginTop: "2rem" }}>
          <div className="split-text reveal">
            <span className="subtitle">{t('about.essSub') || "Nuestra Visión"}</span>
            <h2 dangerouslySetInnerHTML={{__html: t('about.essTitle')}}></h2>
            <p>{t('about.essDesc')}</p>
            <ul className="about-features" style={{ marginTop: "2rem" }}>
              <li>
                <i className="fa-solid fa-bolt text-accent"></i>
                <span>{t('about.essF1')}</span>
              </li>
              <li>
                <i className="fa-solid fa-bullseye text-accent"></i>
                <span>{t('about.essF2')}</span>
              </li>
              <li>
                <i className="fa-solid fa-infinity text-accent"></i>
                <span>{t('about.essF3')}</span>
              </li>
            </ul>
          </div>
          <div className="split-image reveal reveal-delay-1">
            <Image 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Team strategy meeting" 
              width={600} 
              height={500} 
              className="rounded-image shadow-premium"
            />
          </div>
        </div>

        {/* ── Pillars ── */}
        <div className="about-grid" style={{ marginTop: "6rem" }}>
          <div className="about-card reveal reveal-delay-1">
            <div className="about-icon">
              <i className="fa-solid fa-fingerprint"></i>
            </div>
            <h3>{t('about.whoTitle')}</h3>
            <p>{t('about.whoDesc')}</p>
          </div>
          <div className="about-card reveal reveal-delay-2">
            <div className="about-icon pbi-icon-blue">
              <i className="fa-solid fa-chart-line"></i>
            </div>
            <h3>{t('about.whatTitle')}</h3>
            <p>{t('about.whatDesc')}</p>
          </div>
        </div>

        {/* ── Leadership Team ── */}
        <div className="team-section reveal" style={{ marginTop: "8rem", textAlign: "center" }}>
          <span className="subtitle">Liderazgo</span>
          <h2 style={{ marginBottom: "3rem" }}>{t('about.teamTitle')}</h2>
          <div className="team-grid executive-grid">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="team-member-link">
              <div className="team-member-premium reveal reveal-delay-1">
                <Image 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Elena R." 
                  fill
                  className="member-bg"
                />
                <div className="member-overlay">
                  <div className="member-info">
                    <h4>Elena R.</h4>
                    <span>{t('about.role1')}</span>
                    <div className="member-social">
                      <i className="fa-brands fa-linkedin"></i>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="team-member-link">
              <div className="team-member-premium reveal reveal-delay-2">
                <Image 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Marc T." 
                  fill
                  className="member-bg"
                />
                <div className="member-overlay">
                  <div className="member-info">
                    <h4>Marc T.</h4>
                    <span>{t('about.role2')}</span>
                    <div className="member-social">
                      <i className="fa-brands fa-linkedin"></i>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="team-member-link">
              <div className="team-member-premium reveal reveal-delay-3">
                <Image 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="David K." 
                  fill
                  className="member-bg"
                />
                <div className="member-overlay">
                  <div className="member-info">
                    <h4>David K.</h4>
                    <span>VP of Operations</span>
                    <div className="member-social">
                      <i className="fa-brands fa-linkedin"></i>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

      </main>

      <Chatbot />
      <Footer />
    </>
  );
}
