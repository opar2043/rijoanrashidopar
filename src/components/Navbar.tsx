"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/#projects" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact", href: "/#contact" },
  { name: "Dashboard", href: "/dashboard" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-3 md:top-5 inset-x-0 z-[100] px-3 md:px-6 lg:px-10"
      >
        <div className="max-w-7xl mx-auto">
          <div
            className={cn(
              "flex items-center justify-between gap-3 pl-2 pr-2 md:pl-3 md:pr-3 py-2 rounded-full border backdrop-blur-xl transition-all duration-500",
              scrolled
                ? "bg-black/60 border-white/10 shadow-lg shadow-black/30"
                : "bg-white/[0.04] border-white/10"
            )}
          >
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-2 md:gap-3 pl-1 pr-3 md:pr-5">
              <span className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-tr from-primary to-primary-hover flex items-center justify-center text-white font-black text-lg shadow-md shadow-primary/20 group-hover:scale-105 group-hover:rotate-6 transition-transform duration-300">
                R
              </span>
              <span className="text-[11px] md:text-sm font-black tracking-[2px] uppercase text-white whitespace-nowrap">
                Rijoan<span className="text-primary">.</span>
              </span>
            </Link>

            {/* Desktop nav links */}
            <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative px-4 py-2 text-[11px] uppercase tracking-[2px] font-bold text-white/80 hover:text-white rounded-full transition-colors duration-300 group"
                >
                  <span className="relative z-10">{link.name}</span>
                  <span className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/5 transition-colors duration-300" />
                </Link>
              ))}
            </nav>

            {/* Right side: Resume button (desktop) / Menu (mobile) */}
            <div className="flex items-center">
              <a
                href="https://drive.google.com/file/d/14NamTFWQswBPswZG26jgNcrmGdJaubmj/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-full bg-primary text-white text-[11px] font-black uppercase tracking-[2px] shadow-md shadow-primary/30 hover:bg-primary-hover hover:shadow-primary/50 hover:-translate-y-0.5 transition-all duration-300"
              >
                Resume
              </a>

              <button
                onClick={() => setIsOpen((v) => !v)}
                aria-label="Toggle menu"
                aria-expanded={isOpen}
                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors"
              >
                <motion.span
                  key={isOpen ? "x" : "m"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <X size={18} /> : <Menu size={18} />}
                </motion.span>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 z-[95] bg-black/90 backdrop-blur-2xl"
          >
            <div className="h-full w-full flex flex-col px-6 pt-28 pb-10">
              <ul className="space-y-2 flex-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.name}
                    initial={{ x: 40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 40, opacity: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between py-4 border-b border-white/5 text-2xl font-black uppercase tracking-tight text-white hover:text-primary transition-colors group"
                    >
                      <span>{link.name}</span>
                      <span className="text-xs font-mono text-secondary/60 group-hover:text-primary transition-colors">
                        0{i + 1}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 30, opacity: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="space-y-4 pt-6"
              >
                <a
                  href="https://drive.google.com/file/d/14NamTFWQswBPswZG26jgNcrmGdJaubmj/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-primary hover:bg-primary-hover text-white font-black py-5 rounded-full uppercase tracking-[3px] text-sm shadow-lg shadow-primary/20 transition-colors"
                >
                  Download Resume
                </a>
                <p className="text-center text-secondary/40 text-[10px] uppercase tracking-[3px]">
                  © {new Date().getFullYear()} Rijoan. All rights reserved.
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
