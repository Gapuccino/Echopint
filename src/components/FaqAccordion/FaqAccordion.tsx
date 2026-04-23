"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const faqData: Record<string, Array<{ q: string; a: string }>> = {
  ES: [
    {
      q: "Â¿La IA reemplazarÃ¡ a mi equipo de ventas?",
      a: "No. Nuestra tecnologÃ­a estÃ¡ diseÃ±ada para liberar a tu equipo de tareas repetitivas y proporcionarles 'superpoderes' de datos. La empatÃ­a y el cierre siguen siendo humanos."
    },
    {
      q: "Â¿CÃ³mo garantizan la seguridad de mis datos?",
      a: "Cumplimos con los mÃ¡s altos estÃ¡ndares de encriptaciÃ³n y normativas internacionales (GDPR/CCPA). Tus datos estratÃ©gicos nunca se comparten ni se usan para entrenar modelos externos sin consentimiento."
    },
    {
      q: "Â¿CuÃ¡nto tiempo toma ver resultados?",
      a: "Nuestros clientes suelen ver un aumento en la calidad de los leads en las primeras 4 semanas y un impacto significativo en el ROI a partir del tercer mes."
    }
  ],
  EN: [
    {
      q: "Will AI replace my sales team?",
      a: "No. Our technology is designed to free your team from repetitive tasks and give them data 'superpowers.' Empathy and closing deals remain human."
    },
    {
      q: "How do you guarantee my data security?",
      a: "We comply with the highest encryption standards and international regulations (GDPR/CCPA). Your strategic data is never shared or used to train external models without consent."
    },
    {
      q: "How long does it take to see results?",
      a: "Our clients typically see an increase in lead quality within the first 4 weeks and a significant ROI impact from the third month."
    }
  ],
  FR: [
    {
      q: "L'IA remplacera-t-elle mon Ã©quipe de vente ?",
      a: "Non. Notre technologie est conÃ§ue pour libÃ©rer votre Ã©quipe des tÃ¢ches rÃ©pÃ©titives et leur donner des 'super-pouvoirs' de donnÃ©es. L'empathie et la conclusion restent humaines."
    },
    {
      q: "Comment garantissez-vous la sÃ©curitÃ© de mes donnÃ©es ?",
      a: "Nous respectons les normes de chiffrement les plus Ã©levÃ©es et les rÃ©glementations internationales (RGPD/CCPA). Vos donnÃ©es stratÃ©giques ne sont jamais partagÃ©es sans consentement."
    },
    {
      q: "Combien de temps faut-il pour voir des rÃ©sultats ?",
      a: "Nos clients constatent gÃ©nÃ©ralement une amÃ©lioration de la qualitÃ© des prospects dans les 4 premiÃ¨res semaines et un impact significatif sur le ROI Ã  partir du troisiÃ¨me mois."
    }
  ],
  PT: [
    {
      q: "A IA vai substituir minha equipe de vendas?",
      a: "NÃ£o. Nossa tecnologia foi projetada para liberar sua equipe de tarefas repetitivas e dar-lhes 'superpoderes' de dados. A empatia e o fechamento continuam sendo humanos."
    },
    {
      q: "Como vocÃªs garantem a seguranÃ§a dos meus dados?",
      a: "Cumprimos os mais altos padrÃµes de criptografia e regulamentaÃ§Ãµes internacionais (GDPR/CCPA). Seus dados estratÃ©gicos nunca sÃ£o compartilhados sem consentimento."
    },
    {
      q: "Quanto tempo leva para ver resultados?",
      a: "Nossos clientes geralmente veem um aumento na qualidade dos leads nas primeiras 4 semanas e um impacto significativo no ROI a partir do terceiro mÃªs."
    }
  ]
};

import styles from "./FaqAccordion.module.css";

export default function FaqAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { lang } = useLanguage();
  const faqs = faqData[lang] || faqData.ES;

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={`${styles.faqAccordion} fade-in-up`}>
      {faqs.map((faq, index) => (
        <div className={styles.faqItem} key={index}>
          <button
            className={`${styles.faqQuestion} ${activeIndex === index ? styles.active : ""}`}
            onClick={() => toggleAccordion(index)}
            aria-expanded={activeIndex === index}
          >
            {faq.q} <i className={`fa-solid fa-${activeIndex === index ? "minus" : "plus"}`}></i>
          </button>
          <div
            className={`${styles.faqAnswer} ${activeIndex === index ? styles.active : ""}`}
            style={{ maxHeight: activeIndex === index ? "1000px" : "0" }}
          >
            <p>{faq.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
