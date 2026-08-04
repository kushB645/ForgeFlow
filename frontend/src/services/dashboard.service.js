import api from "./api";

export const getDashboardStats = async () => {
  const response = await api.get("/dashboard/dashboard-stats");
  return response.data.data;
};

export const getUpcomingPosts = async () => {
  const response = await api.get("/dashboard/upcoming-posts");
  return response.data.data;
};

export const getRecentPosts = async () => {
  const response = await api.get("/dashboard/recent-posts");
  return response.data.data;
};