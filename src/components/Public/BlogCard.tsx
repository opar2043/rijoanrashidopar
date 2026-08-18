"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa'
import { BLOGS } from '@/service/type'
import Link from 'next/link'

interface BlogCardProps {
    blog: BLOGS
}

const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-white/[0.01] border border-white/5 rounded-md overflow-hidden hover:bg-white/[0.03] hover:border-white/10 transition-all duration-500 shadow-xl hover:shadow-primary/5"
    >
      <div className="flex flex-col md:flex-row items-stretch h-full">
        {/* Left Side: Image */}
        <div className="md:w-1/3 relative min-h-[250px] overflow-hidden">
          <img 
            src={blog.image} 
            alt={blog.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0A0A0A]/50 hidden md:block" />
        </div>

        {/* Right Side: Content */}
        <div className="flex-1 p-8 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-xl md:text-2xl font-black text-white group-hover:text-white transition-colors duration-300 leading-tight tracking-tight uppercase">
                {blog.title}
              </h3>
            </div>
            
            <p className="text-white/60 text-base leading-relaxed line-clamp-3 group-hover:text-white/80 transition-colors duration-300">
              {blog.description}
            </p>
          </div>

          <div className="pt-8 flex flex-col md:flex-row md:items-center justify-between gap-6 border-t border-white/5 mt-auto">
            <div className="flex items-center gap-3">
              <FaCalendarAlt className="text-sm text-white/40" />
              <span className="text-[10px] font-black  tracking-[0.3em] text-white/40">{blog.date}</span>
            </div>
            
            <Link 
              href={`/blogs/${blog.id || (blog as any)._id}`}
              className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.3em] text-white group-hover:translate-x-2 transition-transform"
            >
              Read Story <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>

      {/* Subtle Hover Effect Overlay */}
      <div className="absolute inset-0 border-2 border-white/0 group-hover:border-primary/10 rounded-2xl transition-all duration-500 pointer-events-none" />
    </motion.div>
  )
}

export default BlogCard
