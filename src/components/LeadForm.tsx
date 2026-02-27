"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Loader2 } from "lucide-react";

export default function LeadForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const formatPhone = (value: string) => {
    // Remove caracteres não permitidos
    // Mantém apenas dígitos
    let numbers = value.replace(/\D/g, "");
    
    // Adiciona o + no início se houver números
    if (numbers.length > 0) {
      return "+" + numbers;
    }
    return "";
  };

  const validatePhone = (phone: string) => {
    // Regex: 
    // ^\+55 : Começa com +55 (Brasil como exemplo principal, mas aceita outros códigos de país se ajustar)
    // \d{2} : DDD com 2 digitos
    // \d{8,9}$ : 8 ou 9 digitos finais
    // Exemplo aceito: +5551912345678
    const regex = /^\+\d{2}\d{2}\d{8,9}$/;
    return regex.test(phone);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (!name.trim()) {
      setError("Por favor, informe seu nome.");
      return;
    }

    if (!validatePhone(phone)) {
        setError("Formato inválido. Use: +55 (DDD) XXXXX-XXXX (apenas números e +)");
        return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/submit-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone }),
      });

      if (res.ok) {
        setSuccess(true);
        setName("");
        setPhone("");
      } else {
        const data = await res.json();
        setError(data.error || "Erro ao enviar. Tente novamente.");
      }
    } catch (err) {
      setError("Erro de conexão. Verifique sua internet.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
      <AnimatePresence mode="wait">
        {success ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8"
          >
            <div className="mx-auto w-16 h-16 bg-[#25D366]/20 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="text-[#25D366] w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Recebemos seu contato!</h3>
            <p className="text-gray-400">Em breve nossa equipe entrará em contato.</p>
            <button 
              onClick={() => setSuccess(false)}
              className="mt-6 text-[#25D366] text-sm hover:underline"
            >
              Enviar outro contato
            </button>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <h3 className="text-xl font-bold text-white mb-1">
              Garanta sua vaga na <span className="text-[#25D366]">LEADr</span>
            </h3>
            <p className="text-sm text-gray-400 mb-2">
              Preencha para receber uma demo exclusiva.
            </p>

            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-xs font-medium text-gray-300 ml-1">
                Nome completo
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Seu nome"
                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#25D366] transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="phone" className="text-xs font-medium text-gray-300 ml-1">
                WhatsApp (com DDD)
              </label>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(formatPhone(e.target.value))}
                placeholder="+55 51 999999999"
                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#25D366] transition-colors"
              />
              <p className="text-[10px] text-gray-500 ml-1">
                Ex: +55 (País) 51 (DDD) 999999999
              </p>
            </div>

            {error && (
              <p className="text-red-400 text-xs bg-red-400/10 p-2 rounded border border-red-400/20">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 bg-[#25D366] hover:bg-[#1eb857] text-black font-bold py-3 rounded-lg transition-all flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin w-5 h-5" /> Enviando...
                </>
              ) : (
                "Quero recebener uma proposta da LEADr"
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
