"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaPlus, FaTrash, FaEye } from "react-icons/fa";
import { blogApi } from "@/service/blog";
import { toast } from "sonner";
import { BLOGS } from "@/service/type";

const BlogsPage = () => {
  const [blogs, setBlogs] = useState<BLOGS[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    try {
      const res: any = await blogApi.getBlogs();
      setBlogs(res?.data?.blogs || []);
    } catch (error) {
      toast.error("Failed to fetch blogs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;

    try {
      const res: any = await blogApi.deleteBlogs(id);
      if (res?.data?.success) {
        toast.success("Blog deleted successfully");
        setBlogs(blogs.filter((blog: any) => (blog._id || blog.id) !== id));
      } else {
        toast.error("Failed to delete blog");
      }
    } catch (error) {
      toast.error("An error occurred");
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div className="border-l-4 border-primary pl-4 md:pl-6">
          <h1 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight">
            Blog <span className="text-primary">List</span>
          </h1>
          <p className="text-secondary text-[10px] md:text-sm font-black uppercase tracking-[0.2em] mt-1 opacity-70">
            Manage your blog posts
          </p>
        </div>
        <Link
          href="/dashboard/blogs/add"
          className="flex items-center gap-2 md:gap-3 bg-primary hover:bg-primary/80 text-white px-3 py-2 md:px-6 md:py-3 rounded-sm font-black uppercase tracking-widest text-[10px] md:text-sm transition-all border border-primary/50"
        >
          <FaPlus /> <span className="hidden sm:inline">Add Blog</span><span className="sm:hidden">Add</span>
        </Link>
      </div>

      <div className="bg-[#0A0A0A] border border-white/5 rounded-sm overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          {loading ? (
            <div className="p-12 text-center text-secondary uppercase tracking-widest text-xs animate-pulse">
              Loading blogs...
            </div>
          ) : (
            <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-white/5 bg-white/[0.02]">
                <th className="px-6 py-5 text-sm font-black text-primary uppercase tracking-[0.2em]">
                  Image
                </th>
                <th className="px-6 py-5 text-sm font-black text-primary uppercase tracking-[0.2em]">
                  Title
                </th>
                <th className="px-6 py-5 text-sm font-black text-primary uppercase tracking-[0.2em]">
                  Date
                </th>
                <th className="px-6 py-5 text-sm font-black text-primary uppercase tracking-[0.2em] text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {blogs.map((blog: any) => (
                <tr
                  key={blog._id || blog.id}
                  className="hover:bg-white/[0.01] transition-colors group text-secondary"
                >
                  <td className="px-6 py-4">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-10 h-10 rounded-sm object-cover border border-white/10"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-bold text-white uppercase tracking-wider">
                      {blog.title}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs font-mono opacity-55">
                      {blog.date}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-3">
                      <Link
                        href={`/blogs/${blog._id || blog.id}`}
                        className="p-2 hover:text-primary transition-colors bg-white/5 rounded-sm"
                      >
                        <FaEye size={14} />
                      </Link>
                      <button
                        onClick={() => handleDelete(blog._id || blog.id)}
                        className="p-2 hover:text-red-500 transition-colors bg-white/5 rounded-sm"
                      >
                        <FaTrash size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {blogs.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-6 py-12 text-center text-secondary/50 uppercase tracking-widest text-xs">
                    No blogs found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default BlogsPage;
