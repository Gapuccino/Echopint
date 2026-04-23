"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const formLabels: Record<string, Record<string, string>> = {
  ES: {
    name: "Nombre Completo",
    namePh: "Ej. Juan PÃ©rez",
    nameErr: "Por favor ingresa tu nombre completo.",
    email: "Correo Corporativo",
    emailPh: "nombre@empresa.com",
    emailErr: "Por favor ingresa un correo vÃ¡lido.",
    subject: "Asunto",
    subjectPh: "Ej. Solicitud de ConsultorÃ­a",
    subjectErr: "El asunto es muy corto.",
    message: "Mensaje",
    messagePh: "CuÃ©ntanos sobre tus desafÃ­os...",
    messageErr: "Por favor detalla un poco mÃ¡s tu mensaje.",
    btn: "Enviar Mensaje",
    success: "Â¡Mensaje enviado con Ã©xito! Te contactaremos en menos de 24 horas.",
    errorFields: "Hubo un error al enviar. Por favor completa todos los campos correctamente.",
    errorServer: "Error del servidor. Intenta de nuevo mÃ¡s tarde."
  },
  EN: {
    name: "Full Name",
    namePh: "e.g. John Doe",
    nameErr: "Please enter your full name.",
    email: "Corporate Email",
    emailPh: "name@company.com",
    emailErr: "Please enter a valid email.",
    subject: "Subject",
    subjectPh: "e.g. Consulting Request",
    subjectErr: "Subject is too short.",
    message: "Message",
    messagePh: "Tell us about your challenges...",
    messageErr: "Please provide more details.",
    btn: "Send Message",
    success: "Message sent successfully! We'll contact you within 24 hours.",
    errorFields: "Error sending. Please fill in all fields correctly.",
    errorServer: "Server error. Please try again later."
  },
  FR: {
    name: "Nom Complet",
    namePh: "Ex. Jean Dupont",
    nameErr: "Veuillez entrer votre nom complet.",
    email: "Email Professionnel",
    emailPh: "nom@entreprise.com",
    emailErr: "Veuillez entrer un email valide.",
    subject: "Sujet",
    subjectPh: "Ex. Demande de Consultation",
    subjectErr: "Le sujet est trop court.",
    message: "Message",
    messagePh: "Parlez-nous de vos dÃ©fis...",
    messageErr: "Veuillez dÃ©tailler davantage votre message.",
    btn: "Envoyer le Message",
    success: "Message envoyÃ© avec succÃ¨s ! Nous vous contacterons sous 24 heures.",
    errorFields: "Erreur d'envoi. Veuillez remplir correctement tous les champs.",
    errorServer: "Erreur serveur. RÃ©essayez plus tard."
  },
  PT: {
    name: "Nome Completo",
    namePh: "Ex. JoÃ£o Silva",
    nameErr: "Por favor, insira seu nome completo.",
    email: "Email Corporativo",
    emailPh: "nome@empresa.com",
    emailErr: "Por favor, insira um email vÃ¡lido.",
    subject: "Assunto",
    subjectPh: "Ex. SolicitaÃ§Ã£o de Consultoria",
    subjectErr: "O assunto Ã© muito curto.",
    message: "Mensagem",
    messagePh: "Conte-nos sobre seus desafios...",
    messageErr: "Por favor, forneÃ§a mais detalhes.",
    btn: "Enviar Mensagem",
    success: "Mensagem enviada com sucesso! Entraremos em contato em atÃ© 24 horas.",
    errorFields: "Erro ao enviar. Por favor, preencha todos os campos corretamente.",
    errorServer: "Erro do servidor. Tente novamente mais tarde."
  }
};

import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const { lang } = useLanguage();
  const labels = formLabels[lang] || formLabels.ES;

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    // Validate
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus("error");
      setErrorMsg(labels.errorFields);
      return;
    }

    // Check honeypot
    const honeypot = (document.getElementById("website") as HTMLInputElement)?.value;
    if (honeypot) {
      // Bot detected, pretend success
      setStatus("success");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 6000);
      } else {
        setStatus("error");
        setErrorMsg(labels.errorServer);
      }
    } catch {
      setStatus("error");
      setErrorMsg(labels.errorServer);
    }
  };

  return (
    <form className={styles.contactForm} id="main-contact-form" onSubmit={handleSubmit} noValidate>
      <div className={styles.formGroup}>
        <label htmlFor="name">{labels.name}</label>
        <input
          type="text"
          id="name"
          placeholder={labels.namePh}
          required
          minLength={2}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <span className={styles.errorMsg}>{labels.nameErr}</span>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">{labels.email}</label>
        <input
          type="email"
          id="email"
          placeholder={labels.emailPh}
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <span className={styles.errorMsg}>{labels.emailErr}</span>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="subject">{labels.subject}</label>
        <input
          type="text"
          id="subject"
          placeholder={labels.subjectPh}
          required
          minLength={5}
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
        />
        <span className={styles.errorMsg}>{labels.subjectErr}</span>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="message">{labels.message}</label>
        <textarea
          id="message"
          rows={5}
          placeholder={labels.messagePh}
          required
          minLength={10}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        ></textarea>
        <span className={styles.errorMsg}>{labels.messageErr}</span>
      </div>

      {/* Honeypot for Spam Protection */}
      <div style={{ display: "none" }}>
        <label htmlFor="website">Website</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <button
        type="submit"
        className={`btn btn-primary full-width ${styles.submitBtn} ${status === "loading" ? styles.loading : ""}`}
        disabled={status === "loading"}
      >
        <span className={styles.btnText}>{labels.btn}</span>
        <span className={styles.btnLoader}><i className="fa-solid fa-circle-notch fa-spin"></i></span>
      </button>

      {status === "success" && (
        <div className="form-status success-message">
          <i className="fa-solid fa-check-circle"></i>
          <p>{labels.success}</p>
        </div>
      )}
      {status === "error" && (
        <div className="form-status error-message">
          <i className="fa-solid fa-circle-exclamation"></i>
          <p>{errorMsg}</p>
        </div>
      )}
    </form>
  );
}
