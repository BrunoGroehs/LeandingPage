"use client";

import React from "react";
import { motion } from "framer-motion";


export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/10 py-10 md:py-12 px-4 sm:px-6 relative z-10">
      <div className="max-w-7xl mx-auto mb-8 md:mb-12 text-center md:text-left">
        <div>
          <h3 className="text-2xl font-bold font-heading mb-4">
            LEADr<span className="text-[#25D366]">.</span>
          </h3>
          <p className="text-gray-400 max-w-sm mx-auto md:mx-0 leading-relaxed text-sm md:text-base">
            A primeira Inteligência Artificial exclusiva para barbearias.
            Automatize seu agendamento e foque no que você faz de melhor.
          </p>
        </div>

      </div>
      <div className="max-w-7xl mx-auto border-t border-white/10 pt-6 md:pt-8 flex flex-col md:flex-row items-center justify-center md:justify-between text-gray-500 text-xs md:text-sm">
        <p>&copy; {new Date().getFullYear()} LEADr. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
