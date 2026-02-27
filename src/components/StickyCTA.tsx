"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function StickyCTA() {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowSticky(true);
      } else {
        setShowSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {showSticky && (
        <>
          {/* Mobile Version - Barra Fixa Inferior */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed bottom-0 left-0 w-full p-4 pb-6 bg-gradient-to-t from-black via-black/80 to-transparent z-50 md:hidden"
          >
            <a
              href="https://wa.me/555191028044?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-black font-bold text-base px-4 py-3.5 rounded-xl shadow-[0_0_20px_rgba(37,211,102,0.5)] active:scale-95 transition-transform"
            >
              <MessageCircle size={20} />
              Quero a LEADr na minha Barbearia
            </a>
          </motion.div>

          {/* Desktop Version - Botão Flutuante (FAB) */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "backOut" }}
            className="hidden md:flex fixed bottom-8 right-8 z-50 items-center justify-center"
          >https://wa.me/555191028044?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es"
              target="_blank"
              rel="noopener noreferrer
            <a
              href="#test-drive"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-[#25D366] text-black font-bold text-lg px-6 py-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.6)] hover:shadow-[0_0_30px_rgba(37,211,102,0.8)] transition-all"
            >
              <MessageCircle size={24} />
              Quero a LEADr na minha Barbearia
            </a>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
