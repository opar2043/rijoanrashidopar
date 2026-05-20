export const dynamic = "force-dynamic";
import ProjectCard from "@/components/Public/ProjectCard"
import ProjectGallery from "@/components/Public/ProjectGallery"
import { projectApi } from "@/service/projects"
import { PROJECT } from "@/service/type"
import Link from "next/link"
import { FaChevronLeft } from "react-icons/fa"

export default async function ProjectPage() {
    const projects = await projectApi.getAllProjects()

    return (
        <div className="min-h-screen w-full md:w-11/12 mx-auto pt-16 pb-12 px-6 md:px-12">
            <div className="max-w-7xl mx-auto space-y-16">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-l-4 border-primary pl-8">
                    <div className="space-y-4">
                        <Link href="/" className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.3em] text-primary mb-4 hover:translate-x-[-4px] transition-transform">
                            <FaChevronLeft size={8} /> Return to Home
                        </Link>
                        <h1 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tight leading-none">
                            My <span className="text-primary">Projects</span>
                        </h1>
                        <p className="text-secondary text-sm md:text-base font-medium mt-6 opacity-60 leading-relaxed uppercase tracking-widest max-w-2xl">
                            A showcase of my technical work and software development journey.
                        </p>
                    </div>
                </div>

                {/* Grid */}
                <ProjectGallery projects={projects} />
            </div>
        </div>
    )
}
