import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "2rem",
      background: "var(--bg-dark)",
      color: "var(--text-primary)",
      fontFamily: "var(--font-display)",
    }}>
      <div style={{
        fontSize: "8rem",
        fontWeight: 700,
        background: "linear-gradient(135deg, #06b6d4, #f59e0b)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
        lineHeight: 1,
        marginBottom: "1rem",
      }}>
        404
      </div>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        Página no encontrada
      </h1>
      <p style={{
        color: "#94a3b8",
        maxWidth: "400px",
        marginBottom: "2rem",
        lineHeight: 1.6,
      }}>
        La ruta que buscas no existe o fue movida. Pero no te preocupes, tu siguiente gran estrategia te espera en el inicio.
      </p>
      <Link
        href="/"
        style={{
          display: "inline-block",
          padding: "0.8rem 2rem",
          background: "#f8fafc",
          color: "#050a14",
          borderRadius: "50px",
          fontWeight: 600,
          textDecoration: "none",
          transition: "all 0.3s ease",
        }}
      >
        Volver al Inicio
      </Link>
    </div>
  );
}
