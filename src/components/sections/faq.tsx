"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "¿El tratamiento duele?",
    answer: "Sentirás apenas una ligera molestia durante la inyección. Es un procedimiento rápido, seguro y ambulatorio que no causa un dolor significativo.",
  },
  {
    question: "¿Para quién está indicado?",
    answer: "Es ideal para personas con osteoartritis leve a moderada o dolor persistente en la rodilla que limita las actividades diarias y la movilidad.",
  },
  {
    question: "¿Es seguro?",
    answer: "Sí, es altamente seguro por ser el ácido hialurónico una sustancia natural con mínimo riesgo de rechazo que ya se encuentra en el cuerpo.",
  },
  {
    question: "¿Cuánto dura el efecto?",
    answer: "La duración varía según cada persona; puede durar varios meses. Se puede repetir periódicamente según la indicación médica para mantener los beneficios.",
  },
  {
    question: "¿Qué beneficios ofrece el ácido hialurónico?",
    answer: "Actúa como lubricante y amortiguador natural de la articulación, reduce la fricción y el dolor al caminar, permitiéndote recuperar tu calidad de vida.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white py-12 md:py-20 lg:py-24">
      <div className="container mx-auto max-w-[1280px] px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 items-center">
          {/* Left Side: Header Content */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#E1F1F6] px-4 py-1.5 text-[0.625rem] font-medium tracking-[0.1em] text-[#1080A0] uppercase mb-6">
              <HelpCircle className="h-3.5 w-3.5" />
              Preguntas Frecuentes
            </div>
            <h2 className="text-[1.875rem] md:text-[2.25rem] font-semibold leading-[1.2] tracking-tight text-[#0F172A] mb-8">
              Preguntas Frecuentes sobre el Tratamiento
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-[#64748B] max-w-md">
              Encuentra respuestas a las preguntas más comunes sobre el tratamiento de viscosuplementación para el dolor de rodilla.
            </p>
          </div>

          {/* Right Side: Accordion */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {faqData.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "overflow-hidden rounded-2xl border bg-white transition-all duration-300",
                  openIndex === index
                    ? "border-[#1080A0] shadow-md"
                    : "border-[#E2E8F0] hover:border-[#CBD5E1]"
                )}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors"
                  aria-expanded={openIndex === index}
                >
                  <h3 className="text-base font-bold text-[#1E293B] flex-1 pr-4">
                    {item.question}
                  </h3>
                  <div
                    className={cn(
                      "flex h-8 w-8 items-center justify-center rounded-full bg-[#F8F9FA] transition-transform duration-300",
                      openIndex === index ? "bg-[#1080A0] text-white rotate-180" : "text-[#64748B]"
                    )}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-300 ease-in-out",
                    openIndex === index
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 pt-0 text-base leading-relaxed text-[#64748B] border-t border-[#F1F5F9] mt-2 pt-4">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
