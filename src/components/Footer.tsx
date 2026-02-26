"use client";

import React from "react";
import { motion } from "framer-motion";


export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/10 py-12 px-6 relative z-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mb-12">
        <div className="col-span-2">
          <h3 className="text-2xl font-bold font-heading mb-4">
            LEADr<span className="text-[#25D366]">.</span>
          </h3>
          <p className="text-gray-400 max-w-sm leading-relaxed">
            A primeira Inteligência Artificial exclusiva para barbearias.
            Automatize seu agendamento e foque no que você faz de melhor.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-bold font-heading mb-4">Links Úteis</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:text-[#25D366] transition-colors">
                Como Funciona
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#25D366] transition-colors">
                Preços
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#25D366] transition-colors">
                Depoimentos
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#25D366] transition-colors">
                Contato
              </a>
            </li>
          </ul>
        </div>

      </div>
      <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} LEADr. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
