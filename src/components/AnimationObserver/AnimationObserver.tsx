"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function AnimationObserver() {
  const pathname = usePathname();

  useEffect(() => {
    // Small delay to let the DOM settle after route change
    const initTimeout = setTimeout(() => {
      const elements = document.querySelectorAll('.reveal:not(.active), .fade-in-up:not(.visible)');

      if (!elements.length) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
      );

      elements.forEach(el => observer.observe(el));

      // Safety fallback: Force show everything after 2s if observer fails
      const fallback = setTimeout(() => {
        document.querySelectorAll('.reveal:not(.active), .fade-in-up:not(.visible)').forEach(el => {
          el.classList.add('active');
          el.classList.add('visible');
        });
      }, 2000);

      return () => {
        observer.disconnect();
        clearTimeout(fallback);
      };
    }, 50);

    return () => clearTimeout(initTimeout);
  }, [pathname]);

  return null;
}
