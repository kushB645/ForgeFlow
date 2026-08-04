import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/apiResponse.js";
import { Post } from "../models/post.model.js";

const getDashboardStats = asyncHandler(async (req, res) => {
  // Aggregate posts for current user
  const stats = await Post.aggregate([
    {
      $match: {
        user: req.user._id,
      },
    },
    {
      $group: {
        _id: "$status",
        count: {
          $sum: 1,
        },
      },
    },
  ]);

  // Dashboard object
  const dashboard = {
    totalPosts: 0,
    draft: 0,
    scheduled: 0,
    published: 0,
    failed: 0,
  };

  // Convert aggregation result into dashboard object
  stats.forEach((item) => {
    dashboard[item._id] = item.count;
    dashboard.totalPosts += item.count;
  });

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        dashboard,
        "Dashboard statistics fetched successfully"
      )
    );
});

const getUpcomingPosts = asyncHandler(async (req, res) => {
  // Find upcoming scheduled posts of current user
  const upcomingPosts = await Post.find({
    user: req.user._id,
    status: "scheduled",
    scheduledAt: {
      $gte: new Date(),
    },
  })
    .sort({ scheduledAt: 1 }) // nearest post first
    .limit(5) // only next 5 posts
    .select("content scheduledAt status media");

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        upcomingPosts,
        "Upcoming scheduled posts fetched successfully"
      )
    );
});

const getRecentPosts = asyncHandler(async (req, res) => {
  //  Find upcoming scheduled posts of current user

  const recentPosts = await Post.find({
    user: req.user._id,
    status: "published",
  })
    .sort({ createdAt: -1 }) // nearest post first
    .limit(5) // only next 5 posts
    .select("content status publishedAt media")

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        recentPosts,
        "Recent posts fetched successfully"
      )
    );
});

export { getDashboardStats, getUpcomingPosts, getRecentPosts };
