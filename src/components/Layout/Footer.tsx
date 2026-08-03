"use client";

import React, { useState, useEffect } from "react";
import { socialApi, type SOCIALS } from "@/service/socials";
import { buildSocialLinks } from "@/lib/socialLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [socials, setSocials] = useState<SOCIALS>({});
  const socialLinks = buildSocialLinks(socials);

  useEffect(() => {
    socialApi
      .getSocials()
      .then((data) => setSocials(data))
      .catch((err) => console.error("Error fetching social links:", err));
  }, []);

  return (
    <footer className="bg-transparent border-t border-white/5 py-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          
          {/* Left Side: Brand & Role */}
          <div className="text-center md:text-left space-y-2">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              RIJOAN RASHID <span className="text-primary">OPAR</span>
            </h2>
            <p className="text-sm font-bold text-secondary uppercase tracking-widest">
              Fullstack Developer
            </p>
            <p className="text-secondary/60 text-xs">
              Narayanganj , Bangladesh
            </p>
          </div>

          {/* Center: Social Icons */}
          <div className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.key}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 glass-card flex items-center justify-center transition-all duration-300 ${social.color} hover:scale-110 hover:shadow-primary/20 hover:shadow-2xl`}
              >
                <social.Icon size={20} />
              </a>
            ))}
          </div>

          {/* Right Side: Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm font-bold text-white">
              © {currentYear} <span className="text-primary">RIJOAN</span>. All rights reserved.          </p>
            <p className="text-secondary text-sm mt-1 uppercase tracking-[4px] font-bold">
              All Rights Reserved
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
