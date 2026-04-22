"use client";

import { useState, useEffect } from "react";
import { BlogPost } from "@/data/posts";
import BlogCard from "./BlogCard";
import { useLanguage } from "@/context/LanguageContext";

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
      <div className="blog-controls fade-in-up">
        <div className="search-bar">
          <i className="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
          <input 
            type="text" 
            placeholder={t('insights.search') || "Buscar artículos..."} 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label={t('insights.search') || "Buscar artículos..."}
          />
        </div>
        <div className="category-filters">
          {["all", "Estrategia", "Tecnología", "Ventas", "Expansión"].map(cat => (
            <button 
              key={cat}
              className={`filter-btn ${filter === cat ? "active" : ""}`} 
              onClick={() => setFilter(cat)}
            >
              {cat === "all" ? "Todos" : cat}
            </button>
          ))}
        </div>
      </div>

      <div className="blog-grid-feed spectacular-grid">
        {filteredPosts.map((post, i) => (
          <BlogCard key={post.id} post={post} delay={(i % 3) + 1} />
        ))}
        {filteredPosts.length === 0 && (
          <p style={{ gridColumn: "1 / -1", textAlign: "center", padding: "2rem" }}>
            {t('insights.noResults') || "No se encontraron artículos que coincidan con la búsqueda."}
          </p>
        )}
      </div>
    </>
  );
}
