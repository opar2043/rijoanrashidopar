
import ProjectTable from "@/components/Dashboard/ProjectTable";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import { projectApi } from "@/service/projects";

const ProjectsPage = async () => {
  const projects = await projectApi.getAllProjects();
  
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div className="border-l-4 border-blue-600 pl-6">
          <h1 className="text-3xl font-bold text-white uppercase tracking-tight">Active <span className="text-blue-500">Projects</span></h1>
          <p className="text-secondary text-[10.5px] font-black uppercase tracking-[0.2em] mt-1 opacity-70">Project Repository Overview</p>
        </div>
        <Link 
          href="/dashboard/projects/add"
          className="flex items-center gap-3 bg-blue-700 hover:bg-blue-600 text-white px-6 py-3 rounded-sm font-black uppercase tracking-widest text-[10.5px] transition-all border border-blue-500/50"
        >
          <FaPlus /> Register Project
        </Link>
      </div>

      <ProjectTable projects={projects} />
    </div>
  );
};

export default ProjectsPage;
