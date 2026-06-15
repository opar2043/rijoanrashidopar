"use client";

import React, { useState, useEffect } from "react";
import { FaTrash, FaEdit, FaPlus, FaBriefcase } from "react-icons/fa";
import { toast } from "sonner";
import api from "@/service/api";

export default function ExperienceList() {
    const [experiences, setExperiences] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState<string | null>(null);

    const [formData, setFormData] = useState({
        company: "",
        joinDate: "",
        endDate: "",
        workingNow: false,
        position: "",
        details: ""
    });

    useEffect(() => {
        fetchExperiences();
    }, []);

    const fetchExperiences = async () => {
        try {
            const res = await api.get("/experience");
            setExperiences(res.data);
            setLoading(false);
        } catch (error) {
            console.error("Failed to fetch experiences", error);
            setLoading(false);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target as any;
        const checked = (e.target as any).checked;
        setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (isEditing && editId) {
                await api.patch(`/experience/${editId}`, formData);
                toast.success("Experience updated successfully");
            } else {
                await api.post("/experience", formData);
                toast.success("Experience added successfully");
            }
            fetchExperiences();
            resetForm();
        } catch (error) {
            console.error("Error saving experience", error);
            toast.error("Failed to save experience");
        }
    };

    const handleEdit = (exp: any) => {
        setIsEditing(true);
        setEditId(exp._id);
        setFormData({
            company: exp.company || "",
            joinDate: exp.joinDate || "",
            endDate: exp.endDate || "",
            workingNow: exp.workingNow || false,
            position: exp.position || "",
            details: exp.details || ""
        });
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this experience?")) return;
        try {
            await api.delete(`/experience/${id}`);
            toast.success("Experience deleted");
            fetchExperiences();
        } catch (error) {
            console.error("Error deleting experience", error);
            toast.error("Failed to delete experience");
        }
    };

    const resetForm = () => {
        setIsEditing(false);
        setEditId(null);
        setFormData({
            company: "",
            joinDate: "",
            endDate: "",
            workingNow: false,
            position: "",
            details: ""
        });
    };

    if (loading) return <div className="text-white text-center py-10">Loading...</div>;

    return (
        <div className="space-y-8">
            <div className="bg-[#0E0F12] border border-white/5 p-6 rounded-sm shadow-xl">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <FaBriefcase className="text-primary" /> {isEditing ? "Edit Experience" : "Add Experience"}
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-bold text-secondary uppercase mb-1">Company Name</label>
                            <input 
                                required
                                name="company"
                                value={formData.company}
                                onChange={handleInputChange}
                                className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-2 text-white focus:border-primary/50 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-secondary uppercase mb-1">Position</label>
                            <input 
                                required
                                name="position"
                                value={formData.position}
                                onChange={handleInputChange}
                                className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-2 text-white focus:border-primary/50 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-secondary uppercase mb-1">Join Date</label>
                            <input 
                                required
                                type="month"
                                name="joinDate"
                                value={formData.joinDate}
                                onChange={handleInputChange}
                                className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-2 text-white focus:border-primary/50 outline-none hover-secondary [color-scheme:dark]"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-secondary uppercase mb-1">End Date</label>
                            <input 
                                type="month"
                                name="endDate"
                                value={formData.endDate}
                                onChange={handleInputChange}
                                disabled={formData.workingNow}
                                className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-2 text-white focus:border-primary/50 disabled:opacity-50 outline-none [color-scheme:dark]"
                            />
                            <div className="mt-2 flex items-center gap-2">
                                <input 
                                    type="checkbox"
                                    name="workingNow"
                                    checked={formData.workingNow}
                                    onChange={handleInputChange}
                                    id="workingNow"
                                    className="accent-primary w-4 h-4 cursor-pointer"
                                />
                                <label htmlFor="workingNow" className="text-xs text-white pb-0.5 cursor-pointer">Currently working here</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-secondary uppercase mb-1">Details</label>
                        <textarea 
                            required
                            name="details"
                            value={formData.details}
                            onChange={handleInputChange}
                            rows={4}
                            className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-2 text-white focus:border-primary/50 outline-none"
                        />
                    </div>
                    
                    <div className="flex justify-end gap-4">
                        {isEditing && (
                            <button type="button" onClick={resetForm} className="px-6 py-2 bg-white/10 hover:bg-white/20 transition-all text-white rounded-sm text-sm uppercase tracking-widest font-bold">
                                Cancel
                            </button>
                        )}
                        <button type="submit" className="px-6 py-2 bg-primary hover:bg-primary-hover transition-all text-white rounded-sm text-sm uppercase tracking-widest font-bold flex items-center gap-2">
                            {isEditing ? <FaEdit /> : <FaPlus />} {isEditing ? 'Update' : 'Add'} Experience
                        </button>
                    </div>
                </form>
            </div>

            <div className="bg-[#0E0F12] border border-white/5 p-6 rounded-sm shadow-xl space-y-4">
                <h2 className="text-xl font-bold text-white mb-4">Experience List</h2>
                {experiences.length === 0 ? (
                    <p className="text-secondary opacity-60">No experiences listed yet.</p>
                ) : (
                    <div className="grid gap-4">
                        {experiences.map((exp) => (
                            <div key={exp._id} className="border border-white/10 p-4 rounded-sm bg-black/20 flex flex-col md:flex-row justify-between gap-4 transition-all hover:bg-white/5">
                                <div className="space-y-2 flex-1">
                                    <h3 className="text-lg font-bold text-white">{exp.position} <span className="text-primary">@ {exp.company}</span></h3>
                                    <p className="text-xs font-medium text-secondary uppercase tracking-wider">
                                        {exp.joinDate} - {exp.workingNow ? "Present" : exp.endDate}
                                    </p>
                                    <p className="text-sm text-white/80 whitespace-pre-wrap">{exp.details}</p>
                                </div>
                                <div className="flex items-start gap-2">
                                    <button onClick={() => handleEdit(exp)} className="p-2 bg-blue-500/20 text-blue-500 rounded-sm hover:bg-blue-500 hover:text-white transition-colors">
                                        <FaEdit />
                                    </button>
                                    <button onClick={() => handleDelete(exp._id)} className="p-2 bg-red-500/20 text-red-500 rounded-sm hover:bg-red-500 hover:text-white transition-colors">
                                        <FaTrash />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
