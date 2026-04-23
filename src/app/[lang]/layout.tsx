import type { Metadata } from "next";
import { Montserrat, Space_Grotesk } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import "../globals.css";

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

export const metadata: Metadata = {
  title: {
    default: "Echopoint AI - Consultoría Empresarial Estratégica",
    template: "%s | Echopoint AI",
  },
  description:
    "Echopoint fusiona intuición humana y potencia de IA para estrategias B2B transformadoras. Consultoría empresarial, análisis predictivo y expansión internacional.",
  keywords: [
    "consultoría empresarial",
    "estrategia B2B",
    "inteligencia artificial",
    "crecimiento empresarial",
    "expansión internacional",
    "análisis predictivo",
    "Echopoint AI",
  ],
  authors: [{ name: "Echopoint AI" }],
  creator: "Echopoint AI",
  openGraph: {
    title: "Echopoint AI - Consultoría Empresarial Estratégica",
    description:
      "Echopoint fusiona intuición humana y potencia de IA para estrategias B2B transformadoras.",
    url: "https://echopointmx.com",
    siteName: "Echopoint AI",
    images: [
      {
        url: "/logo.webp",
        width: 800,
        height: 600,
        alt: "Echopoint AI Logo",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Echopoint AI - Consultoría Empresarial Estratégica",
    description:
      "Fusión de inteligencia artificial y creatividad humana para estrategias B2B.",
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
  metadataBase: new URL("https://echopointmx.com"),
};

// JSON-LD Structured Data
const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Echopoint AI",
  url: "https://echopointmx.com",
  logo: "https://echopointmx.com/logo.webp",
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
  url: "https://echopointmx.com",
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
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
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

