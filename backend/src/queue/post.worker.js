import { Worker } from "bullmq";
import connection from "./connection.js";

import { Post } from "../models/post.model.js";
import { LinkedInAccount } from "../models/linkedinAccount.model.js";

import { publishToLinkedIn } from "../services/linkedin.service.js";

const postWorker = new Worker(
  "postQueue",
  async (job) => {
    const { postId, userId } = job.data;

    const post = await Post.findById(postId);

    if (!post) {
      throw new Error("Post not found");
    }

    const linkedinAccount = await LinkedInAccount.findOne({
      owner: userId,
    });

    if (!linkedinAccount) {
      throw new Error("LinkedIn account not found");
    }

    if (!linkedinAccount.isConnected) {
      throw new Error("LinkedIn account is disconnected");
    }

    if (new Date() > linkedinAccount.expiresAt) {
      throw new Error("LinkedIn access token expired");
    }

    // Publishing started
    post.status = "publishing";
    post.errorMessage = null;

    await post.save();

    try {
      const response = await publishToLinkedIn(
        linkedinAccount.accessToken,
        linkedinAccount.linkedinId,
        post
      );

      post.status = "published";
      post.linkedinPostId = response.id || null;
      post.publishedAt = new Date();
      post.errorMessage = null;

      await post.save();

      console.log("Post published successfully:", postId);

      return response;
    } catch (error) {
      post.status = "failed";
      post.errorMessage =
        error.message || "Failed to publish post";

      await post.save();

      throw error;
    }
  },
  {
    connection,
  }
);

// BullMQ Events

postWorker.on("completed", (job) => {
  console.log(`Job ${job.id} completed successfully.`);
});

postWorker.on("failed", (job, err) => {
  console.error(`Job ${job?.id} failed.`);
  console.error(err.message);
});

export default postWorker;
