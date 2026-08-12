import { Router } from "express";

import {
  connectLinkedIn,
  linkedinCallback,
  publishPost,
  getLinkedInAccount,
  disconnectLinkedIn,
} from "../controllers/linkedin.controller.js";

import { verifyJWT } from "../middleware/auth.middleware.js";

const router = Router();

// Connect LinkedIn
router.get("/connect", verifyJWT, connectLinkedIn);

// OAuth callback
router.get("/callback", linkedinCallback);

// Get connected LinkedIn account
router.get("/status", verifyJWT, getLinkedInAccount);

// Disconnect LinkedIn
router.post("/disconnect", verifyJWT, disconnectLinkedIn);

// Publish post
router.post("/publish/:postId", verifyJWT, publishPost);

export default router;
