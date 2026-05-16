export const dynamic = "force-dynamic";
import React from 'react'
import BlogCard from '@/components/Public/BlogCard'
import { blogApi } from '@/service/blog'
import { BLOGS } from '@/service/type';

export default async function BlogsPage() {
  const blogsData: any = await blogApi.getBlogs();
  const blogs = blogsData?.data?.blogs || [];

  return (
    <div className="min-h-screen py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header Section */}
        <div className="max-w-2xl border-l-4 border-primary pl-8">
          <h1 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tight leading-none">
            My Achievement <span className="text-primary">Story</span>
          </h1>
          <p className="text-secondary text-sm md:text-base font-medium mt-6 opacity-60 leading-relaxed uppercase tracking-widest">
            Sharing my journey, experiences, and technical milestones throughout my career.
          </p>
        </div>

        {/* Blog Column List */}
        <div className="grid grid-cols-1 gap-12">
          {blogs.map((blog: BLOGS) => (
            <BlogCard key={blog.id || (blog as any)._id} blog={blog} />
          ))}
        </div>

        {blogs.length === 0 && (
          <div className="py-24 text-center border border-white/5 bg-white/[0.02] rounded-sm">
            <p className="text-secondary text-xs font-black uppercase tracking-[0.5em] opacity-30">
              No stories shared yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
