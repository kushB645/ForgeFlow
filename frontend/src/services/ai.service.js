import api from "./api";

export const generateLinkedInPost = async (data) => {
  const response = await api.post("/ai/generate-post", data);

  return response.data.data;
};