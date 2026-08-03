import api from "./api";

export type SOCIALS = {
  email?: string;
  github?: string;
  facebook?: string;
  linkedin?: string;
  whatsapp?: string;
  twitter?: string;
  instagram?: string;
  youtube?: string;
};

export const DEFAULT_SOCIALS: SOCIALS = {
  email: "rijoanrashidopar@gmail.com",
  github: "https://github.com/opar2043",
  facebook: "https://www.facebook.com/share/1AY9hw3GT2/",
  linkedin: "https://www.linkedin.com/in/rijoan-rashid-opar/",
  whatsapp: "https://wa.me/qr/7FADY5JLDLSMB1",
  twitter: "",
  instagram: "",
  youtube: "",
};

const getSocials = async (): Promise<SOCIALS> => {
  try {
    const res = await api.get("/settings/socials");
    return { ...DEFAULT_SOCIALS, ...res.data };
  } catch (error) {
    console.error("Error fetching social links:", error);
    return DEFAULT_SOCIALS;
  }
};

const updateSocials = async (socials: SOCIALS) => {
  const response = await api.post("/settings/socials", socials);
  return response.data;
};

export const socialApi = {
  getSocials,
  updateSocials,
};
