export type BlogPost = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  author: string;
  content?: string;
};

export const blogPosts: BlogPost[] = [
  {
      id: 1,
      title: "5 Estrategias de Crecimiento B2B para 2026",
      slug: "5-estrategias-de-crecimiento-b2b",
      excerpt: "Descubre las tácticas probadas que están redefiniendo cómo las empresas escalan en mercados saturados.",
      category: "Estrategia",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      date: "15 Mar 2026",
      author: "Marc T.",
  },
  {
      id: 2,
      title: "IA en B2B: Más allá del Hype",
      slug: "ia-en-b2b-mas-alla-del-hype",
      excerpt: "Cómo implementar inteligencia artificial pragmática para optimizar procesos y no solo para seguir tendencias.",
      category: "Tecnología",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      date: "20 Mar 2026",
      author: "Elena R.",
  },
  {
      id: 3,
      title: "El Poder de las Alianzas Estratégicas",
      slug: "el-poder-de-las-alianzas-estrategicas",
      excerpt: "Por qué competir es cosa del pasado. Aprende a estructurar joint ventures que multipliquen tu alcance.",
      category: "Estrategia",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      date: "25 Mar 2026",
      author: "Marc T.",
  },
  {
      id: 4,
      title: "Guía de Expansión Internacional",
      slug: "guia-de-expansion-internacional",
      excerpt: "Claves culturales y operativas para llevar tu negocio a nuevos territorios sin morir en el intento.",
      category: "Expansión",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      date: "28 Mar 2026",
      author: "Sarah J.",
  },
  {
      id: 5,
      title: "Psicología de Ventas B2B: ABM",
      slug: "psicologia-de-ventas-b2b-abm",
      excerpt: "Cómo personalizar tu enfoque para cerrar cuentas Enterprise utilizando principios psicológicos y datos.",
      category: "Ventas",
      image: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      date: "02 Abr 2026",
      author: "Roberto M.",
  }
];
