"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto"
    >
      <div className="flex items-center gap-2">
        {/* Logo - Ajuste o src conforme o nome do arquivo que você colocar em public/ */}
        <div className="relative w-8 h-8 md:w-10 md:h-10">
           {/* Fallback caso não tenha imagem ainda: um círculo verde */}
           <div className="absolute inset-0 bg-[#25D366] rounded-full opacity-20 animate-pulse"></div>
           <Image
            src="/logo.png" 
            alt="LEADr Logo"
            width={40}
            height={40}
            className="object-contain relative z-10"
            onError={(e) => {
              // Hide image on error if not found, showing fallback text
              e.currentTarget.style.display = 'none'; 
            }}
           />
        </div>
        <span className="text-xl md:text-2xl font-bold font-heading text-white tracking-tight">
          LEADr<span className="text-[#25D366]">.</span>
        </span>
      </div>
    </motion.header>
  );
}
