"use client";

import React from "react";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#212428] border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          
          {/* Left Side: Brand & Role */}
          <div className="text-center md:text-left space-y-2">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              RIJOAN RASHID OPAR
            </h2>
            <p className="text-sm font-medium uppercase tracking-widest">
              Fullstack Developer
            </p>
            <p className="text-gray-400 text-xs">
              Narayanganj , Bangladesh
            </p>
          </div>

          {/* Center: Social Icons */}
          <div className="flex items-center gap-6">
            {[
              { Icon: FaGithub, href: "https://github.com/opar2043", color: "hover:text-white" },
              { Icon: FaFacebook, href: "https://facebook.com", color: "hover:text-blue-500" },
              { Icon: FaLinkedin, href: "https://www.linkedin.com/in/rijoan-rashid-opar/", color: "hover:text-blue-400" },
              { Icon: FaEnvelope, href: "mailto:rijoanrashidopar@gmail.com", color: "hover:text-[#FF014F]" }
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 bg-[#1b1d21] rounded-lg flex items-center justify-center transition-all duration-300 shadow-lg border border-white/5 ${social.color} hover:scale-110`}
              >
                <social.Icon size={18} />
              </a>
            ))}
          </div>

          {/* Right Side: Copyright */}
          <div className="text-center md:text-right">
            <p className=" text-sm font-medium">
              © {currentYear} <span className="text-[#FF014F]">RIJOAN</span>.
            </p>
            <p className=" text-xs mt-1 uppercase tracking-widest">
              All Rights Reserved
            </p>
          </div>

        </div>


      </div>
    </footer>
  );
};

export default Footer;
