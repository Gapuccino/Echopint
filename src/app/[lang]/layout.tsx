import type { Metadata } from "next";
import { Montserrat, Space_Grotesk } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import { getDictionary } from "@/i18n/dictionaries";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../globals.css";

// Prevent Font Awesome from adding its CSS since we did it above
config.autoAddCss = false;

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-main",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const baseUrl = "https://echopint.vercel.app";

  return {
    title: {
      default: "Echopoint AI - Consultoría Empresarial Estratégica",
      template: "%s | Echopoint AI",
    },
    description:
      "Echopoint fusiona intuición humana y potencia de IA para estrategias B2B transformadoras. Consultoría empresarial, análisis predictivo y expansión internacional.",
    keywords: [
      "consultoría empresarial", "estrategia B2B", "inteligencia artificial", 
      "crecimiento empresarial", "expansión internacional", "análisis predictivo", "Echopoint AI"
    ],
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `${baseUrl}/${lang}`,
      languages: {
        "es-MX": `${baseUrl}/es`,
        "en-US": `${baseUrl}/en`,
        "fr-FR": `${baseUrl}/fr`,
        "pt-BR": `${baseUrl}/pt`,
      },
    },
    openGraph: {
      title: "Echopoint AI - Consultoría Empresarial Estratégica",
      description: "Echopoint fusiona intuición humana y potencia de IA para estrategias B2B transformadoras.",
      url: `${baseUrl}/${lang}`,
      siteName: "Echopoint AI",
      images: [{ url: "/logo.webp", width: 800, height: 600, alt: "Echopoint AI Logo" }],
      locale: lang === 'es' ? 'es_MX' : lang === 'en' ? 'en_US' : lang === 'fr' ? 'fr_FR' : 'pt_BR',
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Echopoint AI - Consultoría Empresarial Estratégica",
      description: "Fusión de inteligencia artificial y creatividad humana para estrategias B2B.",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

// JSON-LD Structured Data
const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Echopoint AI",
  url: "https://echopint.vercel.app",
  logo: "https://echopint.vercel.app/logo.webp",
  description: "Consultoría empresarial estratégica que fusiona inteligencia artificial y creatividad humana para estrategias B2B transformadoras.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Ricardo Margain Zozaya 335-Piso 4 y 5",
    addressLocality: "San Pedro Garza García",
    addressRegion: "N.L.",
    postalCode: "66265",
    addressCountry: "MX",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+52-55-25056854",
    contactType: "sales",
    email: "contacto@echopointmx.com",
    availableLanguage: ["Spanish", "English", "French", "Portuguese"],
  },
  sameAs: [],
};

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Echopoint AI",
  url: "https://echopint.vercel.app",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  return (
    <html lang={lang} className={`${montserrat.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" 
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer" 
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
      </head>
      <body>
        <LanguageProvider initialLang={lang as any}>
          <a
            href="#main-content"
            className="sr-only"
            style={{
              position: "absolute",
              top: "-100px",
              left: 0,
              background: "var(--tech-cyan)",
              color: "var(--bg-dark)",
              padding: "0.5rem 1rem",
              zIndex: 9999,
            }}
          >
            Skip to content
          </a>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

