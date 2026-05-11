import { projectApi } from '@/service/projects'
import { PROJECT } from '@/service/type'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import ProjectCard from '../Public/ProjectCard'

const ProjectSection = async () => {
    const projects = await projectApi.getAllProjects()
    const homeProjects = projects.slice(0, 4)

    return (
        <section id="projects" className="py-16 space-y-16 w-full md:w-11/12 mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-l-4 border-primary pl-8">
                <div className="space-y-4 max-w-2xl">
                    <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
                        My <span className="text-primary">Projects</span>
                    </h2>
                    <p className="text-secondary text-sm font-medium opacity-80 leading-relaxed uppercase tracking-widest">
                        Explore some of my latest work and technical solutions developed recently.
                    </p>
                </div>
                <Link 
                    href="/projects" 
                    className="flex items-center gap-4 bg-white/5 hover:bg-primary px-8 py-4 rounded-sm text-sm font-black uppercase tracking-[0.3em] text-white transition-all duration-300 border border-white/10 hover:border-primary shadow-xl shadow-black/20 group"
                >
                    View All Projects <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {homeProjects && homeProjects.map((project: PROJECT) => (
                    <ProjectCard key={project.id || (project as any)._id} project={project} />
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
