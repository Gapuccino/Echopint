"use client";

import { useState, useEffect } from "react";
import { BlogPost } from "@/data/posts";
import BlogCard from "../BlogCard";
import { useLanguage } from "@/context/LanguageContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import styles from "./BlogList.module.css";

export default function BlogList({ initialPosts }: { initialPosts: BlogPost[] }) {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const { t } = useLanguage();

  const filteredPosts = initialPosts.filter(post => {
    const matchesFilter = filter === "all" || post.category === filter;
    const matchesSearch = 
      post.title.toLowerCase().includes(search.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Re-trigger reveal animations when filter or search changes
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
  }, [filter, search]);

  return (
    <>
      <div className={`${styles.blogControls} fade-in-up`}>
        <div className={styles.searchBar}>
          <FontAwesomeIcon icon={faMagnifyingGlass} aria-hidden="true" />
          <input 
            type="text" 
            placeholder={t('insights.search') || "Buscar artÃ­culos..."} 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label={t('insights.search') || "Buscar artÃ­culos..."}
          />
        </div>
        <div className={styles.categoryFilters}>
          {["all", "Estrategia", "TecnologÃ­a", "Ventas", "ExpansiÃ³n"].map(cat => (
            <button 
              key={cat}
              className={`${styles.filterBtn} ${filter === cat ? styles.filterBtnActive : ""}`} 
              onClick={() => setFilter(cat)}
            >
              {cat === "all" ? "Todos" : cat}
            </button>
          ))}
        </div>
      </div>

      <div className={`${styles.spectacularGrid} blog-grid-feed`}>
        {filteredPosts.map((post, i) => (
          <BlogCard key={post.id} post={post} delay={(i % 3) + 1} isPriority={i === 0} />
        ))}
        {filteredPosts.length === 0 && (
          <p style={{ gridColumn: "1 / -1", textAlign: "center", padding: "2rem" }}>
            {t('insights.noResults') || "No se encontraron artÃ­culos que coincidan con la bÃºsqueda."}
          </p>
        )}
      </div>
    </>
  );
}
