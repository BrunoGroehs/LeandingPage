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
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black via-black/80 to-transparent z-50 md:hidden"
        >
          <a
            href="#test-drive"
            className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-black font-bold text-lg px-6 py-4 rounded-xl shadow-[0_0_20px_rgba(37,211,102,0.5)] active:scale-95 transition-transform"
          >
            <MessageCircle size={20} />
            Quero a Leadr na minha Barbearia
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
