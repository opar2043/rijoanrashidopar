"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Briefcase, 
  Star, 
  User, 
  Settings,
  LogOut,
  Home
} from "lucide-react";
import { cn } from "@/lib/utils";

const DashboardNav = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
    { name: "Projects", href: "/dashboard/projects", icon: Briefcase },
    { name: "Reviews", href: "/dashboard/reviews", icon: Star },
    { name: "Profile", href: "/dashboard/profile", icon: User },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
  ];

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-72 bg-[#050505] border-r border-white/5 flex flex-col z-50">
      {/* Brand */}
      <div className="p-10 border-b border-white/5 bg-black/20">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-sm bg-blue-700 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-900/20 border border-blue-500/50">
            R
          </div>
          <div>
            <h2 className="text-white font-bold text-sm uppercase tracking-[0.2em] leading-none">Rijoan Rashid</h2>
            <p className="text-blue-500 text-[9px] font-black uppercase tracking-[0.3em] mt-1.5 opacity-80">PORTFOLIO</p>
          </div>
        </div>
      </div>

      {/* Nav Links */}
      <nav className="flex-1 p-6 space-y-1">
        <p className="text-[9px] font-black text-secondary/40 uppercase tracking-[0.3em] mb-4 ml-4">System Nodes</p>
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-4 px-5 py-3.5 rounded-sm transition-all duration-300 group relative",
                isActive 
                  ? "bg-blue-600/10 text-white border-l-2 border-blue-600" 
                  : "text-secondary hover:bg-white/5 hover:text-white"
              )}
            >
              <item.icon className={cn(
                "w-4 h-4 transition-colors",
                isActive ? "text-blue-500" : "text-secondary/40 group-hover:text-blue-500"
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
          <Home className="w-4 h-4 text-secondary/40 group-hover:text-blue-500" />
          <span className="text-[11px] font-bold tracking-[0.1em] uppercase">Public View</span>
        </Link>
        <button
          className="w-full flex items-center gap-4 px-5 py-3.5 rounded-sm text-red-500/60 hover:bg-red-950/20 hover:text-red-400 transition-all group"
        >
          <LogOut className="w-4 h-4" />
          <span className="text-[11px] font-bold tracking-[0.1em] uppercase">Terminate Session</span>
        </button>
      </div>
    </aside>
  );
};

export default DashboardNav;
