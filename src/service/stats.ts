import api from "./api";

const getStats = async () => {
    try {
        const response = await api.get("/dashboard-stats");
        return response.data;
    } catch (error) {
        console.error("Error fetching stats:", error);
        throw error;
    }
}

export const statsApi = {
    getStats
};
