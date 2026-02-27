"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function TestDriveSection() {
  return (
    <section id="test-drive" className="py-16 md:py-24 px-4 sm:px-6 max-w-5xl mx-auto relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-[#111827] to-[#050505] border border-white/10 rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 text-center relative overflow-hidden"
      >
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#25D366] opacity-20 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4 md:mb-6">
            Não acredita? Faça um{" "}
            <span className="text-[#25D366]">Test Drive</span> agora mesmo.
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed">
            Chega de promessas. Clique no botão abaixo, mande um "Olá" para o
            nosso robô no WhatsApp e tente agendar um corte fictício. Veja a
            mágica acontecer em segundos.
          </p>

          <motion.a
            href="https://wa.me/5551997345400?text=Ol%C3%A1%2C%20gostaria%20de%20testar%20a%20IA%20para%20barbeiros."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] text-black font-bold text-lg md:text-xl px-6 py-4 md:px-10 md:py-5 rounded-2xl glow-green transition-all"
          >
            <MessageCircle size={28} />
            Falar com a IA da LEADr
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
