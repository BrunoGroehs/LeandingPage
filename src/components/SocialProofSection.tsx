"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marcos",
    shop: "Barber Shop 011",
    text: "Irmão, a LEADr salvou meu final de semana. Acordei domingo com 5 cortes agendados de madrugada. Surreal!",
  },
  {
    name: "João",
    shop: "Studio J",
    text: "Minha cadeira não fica mais vazia. O robô manda lembrete e a galera parou de dar cano. O faturamento subiu 30%.",
  },
  {
    name: "Thiago",
    shop: "Corte & Navalha",
    text: "Eu não acreditava que um robô ia falar igual a mim. Os clientes nem percebem que é IA. Melhor investimento do ano.",
  },
];

export default function SocialProofSection() {
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
          Quem colocou a LEADr na barbearia{" "}
          <span className="text-[#FBBF24]">não volta atrás.</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Veja o que os barbeiros que já automatizaram suas agendas estão
          dizendo.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-[#111827] border border-white/5 rounded-2xl p-8 relative"
          >
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className="text-[#FBBF24] fill-[#FBBF24]"
                />
              ))}
            </div>
            <p className="text-gray-300 text-lg italic mb-8 leading-relaxed">
              "{testimonial.text}"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center font-bold text-xl text-gray-400">
                {testimonial.name.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.shop}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
