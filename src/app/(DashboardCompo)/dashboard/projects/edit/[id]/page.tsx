
import EditProjects from '@/components/Dashboard/EditProjects'
import { projectApi } from '@/service/projects'
import React from 'react'

export default async function EditProjectPage({ params }: { params: { id: string } }) {
  const project = await projectApi.getProjectById(params.id)
  
  return (
    <div className="py-10">
        <EditProjects initialData={project} />
    </div>
  )
}
