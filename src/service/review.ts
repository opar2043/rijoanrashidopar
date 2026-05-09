import api from "./api";

const createReview = async (data: any) => {
  try {
    const result = await api.post("/reviews", data);
    return result;
  } catch (error) {
    return error;
  }
};

const getReview = async () => {
  try {
    const result = await api.get("/reviews");
    return result;
  } catch (error) {
    return error;
  }
};

const deleteReview = async (id: string) => {
  try {
    const result = await api.delete(`/reviews/${id}`);
    return result;
  } catch (error) {
    return error;
  }
};

export const reviewApi = {
  createReview,
  getReview,
  deleteReview,
};
