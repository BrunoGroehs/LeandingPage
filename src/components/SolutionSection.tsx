"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bot, CalendarCheck, BellRing } from "lucide-react";

const features = [
  {
    icon: <Bot size={32} className="text-[#FBBF24]" />,
    title: "Atendimento 100% Humanizado",
    description:
      "A IA da Leadr fala a língua da sua barbearia. Nada de menus engessados. É papo reto, natural e com a sua identidade.",
  },
  {
    icon: <CalendarCheck size={32} className="text-[#FBBF24]" />,
    title: "Integração Total com a Agenda",
    description:
      "Sincroniza com seu calendário em tempo real. Se o horário tá ocupado, a IA já oferece a próxima vaga. Zero choque de horários.",
  },
  {
    icon: <BellRing size={32} className="text-[#FBBF24]" />,
    title: "Lembretes Automáticos (Anti-Faltas)",
    description:
      "A LEADr manda mensagem horas antes confirmando a presença. Reduza as faltas dos clientes em até 80%.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function SolutionSection() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FBBF24] opacity-5 blur-[150px] rounded-full pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 md:mb-16 relative z-10"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4 md:mb-6">
          O seu novo recepcionista não dorme,{" "}
          <span className="text-[#FBBF24]">não tira folga e não erra.</span>
        </h2>
        <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
          A LEADr não é um bot de opções. É uma Inteligência Artificial treinada
          para vender e agendar seus cortes de maneira humanizada e simples.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid md:grid-cols-3 gap-6 md:gap-8 relative z-10"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="glass rounded-2xl p-6 md:p-8 hover:bg-white/5 transition-colors"
          >
            <div className="bg-[#FBBF24]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              {feature.icon}
            </div>
            <h3 className="text-2xl font-bold mb-4 font-heading">
              {feature.title}
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
