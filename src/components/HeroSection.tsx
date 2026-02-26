"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, CheckCircle } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-24 pb-32 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center min-h-[90vh]">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#25D366] opacity-10 blur-[120px] rounded-full pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
          <span className="text-sm font-medium text-gray-300">
            A 1ª IA exclusiva para Barbearias
          </span>
        </div>

        <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6 font-heading">
          Pare de parar a máquina para{" "}
          <span className="text-[#25D366]">responder o WhatsApp.</span>
        </h1>

        <p className="text-lg text-gray-400 mb-8 leading-relaxed">
          A Leadr agenda seus clientes no automático, 24/7. Enquanto você foca
          no degradê perfeito, nossa IA conversa, tira dúvidas e marca o horário
          direto na sua agenda.
        </p>

        <motion.a
          href="#test-drive"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] text-black font-bold text-lg px-8 py-4 rounded-xl glow-green transition-all"
        >
          <MessageCircle size={24} />
          Testar a IA Agora
        </motion.a>
        <p className="mt-4 text-sm text-gray-500 flex items-center gap-2">
          <CheckCircle size={16} className="text-[#25D366]" /> Configuração em
          24h • Teste sem compromisso
        </p>
      </motion.div>

      {/* HERO VISUAL - Floating iPhone */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 flex justify-center"
      >
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="relative w-[320px] h-[650px] bg-black rounded-[3rem] border-[12px] border-gray-800 shadow-2xl overflow-hidden flex flex-col"
        >
          {/* Dynamic Island */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[30px] bg-black rounded-b-3xl z-50 flex items-center justify-center gap-2 px-3">
            <div className="w-2 h-2 rounded-full bg-gray-800"></div>
            <div className="w-2 h-2 rounded-full bg-gray-800"></div>
          </div>

          {/* Header do WhatsApp Falso */}
          <div className="bg-[#075E54] pt-10 pb-3 px-4 flex items-center gap-3 z-40">
            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-black font-bold">
              L
            </div>
            <div>
              <p className="font-bold text-sm text-white">Leadr Bot 💈</p>
              <p className="text-xs text-green-200">Online</p>
            </div>
          </div>

          {/* Chat Bubbles Animados */}
          <div className="flex-1 p-4 flex flex-col gap-0.5 bg-[#EFE7DD] bg-opacity-10 overflow-hidden relative">
            {/* WhatsApp Background Pattern (Optional, using a simple color for now) */}
            <div className="absolute inset-0 bg-[#0b141a] opacity-90 -z-10"></div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="self-end bg-[#005C4B] text-white p-2.5 rounded-l-xl rounded-tr-xl max-w-[80%] text-sm shadow-sm mb-2"
            >
              Tem horário hoje à tarde?
            </motion.div>

            {/* Typing indicator */}
            <motion.div
              initial={{ opacity: 0, display: "block" }}
              animate={{ opacity: [0, 1, 0], display: ["block", "block", "none"] }}
              transition={{ delay: 1.5, duration: 1, times: [0, 0.2, 1] }}
              className="self-start bg-[#202C33] text-gray-400 p-2.5 rounded-r-xl rounded-tl-xl max-w-[80%] text-sm shadow-sm"
            >
              <span className="animate-pulse">...</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20, display: "none" }}
              animate={{ opacity: 1, x: 0, display: "block" }}
              transition={{ delay: 2.5 }}
              className="self-start bg-[#202C33] text-white p-2.5 rounded-r-xl rounded-tl-xl max-w-[80%] text-sm shadow-sm mb-2"
            >
              Fala, chefe! Temos às 15h e às 17h com o Bruno. Qual você prefere? ✂️
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 4 }}
              className="self-end bg-[#005C4B] text-white p-2.5 rounded-l-xl rounded-tr-xl max-w-[80%] text-sm shadow-sm mb-2"
            >
              15h
            </motion.div>

            {/* Typing indicator */}
            <motion.div
              initial={{ opacity: 0, display: "block" }}
              animate={{ opacity: [0, 1, 0], display: ["block", "block", "none"] }}
              transition={{ delay: 4.5, duration: 1, times: [0, 0.2, 1] }}
              className="self-start bg-[#202C33] text-gray-400 p-2.5 rounded-r-xl rounded-tl-xl max-w-[80%] text-sm shadow-sm"
            >
              <span className="animate-pulse">...</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20, display: "none" }}
              animate={{ opacity: 1, x: 0, display: "block" }}
              transition={{ delay: 5.5 }}
              className="self-start bg-[#202C33] text-white p-2.5 rounded-r-xl rounded-tl-xl max-w-[80%] text-sm shadow-sm"
            >
              Fechado! Horário agendado para as 15h. Te mando um lembrete mais
              tarde. Valeu! 👊
            </motion.div>
          </div>
          
          {/* WhatsApp Input Area */}
          <div className="bg-[#202C33] p-3 flex items-center gap-2 z-40 pb-8">
            <div className="w-8 h-8 rounded-full bg-[#2A3942] flex items-center justify-center text-gray-400">
              +
            </div>
            <div className="flex-1 bg-[#2A3942] rounded-full h-10 px-4 flex items-center text-gray-400 text-sm">
              Mensagem
            </div>
            <div className="w-10 h-10 rounded-full bg-[#00A884] flex items-center justify-center text-white">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
              </svg>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
