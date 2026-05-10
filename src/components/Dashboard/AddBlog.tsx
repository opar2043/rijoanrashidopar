"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaHeading, FaImage, FaCalendarAlt, FaAlignLeft } from "react-icons/fa";
import { toast } from "sonner";
import { blogApi } from "@/service/blog";

const AddBlog = () => {
  const [blogData, setBlogData] = useState({
    title: "",
    image: "",
    date: new Date().toISOString().split("T")[0],
    description: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const toastId = toast.loading("Blog is loading");
    try {
      const res = await blogApi.createBlogs(blogData)
      // console.log(res);
      if (res) {
        toast.success("Blog created successfully", {
          id: toastId,
        });
        setBlogData({
          title: "",
          image: "",
          date: "",
          description: "",
        });
      }
    } catch (error) {
      toast.error("Failed to create blog", {
        id: toastId,
      });
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="mb-12 border-l-4 border-blue-600 pl-6">
        <h1 className="text-4xl font-bold text-white uppercase tracking-tight">
          Blog <span className="text-blue-500">Publishing</span>
        </h1>
        <p className="text-secondary text-xs font-bold uppercase tracking-[0.2em] mt-2 opacity-70">
          Draft and deploy technical articles
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="space-y-3">
          <label className="text-[10.5px] font-black uppercase tracking-[0.15em] text-blue-500 ml-1">
            Article Headline
          </label>
          <div className="relative group">
            <input
              type="text"
              placeholder="The Future of Web Architecture"
              className="w-full bg-[#0A0A0A] border border-white/5 rounded-sm px-6 py-4 text-white placeholder:text-secondary/30 focus:outline-none focus:border-blue-600/50 transition-all duration-300 text-sm"
              value={blogData.title}
              onChange={(e) =>
                setBlogData({ ...blogData, title: e.target.value })
              }
            />
            <FaHeading className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary/20 group-focus-within:text-blue-600 transition-colors" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image URL */}
          <div className="space-y-3">
            <label className="text-[10.5px] font-black uppercase tracking-[0.15em] text-blue-500 ml-1">
              Cover Image Node
            </label>
            <div className="relative group">
              <input
                type="url"
                placeholder="https://images.io/cover"
                className="w-full bg-[#0A0A0A] border border-white/5 rounded-sm px-6 py-4 text-white placeholder:text-secondary/30 focus:outline-none focus:border-blue-600/50 transition-all duration-300 text-sm"
                value={blogData.image}
                onChange={(e) =>
                  setBlogData({ ...blogData, image: e.target.value })
                }
              />
              <FaImage className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary/20 group-focus-within:text-blue-600 transition-colors" />
            </div>
          </div>

          {/* Date */}
          <div className="space-y-3">
            <label className="text-[10.5px] font-black uppercase tracking-[0.15em] text-blue-500 ml-1">
              Publication Date
            </label>
            <div className="relative group">
              <input
                type="date"
                className="w-full bg-[#0A0A0A] border border-white/5 rounded-sm px-6 py-4 text-white focus:outline-none focus:border-blue-600/50 transition-all duration-300 text-sm"
                value={blogData.date}
                onChange={(e) =>
                  setBlogData({ ...blogData, date: e.target.value })
                }
              />
              <FaCalendarAlt className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary/20 group-focus-within:text-blue-600 transition-colors" />
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-3">
          <label className="text-[10.5px] font-black uppercase tracking-[0.15em] text-blue-500 ml-1">
            Article Body / Abstract
          </label>
          <div className="relative group">
            <textarea
              rows={8}
              placeholder="Content breakdown..."
              className="w-full bg-[#0A0A0A] border border-white/5 rounded-sm px-6 py-5 text-white placeholder:text-secondary/30 focus:outline-none focus:border-blue-600/50 transition-all duration-300 resize-none text-sm leading-relaxed"
              value={blogData.description}
              onChange={(e) =>
                setBlogData({ ...blogData, description: e.target.value })
              }
            />
            <FaAlignLeft className="absolute right-6 top-6 w-4 h-4 text-secondary/20 group-focus-within:text-blue-600 transition-colors" />
          </div>
        </div>

        {/* Submit */}
        <div className="pt-10 border-t border-white/5">
          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-600 text-white py-6 rounded-sm font-black uppercase tracking-[0.5em] text-xs transition-all duration-500 shadow-xl shadow-blue-900/10 active:scale-[0.99] border border-blue-500"
          >
            EXECUTE ARTICLE DEPLOYMENT
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
