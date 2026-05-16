"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaEnvelope, FaLock, FaUser, FaEye, FaEyeSlash, FaArrowRight } from "react-icons/fa";
import { toast } from "sonner";

type Mode = "login" | "register";

interface AuthFormProps {
  mode: Mode;
}

const AuthForm = ({ mode }: AuthFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const isLogin = mode === "login";

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    // Placeholder submission — wire to your real auth handler later
    setTimeout(() => {
      console.log(`${mode} payload`, payload);
      toast.success(isLogin ? "Welcome back!" : "Account created successfully!");
      setLoading(false);
    }, 700);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      {/* Card */}
      <div className="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl shadow-black/40 overflow-hidden">
        {/* Subtle inner glow */}
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative space-y-2 mb-8">
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary text-[11px] uppercase tracking-[4px] font-black"
          >
            {isLogin ? "Welcome Back" : "Get Started"}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
            className="text-3xl md:text-4xl font-black text-white tracking-tight"
          >
            {isLogin ? (
              <>
                Sign <span className="text-primary">In</span>
              </>
            ) : (
              <>
                Create <span className="text-primary">Account</span>
              </>
            )}
          </motion.h1>
          <p className="text-secondary text-xs md:text-sm">
            {isLogin
              ? "Enter your credentials to access your account."
              : "Join the platform — it only takes a minute."}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 relative">
          {!isLogin && (
            <Field
              icon={FaUser}
              name="name"
              type="text"
              label="Full Name"
              placeholder="Your full name"
              required
            />
          )}

          <Field
            icon={FaEnvelope}
            name="email"
            type="email"
            label="Email Address"
            placeholder="you@example.com"
            required
          />

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[3px] text-secondary">
              Password
            </label>
            <div className="relative group">
              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary/60 group-focus-within:text-primary transition-colors" size={14} />
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                required
                minLength={6}
                className="w-full bg-white/[0.03] border border-white/10 focus:border-primary/50 focus:bg-white/[0.05] rounded-xl pl-11 pr-12 py-3.5 text-sm text-white placeholder:text-secondary/40 outline-none transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary/60 hover:text-primary transition-colors"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <FaEyeSlash size={14} /> : <FaEye size={14} />}
              </button>
            </div>
          </div>

          {isLogin && (
            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 text-secondary cursor-pointer select-none">
                <input type="checkbox" name="remember" className="accent-primary w-3.5 h-3.5" />
                Remember me
              </label>
              <Link href="#" className="text-primary hover:text-primary-hover font-bold uppercase tracking-widest text-[10px]">
                Forgot?
              </Link>
            </div>
          )}

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: loading ? 1 : 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-3 bg-primary hover:bg-primary-hover disabled:opacity-60 disabled:cursor-not-allowed text-white font-black uppercase tracking-[3px] text-xs py-4 rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                Processing
              </span>
            ) : (
              <>
                {isLogin ? "Sign In" : "Create Account"}
                <FaArrowRight size={11} />
              </>
            )}
          </motion.button>
        </form>

        {/* Divider */}
        <div className="relative flex items-center my-7">
          <div className="flex-1 h-px bg-white/5" />
          <span className="px-4 text-[10px] uppercase tracking-[3px] text-secondary/40 font-bold">
            Or
          </span>
          <div className="flex-1 h-px bg-white/5" />
        </div>

        <p className="text-center text-xs text-secondary">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <Link
            href={isLogin ? "/register" : "/login"}
            className="text-primary hover:text-primary-hover font-black uppercase tracking-widest text-[11px] ml-1"
          >
            {isLogin ? "Register" : "Sign In"}
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

interface FieldProps {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  name: string;
  type: string;
  label: string;
  placeholder?: string;
  required?: boolean;
}

const Field = ({ icon: Icon, name, type, label, placeholder, required }: FieldProps) => (
  <div className="space-y-2">
    <label className="text-[10px] font-black uppercase tracking-[3px] text-secondary">
      {label}
    </label>
    <div className="relative group">
      <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary/60 group-focus-within:text-primary transition-colors" size={14} />
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full bg-white/[0.03] border border-white/10 focus:border-primary/50 focus:bg-white/[0.05] rounded-xl pl-11 pr-4 py-3.5 text-sm text-white placeholder:text-secondary/40 outline-none transition-all"
      />
    </div>
  </div>
);

export default AuthForm;
