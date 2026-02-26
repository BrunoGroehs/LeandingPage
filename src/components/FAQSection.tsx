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
      "Não. A Leadr se conecta ao seu número atual de WhatsApp Business. Seus clientes continuam falando no mesmo lugar.",
  },
  {
    question: "E se o cliente quiser falar com um humano?",
    answer:
      "A IA é inteligente. Se ela não souber responder ou o cliente exigir, ela pausa o atendimento e te avisa no celular para você assumir a conversa.",
  },
  {
    question: "Funciona com qualquer sistema de agenda?",
    answer:
      "Sim! Nós integramos com os principais sistemas de agendamento do mercado (Google Calendar, AppBarber, etc).",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 max-w-4xl mx-auto relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
          Ainda tem <span className="text-[#25D366]">dúvidas?</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Tudo o que você precisa saber antes de colocar a Leadr para trabalhar
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
              className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
            >
              <span className="text-xl font-bold font-heading">
                {faq.question}
              </span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
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
                  className="px-6 pb-6 text-gray-400 leading-relaxed"
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
