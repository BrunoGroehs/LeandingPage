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
      <div className="flex items-center gap-3">
        {/* Ponto verde grande piscando devagar */}
        <motion.div 
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-8 h-8 md:w-10 md:h-10 bg-[#1A4D2E] rounded-full flex-shrink-0"
        />
        <span className="text-2xl md:text-3xl font-bold font-heading text-white tracking-tight">
          LEADr<span className="text-[#25D366]">.</span>
        </span>
      </div>
    </motion.header>
  );
}
