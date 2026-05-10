
import EditProjects from '@/components/Dashboard/EditProjects'
import { projectApi } from '@/service/projects'
import React from 'react'

export default async function EditProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = await projectApi.getProjectById(id)
  
  return (
    <div className="py-10">
        <EditProjects initialData={project} />
    </div>
  )
}
