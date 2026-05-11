import React from "react";
import { blogApi } from "@/service/blog";
import { FaCalendarAlt, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

export default async function BlogDetailsPage({ params }: { params: any }) {
  const { id } = await params;
  const blogData: any = await blogApi.getsingleBlogs(id);
  const blog = blogData?.data || null;

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-black text-white uppercase">Blog Not Found</h1>
          <Link href="/blogs" className="text-primary uppercase tracking-widest text-sm">Back to Blogs</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto space-y-12">
        <Link 
          href="/blogs" 
          className="inline-flex items-center gap-3 text-secondary hover:text-white transition-colors uppercase tracking-widest text-xs font-black"
        >
          <FaArrowLeft /> Back to Blogs
        </Link>

        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight leading-tight">
              {blog.title}
            </h1>
            <div className="flex items-center gap-3 text-secondary/60">
              <FaCalendarAlt />
              <span className="text-xs font-black uppercase tracking-widest">{blog.date}</span>
            </div>
          </div>

          <div className="relative aspect-video rounded-sm overflow-hidden border border-white/5">
            <img 
              src={blog.image} 
              alt={blog.title} 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-secondary text-lg leading-relaxed whitespace-pre-wrap">
              {blog.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
