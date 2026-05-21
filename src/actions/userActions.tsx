'use server'

import { userApi } from "@/service/user";
import { revalidatePath } from "next/cache";

export const updateUserRoleAction = async (id: string, role: string) => {
  try {
    const res = await userApi.updateUserRole(id, role);
    revalidatePath("/dashboard/settings");
    return { success: true, data: res };
  } catch (error: any) {
    console.error("Update user role action failed:", error);
    return { success: false, error: error.message || "Failed to update user" };
  }
};

export const deleteUserAction = async (id: string) => {
  try {
    const res = await userApi.deleteUser(id);
    revalidatePath("/dashboard/settings");
    return { success: true, data: res };
  } catch (error: any) {
    console.error("Delete user action failed:", error);
    return { success: false, error: error.message || "Failed to delete user" };
  }
};
