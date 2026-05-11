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

export default function PrivacyPage() {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
      <main
        style={{
          minHeight: "60vh",
          padding: "8rem 1.5rem 4rem",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>
          {t("footer.privacy")}
        </h1>
        <p style={{ ...p, fontSize: "0.875rem", marginBottom: "3rem" }}>
          Última actualización: 11 de mayo de 2026
        </p>

        <section style={section}>
          <h2 style={h2}>1. Responsable del tratamiento</h2>
          <p style={p}>
            EchoPoint (en adelante, &ldquo;EchoPoint&rdquo;, &ldquo;nosotros&rdquo; o &ldquo;la empresa&rdquo;),
            con domicilio en la Ciudad de México, México, es responsable del tratamiento de los datos personales
            que usted proporciona a través del sitio web <strong>echopointmx.com</strong> (el &ldquo;Sitio&rdquo;).
          </p>
          <p style={p}>
            Para cualquier consulta relacionada con este Aviso de Privacidad, contáctenos en:{" "}
            <ProtectedEmail
              email="contacto@echopointmx.com"
              style={{ color: "var(--tech-cyan, #06b6d4)" }}
            />
            .
          </p>
        </section>

        <section style={section}>
          <h2 style={h2}>2. Datos personales que recabamos</h2>
          <p style={p}>A través de los formularios del Sitio recabamos los siguientes datos personales:</p>
          <ul style={ul}>
            <li>Nombre completo</li>
            <li>Correo electrónico corporativo</li>
            <li>Asunto y mensaje de contacto</li>
            <li>
              Dirección IP (de forma automática, para control de seguridad y prevención de spam)
            </li>
          </ul>
          <p style={p}>
            Para la descarga de materiales, únicamente recabamos su dirección de correo electrónico.
          </p>
          <p style={p}>
            No recabamos datos personales sensibles en el sentido de la Ley Federal de Protección de Datos
            Personales en Posesión de los Particulares (LFPDPPP).
          </p>
        </section>

        <section style={section}>
          <h2 style={h2}>3. Finalidades del tratamiento</h2>
          <p style={p}>Sus datos personales son tratados para las siguientes finalidades:</p>
          <ul style={ul}>
            <li>Responder a sus solicitudes de información o contacto</li>
            <li>Enviarle materiales o recursos descargables solicitados</li>
            <li>Prevenir fraudes y garantizar la seguridad del Sitio (dirección IP)</li>
            <li>Dar seguimiento a consultas comerciales o de servicios</li>
          </ul>
        </section>

        <section style={section}>
          <h2 style={h2}>4. Transferencia de datos a terceros</h2>
          <p style={p}>
            Para operar el Sitio, compartimos datos con los siguientes proveedores de servicios:
          </p>
          <ul style={ul}>
            <li>
              <strong>Resend</strong> — Proveedor de entrega de correos electrónicos transaccionales.
              Sus datos de contacto son transmitidos a este servicio para el envío de la notificación
              de su mensaje.
            </li>
            <li>
              <strong>New Relic</strong> — Plataforma de monitoreo de rendimiento. Recopila métricas
              anónimas de navegación y rendimiento del Sitio.
            </li>
            <li>
              <strong>Drift</strong> — Plataforma de chat en vivo. Puede recopilar datos de sesión e
              interacción mediante cookies.
            </li>
            <li>
              <strong>Cloudflare</strong> — Proveedor de alojamiento y CDN. Procesa tráfico web de
              forma estándar como parte de la infraestructura del Sitio.
            </li>
            <li>
              <strong>Google Fonts</strong> — Servicio de tipografías. Realiza solicitudes de archivos
              de fuente desde los servidores de Google al cargar el Sitio.
            </li>
          </ul>
          <p style={p}>
            No vendemos, arrendamos ni compartimos sus datos personales con terceros con fines
            comerciales propios.
          </p>
        </section>

        <section style={section}>
          <h2 style={h2}>5. Derechos ARCO</h2>
          <p style={p}>
            Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse (derechos ARCO) al
            tratamiento de sus datos personales, de conformidad con la LFPDPPP. Para ejercer estos
            derechos, envíe su solicitud a:{" "}
            <ProtectedEmail
              email="contacto@echopointmx.com"
              style={{ color: "var(--tech-cyan, #06b6d4)" }}
            />
            .
          </p>
          <p style={p}>
            Su solicitud debe incluir: nombre completo, correo electrónico con el que nos contactó,
            descripción clara del derecho que desea ejercer y documentos que acrediten su identidad.
            Responderemos en un plazo máximo de 20 días hábiles conforme a lo establecido en la ley.
          </p>
        </section>

        <section style={section}>
          <h2 style={h2}>6. Cookies y tecnologías de rastreo</h2>
          <p style={p}>
            El Sitio utiliza cookies y tecnologías similares a través de servicios de terceros,
            principalmente Drift (chat en vivo) y New Relic (monitoreo de rendimiento). Estas cookies
            pueden almacenar información sobre su sesión de navegación.
          </p>
          <p style={p}>
            Puede configurar su navegador para rechazar o eliminar cookies, aunque esto puede afectar
            la funcionalidad del chat en vivo.
          </p>
        </section>

        <section style={section}>
          <h2 style={h2}>7. Retención de datos</h2>
          <p style={p}>
            Los datos de los formularios de contacto son recibidos y almacenados en la cuenta de correo
            electrónico corporativo de EchoPoint. No mantenemos una base de datos independiente de
            usuarios o contactos. Los mensajes se conservan mientras sean necesarios para dar
            seguimiento a la consulta correspondiente.
          </p>
        </section>

        <section style={section}>
          <h2 style={h2}>8. Cambios a este Aviso de Privacidad</h2>
          <p style={p}>
            Nos reservamos el derecho de actualizar este Aviso de Privacidad en cualquier momento.
            Los cambios serán publicados en esta página con una nueva fecha de actualización.
            Le recomendamos revisarlo periódicamente.
          </p>
        </section>

        <section style={section}>
          <h2 style={h2}>9. Legislación aplicable</h2>
          <p style={p}>
            Este Aviso de Privacidad se rige por la Ley Federal de Protección de Datos Personales en
            Posesión de los Particulares (LFPDPPP) y demás normativa aplicable en los Estados Unidos
            Mexicanos. Para usuarios ubicados en el Espacio Económico Europeo, aplicamos los
            principios del Reglamento General de Protección de Datos (RGPD/GDPR) en lo conducente.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
