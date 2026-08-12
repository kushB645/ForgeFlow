import api from "./api";

export const getLinkedInAccount = async () => {
  const response = await api.get("/linkedin/status");

  return response.data.data;
};


export const disconnectLinkedIn = async () => {
  const response = await api.post("/linkedin/disconnect");

  return response.data.data;
};