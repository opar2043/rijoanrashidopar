"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaExclamationTriangle, FaRedo } from "react-icons/fa";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6">
      <div className="max-w-md w-full space-y-12 text-center">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-24 h-24 bg-primary/10 border border-primary/20 rounded-sm flex items-center justify-center mx-auto"
        >
          <FaExclamationTriangle className="text-primary" size={40} />
        </motion.div>

        <div className="space-y-4">
          <h1 className="text-4xl font-black text-white uppercase tracking-tight">Oops! <span className="text-primary">Error</span></h1>
          <p className="text-secondary text-sm font-medium opacity-60 leading-relaxed uppercase tracking-widest">
            Something went wrong. Please try refreshing the page.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => reset()}
            className="flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 px-6 py-4 rounded-sm text-[10.5px] font-black uppercase tracking-[0.2em] text-white transition-all border border-white/10"
          >
            <FaRedo size={12} /> Try Again
          </button>
          <Link
            href="/"
            className="flex items-center justify-center gap-3 bg-primary hover:bg-primary-hover px-6 py-4 rounded-sm text-[10.5px] font-black uppercase tracking-[0.2em] text-white transition-all border border-primary/50 shadow-xl shadow-primary/20"
          >
            Home
          </Link>
        </div>

        <p className="text-[9px] font-mono text-primary/40 uppercase tracking-widest pt-8">
          Error Digest: {error.digest || "INTERNAL_ERROR"}
        </p>
      </div>
    </div>
  );
}