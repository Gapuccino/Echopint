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

export default function PrivacyPage() {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
      <main style={{ minHeight: "60vh", padding: "8rem 1.5rem 4rem", maxWidth: "800px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>
          {t("footer.privacy")}
        </h1>
        <p style={{ ...p, fontSize: "0.875rem", marginBottom: "3rem" }}>
          {t("privacy.lastUpdated")}
        </p>

        <section style={section}>
          <h2 style={h2}>{t("privacy.s1.title")}</h2>
          <p style={p}>{t("privacy.s1.p1")}</p>
          <p style={p}>
            {t("privacy.s1.p2")}{" "}
            <ProtectedEmail email="contacto@echopointmx.com" style={emailStyle} />.
          </p>
        </section>

        <section style={section}>
          <h2 style={h2}>{t("privacy.s2.title")}</h2>
          <p style={p}>{t("privacy.s2.p1")}</p>
          <ul style={ul}>
            <li>{t("privacy.s2.l1")}</li>
            <li>{t("privacy.s2.l2")}</li>
            <li>{t("privacy.s2.l3")}</li>
            <li>{t("privacy.s2.l4")}</li>
          </ul>
          <p style={p}>{t("privacy.s2.after1")}</p>
          <p style={p}>{t("privacy.s2.after2")}</p>
        </section>

        <section style={section}>
          <h2 style={h2}>{t("privacy.s3.title")}</h2>
          <p style={p}>{t("privacy.s3.p1")}</p>
          <ul style={ul}>
            <li>{t("privacy.s3.l1")}</li>
            <li>{t("privacy.s3.l2")}</li>
            <li>{t("privacy.s3.l3")}</li>
            <li>{t("privacy.s3.l4")}</li>
          </ul>
        </section>

        <section style={section}>
          <h2 style={h2}>{t("privacy.s4.title")}</h2>
          <p style={p}>{t("privacy.s4.p1")}</p>
          <ul style={ul}>
            <li>{t("privacy.s4.l1")}</li>
            <li>{t("privacy.s4.l2")}</li>
            <li>{t("privacy.s4.l3")}</li>
            <li>{t("privacy.s4.l4")}</li>
            <li>{t("privacy.s4.l5")}</li>
          </ul>
          <p style={p}>{t("privacy.s4.after1")}</p>
        </section>

        <section style={section}>
          <h2 style={h2}>{t("privacy.s5.title")}</h2>
          <p style={p}>
            {t("privacy.s5.p1")}{" "}
            <ProtectedEmail email="contacto@echopointmx.com" style={emailStyle} />.
          </p>
          <p style={p}>{t("privacy.s5.p2")}</p>
        </section>

        <section style={section}>
          <h2 style={h2}>{t("privacy.s6.title")}</h2>
          <p style={p}>{t("privacy.s6.p1")}</p>
          <p style={p}>{t("privacy.s6.p2")}</p>
        </section>

        <section style={section}>
          <h2 style={h2}>{t("privacy.s7.title")}</h2>
          <p style={p}>{t("privacy.s7.p1")}</p>
        </section>

        <section style={section}>
          <h2 style={h2}>{t("privacy.s8.title")}</h2>
          <p style={p}>{t("privacy.s8.p1")}</p>
        </section>

        <section style={section}>
          <h2 style={h2}>{t("privacy.s9.title")}</h2>
          <p style={p}>{t("privacy.s9.p1")}</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
