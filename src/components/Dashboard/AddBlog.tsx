"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaHeading,
  FaImage,
  FaCalendarAlt,
  FaAlignLeft,
  FaPlus,
} from "react-icons/fa";
import { toast } from "sonner";
import { blogApi } from "@/service/blog";
import api from "@/service/api";

const AddBlog = () => {
  const [blogData, setBlogData] = useState({
    title: "",
    image: "",
    date: new Date().toISOString().split("T")[0],
    description: "",
  });
  const [isUploading, setIsUploading] = useState(false);

  const handleImageUpload = async (e: any) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const toastId = toast.loading("Uploading image...");
    setIsUploading(true);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = async () => {
      const base64Image = reader.result;

      try {
        const res = await api.post("/blogs/upload", { image: base64Image });

        if (res.data.secure_url) {
          setBlogData({ ...blogData, image: res.data.secure_url });
          toast.success("Image uploaded successfully", { id: toastId });
        } else {
          throw new Error("Upload failed");
        }
      } catch (error: any) {
        toast.error(error.message || "Failed to upload image", { id: toastId });
      } finally {
        setIsUploading(false);
      }
    };
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const toastId = toast.loading("Blog is loading");
    try {
      const res = await blogApi.createBlogs(blogData);
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3 ">
            <label className="text-sm font-black uppercase tracking-[0.15em] text-blue-500 ml-1">
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

          <div className="space-y-3">
            <label className="text-sm font-black uppercase tracking-[0.15em] text-blue-500 ml-1">
              Cover Image
            </label>
            <div className="relative group">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                disabled={isUploading}
                className="hidden"
                id="blog-image-upload"
              />
              <label
                htmlFor="blog-image-upload"
                className={`w-full bg-[#0A0A0A] border border-white/5 rounded-sm px-6 py-4 text-secondary/40 flex items-center justify-between cursor-pointer hover:border-blue-600/50 transition-all duration-300 text-sm ${
                  isUploading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <span>
                  {blogData.image
                    ? "Image Uploaded"
                    : isUploading
                      ? "Uploading..."
                      : "Select Cover Image"}
                </span>
                <FaImage
                  className={`w-4 h-4 transition-colors ${
                    blogData.image
                      ? "text-green-500"
                      : "text-secondary/20 group-focus-within:text-blue-600"
                  }`}
                />
              </label>
              {blogData.image && (
                <div className="mt-2 relative w-full h-32 rounded-sm overflow-hidden border border-white/5">
                  <img
                    src={blogData.image}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => setBlogData({ ...blogData, image: "" })}
                    className="absolute top-2 right-2 bg-red-600 p-1 rounded-full text-white hover:bg-red-700 transition-colors"
                  >
                    <FaPlus className="w-3 h-3 rotate-45" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-3">
          <label className="text-sm font-black uppercase tracking-[0.15em] text-blue-500 ml-1">
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
