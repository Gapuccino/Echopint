import { MetadataRoute } from 'next';
import { blogPosts } from '@/data/posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://echopint.vercel.app';

  const locales = ['es', 'en', 'fr', 'pt'];
  const allUrls: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    // Static pages
    allUrls.push(
      {
        url: `${baseUrl}/${locale}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1,
      },
      {
        url: `${baseUrl}/${locale}/servicios`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/${locale}/nosotros`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: `${baseUrl}/${locale}/contacto`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: `${baseUrl}/${locale}/blog`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      }
    );

    // Dynamic service pages
    const serviceSlugs = [
      'estrategia-crecimiento',
      'desarrollo-alianzas',
      'generacion-ventas',
      'expansion-internacional',
      'nuevos-productos',
      'inteligencia-comercial',
      'dashboards-ejecutivos',
      'reportes-financieros',
      'analisis-ventas',
      'optimizacion-operaciones',
      'estrategia-datos',
      'analisis-predictivo',
    ];
    
    serviceSlugs.forEach((slug) => {
      allUrls.push({
        url: `${baseUrl}/${locale}/servicios/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      });
    });

    // Dynamic blog pages
    blogPosts.forEach((post) => {
      allUrls.push({
        url: `${baseUrl}/${locale}/blog/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      });
    });
  });

  return allUrls;
}
