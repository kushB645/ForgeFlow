import { Router } from "express";
import {
  connectLinkedIn,
  linkedinCallback,
  publishPost,
} from "../controllers/linkedin.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const router = Router();

router.get("/connect", verifyJWT, connectLinkedIn);

router.get("/callback", linkedinCallback);

router.post("/publish/:postId", verifyJWT, publishPost);

export default router;
