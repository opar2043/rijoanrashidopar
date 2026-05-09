import api from "./api"
import type { PROJECT } from "./type"


const getAllProjects = async () => {
    const response = await api.get(`/projects`)
    return response.data
}
const getProjectById = async (id: string) => {
    const response = await api.get(`/projects/${id}`)
    return response.data
}
const updateProject = async (id: string, data: PROJECT) => {
    const response = await api.patch(`/projects/${id}`, data)
    return response.data
}
const deleteProject = async (id: string) => {
    const response = await api.delete(`/projects/${id}`)
    return response.data
}
const createProject =async(data : PROJECT)=>{
    const response =await api.post(`/projects`,data)
    return response.data
}
export const projectApi ={
    getAllProjects,
    getProjectById,
    updateProject,
    deleteProject,
    createProject
}