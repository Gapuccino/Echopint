"use client";

import { useEffect, useState } from "react";
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

import styles from "./Home.module.css";

export default function Home() {
  const { t, lang } = useLanguage();
  const topInsights = blogPosts.slice(0, 3);
  const [magnetStatus, setMagnetStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [showCanvas, setShowCanvas] = useState(false);

  useEffect(() => {
    let mounted = true;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isSmallScreen = window.matchMedia("(max-width: 767px)").matches;

    if (prefersReducedMotion || isSmallScreen) return;

    const revealCanvas = () => {
      if (!mounted) return;
      setShowCanvas(true);
    };

    if (typeof window.requestIdleCallback === "function") {
      const idleId = window.requestIdleCallback(revealCanvas, { timeout: 2500 });
      return () => {
        mounted = false;
        if (typeof window.cancelIdleCallback === "function") {
          window.cancelIdleCallback(idleId);
        }
      };
    }

    const timeoutId = setTimeout(revealCanvas, 1600);
    return () => {
      mounted = false;
      clearTimeout(timeoutId);
    };
  }, []);

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
        <section id="inicio" className={styles.heroSection}>
          {showCanvas ? <NeuralCanvas /> : null}
          <div className={styles.heroOverlay}></div>
          
          <div className={`container ${styles.heroContainer}`}>
            <div className={styles.heroContent}>
              <span className="subtitle">{t('hero.subtitle')}</span>
              <h1 dangerouslySetInnerHTML={{__html: t('hero.title')}}></h1>
              <p>{t('hero.desc')}</p>
              <div className={styles.heroActions}>
                <Link href={getLocalizedPath(lang, "/servicios")} className="btn btn-primary">{t('hero.btn.discover')}</Link>
                <Link href={getLocalizedPath(lang, "/contacto")} className="btn btn-secondary">{t('hero.btn.demo')}</Link>
              </div>
            </div>
          </div>
          
        </section>

        {/* Trust Strip */}
        <div className={`${styles.trustStrip} cv-auto`}>
          <div className="container">
            <p className={styles.trustText}>{t('trust')}</p>
            <div className={styles.logoGrid}>
              <div className={styles.partnerLogo}><FontAwesomeIcon icon={faGoogle} /> Google</div>
              <div className={styles.partnerLogo}><FontAwesomeIcon icon={faMicrosoft} /> Microsoft</div>
              <div className={styles.partnerLogo}><FontAwesomeIcon icon={faAmazon} /> Amazon</div>
              <div className={styles.partnerLogo}><FontAwesomeIcon icon={faMeta} /> Meta</div>
              <div className={styles.partnerLogo}><FontAwesomeIcon icon={faSalesforce} /> Salesforce</div>
            </div>
          </div>
        </div>

        {/* Video Manifiesto Section */}
        <section className={`section ${styles.manifestoSection} reveal cv-auto`}>
          <div className="container">
            <div className={styles.manifestoWrapper}>
              <div className="manifesto-content reveal-delay-1">
                <span className="subtitle">{t('manifesto.subtitle')}</span>
                <h2 dangerouslySetInnerHTML={{__html: t('manifesto.title')}}></h2>
                <p>{t('manifesto.desc')}</p>
                <p className="legal-note" style={{fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '-1rem', marginBottom: '2rem'}}>{t('manifesto.legal')}</p>
              </div>
              <div className={`${styles.manifestoImageContainer} reveal-delay-2`}>
                <Image 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                  alt="VisualizaciÃ³n de datos e inteligencia artificial impulsando el crecimiento empresarial" 
                  className={styles.responsiveImage}
                  width={1470}
                  height={827}
                  priority={false}
                  quality={45}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                />
              </div>
            </div>
          </div>
        </section>

        {/* AMS Reviews Section */}
        <section id="testimonios" className={`section ${styles.reviewsSection} cv-auto`}>
          <div className="container">
          <div className="section-header reveal">
            <h2>{t('reviews.title')}</h2>
            <p>{t('reviews.desc')}</p>
              <div className={styles.amsRatingBadge}>
                <div className="stars" style={{color: '#fbbf24'}}>
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <span>{t('reviews.rating')}</span>
              </div>
            </div>
            
            <div className={styles.reviewsGrid}>
              {/* Review 1 */}
              <div className={`${styles.reviewCard} reveal reveal-delay-1`}>
                <div className={styles.reviewHeader}>
                  <div className={styles.reviewerInfo}>
                    <Image src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Roberto MÃ©ndez, CEO de FinTech Latam" className={styles.reviewerImg} width={100} height={100} />
                    <div>
                      <h4 style={{margin: 0, color: 'var(--text-primary)'}}>Roberto MÃ©ndez</h4>
                      <span className="reviewer-role">CEO, FinTech Latam</span>
                    </div>
                  </div>
                  <div className={styles.reviewMeta}>
                    <span className={styles.verifiedBadge}><FontAwesomeIcon icon={faCheckCircle} /> <span>{t('reviews.verified')}</span></span>
                    <span className="review-date">{t('reviews.r1.date')}</span>
                  </div>
                </div>
                <div className="review-stars" style={{color: '#fbbf24'}}>
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <p className={styles.reviewText}>{t('reviews.r1.text')}</p>
              </div>

              {/* Review 2 */}
              <div className={`${styles.reviewCard} reveal reveal-delay-2`}>
                <div className={styles.reviewHeader}>
                  <div className={styles.reviewerInfo}>
                    <Image src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Sarah Jenkins, VP Operations de GlobalLogistics" className={styles.reviewerImg} width={100} height={100} />
                    <div>
                      <h4 style={{margin: 0, color: 'var(--text-primary)'}}>Sarah Jenkins</h4>
                      <span className="reviewer-role">VP Operations, GlobalLogistics</span>
                    </div>
                  </div>
                  <div className={styles.reviewMeta}>
                    <span className={styles.verifiedBadge}><FontAwesomeIcon icon={faCheckCircle} /> <span>{t('reviews.verified')}</span></span>
                    <span className="review-date">{t('reviews.r2.date')}</span>
                  </div>
                </div>
                <div className="review-stars" style={{color: '#fbbf24'}}>
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStarHalfStroke} />
                </div>
                <p className={styles.reviewText}>{t('reviews.r2.text')}</p>
              </div>

              {/* Review 3 */}
              <div className={`${styles.reviewCard} reveal reveal-delay-3`}>
                <div className={styles.reviewHeader}>
                  <div className={styles.reviewerInfo}>
                    <Image src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="David Kline, Founder de GreenEnergy Solutions" className={styles.reviewerImg} width={100} height={100} />
                    <div>
                      <h4 style={{margin: 0, color: 'var(--text-primary)'}}>David Kline</h4>
                      <span className="reviewer-role">Founder, GreenEnergy Solutions</span>
                    </div>
                  </div>
                  <div className={styles.reviewMeta}>
                    <span className={styles.verifiedBadge}><FontAwesomeIcon icon={faCheckCircle} /> <span>{t('reviews.verified')}</span></span>
                    <span className="review-date">{t('reviews.r3.date')}</span>
                  </div>
                </div>
                <div className="review-stars" style={{color: '#fbbf24'}}>
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <p className={styles.reviewText}>{t('reviews.r3.text')}</p>
              </div>

            </div>
            
            <div className="reviews-cta" style={{textAlign: 'center', marginTop: '3rem'}}>
              <Link href={getLocalizedPath(lang, "/blog")} className="btn btn-secondary">{t('reviews.cta')}</Link>
            </div>
          </div>
        </section>

        {/* Insights / Blog */}
        <section className={`section ${styles.insightsSection} cv-auto`}>
          <div className="container">
            <div className="section-header fade-in-up">
              <h2>{t('insights.title')}</h2>
              <p>{t('insights.desc')}</p>
            </div>
            
            <div className={styles.blogGrid}>
              {topInsights.map((post, i) => (
                <BlogCard key={post.id} post={post} delay={i + 1} />
              ))}
            </div>
            
            <div className="reviews-cta fade-in-up" style={{marginTop: '3rem', textAlign: 'center'}}>
              <Link href={getLocalizedPath(lang, "/blog")} className="btn btn-secondary">{t('insights.cta')} <FontAwesomeIcon icon={faArrowRight} /></Link>
            </div>
          </div>
        </section>

        {/* Lead Magnet CTA */}
        <section className={`${styles.leadMagnetSection} cv-auto`}>
          <div className={`container ${styles.magnetContainer}`}>
            <div className="magnet-content fade-in-up">
              <h2>{t('magnet.title')}</h2>
              <p>{t('magnet.desc')}</p>
              <form className={styles.magnetForm} onSubmit={handleMagnetSubmit}>
                <input name="email" type="email" placeholder={t('magnet.placeholder')} aria-label={t('magnet.placeholder')} required />
                <button type="submit" className="btn btn-primary" disabled={magnetStatus === "loading"}>
                  {magnetStatus === "loading" ? "..." : t('magnet.btn')}
                </button>
              </form>
              {magnetStatus === "success" && (
                <p style={{color: 'var(--success-green)', marginTop: '1rem', fontSize: '0.9rem'}}>
                  <FontAwesomeIcon icon={faCheckCircle} style={{marginRight: '0.5rem'}} />
                  {t('magnet.success') || 'Â¡Enviado con Ã©xito!'}
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
