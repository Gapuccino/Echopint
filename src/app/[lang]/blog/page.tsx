import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogList from "@/components/BlogList";
import AnimationObserver from "@/components/AnimationObserver";
import { blogPosts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Blog - Echopoint AI",
  description: "Artículos y análisis sobre estrategia de crecimiento B2B, inteligencia artificial, alianzas y expansión internacional.",
};

export default function BlogPage() {
  return (
    <>
      <AnimationObserver />
      <Navbar />

      <main id="main-content" className="container section blog-container" style={{ paddingTop: "8rem" }}>
        <div className="blog-header reveal">
          <span className="subtitle">Pensamiento Lider</span>
          <h1 className="reveal-delay-1">Insights Estratégicos</h1>
          <p className="reveal-delay-2">Tendencias, análisis y estrategias para liderar el crecimiento B2B en la era digital.</p>
        </div>

        <BlogList initialPosts={blogPosts} />
      </main>

      <Footer />
    </>
  );
}
