"use client";

import React from "react";
import LeadForm from "./LeadForm";

export default function LeadCaptureSection() {
  return (
    <section className="py-20 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm flex flex-col md:flex-row gap-8 md:gap-16 items-center">
        
        {/* Texto de Chamada */}
        <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-white">
                Pronto para automatizar sua barbearia?
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Pare de perder tempo no WhatsApp. Deixe a LEADr cuidar dos agendamentos enquanto você foca no que importa.
                Preencha o formulário para receber uma proposta exclusiva.
            </p>
        </div>

        {/* Formulário */}
        <div className="w-full md:w-auto md:min-w-[400px]">
            <LeadForm />
        </div>

      </div>
    </section>
  );
}
