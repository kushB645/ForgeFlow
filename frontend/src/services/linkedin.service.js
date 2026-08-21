import api from "./api";

export const connectLinkedIn = async () => {
  const response = await api.get("/linkedin/connect");

  return response.data.data.authUrl;
};

export const getLinkedInAccount = async () => {
  const response = await api.get("/linkedin/status");

  return response.data.data;
};


export const disconnectLinkedIn = async () => {
  const response = await api.post("/linkedin/disconnect");

  return response.data.data;
};