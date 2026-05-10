"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa'
import { BLOGS } from '@/service/type'

interface BlogCardProps {
    blog: BLOGS
}

const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-[#0A0A0A] border border-white/5 rounded-sm overflow-hidden hover:border-primary/50 transition-all duration-500"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={blog.image} 
          alt={blog.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60" />
        
        {/* Date Tag */}
        <div className="absolute bottom-4 left-6 flex items-center gap-2 bg-primary px-3 py-1.5 rounded-sm">
          <FaCalendarAlt className="text-[10.5px] text-white" />
          <span className="text-[10.5px] font-black uppercase tracking-widest text-white">{blog.date}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 space-y-4">
        <div className="space-y-2">
          <span className="text-[10.5px] font-black uppercase tracking-[0.3em] text-primary opacity-70">Story</span>
          <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300 leading-tight">
            {blog.title}
          </h3>
        </div>
        
        <p className="text-secondary text-sm leading-relaxed line-clamp-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
          {blog.description}
        </p>

        <div className="pt-4 flex items-center justify-between">
          <div className="h-[1px] flex-1 bg-white/5 mr-6 group-hover:bg-primary/20 transition-colors" />
          <button className="flex items-center gap-3 text-[10.5px] font-black uppercase tracking-[0.2em] text-white group-hover:text-primary transition-colors">
            Read More <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Hover Decorative Element */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  )
}

export default BlogCard
