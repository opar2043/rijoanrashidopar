"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  SiReact, 
  SiWordpress, 
  SiWoocommerce, 
  SiNodedotjs 
} from "react-icons/si";
import { FaMobileAlt } from "react-icons/fa";

const ServiceCard = ({ icon: Icon, title, desc, features, delay }: { 
  icon: any, 
  title: string, 
  desc: string, 
  features: string[], 
  delay: number 
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="glass-card p-10 flex flex-col h-full group hover:border-primary/50 transition-all duration-300"
  >
    <div className="flex items-center gap-4 mb-6">
      <div className="w-14 h-14 rounded-2xl glass border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
        <Icon size={28} />
      </div>
      <h4 className="text-xl font-black text-white tracking-wide uppercase">{title}</h4>
    </div>

    <p className="text-secondary text-sm leading-relaxed mb-8 flex-grow font-medium">
      {desc}
    </p>

    <ul className="space-y-4 mb-10">
      {features.map((feature, i) => (
        <li key={i} className="flex items-center gap-3 text-white text-sm font-bold">
          <div className="w-2 h-2 rounded-full bg-primary" />
          {feature}
        </li>
      ))}
    </ul>

    <button className="w-full py-4 rounded-xl border border-primary/40 text-white text-xs font-black uppercase tracking-[2px] hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-md shadow-primary/2">
      Get {title} Service
    </button>
  </motion.div>
);

const Service = () => {
  const services = [
    {
      icon: SiReact,
      title: "Web Development",
      desc: "Full-stack web applications with MongoDB, Express, React, and Node.js",
      features: ["Custom APIs", "User Authentication", "Real-time Data", "Admin Dashboard"],
    },
    {
      icon: SiReact,
      title: "App Development",
      desc: "Professional mobile applications with React Native",
      features: ["React Native", "Custom Themes", "Responsive Design", "SEO Optimization"],
    },
    {
      icon: SiWoocommerce,
      title: "eCommerce",
      desc: "WooCommerce and custom eCommerce in MERN Stack",
      features: ["Product Management", "Payment Gateways", "Order Tracking", "Responsive Design"],
    },
  ];

  return (
    <section id="services" className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white tracking-tight uppercase"
          >
            Service
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-primary text-lg md:text-xl font-black tracking-[2px] uppercase"
          >
            I Can Build Custom Solutions Tailored to Your Needs
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ServiceCard key={i} {...service} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
