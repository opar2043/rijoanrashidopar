"use client";

import React, { useState, useEffect } from "react";
import { FaSave, FaLink } from "react-icons/fa";
import { toast } from "sonner";
import api from "@/service/api";

export default function ResumeSetting() {
    const [link, setLink] = useState("");
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        api.get("/settings/resume")
            .then((res) => {
                setLink(res.data.link || "");
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    const handleSave = async () => {
        setSaving(true);
        try {
            await api.post("/settings/resume", { link });
            toast.success("Resume link updated successfully!");
        } catch (error) {
            console.error(error);
            toast.error("Failed to update resume link.");
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return <div className="animate-pulse space-y-4 bg-[#0E0F12] border border-white/5 p-6 rounded-sm">
            <div className="h-6 bg-white/10 rounded w-1/4"></div>
            <div className="h-12 bg-white/10 rounded w-full"></div>
        </div>;
    }

    return (
        <div className="bg-[#0E0F12] border border-white/5 p-6 rounded-sm space-y-6">
            <div className="space-y-1">
                 <h2 className="text-xl font-bold text-white flex items-center gap-2">
                     <FaLink className="text-primary" /> Resume Link
                 </h2>
                 <p className="text-sm text-secondary opacity-70">Update the Google Drive or direct link to your current resume/CV.</p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4">
               <input 
                  type="text" 
                  value={link} 
                  onChange={(e) => setLink(e.target.value)} 
                  className="flex-1 bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder="https://drive.google.com/..."
               />
               <button 
                  onClick={handleSave} 
                  disabled={saving}
                  className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-sm font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
               >
                   <FaSave /> {saving ? "Saving..." : "Save Link"}
               </button>
            </div>
        </div>
    );
}
