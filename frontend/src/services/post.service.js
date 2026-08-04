import api from "./api";

export const getPosts = async (params) => {
  const response = await api.get("/posts", {
    params,
  });

  return response.data.data;
};

export const createPost = async (formData) => {
  const response = await api.post("/posts", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data.data;
};

export const updatePost = async (postId, formData) => {
  const response = await api.patch(
    `/posts/${postId}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data.data;
};

export const deletePost = async (postId) => {
  const response = await api.delete(`/posts/delete-post/${postId}`);

  return response.data;
};

export const schedulePost = async (postId, data) => {
  const response = await api.post(
    `/posts/${postId}/schedule`,
    data
  );

  return response.data;
};

export const getPostById = async (postId) => {
  const response = await api.get(`/posts/${postId}`);
  return response.data.data;
};