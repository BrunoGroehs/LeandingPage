"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function TestDriveSection() {
  return (
    <section id="test-drive" className="py-24 px-6 max-w-5xl mx-auto relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-[#111827] to-[#050505] border border-white/10 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden"
      >
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#25D366] opacity-20 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            Não acredita? Faça um{" "}
            <span className="text-[#25D366]">Test Drive</span> agora mesmo.
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Chega de promessas. Clique no botão abaixo, mande um "Olá" para o
            nosso robô no WhatsApp e tente agendar um corte fictício. Veja a
            mágica acontecer em segundos.
          </p>

          <motion.a
            href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20quero%20testar%20a%20IA%20da%20Leadr%!"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-black font-bold text-xl px-10 py-5 rounded-2xl glow-green transition-all"
          >
            <MessageCircle size={28} />
            Falar com o Agente Leadr
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
