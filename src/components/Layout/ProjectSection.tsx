import { projectApi } from '@/service/projects'
import ProjectGallery from '../Public/ProjectGallery'
import ProjectSectionHeader from './ProjectSectionHeader'

const ProjectSection = async () => {
    const projects = await projectApi.getAllProjects()

    return (
        <section id="projects" className="py-16 space-y-16 w-full md:w-11/12 mx-auto">
            <ProjectSectionHeader />

            <ProjectGallery projects={projects} limit={4} />
        </section>
    )
}

export default ProjectSection
