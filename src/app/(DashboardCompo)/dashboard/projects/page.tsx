
import ProjectTable from "@/components/Dashboard/ProjectTable";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import { projectApi } from "@/service/projects";

const ProjectsPage = async () => {
  const projects = await projectApi.getAllProjects();
  
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div className="border-l-4 border-primary pl-4 md:pl-6">
          <h1 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight">Active <span className="text-primary">Projects</span></h1>
          <p className="text-secondary text-[10px] md:text-sm font-black uppercase tracking-[0.2em] mt-1 opacity-70">Project Repository Overview</p>
        </div>
        <Link 
          href="/dashboard/projects/add"
          className="flex items-center gap-2 md:gap-3 bg-primary hover:bg-primary/80 text-white px-3 py-2 md:px-6 md:py-3 rounded-sm font-black uppercase tracking-widest text-[10px] md:text-sm transition-all border border-primary/50"
        >
          <FaPlus /> <span className="hidden sm:inline">Register Project</span><span className="sm:hidden">Add</span>
        </Link>
      </div>

      <ProjectTable projects={projects} />
    </div>
  );
};

export default ProjectsPage;
