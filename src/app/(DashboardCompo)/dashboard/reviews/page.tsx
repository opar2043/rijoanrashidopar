"use client";

import React from "react";
import Link from "next/link";
import { FaPlus, FaEdit, FaTrash, FaStar } from "react-icons/fa";

const ReviewsPage = () => {
  // Mock data
  const reviews = [
    { id: 1, name: "John Doe", date: "2024-05-01", rating: 5 },
    { id: 2, name: "Alice Smith", date: "2024-04-28", rating: 4 },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div className="border-l-4 border-blue-600 pl-6">
          <h1 className="text-3xl font-bold text-white uppercase tracking-tight">Client <span className="text-blue-500">Feedback</span></h1>
          <p className="text-secondary text-[10px] font-black uppercase tracking-[0.2em] mt-1 opacity-70">Review Management System</p>
        </div>
        <Link 
          href="/dashboard/reviews/add"
          className="flex items-center gap-3 bg-blue-700 hover:bg-blue-600 text-white px-6 py-3 rounded-sm font-black uppercase tracking-widest text-[10px] transition-all border border-blue-500/50"
        >
          <FaPlus /> Register Review
        </Link>
      </div>

      <div className="bg-[#0A0A0A] border border-white/5 rounded-sm overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-white/5 bg-white/[0.02]">
              <th className="px-6 py-5 text-[10px] font-black text-blue-500 uppercase tracking-[0.2em]">Identifier</th>
              <th className="px-6 py-5 text-[10px] font-black text-blue-500 uppercase tracking-[0.2em]">Registry Date</th>
              <th className="px-6 py-5 text-[10px] font-black text-blue-500 uppercase tracking-[0.2em]">Score</th>
              <th className="px-6 py-5 text-[10px] font-black text-blue-500 uppercase tracking-[0.2em] text-right">Operations</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {reviews.map((rev) => (
              <tr key={rev.id} className="hover:bg-white/[0.01] transition-colors group">
                <td className="px-6 py-4">
                  <span className="text-sm font-bold text-white uppercase tracking-wider">{rev.name}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-xs font-mono text-secondary">{rev.date}</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1 text-yellow-500">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <FaStar key={i} size={10} />
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-3">
                    <button className="p-2 text-secondary hover:text-blue-400 transition-colors bg-white/5 rounded-sm">
                      <FaEdit size={14} />
                    </button>
                    <button className="p-2 text-secondary hover:text-red-500 transition-colors bg-white/5 rounded-sm">
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

export default ReviewsPage;
