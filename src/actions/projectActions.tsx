'use server'

import { projectApi } from "@/service/projects";
import { PROJECT } from "@/service/type";
import { revalidatePath } from "next/cache";

export const deleteProjectAction = async (id: string) => {
    try {
        const res = await projectApi.deleteProject(id);
        revalidatePath("/dashboard/projects");
        return { success: true, data: res };
    } catch (error: any) {
        console.error("Delete project action failed:", error);
        return { success: false, error: error.message || "Failed to delete project" };
    }
}

// export const editProjectAction = async (id: string, data: PROJECT) => {
//     try {
//         const res = await projectApi.updateProject(id, data);
//         revalidatePath("/dashboard/projects");
//         return { success: true, data: res };
//     } catch (error: any) {
//         console.error("Edit project action failed:", error);
//         return { success: false, error: error.message || "Failed to update project" };
//     }
// }

export const editProjectAction = async (id: string, data: PROJECT) => {
  try {
    const res = await projectApi.updateProject(id, data);
    revalidatePath("/dashboard/projects");
    return { success: true, data: res }
  } catch (error: any) {
    console.log(error);
    return { success: false, error: error.message || "Failed to edit project" }
  }
}


export const createProjectAction = async (data : Omit<PROJECT , "id">)=> {
  try {
    const res = await projectApi.createProject(data as PROJECT);
    revalidatePath("/dashboard/projects");
    return {success : true , data : res}
  } catch (error : any) {
    console.log(error);
    return {success : false , error : error.message || "Failed to create project"}
  }
}