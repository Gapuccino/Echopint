import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimationObserver from "@/components/AnimationObserver";
import { blogPosts } from "@/data/posts";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  
  if (!post) {
    return { title: "No encontrado" };
  }

  return {
    title: `${post.title} - Echopoint AI`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  return (
    <>
      <AnimationObserver />
      <Navbar />

      <main id="main-content" className="container section" style={{ paddingTop: "8rem" }}>
        <article className="blog-post fade-in-up">
          <header className="article-header">
            <Link href="/blog" className="back-link" style={{ display: "inline-block", marginBottom: "2rem", color: "var(--text-secondary)", fontSize: "0.9rem" }}>
              <i className="fa-solid fa-arrow-left"></i> Volver al Blog
            </Link>
            <br />
            <span className="article-category">{post.category}</span>
            <h1 className="article-title">{post.title}</h1>
            <div className="article-meta">
              <span><i className="fa-regular fa-calendar"></i> {post.date}</span>
              <span><i className="fa-regular fa-clock"></i> 5 min de lectura</span>
            </div>
          </header>

          <div className="article-featured-image-container">
            <Image 
              src={post.image} 
              alt={post.title} 
              width={1200} 
              height={600} 
              className="article-featured-image"
              priority
            />
          </div>

          <div className="article-content" dangerouslySetInnerHTML={{ __html: post.content || `<p class="lead" style="font-size: 1.3rem; font-weight: 500; color: var(--white); margin-bottom: 3rem;">${post.excerpt}</p><p>Contenido completo del artículo próximamente...</p>` }} />

          <div className="article-author">
            <Image 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
              alt={post.author} 
              className="author-avatar" 
              width={100}
              height={100}
            />
            <div className="author-info">
              <h4>{post.author}</h4>
              <p>Estratega B2B Senior con más de 15 años de experiencia liderando transformaciones digitales y expansiones de mercado.</p>
            </div>
          </div>

          <div className="article-nav">
            <div className="nav-item prev"></div>
            <div className="nav-item next">
              {nextPost && (
                <>
                  <span>Siguiente Artículo</span>
                  <Link href={`/blog/${nextPost.slug}`}>{nextPost.title} <i className="fa-solid fa-arrow-right"></i></Link>
                </>
              )}
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
