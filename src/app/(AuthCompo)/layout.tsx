import Link from "next/link";
import React from "react";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 py-10 overflow-hidden">
      {/* Top brand */}
      <Link
        href="/"
        className="absolute top-6 left-6 md:top-8 md:left-10 group flex items-center gap-3 z-10"
      >
        <span className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-primary-hover flex items-center justify-center text-white font-black text-lg shadow-md shadow-primary/20 group-hover:scale-105 transition-transform">
          R
        </span>
        <span className="text-sm font-black tracking-[2px] uppercase text-white">
          Rijoan<span className="text-primary">.</span>
        </span>
      </Link>

      <Link
        href="/"
        className="absolute top-6 right-6 md:top-8 md:right-10 z-10 text-[11px] font-black uppercase tracking-[3px] text-secondary hover:text-primary transition-colors"
      >
        ← Back to Home
      </Link>

      {/* Decorative glows */}
      <div className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] bg-primary/[0.06] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-blue-500/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <main className="relative z-10 w-full max-w-md">{children}</main>
    </div>
  );
}
