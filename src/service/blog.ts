import api from "./api";
import { BLOGS } from "./type";

const createBlogs = async (data: any) => {
  try {
    const result = await api.post("/blogs", data);
    return result;
  } catch (error) {
    return error;
  }
};

const getBlogs = async () => {
  try {
    const result = await api.get("/blogs");
    return result;
  } catch (error) {
    return error;
  }
};

const getsingleBlogs = async (id: string) => {
  try {
    const result = await api.get(`/blogs/${id}`);
    return result;
  } catch (error) {
    return error;
  }
};

const updateBlogs = async (id: string, data: BLOGS) => {
  try {
    const result = await api.patch(`/blogs/${id}`, data);
    return result;
  } catch (error) {
    return error;
  }
};

const deleteBlogs = async (id: string) => {
  try {
    const result = await api.delete(`/blogs/${id}`);
    return result;
  } catch (error) {
    return error;
  }
};

export const blogApi = {
  createBlogs,
  getBlogs,
  getsingleBlogs,
  updateBlogs,
  deleteBlogs,
};
