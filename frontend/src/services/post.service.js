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
  const response = await api.delete(`/posts/${postId}`);

  return response.data;
};

export const schedulePost = async (postId, data) => {
  const response = await api.post(
    `/posts/schedule-post/${postId}`,
    data
  );

  return response.data.data;
};

export const publishPost = async (postId) => {
  const response = await api.post(`/posts/publish/${postId}`);

  return response.data.data;
};

export const duplicatePost = async (postId) => {
  const response = await api.post(
    `/posts/duplicate/${postId}`
  );

  return response.data.data;
};

export const getPostById = async (postId) => {
  const response = await api.get(`/posts/${postId}`);
  return response.data.data;
};

export const cancelScheduledPost = async (postId) => {
  const response = await api.post(
    `/posts/cancel-schedule-post/${postId}`
  );

  return response.data.data;
};

export const reschedulePost = async (postId, data) => {
  const response = await api.post(
    `/posts/reschedule-post/${postId}`,
    data
  );

  return response.data.data;
};

export const getScheduledPosts = async () => {
  const response = await api.get("/posts", {
    params: {
      status: "scheduled",
    },
  });

  return response.data.data;
};

export const deleteAllDrafts = async () => {
  const response = await api.delete("/posts/delete-all-drafts");

  return response.data.data;
};