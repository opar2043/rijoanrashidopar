import React from 'react';
import api from "@/service/api";

async function getExperiences() {
  try {
    const res = await api.get("/experience");
    return res.data || [];
  } catch (error) {
    console.error("Failed to fetch experiences", error);
    return [];
  }
}

export default async function PublicExperience() {
  const experiences = await getExperiences();

  if (!experiences || experiences.length === 0) {
    return null;
  }

  return (
    <section id="experience" className="py-12 space-y-16 w-full max-w-7xl md:w-11/12 mx-auto relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="space-y-4 shadow-sm mb-12">
        <p className="text-primary text-xs uppercase tracking-[0.3em] font-black">My Career Journey</p>
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
          Work Experience
        </h2>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-10">
        {experiences.map((exp: any, index: number) => (
          <div key={exp._id || index} className="relative pl-6 md:pl-12 group">
            {/* Timeline Dot */}
            <div className="absolute -left-[5px] top-4 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-black/50 group-hover:scale-150 transition-transform duration-500 shadow-[0_0_10px_rgba(253,49,107,0.5)]" />
            
            <div className="bg-white/[0.01] border border-white/5 rounded-2xl p-6 md:p-8 space-y-6 hover:bg-white/[0.03] hover:border-white/10 transition-all duration-300 shadow-xl group-hover:shadow-primary/5">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">
                    {exp.position}
                  </h3>
                  <h4 className="text-primary font-bold tracking-widest text-sm uppercase">
                    @ {exp.company}
                  </h4>
                </div>
                <span className="inline-flex items-center px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black text-secondary uppercase tracking-[0.2em] whitespace-nowrap">
                  {exp.joinDate} - {exp.workingNow ? "Present" : exp.endDate}
                </span>
              </div>
              <p className=" text-secondary leading-relaxed whitespace-pre-wrap group-hover:text-white/70 transition-colors">
                {exp.details}
              </p>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}
