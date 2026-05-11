"use client";

import React, { useState } from "react";
import { FaUser, FaStar, FaCalendarAlt, FaQuoteLeft } from "react-icons/fa";
import { toast } from "sonner";
import { reviewApi } from "@/service/review";

const AddReview = () => {
  const [reviewData, setReviewData] = useState({
    name: "",
    review: "",
    date: new Date().toISOString().split("T")[0],
    rating: 5,
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const toastId = toast.loading("Adding review...");
    try {
      const res = await reviewApi.createReview(reviewData );
      if (res) {
        toast.success("Review added successfully", {
          id: toastId,
        });
        setReviewData({
          name: "",
          review: "",
          date: new Date().toISOString().split("T")[0],
          rating: 5,
        });
      }
    } catch (error) {
      toast.error("Failed to add review", {
        id: toastId,
      });
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="mb-12 border-l-4 border-blue-600 pl-6">
        <h1 className="text-4xl font-bold text-white uppercase tracking-tight">
          Add <span className="text-blue-500">Review</span>
        </h1>
        <p className="text-secondary text-sm font-bold uppercase tracking-[0.2em] mt-2 opacity-70">
          Add new feedback from your clients
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Client Name */}
          <div className="space-y-3">
            <label className="text-sm font-black uppercase tracking-[0.15em] text-blue-500 ml-1">
              Client Name
            </label>
            <div className="relative group">
              <input
                type="text"
                placeholder="John Doe"
                className="w-full bg-[#0A0A0A] border border-white/5 rounded-sm px-6 py-4 text-white placeholder:text-secondary/30 focus:outline-none focus:border-blue-600/50 transition-all duration-300 text-sm font-mono"
                value={reviewData.name}
                onChange={(e) =>
                  setReviewData({ ...reviewData, name: e.target.value })
                }
              />
              <FaUser className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary/55 group-focus-within:text-blue-600 transition-colors" />
            </div>
          </div>

          {/* Date */}
          <div className="space-y-3">
            <label className="text-sm font-black uppercase tracking-[0.15em] text-blue-500 ml-1">
              Date
            </label>
            <div className="relative group">
              <input
                type="date"
                className="w-full bg-[#0A0A0A] border border-white/5 rounded-sm px-6 py-4 text-white focus:outline-none focus:border-blue-600/50 transition-all duration-300 text-sm font-mono"
                value={reviewData.date}
                onChange={(e) =>
                  setReviewData({ ...reviewData, date: e.target.value })
                }
              />
              <FaCalendarAlt className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary/55 group-focus-within:text-blue-600 transition-colors" />
            </div>
          </div>

          {/* Rating */}
          <div className="space-y-3">
            <label className="text-sm font-black uppercase tracking-[0.15em] text-blue-500 ml-1">
              Rating (1-5)
            </label>
            <div className="relative group">
              <input
                type="number"
                min="1"
                max="5"
                className="w-full bg-[#0A0A0A] border border-white/5 rounded-sm px-6 py-4 text-white focus:outline-none focus:border-blue-600/50 transition-all duration-300 text-sm font-mono"
                value={reviewData.rating}
                onChange={(e) =>
                  setReviewData({
                    ...reviewData,
                    rating: parseInt(e.target.value),
                  })
                }
              />
              <FaStar className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary/55 group-focus-within:text-blue-600 transition-colors" />
            </div>
          </div>
        </div>

        {/* Review Text */}
        <div className="space-y-3">
          <label className="text-sm font-black uppercase tracking-[0.15em] text-blue-500 ml-1">
            Client Review
          </label>
          <div className="relative group">
            <textarea
              rows={6}
              placeholder="Write client feedback here..."
              className="w-full bg-[#0A0A0A] border border-white/5 rounded-sm px-6 py-5 text-white placeholder:text-secondary/30 focus:outline-none focus:border-blue-600/50 transition-all duration-300 resize-none text-sm leading-relaxed"
              value={reviewData.review}
              onChange={(e) =>
                setReviewData({ ...reviewData, review: e.target.value })
              }
            />
            <FaQuoteLeft className="absolute right-6 top-6 w-4 h-4 text-secondary/55 group-focus-within:text-blue-600 transition-colors" />
          </div>
        </div>

        {/* Submit */}
        <div className="pt-10 border-t border-white/5">
          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-600 text-white py-6 rounded-sm font-black uppercase tracking-[0.5em] text-xs transition-all duration-500 shadow-xl shadow-blue-900/10 active:scale-[0.99] border border-blue-500"
          >
            ADD REVIEW
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddReview;
