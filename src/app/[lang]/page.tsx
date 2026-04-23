"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";
const NeuralCanvas = dynamic(() => import("@/components/NeuralCanvas"), { ssr: false });
import AnimationObserver from "@/components/AnimationObserver";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/data/posts";
import { useLanguage } from "@/context/LanguageContext";
import { getLocalizedPath } from "@/i18n/routing";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faStar, 
  faStarHalfStroke, 
  faCheckCircle, 
  faCircleExclamation,
  faArrowRight 
} from "@fortawesome/free-solid-svg-icons";
import { 
  faGoogle, 
  faMicrosoft, 
  faAmazon, 
  faMeta, 
  faSalesforce 
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  const { t, lang } = useLanguage();
  const topInsights = blogPosts.slice(0, 3);
  const [magnetStatus, setMagnetStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleMagnetSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMagnetStatus("loading");
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: "Lead Magnet", email, subject: "Download Report 2024", message: "Lead magnet download request" }),
      });
      if (res.ok) {
        setMagnetStatus("success");
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setMagnetStatus("idle"), 6000);
      } else {
        setMagnetStatus("error");
      }
    } catch {
      setMagnetStatus("error");
    }
  };

  return (
    <>
      <AnimationObserver />
      <Navbar />

      <main id="main-content">
        {/* Hero Section */}
        <section id="inicio" className="hero-section">
          <NeuralCanvas />
          <div className="hero-overlay"></div>
          
          <div className="container hero-container">
            <div className="hero-content reveal">
              <span className="subtitle">{t('hero.subtitle')}</span>
              <h1 dangerouslySetInnerHTML={{__html: t('hero.title')}}></h1>
              <p>{t('hero.desc')}</p>
              <div className="hero-actions">
                <Link href={getLocalizedPath(lang, "/servicios")} className="btn btn-primary">{t('hero.btn.discover')}</Link>
                <Link href={getLocalizedPath(lang, "/contacto")} className="btn btn-secondary">{t('hero.btn.demo')}</Link>
              </div>
            </div>
          </div>
          
        </section>

        {/* Trust Strip */}
        <div className="trust-strip">
          <div className="container">
            <p className="trust-text">{t('trust')}</p>
            <div className="logo-grid">
              <div className="partner-logo"><FontAwesomeIcon icon={faGoogle} /> Google</div>
              <div className="partner-logo"><FontAwesomeIcon icon={faMicrosoft} /> Microsoft</div>
              <div className="partner-logo"><FontAwesomeIcon icon={faAmazon} /> Amazon</div>
              <div className="partner-logo"><FontAwesomeIcon icon={faMeta} /> Meta</div>
              <div className="partner-logo"><FontAwesomeIcon icon={faSalesforce} /> Salesforce</div>
            </div>
          </div>
        </div>

        {/* Video Manifiesto Section */}
        <section className="section manifesto-section reveal">
          <div className="container">
            <div className="manifesto-wrapper">
              <div className="manifesto-content reveal-delay-1">
                <span className="subtitle">{t('manifesto.subtitle')}</span>
                <h2 dangerouslySetInnerHTML={{__html: t('manifesto.title')}}></h2>
                <p>{t('manifesto.desc')}</p>
                <p className="legal-note" style={{fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '-1rem', marginBottom: '2rem'}}>{t('manifesto.legal')}</p>
              </div>
              <div className="manifesto-image-container reveal-delay-2">
                <Image 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                  alt="Visualización de datos e inteligencia artificial impulsando el crecimiento empresarial" 
                  className="responsive-image"
                  width={1470}
                  height={827}
                  priority={false}
                  quality={60}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                />
              </div>
            </div>
          </div>
        </section>

        {/* AMS Reviews Section */}
        <section id="testimonios" className="section reviews-section">
          <div className="container">
          <div className="section-header reveal">
            <h2>{t('reviews.title')}</h2>
            <p>{t('reviews.desc')}</p>
              <div className="ams-rating-badge">
                <div className="stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <span>{t('reviews.rating')}</span>
              </div>
            </div>
            
            <div className="reviews-grid">
              {/* Review 1 */}
              <div className="review-card reveal reveal-delay-1">
                <div className="review-header">
                  <div className="reviewer-info">
                    <Image src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Roberto Méndez, CEO de FinTech Latam" className="reviewer-img" width={100} height={100} />
                    <div>
                      <h3>Roberto Méndez</h3>
                      <span className="reviewer-role">CEO, FinTech Latam</span>
                    </div>
                  </div>
                  <div className="review-meta">
                    <span className="verified-badge"><FontAwesomeIcon icon={faCheckCircle} /> <span>{t('reviews.verified')}</span></span>
                    <span className="review-date">{t('reviews.r1.date')}</span>
                  </div>
                </div>
                <div className="review-stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <p className="review-text">{t('reviews.r1.text')}</p>
              </div>

              {/* Review 2 */}
              <div className="review-card reveal reveal-delay-2">
                <div className="review-header">
                  <div className="reviewer-info">
                    <Image src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Sarah Jenkins, VP Operations de GlobalLogistics" className="reviewer-img" width={100} height={100} />
                    <div>
                      <h3>Sarah Jenkins</h3>
                      <span className="reviewer-role">VP Operations, GlobalLogistics</span>
                    </div>
                  </div>
                  <div className="review-meta">
                    <span className="verified-badge"><FontAwesomeIcon icon={faCheckCircle} /> <span>{t('reviews.verified')}</span></span>
                    <span className="review-date">{t('reviews.r2.date')}</span>
                  </div>
                </div>
                <div className="review-stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStarHalfStroke} />
                </div>
                <p className="review-text">{t('reviews.r2.text')}</p>
              </div>

              {/* Review 3 */}
              <div className="review-card reveal reveal-delay-3">
                <div className="review-header">
                  <div className="reviewer-info">
                    <Image src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="David Kline, Founder de GreenEnergy Solutions" className="reviewer-img" width={100} height={100} />
                    <div>
                      <h3>David Kline</h3>
                      <span className="reviewer-role">Founder, GreenEnergy Solutions</span>
                    </div>
                  </div>
                  <div className="review-meta">
                    <span className="verified-badge"><FontAwesomeIcon icon={faCheckCircle} /> <span>{t('reviews.verified')}</span></span>
                    <span className="review-date">{t('reviews.r3.date')}</span>
                  </div>
                </div>
                <div className="review-stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <p className="review-text">{t('reviews.r3.text')}</p>
              </div>

            </div>
            
            <div className="reviews-cta">
              <Link href={getLocalizedPath(lang, "/blog")} className="btn btn-secondary">{t('reviews.cta')}</Link>
            </div>
          </div>
        </section>

        {/* Insights / Blog */}
        <section className="section insights-section">
          <div className="container">
            <div className="section-header fade-in-up">
              <h2>{t('insights.title')}</h2>
              <p>{t('insights.desc')}</p>
            </div>
            
            <div className="blog-grid">
              {topInsights.map((post, i) => (
                <BlogCard key={post.id} post={post} delay={i + 1} />
              ))}
            </div>
            
            <div className="reviews-cta fade-in-up" style={{marginTop: '3rem'}}>
              <Link href={getLocalizedPath(lang, "/blog")} className="btn btn-secondary">{t('insights.cta')} <FontAwesomeIcon icon={faArrowRight} /></Link>
            </div>
          </div>
        </section>

        {/* Lead Magnet CTA */}
        <section className="lead-magnet-section">
          <div className="container magnet-container">
            <div className="magnet-content fade-in-up">
              <h2>{t('magnet.title')}</h2>
              <p>{t('magnet.desc')}</p>
              <form className="magnet-form" onSubmit={handleMagnetSubmit}>
                <input name="email" type="email" placeholder={t('magnet.placeholder')} aria-label={t('magnet.placeholder')} required />
                <button type="submit" className="btn btn-primary" disabled={magnetStatus === "loading"}>
                  {magnetStatus === "loading" ? "..." : t('magnet.btn')}
                </button>
              </form>
              {magnetStatus === "success" && (
                <p style={{color: 'var(--success-green)', marginTop: '1rem', fontSize: '0.9rem'}}>
                  <FontAwesomeIcon icon={faCheckCircle} style={{marginRight: '0.5rem'}} />
                  {t('magnet.success') || '¡Enviado con éxito!'}
                </p>
              )}
              {magnetStatus === "error" && (
                <p style={{color: 'var(--error-red)', marginTop: '1rem', fontSize: '0.9rem'}}>
                  <FontAwesomeIcon icon={faCircleExclamation} style={{marginRight: '0.5rem'}} />
                  Error. Intenta de nuevo.
                </p>
              )}
            </div>
          </div>
        </section>

      </main>


      <Footer />
    </>
  );
}
