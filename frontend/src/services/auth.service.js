import api from "./api";

export const registerUser = async (formData) => {
  const response = await api.post("/users/register", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

export const loginUser = async (data) => {
  const response = await api.post("/users/login", data);

  return response.data;
};

export const logoutUser = async () => {
  const response = await api.post("/users/logout");

  return response.data;
};

export const refreshAccessToken = async () => {
  const response = await api.post("/users/refresh-token");

  return response.data;
};

export const getCurrentUser = async () => {
  const response = await api.get("/users/current-user");
  
  return response.data.data;
};