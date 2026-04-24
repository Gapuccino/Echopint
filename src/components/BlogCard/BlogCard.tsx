"use client";

import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/data/posts";
import { useLanguage } from "@/context/LanguageContext";
import { getLocalizedPath } from "@/i18n/routing";
import styles from "./BlogCard.module.css";

export default function BlogCard({ post, delay = 1, isPriority = false }: { post: BlogPost; delay?: number; isPriority?: boolean }) {
  const { t, lang } = useLanguage();

  return (
    <article className={`${styles.blogCard} reveal reveal-delay-${delay}`} data-category={post.category}>
      <div className={styles.blogImgContainer}>
        <Image 
          src={post.image} 
          alt={post.title} 
          fill 
          priority={isPriority}
          fetchPriority={isPriority ? "high" : "auto"}
          loading={isPriority ? "eager" : "lazy"}
          style={{ objectFit: 'cover' }}
          quality={35}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 30vw"
        />
      </div>
      <div className={styles.blogContent}>
        <div className={styles.blogMeta}>
          <span>{post.date}</span>
          <span>{post.author}</span>
        </div>
        <span className={styles.blogTag}>{post.category}</span>
        <h2 style={{ fontSize: '1.4rem', margin: '0.5rem 0', lineHeight: '1.3' }}>{post.title}</h2>
        <p>{post.excerpt}</p>
        <Link href={getLocalizedPath(lang, `/blog/${post.slug}`)} className={styles.readMore}>
          {t('insights.readMore') || 'Leer Artículo'} <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
