"use client";

import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/data/posts";
import { useLanguage } from "@/context/LanguageContext";
import { getLocalizedPath } from "@/i18n/routing";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function BlogCard({ post, delay = 1, isPriority = false }: { post: BlogPost; delay?: number; isPriority?: boolean }) {
  const { t, lang } = useLanguage();

  return (
    <article className={`blog-card reveal reveal-delay-${delay}`} data-category={post.category}>
      <div className="blog-img-container">
        <Image 
          src={post.image} 
          alt={post.title} 
          fill 
          priority={isPriority}
          fetchPriority={isPriority ? "high" : "auto"}
          loading={isPriority ? "eager" : "lazy"}
          style={{ objectFit: 'cover' }}
          quality={45}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="blog-content">
        <div className="blog-meta">
          <span>{post.date}</span>
          <span>{post.author}</span>
        </div>
        <span className="blog-tag">{post.category}</span>
        <h2 style={{ fontSize: '1.4rem', margin: '0.5rem 0', lineHeight: '1.3' }}>{post.title}</h2>
        <p>{post.excerpt}</p>
        <Link href={getLocalizedPath(lang, `/blog/${post.slug}`)} className="read-more">
          {t('insights.readMore') || 'Leer Artículo'} <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
    </article>
  );
}
