"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for premium glass effect toggle or shadow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/#about" },
    // { name: "Services", href: "/#service" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/#projects" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
    { name: "Dashboard", href: "/dashboard" },
  ];
  
  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-[100] transition-all duration-500 border-b",
        scrolled
          ? "glass border-white/5 py-3 shadow-lg shadow-black/20"
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo / Name */}
          <Link
            href="/"
            className="group flex items-center space-x-2"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-primary-hover flex items-center justify-center text-white font-bold text-xl shadow-md shadow-primary/10 group-hover:scale-110 transition-transform duration-300">
              R
            </div>
            <span className="text-2xl font-bold tracking-tight text-white group-hover:text-primary transition-colors duration-300">
              RIJOAN RASHID<span className="text-primary"> OPAR</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <ul className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="relative text-[13px] uppercase tracking-widest font-bold text-secondary hover:text-white transition-colors duration-300 group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full shadow-[0_0_8px_var(--primary)]" />
                  </Link>
                </li>
              ))}
            </ul>
            
            <Button
              className="bg-primary hover:bg-primary-hover text-white font-bold py-2 text-xs uppercase tracking-widest rounded-sm shadow-lg shadow-primary/10 transition-all duration-300 active:scale-95"
            >
              Resume
            </Button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-secondary hover:text-white focus:outline-none transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "md:hidden fixed inset-0 top-0 h-screen glass z-[90] transition-all duration-500 ease-in-out transform",
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        )}
      >
        <div className="flex flex-col h-full p-8 pt-24 space-y-8">
          <ul className="space-y-6">
            {navLinks.map((link, index) => (
              <li
                key={link.name}
                className={cn(
                  "transition-all duration-500 delay-[100ms]",
                  isOpen ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-black text-secondary hover:text-primary transition-colors flex items-center justify-between group"
                >
                  {link.name}
                  <span className="w-12 h-[2px] bg-white/10 group-hover:bg-primary transition-colors" />
                </Link>
              </li>
            ))}
          </ul>
          
          <div className={cn(
            "pt-6 transition-all duration-500 delay-500",
            isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}>
            <Button
              className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-8 text-lg uppercase tracking-widest rounded-sm shadow-lg shadow-primary/10"
            >
              Download Resume
            </Button>
          </div>
          
          <div className="mt-auto text-center text-secondary/60 text-sm">
            <p>© 2026 RIJOAN. All rights reserved.</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
