import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/apiError.js";
import ApiResponse from "../utils/apiResponse.js";
import LinkedInAccount from "../models/linkedinAccount.model.js";
import Post from "../models/post.model.js";
import postQueue from "../queue/post.queue.js";

const schedulePost = asyncHandler(async (req, res) => {
  // Get post id
  const { postId } = req.params;

  if (!postId) {
    throw new ApiError(400, "Post ID is required");
  }

  // Find post
  const post = await Post.findById(postId);

  if (!post) {
    throw new ApiError(404, "Post not found");
  }

  // Authorization
  if (!post.user.equals(req.user._id)) {
    throw new ApiError(403, "Unauthorized");
  }

  // Already published
  if (post.status === "published") {
    throw new ApiError(400, "Post is already published");
  }

  // Already scheduled
  if (post.status === "scheduled") {
    throw new ApiError(400, "Post is already scheduled");
  }

  // LinkedIn Account
  const linkedinAccount = await LinkedInAccount.findOne({
    owner: req.user._id,
  });

  if (!linkedinAccount) {
    throw new ApiError(
      404,
      "Please connect your LinkedIn account first"
    );
  }

  if (!linkedinAccount.isConnected) {
    throw new ApiError(400, "LinkedIn account is disconnected");
  }

  // Check token expiry
  if (new Date() > linkedinAccount.expiresAt) {
    throw new ApiError(
      401,
      "LinkedIn access token has expired. Please reconnect your account."
    );
  }

  // Get scheduled time
  const { scheduledAt } = req.body;

  if (!scheduledAt) {
    throw new ApiError(400, "Scheduled time is required");
  }

  // Convert to Date
  const scheduleDate = new Date(scheduledAt);

  // Validate date
  if (isNaN(scheduleDate.getTime())) {
    throw new ApiError(400, "Invalid scheduled date");
  }

  // Must be future
  if (scheduleDate <= new Date()) {
    throw new ApiError(
      400,
      "Scheduled time must be in the future"
    );
  }

  // Calculate delay
  const delay = scheduleDate.getTime() - Date.now();

  try {
    // Add BullMQ Job
    await postQueue.add(
      "publish-post",
      {
        postId: post._id.toString(),
        userId: req.user._id.toString(),
      },
      {
        delay,
        jobId: post._id.toString(),
        removeOnComplete: true,
        removeOnFail: false,
      }
    );

    // Update Post
    post.status = "scheduled";
    post.scheduledAt = scheduleDate;

    await post.save();

    return res.status(200).json(
      new ApiResponse(
        200,
        post,
        "Post scheduled successfully"
      )
    );
  } catch (error) {
    console.error("BullMQ Error:", error);

    throw new ApiError(500, "Failed to schedule post");
  }
});

export { schedulePost };