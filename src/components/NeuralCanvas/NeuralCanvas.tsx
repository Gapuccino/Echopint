"use client";

import { useEffect, useRef } from "react";
import styles from "./NeuralCanvas.module.css";

export default function NeuralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width: number, height: number;
    let particles: Particle[] = [];
    let animationFrameId: number;
    let mouse = { x: -1000, y: -1000 };

    const colorTech = "6, 182, 212"; // Cyan
    const colorBlue = "59, 130, 246"; // Blue

    function resize() {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width;
      canvas.height = height;
    }

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      z: number;
      color: string;
      baseColor: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.z = Math.random() * 2 + 0.5; // More depth range
        this.vx = (Math.random() - 0.5) * 0.6 * (1 / this.z); // Slightly faster
        this.vy = (Math.random() - 0.5) * 0.6 * (1 / this.z);
        this.size = (Math.random() * 3 + 1.5) * this.z; // Larger particles
        const isTech = Math.random() > 0.4;
        this.baseColor = isTech ? colorTech : colorBlue;
        this.color = `rgba(${this.baseColor}, `;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color + (0.4 * this.z) + ")";
        if (this.z > 1.8) {
            ctx.shadowBlur = 15;
            ctx.shadowColor = `rgba(${this.baseColor}, 0.6)`;
        }
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    function initParticles() {
      particles = [];
      const isMobile = width < 768;
      const particleCount = isMobile ? Math.min(width * 0.03, 30) : Math.min(width * 0.05, 50); 
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p, index) => {
        p.update();
        p.draw();

        // High-Impact Mouse connection
        const mdx = p.x - mouse.x;
        const mdy = p.y - mouse.y;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mDist < 350) {
            ctx.beginPath();
            const mouseOpacity = 0.4 * (1 - mDist / 350);
            ctx.strokeStyle = `rgba(${p.baseColor}, ${mouseOpacity})`;
            ctx.lineWidth = 1.2;
            if (mDist < 100) {
                ctx.shadowBlur = 10;
                ctx.shadowColor = `rgba(${p.baseColor}, 0.8)`;
            }
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
            ctx.shadowBlur = 0;
        }

        for (let j = index + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 180) {
            ctx.beginPath();
            const opacity = (1 - distance / 180) * 0.3 * Math.min(p.z, p2.z);
            
            if (distance < 60) {
                ctx.lineWidth = 2;
                ctx.strokeStyle = `rgba(${p.baseColor}, ${opacity * 1.5})`;
            } else {
                ctx.lineWidth = 0.8;
                ctx.strokeStyle = `rgba(${p.baseColor}, ${opacity})`;
            }

            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });
      animationFrameId = requestAnimationFrame(animate);
    }

    const handleResize = () => {
      resize();
      initParticles();
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
        mouse.x = -1000;
        mouse.y = -1000;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const handleInitialInit = () => {
      resize();
      initParticles();
      animate();
    };

    // Use requestAnimationFrame to avoid forced reflow during initial mount
    requestAnimationFrame(handleInitialInit);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas className={styles.neuralCanvas} ref={canvasRef}></canvas>;
}
