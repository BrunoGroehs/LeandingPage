"use client";

import React from "react";
import { motion } from "framer-motion";


export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/10 py-12 px-6 relative z-10">
      <div className="max-w-7xl mx-auto mb-12">
        <div>
          <h3 className="text-2xl font-bold font-heading mb-4">
            LEADr<span className="text-[#25D366]">.</span>
          </h3>
          <p className="text-gray-400 max-w-sm leading-relaxed">
            A primeira Inteligência Artificial exclusiva para barbearias.
            Automatize seu agendamento e foque no que você faz de melhor.
          </p>
        </div>

      </div>
      <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} LEADr. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
