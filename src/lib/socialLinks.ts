import {
  FaEnvelope,
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import type { SOCIALS } from "@/service/socials";

export type SocialLink = {
  key: string;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
  href: string;
};

type SocialConfig = {
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
  href?: (value: string) => string;
};

export const SOCIAL_CONFIG: Record<string, SocialConfig> = {
  email: { Icon: FaEnvelope, color: "hover:text-primary", href: (v) => `mailto:${v}` },
  github: { Icon: FaGithub, color: "hover:text-white" },
  facebook: { Icon: FaFacebook, color: "hover:text-blue-500" },
  linkedin: { Icon: FaLinkedin, color: "hover:text-blue-400" },
  whatsapp: { Icon: FaWhatsapp, color: "hover:text-green-500" },
  twitter: { Icon: FaTwitter, color: "hover:text-sky-400" },
  instagram: { Icon: FaInstagram, color: "hover:text-pink-500" },
  youtube: { Icon: FaYoutube, color: "hover:text-red-500" },
};

export const buildSocialLinks = (socials: SOCIALS): SocialLink[] => {
  return Object.entries(SOCIAL_CONFIG)
    .map(([key, { Icon, color, href }]) => {
      const value = (socials as Record<string, string | undefined>)[key]?.trim();
      if (!value) return null;
      return { key, Icon, color, href: href ? href(value) : value };
    })
    .filter(Boolean) as SocialLink[];
};
