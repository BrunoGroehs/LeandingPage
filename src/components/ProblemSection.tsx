"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquareOff, BookX, UserX } from "lucide-react";

const problems = [
  {
    icon: <MessageSquareOff size={32} className="text-red-500" />,
    title: "Mensagens Ignoradas",
    description:
      "O cliente manda mensagem, você tá com a mão na massa. Ele não espera e vai no concorrente.",
  },
  {
    icon: <BookX size={32} className="text-red-500" />,
    title: "Agenda de Papel Bagunçada",
    description:
      "Rasuras, horários encavalados e confusão na hora de fechar o caixa no fim do dia.",
  },
  {
    icon: <UserX size={32} className="text-red-500" />,
    title: "Faltas e Esquecimentos",
    description:
      "O cliente esquece do horário, você fica com a cadeira vazia e o prejuízo no bolso.",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
          Quantos cortes você já perdeu por{" "}
          <span className="text-red-500">demorar a responder?</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          A realidade é dura: cliente sem resposta é cliente perdido. Veja se
          você se identifica com algum desses cenários.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {problems.map((problem, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-[#111827] border border-red-500/20 rounded-2xl p-8 hover:border-red-500/50 transition-colors"
          >
            <div className="bg-red-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              {problem.icon}
            </div>
            <h3 className="text-2xl font-bold mb-4 font-heading">
              {problem.title}
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {problem.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
