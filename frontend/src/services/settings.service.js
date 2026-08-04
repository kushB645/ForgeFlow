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