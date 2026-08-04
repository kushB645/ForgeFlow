import { Router } from "express";
import { verifyJWT } from "../middleware/auth.middleware.js";
import { generateLinkedInPost } from "../controllers/ai.controller.js";

const router = Router();

router.post("/generate-post", verifyJWT, generateLinkedInPost);

export default router;