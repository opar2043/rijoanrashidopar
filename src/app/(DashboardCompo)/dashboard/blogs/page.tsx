"use client";

import React from "react";
import Link from "next/link";
import { FaPlus, FaEdit, FaTrash, FaEye } from "react-icons/fa";

const BlogsPage = () => {
  // Mock data
  const blogs = [
    { id: 1, title: "Next.js 15 Architecture", image: "https://via.placeholder.com/40", date: "2024-05-04" },
    { id: 2, title: "Mastering Tailwind CSS", image: "https://via.placeholder.com/40", date: "2024-05-02" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div className="border-l-4 border-blue-600 pl-6">
          <h1 className="text-3xl font-bold text-white uppercase tracking-tight">Blog <span className="text-blue-500">List</span></h1>
          <p className="text-secondary text-[10.5px] font-black uppercase tracking-[0.2em] mt-1 opacity-70">Manage your blog posts</p>
        </div>
        <Link 
          href="/dashboard/blogs/add"
          className="flex items-center gap-3 bg-blue-700 hover:bg-blue-600 text-white px-6 py-3 rounded-sm font-black uppercase tracking-widest text-[10.5px] transition-all border border-blue-500/50"
        >
          <FaPlus /> Add Blog
        </Link>
      </div>

      <div className="bg-[#0A0A0A] border border-white/5 rounded-sm overflow-hidden shadow-2xl">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-white/5 bg-white/[0.02]">
              <th className="px-6 py-5 text-[10.5px] font-black text-blue-500 uppercase tracking-[0.2em]">Image</th>
              <th className="px-6 py-5 text-[10.5px] font-black text-blue-500 uppercase tracking-[0.2em]">Title</th>
              <th className="px-6 py-5 text-[10.5px] font-black text-blue-500 uppercase tracking-[0.2em]">Date</th>
              <th className="px-6 py-5 text-[10.5px] font-black text-blue-500 uppercase tracking-[0.2em] text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {blogs.map((blog) => (
              <tr key={blog.id} className="hover:bg-white/[0.01] transition-colors group text-secondary">
                <td className="px-6 py-4">
                  <img src={blog.image} alt={blog.title} className="w-10 h-10 rounded-sm object-cover border border-white/10" />
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm font-bold text-white uppercase tracking-wider">{blog.title}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-xs font-mono opacity-55">{blog.date}</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-3">
                    <button className="p-2 hover:text-blue-400 transition-colors bg-white/5 rounded-sm">
                      <FaEye size={14} />
                    </button>
                    <button className="p-2 hover:text-blue-400 transition-colors bg-white/5 rounded-sm">
                      <FaEdit size={14} />
                    </button>
                    <button className="p-2 hover:text-red-500 transition-colors bg-white/5 rounded-sm">
                      <FaTrash size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogsPage;
