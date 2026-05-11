"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaProjectDiagram, FaStar, FaShoppingCart, FaArrowUp, FaChartLine } from "react-icons/fa";
import { STATS } from "@/service/type";

interface DashboardOverviewProps {
  stats: STATS;
}

const DashboardOverview = ({ stats }: DashboardOverviewProps) => {
  const statCards = [
    {
      title: "Total Users",
      value: stats.usersCount,
      icon: <FaUsers />,
      color: "from-blue-600 to-cyan-500",
      description: "Total users joined",
      trend: "+12%"
    },
    {
      title: "Active Projects",
      value: stats.projectsCount,
      icon: <FaProjectDiagram />,
      color: "from-purple-600 to-pink-500",
      description: "Projects live and active",
      trend: "+5%"
    },
    {
      title: "Client Reviews",
      value: stats.reviewsCount,
      icon: <FaStar />,
      color: "from-orange-600 to-yellow-500",
      description: "Reviews received from clients",
      trend: "+18%"
    },
    {
      title: "Total Orders",
      value: stats.ordersCount,
      icon: <FaShoppingCart />,
      color: "from-emerald-600 to-teal-500",
      description: "Total orders made through platform",
      trend: "+24%"
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <div className="space-y-12">
      <div className="border-l-4 border-blue-600 pl-6">
        <h1 className="text-4xl font-bold text-white uppercase tracking-tight">Performance <span className="text-blue-500">Overview</span></h1>
        <p className="text-secondary text-xs font-bold uppercase tracking-[0.2em] mt-2 opacity-70 flex items-center gap-2">
          <FaChartLine className="text-blue-500" /> Live dashboard statistics
        </p>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {statCards.map((card, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ y: -5 }}
            className="relative group overflow-hidden rounded-sm border border-white/5 bg-[#0A0A0A] p-8 transition-all duration-300 hover:border-blue-500/30 shadow-2xl"
          >
            {/* Background Gradient Glow */}
            <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${card.color} opacity-[0.03] blur-3xl group-hover:opacity-[0.08] transition-opacity duration-500`} />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center justify-between mb-6">
                <div className={`p-3 rounded-sm bg-gradient-to-br ${card.color} text-white text-xl shadow-lg shadow-blue-900/10`}>
                  {card.icon}
                </div>
                <div className="flex items-center gap-1 text-emerald-500 text-sm font-black tracking-widest bg-emerald-500/5 px-2 py-1 rounded-sm">
                  <FaArrowUp className="w-2 h-2" /> {card.trend}
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="text-sm font-black uppercase tracking-[0.15em] text-secondary opacity-60">
                  {card.title}
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-white tabular-nums tracking-tight">
                    {card.value.toLocaleString()}
                  </span>
                </div>
                <p className="text-[10px] font-bold text-secondary/55 uppercase tracking-widest pt-2 border-t border-white/5 mt-4">
                  {card.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Decorative Progress Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-6">
        <div className="lg:col-span-2 rounded-sm border border-white/5 bg-[#0A0A0A] p-8 relative overflow-hidden group">
           <div className="absolute inset-0 bg-blue-600/[0.01] group-hover:bg-blue-600/[0.02] transition-colors" />
           <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                 <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white">App Performance</h3>
                 <span className="text-sm font-black text-blue-500 uppercase tracking-widest bg-blue-500/5 px-3 py-1 border border-blue-500/10 rounded-sm">Fully Optimized</span>
              </div>
              
              <div className="space-y-8">
                 {[
                   { label: "Load Speed", value: 94, color: "bg-blue-600" },
                   { label: "Server Response", value: 98, color: "bg-emerald-600" },
                   { label: "Data Usage", value: 24, color: "bg-purple-600" },
                 ].map((bar, i) => (
                   <div key={i} className="space-y-3">
                      <div className="flex justify-between items-end">
                        <span className="text-sm font-bold text-secondary uppercase tracking-widest opacity-55">{bar.label}</span>
                        <span className="text-xs font-black text-white tabular-nums">{bar.value}%</span>
                      </div>
                      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${bar.value}%` }}
                          transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                          className={`h-full ${bar.color} shadow-[0_0_10px_rgba(37,99,235,0.3)]`}
                        />
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        <div className="rounded-sm border border-white/5 bg-[#0A0A0A] p-8 flex flex-col justify-between group overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-b from-blue-600/[0.02] to-transparent" />
           <div className="relative z-10">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white mb-6">Live Status</h3>
              <div className="space-y-4">
                 {[
                   { status: "Online", label: "Main Server", color: "text-emerald-500" },
                   { status: "Active", label: "Database Sync", color: "text-emerald-500" },
                   { status: "Secure", label: "Secure Connection", color: "text-blue-500" },
                   { status: "Idle", label: "Background Tasks", color: "text-secondary/55" },
                 ].map((s, i) => (
                   <div key={i} className="flex items-center justify-between py-3 border-b border-white/5">
                      <span className="text-sm font-bold text-secondary uppercase tracking-widest opacity-55">{s.label}</span>
                      <div className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full ${s.status === 'Idle' ? 'bg-secondary/30' : 'bg-emerald-500 animate-pulse'}`} />
                        <span className={`text-sm font-black uppercase tracking-widest ${s.color}`}>{s.status}</span>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
           
           <div className="relative z-10 mt-8 pt-6 border-t border-white/5">
              <p className="text-[10px] font-bold text-secondary/55 uppercase tracking-widest leading-relaxed">
                Last updated at {new Date().toLocaleTimeString()}
              </p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
