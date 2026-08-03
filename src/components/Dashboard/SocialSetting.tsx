"use client";

import React, { useState, useEffect } from "react";
import {
  FaSave,
  FaShareAlt,
  FaEnvelope,
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { toast } from "sonner";
import api from "@/service/api";
import { socialApi, DEFAULT_SOCIALS, type SOCIALS } from "@/service/socials";

const SOCIAL_FIELDS: { key: keyof SOCIALS; label: string; icon: React.ComponentType<{ size?: number; className?: string }>; placeholder: string }[] = [
  { key: "email", label: "Email", icon: FaEnvelope, placeholder: "you@example.com" },
  { key: "github", label: "GitHub", icon: FaGithub, placeholder: "https://github.com/..." },
  { key: "facebook", label: "Facebook", icon: FaFacebook, placeholder: "https://facebook.com/..." },
  { key: "linkedin", label: "LinkedIn", icon: FaLinkedin, placeholder: "https://linkedin.com/in/..." },
  { key: "whatsapp", label: "WhatsApp", icon: FaWhatsapp, placeholder: "https://wa.me/..." },
  { key: "twitter", label: "Twitter / X", icon: FaTwitter, placeholder: "https://twitter.com/..." },
  { key: "instagram", label: "Instagram", icon: FaInstagram, placeholder: "https://instagram.com/..." },
  { key: "youtube", label: "YouTube", icon: FaYoutube, placeholder: "https://youtube.com/..." },
];

export default function SocialSetting() {
  const [socials, setSocials] = useState<SOCIALS>({ ...DEFAULT_SOCIALS });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    socialApi
      .getSocials()
      .then((data) => {
        setSocials({ ...DEFAULT_SOCIALS, ...data });
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleChange = (key: keyof SOCIALS, value: string) => {
    setSocials((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      await api.post("/settings/socials", socials);
      toast.success("Social links updated successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update social links.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="animate-pulse space-y-4 bg-[#0E0F12] border border-white/5 p-6 rounded-sm">
        <div className="h-6 bg-white/10 rounded w-1/4"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-12 bg-white/10 rounded w-full"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0E0F12] border border-white/5 p-6 rounded-sm space-y-6">
      <div className="space-y-1">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <FaShareAlt className="text-primary" /> Social Media Links
        </h2>
        <p className="text-sm text-secondary opacity-70">
          Update your social profiles. Empty fields are hidden across the portfolio.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {SOCIAL_FIELDS.map(({ key, label, icon: Icon, placeholder }) => (
          <div key={key} className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary">
              {label}
            </label>
            <div className="relative group">
              <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary/50 group-focus-within:text-primary transition-colors" size={14} />
              <input
                type="text"
                value={socials[key] || ""}
                onChange={(e) => handleChange(key, e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-sm pl-11 pr-4 py-3 text-white placeholder:text-secondary/30 focus:outline-none focus:border-primary/50 transition-colors"
                placeholder={placeholder}
              />
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handleSave}
        disabled={saving}
        className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-sm font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
      >
        <FaSave /> {saving ? "Saving..." : "Save Social Links"}
      </button>
    </div>
  );
}
