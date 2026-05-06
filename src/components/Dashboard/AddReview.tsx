"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaStar, FaCalendarAlt, FaQuoteLeft } from "react-icons/fa";

const AddReview = () => {
  const [reviewData, setReviewData] = useState({
    name: "",
    review: "",
    date: new Date().toISOString().split('T')[0],
    rating: 5,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting Review Data:", reviewData);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="mb-12 border-l-4 border-blue-600 pl-6">
        <h1 className="text-4xl font-bold text-white uppercase tracking-tight">Review <span className="text-blue-500">Registry</span></h1>
        <p className="text-secondary text-xs font-bold uppercase tracking-[0.2em] mt-2 opacity-70">Register new client feedback into the system</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Client Name */}
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-[0.15em] text-blue-500 ml-1">Client Identifier</label>
            <div className="relative group">
              <input 
                type="text" 
                placeholder="John Doe"
                className="w-full bg-[#0A0A0A] border border-white/5 rounded-sm px-6 py-4 text-white placeholder:text-secondary/30 focus:outline-none focus:border-blue-600/50 transition-all duration-300 text-sm"
                value={reviewData.name}
                onChange={(e) => setReviewData({...reviewData, name: e.target.value})}
              />
              <FaUser className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary/20 group-focus-within:text-blue-600 transition-colors" />
            </div>
          </div>

          {/* Date */}
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-[0.15em] text-blue-500 ml-1">Registry Date</label>
            <div className="relative group">
              <input 
                type="date" 
                className="w-full bg-[#0A0A0A] border border-white/5 rounded-sm px-6 py-4 text-white focus:outline-none focus:border-blue-600/50 transition-all duration-300 text-sm"
                value={reviewData.date}
                onChange={(e) => setReviewData({...reviewData, date: e.target.value})}
              />
              <FaCalendarAlt className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary/20 group-focus-within:text-blue-600 transition-colors" />
            </div>
          </div>

          {/* Rating */}
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-[0.15em] text-blue-500 ml-1">Quality Score (1-5)</label>
            <div className="relative group">
              <input 
                type="number" 
                min="1"
                max="5"
                className="w-full bg-[#0A0A0A] border border-white/5 rounded-sm px-6 py-4 text-white focus:outline-none focus:border-blue-600/50 transition-all duration-300 text-sm"
                value={reviewData.rating}
                onChange={(e) => setReviewData({...reviewData, rating: parseInt(e.target.value)})}
              />
              <FaStar className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary/20 group-focus-within:text-blue-600 transition-colors" />
            </div>
          </div>
        </div>

        {/* Review Text */}
        <div className="space-y-3">
          <label className="text-[10px] font-black uppercase tracking-[0.15em] text-blue-500 ml-1">Client Testimony</label>
          <div className="relative group">
            <textarea 
              rows={6}
              placeholder="Feedback content..."
              className="w-full bg-[#0A0A0A] border border-white/5 rounded-sm px-6 py-5 text-white placeholder:text-secondary/30 focus:outline-none focus:border-blue-600/50 transition-all duration-300 resize-none text-sm leading-relaxed"
              value={reviewData.review}
              onChange={(e) => setReviewData({...reviewData, review: e.target.value})}
            />
            <FaQuoteLeft className="absolute right-6 top-6 w-4 h-4 text-secondary/20 group-focus-within:text-blue-600 transition-colors" />
          </div>
        </div>

        {/* Submit */}
        <div className="pt-10 border-t border-white/5">
          <button 
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-600 text-white py-6 rounded-sm font-black uppercase tracking-[0.5em] text-xs transition-all duration-500 shadow-xl shadow-blue-900/10 active:scale-[0.99] border border-blue-500"
          >
            COMMIT REVIEW TO DATABASE
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddReview;
