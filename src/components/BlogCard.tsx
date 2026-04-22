"use client";

import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/data/posts";
import { useLanguage } from "@/context/LanguageContext";
import { getLocalizedPath } from "@/i18n/routing";

export default function BlogCard({ post, delay = 1 }: { post: BlogPost; delay?: number }) {
  const { t, lang } = useLanguage();

  return (
    <article className={`blog-card reveal reveal-delay-${delay}`} data-category={post.category}>
      <div className="blog-img-container">
        <Image 
          src={post.image} 
          alt={post.title} 
          fill 
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="blog-content">
        <div className="blog-meta">
          <span>{post.date}</span>
          <span>{post.author}</span>
        </div>
        <span className="blog-tag">{post.category}</span>
        <h4>{post.title}</h4>
        <p>{post.excerpt}</p>
        <Link href={getLocalizedPath(lang, `/blog/${post.slug}`)} className="read-more">
          {t('insights.readMore') || 'Leer Artículo'} <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </div>
    </article>
  );
}
