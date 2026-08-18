"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Briefcase, 
  Star, 
  Book, 
  Settings,
  LogOut,
  Home,
  Menu,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

import { AuthContext } from "@/app/(AuthCompo)/AuthProvider";

const DashboardNav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { user, handleLogout } = React.useContext(AuthContext);

  const menuItems = [
    { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
    { name: "Projects", href: "/dashboard/projects", icon: Briefcase },
    { name: "Reviews", href: "/dashboard/reviews", icon: Star },
    { name: "Experience", href: "/dashboard/experience", icon: Briefcase },
    { name: "Blog", href: "/dashboard/blogs", icon: Book },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
  ];

  const SidebarContent = () => (
    <>
      {/* Brand */}
      <div className="p-10 border-b border-white/5 bg-black/20">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-sm bg-blue-700 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-900/20 border border-blue-500/50">
            {user?.displayName?.[0] || user?.email?.[0] || 'R'}
          </div>
          <div>
            <h2 className="text-white font-bold text-sm uppercase tracking-[0.2em] leading-none truncate max-w-[120px]">
              {user?.displayName || "User"}
            </h2>
          </div>
        </div>
      </div>

      {/* Nav Links */}
      <nav className="flex-1 p-6 space-y-1">
        <p className="text-[10px] font-black text-secondary/55 uppercase tracking-[0.3em] mb-4 ml-4">Navigation</p>
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "flex items-center gap-4 px-5 py-3.5 rounded-sm transition-all duration-300 group relative",
                isActive 
                  ? "bg-blue-600/10 text-white border-l-2 border-blue-600" 
                  : "text-secondary hover:bg-white/5 hover:text-white"
              )}
            >
              <item.icon className={cn(
                "w-4 h-4 transition-colors",
                isActive ? "text-blue-500" : "text-secondary/55 group-hover:text-blue-500"
              )} />
              <span className="text-[11px] font-bold tracking-[0.1em] uppercase">{item.name}</span>
              
              {isActive && (
                <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-blue-500/50 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Actions */}
      <div className="p-6 space-y-1 border-t border-white/5">
        <Link
          href="/"
          className="flex items-center gap-4 px-5 py-3.5 rounded-sm text-secondary hover:bg-white/5 hover:text-white transition-all group"
        >
          <Home className="w-4 h-4 text-secondary/55 group-hover:text-blue-500" />
          <span className="text-[11px] font-bold tracking-[0.1em] uppercase">Public View</span>
        </Link>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-4 px-5 py-3.5 rounded-sm text-red-500/60 hover:bg-red-950/20 hover:text-red-400 transition-all group"
        >
          <LogOut className="w-4 h-4" />
          <span className="text-[11px] font-bold tracking-[0.1em] uppercase">Logout</span>
        </button>
      </div>
    </>
  );

  return (
    <>
      {/* Hamburger Menu - Visible on mobile */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-[100] p-3 bg-[#0A0A0A] border border-white/10 rounded-sm text-white shadow-xl"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-72 bg-[#050505] border-r border-white/5 flex-col z-50">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-[80]"
            />
            <motion.aside 
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="lg:hidden fixed left-0 top-0 bottom-0 w-[80%] max-w-[300px] bg-[#050505] border-r border-white/5 flex flex-col z-[90] shadow-2xl"
            >
              <SidebarContent />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default DashboardNav;
