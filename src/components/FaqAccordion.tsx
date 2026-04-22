"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const faqData: Record<string, Array<{ q: string; a: string }>> = {
  ES: [
    {
      q: "¿La IA reemplazará a mi equipo de ventas?",
      a: "No. Nuestra tecnología está diseñada para liberar a tu equipo de tareas repetitivas y proporcionarles 'superpoderes' de datos. La empatía y el cierre siguen siendo humanos."
    },
    {
      q: "¿Cómo garantizan la seguridad de mis datos?",
      a: "Cumplimos con los más altos estándares de encriptación y normativas internacionales (GDPR/CCPA). Tus datos estratégicos nunca se comparten ni se usan para entrenar modelos externos sin consentimiento."
    },
    {
      q: "¿Cuánto tiempo toma ver resultados?",
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
      q: "L'IA remplacera-t-elle mon équipe de vente ?",
      a: "Non. Notre technologie est conçue pour libérer votre équipe des tâches répétitives et leur donner des 'super-pouvoirs' de données. L'empathie et la conclusion restent humaines."
    },
    {
      q: "Comment garantissez-vous la sécurité de mes données ?",
      a: "Nous respectons les normes de chiffrement les plus élevées et les réglementations internationales (RGPD/CCPA). Vos données stratégiques ne sont jamais partagées sans consentement."
    },
    {
      q: "Combien de temps faut-il pour voir des résultats ?",
      a: "Nos clients constatent généralement une amélioration de la qualité des prospects dans les 4 premières semaines et un impact significatif sur le ROI à partir du troisième mois."
    }
  ],
  PT: [
    {
      q: "A IA vai substituir minha equipe de vendas?",
      a: "Não. Nossa tecnologia foi projetada para liberar sua equipe de tarefas repetitivas e dar-lhes 'superpoderes' de dados. A empatia e o fechamento continuam sendo humanos."
    },
    {
      q: "Como vocês garantem a segurança dos meus dados?",
      a: "Cumprimos os mais altos padrões de criptografia e regulamentações internacionais (GDPR/CCPA). Seus dados estratégicos nunca são compartilhados sem consentimento."
    },
    {
      q: "Quanto tempo leva para ver resultados?",
      a: "Nossos clientes geralmente veem um aumento na qualidade dos leads nas primeiras 4 semanas e um impacto significativo no ROI a partir do terceiro mês."
    }
  ]
};

export default function FaqAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { lang } = useLanguage();
  const faqs = faqData[lang] || faqData.ES;

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-accordion fade-in-up">
      {faqs.map((faq, index) => (
        <div className="faq-item" key={index}>
          <button
            className={`faq-question ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleAccordion(index)}
            aria-expanded={activeIndex === index}
          >
            {faq.q} <i className={`fa-solid fa-${activeIndex === index ? "minus" : "plus"}`}></i>
          </button>
          <div
            className="faq-answer"
            style={{ maxHeight: activeIndex === index ? "1000px" : "0" }}
          >
            <p>{faq.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
