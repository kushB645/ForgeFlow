import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/apiError.js";
import ApiResponse from "../utils/apiResponse.js";
import { Post } from "../models/post.model.js";
import {
  uploadOnCloudinary,
  deleteFromCloudinary,
} from "../utils/cloudinary.js";

//creating Post

const createPost = asyncHandler(async (req, res) => {
  //data from req.body

  const { content } = req.body;

  const hashtags = Array.isArray(req.body.hashtags)
    ? req.body.hashtags
        .flatMap((tag) => tag.split(","))
        .map((tag) => tag.trim().replace(/^#/, ""))
        .filter(Boolean)
    : req.body.hashtags
      ? req.body.hashtags
          .split(",")
          .map((tag) => tag.trim().replace(/^#/, ""))
          .filter(Boolean)
      : [];

  // verifying the data
  if (!content?.trim()) {
    throw new ApiError(400, "Content is required");
  }

  //getting loggin user

  const user = req.user._id;

  //checking for image

  const mediaLocalPath = req.files?.[0]?.path;

  //posting it on cloudinary

  const uploadedMedia = await uploadOnCloudinary(mediaLocalPath);

  //create post

  const post = await Post.create({
    content,
    hashtags,
    media: uploadedMedia
      ? [
          {
            type: uploadedMedia.resource_type,
            url: uploadedMedia.url,
            publicId: uploadedMedia.public_id,
          },
        ]
      : [],
    user,
  });

  //is post created

  if (!post) {
    throw new ApiError(500, "Something went wrong...");
  }

  //   sending response

  return res
    .status(201)
    .json(new ApiResponse(201, post, "Post created successfully"));
});

//get all post

const getAllPost = asyncHandler(async (req, res) => {
  const { page = 1, limit = 10, status, search = "" } = req.query;

  const query = {
    user: req.user._id,
  };

  // Filter by status
  if (status && status !== "all") {
    query.status = status;
  }

  // Search by content
  if (search.trim()) {
    query.content = {
      $regex: search,
      $options: "i",
    };
  }

  const totalPosts = await Post.countDocuments(query);

  const posts = await Post.find(query)
    .sort({ createdAt: -1 })
    .skip((Number(page) - 1) * Number(limit))
    .limit(Number(limit));

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        posts,
        pagination: {
          totalPosts,
          currentPage: Number(page),
          totalPages: Math.ceil(totalPosts / Number(limit)),
          limit: Number(limit),
        },
      },
      "Posts fetched successfully"
    )
  );
});

//editing post

const updatePost = asyncHandler(async (req, res) => {
  //getting the post which need to be updated
  const { postId } = req.params;

  const post = await Post.findById(postId);

  if (!post) {
    throw new ApiError(404, "Post not found");
  }

  // now checking the ownership

  if (!post.user.equals(req.user._id)) {
    throw new ApiError(403, "Unauthorized");
  }

  //now getting the data that can be updated

  const { content, hashtags } = req.body;

  const mediaLocalPath = req.files?.[0]?.path;

  const uploadedMedia = await uploadOnCloudinary(mediaLocalPath);

  if (content) {
    if (!content?.trim()) {
      throw new ApiError(400, "Content is required");
    }
    post.content = content.trim();
  }

  if (hashtags) {
    post.hashtags = Array.isArray(hashtags)
      ? hashtags
          .flatMap((tag) => tag.split(","))
          .map((tag) => tag.trim().replace(/^#/, ""))
          .filter(Boolean)
      : hashtags
          .split(",")
          .map((tag) => tag.trim().replace(/^#/, ""))
          .filter(Boolean);
  }

  if (uploadedMedia) {
    for (const media of post.media) {
      await deleteFromCloudinary(media.publicId, media.type);
    }
    post.media = [
      {
        type: uploadedMedia.resource_type,
        url: uploadedMedia.url,
        publicId: uploadedMedia.public_id,
      },
    ];
  }

  await post.save();

  if (!content && !hashtags && !uploadedMedia) {
    throw new ApiError(400, "Nothing to update");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, post, "Updated successfully"));
});

//delete Post

const deletePost = asyncHandler(async (req, res) => {
  //getting the post which need to be deleted

  const { postId } = req.params;

  const post = await Post.findById(postId);

  //verifying

  if (!post) {
    throw new ApiError(404, "Post not found");
  }

  //ownership

  if (!post.user.equals(req.user._id)) {
    throw new ApiError(403, "Unauthorized");
  }

  //removing data from cloudinary

  for (const media of post.media) {
    await deleteFromCloudinary(media.publicId, media.type);
  }

  //deeleting from database

  await Post.findByIdAndDelete(postId);

  //respons

  return res.status(200).json(new ApiResponse(200, {}, "Post is deleted"));
});

const getPostById = asyncHandler(async (req, res) => {
  const { postId } = req.params;

  const post = await Post.findById(postId);

  if (!post) {
    throw new ApiError(404, "Post not found");
  }

  if (!post.user.equals(req.user._id)) {
    throw new ApiError(403, "Unauthorized");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, post, "Post fetched successfully"));
});

export { createPost, getAllPost, updatePost, deletePost, getPostById };
