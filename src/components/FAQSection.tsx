"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "É difícil de configurar?",
    answer:
      "Não! Nossa equipe faz todo o setup e treinamento da IA para você em menos de 24h. Você só aprova e a gente coloca no ar.",
  },
  {
    question: "Preciso trocar meu número?",
    answer:
      "Não. A LEADr se conecta ao seu número atual de WhatsApp Business através de meios oficiais da Meta. Seus clientes continuam falando no mesmo lugar.",
  },
  {
    question: "E se o cliente quiser falar com um humano?",
    answer:
      "A IA é inteligente. Se ela não souber responder ou o cliente exigir, ela pausa o atendimento e te avisa no celular para você assumir a conversa.",
  },
  {
    question: "Funciona com qualquer sistema de agenda?",
    answer:
      "Focamos nossa tecnologia na integração com o Google Calendar. Escolhemos o Google por ser a ferramenta mais estável do mundo e, o melhor: 100% gratuita. Assim, você não precisa gastar com mensalidades de outros sistemas para ter seus horários organizados e sincronizados com seu celular.",
  },
  {
    question: "Existe risco de banimento no WhatsApp?",
    answer:
      "Zero risco. Diferente de ferramentas informais que podem comprometer seu número, a LEADr utiliza o WhatsApp Coexistence. Essa é uma tecnologia oficial do WhatsApp (dona da Meta), o que garante que sua conta esteja 100% protegida e dentro das normas da plataforma. Você tem a inteligência de ponta com a segurança de uma ferramenta homologada.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 max-w-4xl mx-auto relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 md:mb-16"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4 md:mb-6">
          Ainda tem <span className="text-[#25D366]">dúvidas?</span>
        </h2>
        <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
          Tudo o que você precisa saber antes de colocar a LEADr para trabalhar
          para você.
        </p>
      </motion.div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-[#111827] border border-white/5 rounded-2xl overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none"
            >
              <span className="text-lg md:text-xl font-bold font-heading pr-4">
                {faq.question}
              </span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0"
              >
                <ChevronDown size={24} className="text-gray-400" />
              </motion.div>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-5 pb-5 md:px-6 md:pb-6 text-gray-400 text-sm md:text-base leading-relaxed"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
