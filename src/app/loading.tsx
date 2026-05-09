"use client";

import { motion } from "framer-motion";
import { FaTerminal } from "react-icons/fa";

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-[#020202] z-[9999] flex flex-col items-center justify-center space-y-8">
      <div className="relative">
        {/* Animated Rings */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-24 h-24 border-2 border-primary/20 border-t-primary rounded-full"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute inset-2 border-2 border-white/5 border-b-primary/60 rounded-full"
        />
        <div className="absolute inset-0 flex items-center justify-center">
            <FaTerminal className="text-primary animate-pulse" size={24} />
        </div>
      </div>
      
      <div className="text-center space-y-2">
        <h2 className="text-white text-xs font-black uppercase tracking-[0.8em] animate-pulse">Loading</h2>
        <div className="flex gap-1 justify-center">
            {[0, 1, 2].map((i) => (
                <motion.div 
                    key={i}
                    animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                    className="w-1 h-1 bg-primary rounded-sm"
                />
            ))}
        </div>
      </div>
    </div>
  );
}
