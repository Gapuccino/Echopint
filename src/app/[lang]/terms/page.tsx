"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProtectedEmail from "@/components/ProtectedEmail/ProtectedEmail";
import { useLanguage } from "@/context/LanguageContext";

const section: React.CSSProperties = { marginBottom: "2.5rem" };
const h2: React.CSSProperties = {
  fontSize: "1.125rem",
  fontWeight: 600,
  marginBottom: "0.75rem",
  color: "var(--text-primary, #f1f5f9)",
};
const p: React.CSSProperties = {
  color: "var(--text-muted, #94a3b8)",
  lineHeight: 1.8,
  marginBottom: "0.75rem",
};
const ul: React.CSSProperties = {
  color: "var(--text-muted, #94a3b8)",
  lineHeight: 1.8,
  paddingLeft: "1.5rem",
  marginBottom: "0.75rem",
};
const emailStyle: React.CSSProperties = { color: "var(--tech-cyan, #06b6d4)" };

export default function TermsPage() {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
      <main style={{ minHeight: "60vh", padding: "8rem 1.5rem 4rem", maxWidth: "800px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>
          {t("footer.terms")}
        </h1>
        <p style={{ ...p, fontSize: "0.875rem", marginBottom: "3rem" }}>
          {t("terms.lastUpdated")}
        </p>

        <section style={section}>
          <h2 style={h2}>{t("terms.s1.title")}</h2>
          <p style={p}>{t("terms.s1.p1")}</p>
          <p style={p}>{t("terms.s1.p2")}</p>
        </section>

        <section style={section}>
          <h2 style={h2}>{t("terms.s2.title")}</h2>
          <p style={p}>{t("terms.s2.p1")}</p>
          <p style={p}>{t("terms.s2.p2")}</p>
        </section>

        <section style={section}>
          <h2 style={h2}>{t("terms.s3.title")}</h2>
          <p style={p}>{t("terms.s3.p1")}</p>
          <ul style={ul}>
            <li>{t("terms.s3.l1")}</li>
            <li>{t("terms.s3.l2")}</li>
            <li>{t("terms.s3.l3")}</li>
            <li>{t("terms.s3.l4")}</li>
            <li>{t("terms.s3.l5")}</li>
            <li>{t("terms.s3.l6")}</li>
          </ul>
        </section>

        <section style={section}>
          <h2 style={h2}>{t("terms.s4.title")}</h2>
          <p style={p}>{t("terms.s4.p1")}</p>
          <p style={p}>{t("terms.s4.p2")}</p>
          <p style={p}>{t("terms.s4.p3")}</p>
        </section>

        <section style={section}>
          <h2 style={h2}>{t("terms.s5.title")}</h2>
          <p style={p}>{t("terms.s5.p1")}</p>
          <p style={p}>{t("terms.s5.p2")}</p>
          <p style={p}>{t("terms.s5.p3")}</p>
        </section>

        <section style={section}>
          <h2 style={h2}>{t("terms.s6.title")}</h2>
          <p style={p}>{t("terms.s6.p1")}</p>
        </section>

        <section style={section}>
          <h2 style={h2}>{t("terms.s7.title")}</h2>
          <p style={p}>{t("terms.s7.p1")}</p>
        </section>

        <section style={section}>
          <h2 style={h2}>{t("terms.s8.title")}</h2>
          <p style={p}>{t("terms.s8.p1")}</p>
        </section>

        <section style={section}>
          <h2 style={h2}>{t("terms.s9.title")}</h2>
          <p style={p}>
            {t("terms.s9.p1")}{" "}
            <ProtectedEmail email="contacto@echopointmx.com" style={emailStyle} />.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
