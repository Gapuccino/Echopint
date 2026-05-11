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

export default function TermsPage() {
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
          {t("footer.terms")}
        </h1>
        <p style={{ ...p, fontSize: "0.875rem", marginBottom: "3rem" }}>
          Última actualización: 11 de mayo de 2026
        </p>

        <section style={section}>
          <h2 style={h2}>1. Aceptación de los términos</h2>
          <p style={p}>
            Al acceder y utilizar el sitio web <strong>echopointmx.com</strong> (el &ldquo;Sitio&rdquo;),
            usted acepta quedar vinculado por los presentes Términos de Servicio. Si no está de acuerdo
            con alguno de estos términos, le pedimos que no utilice el Sitio.
          </p>
          <p style={p}>
            Estos términos aplican a todos los visitantes y usuarios del Sitio.
          </p>
        </section>

        <section style={section}>
          <h2 style={h2}>2. Descripción del servicio</h2>
          <p style={p}>
            EchoPoint es una empresa de consultoría estratégica B2B con sede en la Ciudad de México.
            El Sitio tiene como finalidad presentar información sobre nuestros servicios de consultoría,
            análisis predictivo, expansión internacional y optimización de ventas, así como recibir
            solicitudes de contacto de potenciales clientes.
          </p>
          <p style={p}>
            El Sitio no ofrece servicios de suscripción, cuentas de usuario, ni procesamiento de pagos
            en línea. Los formularios de contacto son el único medio de interacción disponible.
          </p>
        </section>

        <section style={section}>
          <h2 style={h2}>3. Uso permitido del Sitio</h2>
          <p style={p}>Al utilizar el Sitio, usted se compromete a:</p>
          <ul style={ul}>
            <li>Hacer uso del Sitio únicamente con fines legales y legítimos</li>
            <li>Proporcionar información veraz y completa en los formularios de contacto</li>
            <li>No intentar acceder a sistemas, redes o datos no autorizados</li>
            <li>No enviar contenido ofensivo, fraudulento o malicioso a través de los formularios</li>
            <li>
              No utilizar herramientas automatizadas (bots, scrapers) para extraer contenido del Sitio
            </li>
            <li>
              No intentar interferir con el funcionamiento normal del Sitio mediante ataques de denegación
              de servicio u otras técnicas similares
            </li>
          </ul>
        </section>

        <section style={section}>
          <h2 style={h2}>4. Propiedad intelectual</h2>
          <p style={p}>
            Todo el contenido del Sitio, incluyendo textos, gráficos, logotipos, imágenes, íconos y
            software, es propiedad de EchoPoint o de sus proveedores de contenido y está protegido por
            las leyes de propiedad intelectual aplicables en México y en el ámbito internacional.
          </p>
          <p style={p}>
            Queda prohibida la reproducción, distribución, modificación o uso comercial de cualquier
            contenido del Sitio sin autorización expresa y por escrito de EchoPoint.
          </p>
          <p style={p}>
            Algunas imágenes utilizadas en el Sitio provienen de Unsplash y están sujetas a su propia
            licencia de uso.
          </p>
        </section>

        <section style={section}>
          <h2 style={h2}>5. Limitación de responsabilidad</h2>
          <p style={p}>
            El contenido del Sitio se proporciona con fines informativos generales. EchoPoint no garantiza
            la exactitud, integridad o vigencia de la información publicada, y se reserva el derecho de
            modificarla sin previo aviso.
          </p>
          <p style={p}>
            En la máxima medida permitida por la ley aplicable, EchoPoint no será responsable por daños
            directos, indirectos, incidentales o consecuentes derivados del uso o la imposibilidad de
            usar el Sitio, incluyendo pérdida de datos o de oportunidades de negocio.
          </p>
          <p style={p}>
            EchoPoint no se hace responsable del contenido de sitios web de terceros que puedan estar
            enlazados desde el Sitio.
          </p>
        </section>

        <section style={section}>
          <h2 style={h2}>6. Disponibilidad del Sitio</h2>
          <p style={p}>
            EchoPoint se esfuerza por mantener el Sitio disponible de manera continua, pero no garantiza
            una disponibilidad ininterrumpida. El Sitio puede estar temporalmente fuera de servicio por
            mantenimiento, actualizaciones o causas fuera de nuestro control.
          </p>
        </section>

        <section style={section}>
          <h2 style={h2}>7. Modificaciones a los términos</h2>
          <p style={p}>
            EchoPoint se reserva el derecho de modificar estos Términos de Servicio en cualquier
            momento. Las modificaciones entrarán en vigor desde su publicación en el Sitio con una
            nueva fecha de actualización. El uso continuado del Sitio después de dichos cambios
            constituye su aceptación de los nuevos términos.
          </p>
        </section>

        <section style={section}>
          <h2 style={h2}>8. Legislación aplicable y jurisdicción</h2>
          <p style={p}>
            Estos Términos de Servicio se rigen e interpretan de conformidad con las leyes vigentes en
            los Estados Unidos Mexicanos. Para la resolución de cualquier controversia derivada del uso
            del Sitio, las partes se someten a la jurisdicción de los tribunales competentes de la
            Ciudad de México, renunciando expresamente a cualquier otro fuero que pudiera corresponderles
            por razón de su domicilio presente o futuro.
          </p>
        </section>

        <section style={section}>
          <h2 style={h2}>9. Contacto</h2>
          <p style={p}>
            Si tiene preguntas sobre estos Términos de Servicio, puede contactarnos en:{" "}
            <ProtectedEmail
              email="contacto@echopointmx.com"
              style={{ color: "var(--tech-cyan, #06b6d4)" }}
            />
            .
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
