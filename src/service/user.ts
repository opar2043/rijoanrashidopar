import api from "./api";

export type USER = {
  _id?: string;
  id?: string;
  name?: string;
  email: string;
  photo?: string;
  role?: string;
};

const getAllUsers = async (): Promise<USER[]> => {
  const response = await api.get(`/users`);
  return response.data;
};

const updateUserRole = async (id: string, role: string) => {
  const response = await api.patch(`/users/${id}`, { role });
  return response.data;
};

const deleteUser = async (id: string) => {
  const response = await api.delete(`/users/${id}`);
  return response.data;
};

export const userApi = {
  getAllUsers,
  updateUserRole,
  deleteUser,
};
