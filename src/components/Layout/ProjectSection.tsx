import { projectApi } from '@/service/projects'
import { PROJECT } from '@/service/type'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import ProjectCard from '../Public/ProjectCard'
import ProjectSectionHeader from './ProjectSectionHeader'

const ProjectSection = async () => {
    const projects = await projectApi.getAllProjects()
    const homeProjects = projects.slice(0, 4)

    return (
        <section id="projects" className="py-16 space-y-16 w-full md:w-11/12 mx-auto">
            <ProjectSectionHeader />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {homeProjects && homeProjects.map((project: PROJECT, i: number) => (
                    <ProjectCard key={project.id || (project as any)._id} project={project} index={i} />
                ))}
            </div>

            {projects.length === 0 && (
                <div className="py-24 text-center border border-white/5 bg-white/[0.02] rounded-sm">
                    <p className="text-secondary text-xs font-black uppercase tracking-[0.5em] opacity-30">
                        No projects found at the moment.
                    </p>
                </div>
            )}
        </section>
    )
}

export default ProjectSection
