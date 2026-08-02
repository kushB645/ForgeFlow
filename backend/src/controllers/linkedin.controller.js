import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/apiError.js";
import ApiResponse from "../utils/apiResponse.js";
import crypto from "crypto";
import { LinkedInAccount } from "../models/linkedinAccount.model.js";
import {
  generateAuthUrl,
  exchangeCodeForToken,
  getLinkedInProfile,
  publishToLinkedIn,
} from "../services/linkedin.service.js";
import { time } from "console";
import { Post } from "../models/post.model.js";

const connectLinkedIn = asyncHandler(async (req, res) => {
  // 1. Generate random state

  const state = crypto.randomBytes(16).toString("hex");

  // storing it in cookies

  const option = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  };

  res.cookie("linkedin_state", state, option);
  res.cookie("oauth_user", "6a6a9af88dbf739bb3ec9c66", option);

  console.log("Generated State:", state);

  const authUrl = generateAuthUrl(state);

  if (!authUrl) {
    throw new ApiError(500, "Failed to generate LinkedIn authorization URL");
  }

  return res.redirect(authUrl);
});

const linkedinCallback = asyncHandler(async (req, res) => {
  //Read the query parameters
  console.log("Cookies:", req.cookies);

  const { code, state } = req.query;

  //verify

  if (!code || !state) {
    throw new ApiError(400, "Code and state are required");
  }

  //Compare state

  const savedState = req.cookies.linkedin_state;

  if (!savedState) {
    throw new ApiError(400, "OAuth state not found");
  }

  if (savedState !== state) {
    throw new ApiError(403, "Invalid OAuth state");
  }

  const tokenData = await exchangeCodeForToken(code);

  const profile = await getLinkedInProfile(tokenData.access_token);

  const userId = req.cookies.oauth_user;

  const linkedinAccount = await LinkedInAccount.findOneAndUpdate(
    {
      owner: userId,
    },
    {
      linkedinId: profile.sub,
      accessToken: tokenData.access_token,
      expiresAt: new Date(Date.now() + tokenData.expires_in * 1000),
      profilePicture: profile.picture,
      isConnected: true,
    },
    {
      new: true,
      upsert: true,
      runValidators: true,
    }
  );

  if (!linkedinAccount) {
    throw new ApiError(500, "Failed to connect LinkedIn account");
  }

  res.clearCookie("linkedin_state");
  res.clearCookie("oauth_user");

  return res
    .status(200)
    .json(
      new ApiResponse(200, linkedinAccount, "LinkedIn connected successfully")
    );
});

const publishPost = asyncHandler(async (req, res) => {
  // Step 1: Get the post ID from the URL
  const { postId } = req.params;

  // Step 2: Check if postId exists
  if (!postId) {
    throw new ApiError(400, "Post ID is required");
  }

  // Step 3: Find the post in MongoDB
  const post = await Post.findById(postId);

  // Step 4: Check whether the post exists
  if (!post) {
    throw new ApiError(404, "Post not found");
  }

  //authorization

  if (!post.user.equals(req.user._id)) {
    throw new ApiError(403, "Unauthorized");
  }

  //is connected to linkedin

  const linkedinAccount = await LinkedInAccount.findOne({
    owner: req.user._id,
  });

  if (!linkedinAccount) {
    throw new ApiError(404, "Please connect your LinkedIn account first");
  }

  if (!linkedinAccount.isConnected) {
    throw new ApiError(400, "LinkedIn account is disconnected");
  }

  //verifying the expired or not

  const timestamp = new Date(Date.now());

  if (timestamp > linkedinAccount.expiresAt) {
    throw new ApiError(
      401,
      "LinkedIn access token has expired. Please reconnect your account."
    );
  }

  const response = await publishToLinkedIn(
    linkedinAccount.accessToken,
    linkedinAccount.linkedinId,
    post
  );

  // Update your post
  post.status = "published";

  // Save LinkedIn post ID if LinkedIn returns one
  post.linkedinPostId = response.id || null;
  console.log(response);

  // Save changes
  await post.save();

  return res.status(200).json(
  new ApiResponse(
    200,
    post,
    "Post published successfully"
  )
);
});

export { connectLinkedIn, linkedinCallback, publishPost };
