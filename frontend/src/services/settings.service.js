import api from "./api";

export const updateProfile = async (data) => {
  const response = await api.patch("/users/update-profile", data);
  return response.data.data;
};

export const updateAvatar = async (formData) => {
  const response = await api.patch(
    "/users/update-avatar",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data.data;
};

export const changePassword = async (data) => {
  const response = await api.patch(
    "/users/change-password",
    data
  );

  return response.data;
};

export const deleteAccount = async () => {
  const response = await api.delete("/users/delete-account");

  return response.data.data;
};

export const updateAIPreferences = async (data) => {
  const response = await api.patch(
    "/users/ai-preferences",
    data
  );

  return response.data.data;
};

export const getAIPreferences = async () => {
  const response = await api.get("/users/ai-preferences");
  return response.data.data;
};

export const updateNotificationPreferences = async (data) => {
  const response = await api.patch(
    "/users/notification-preferences",
    data
  );

  return response.data.data;
};

export const getNotificationPreferences = async () => {
  const response = await api.get(
    "/users/notification-preferences"
  );

  return response.data.data;
};