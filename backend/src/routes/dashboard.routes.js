import { upload } from "../middleware/multer.middleware.js";
import { verifyJWT } from "../middleware/auth.middleware.js";
import { Router } from "express";
import { getDashboardStats, getRecentPosts, getUpcomingPosts } from "../controllers/dashboard.controller.js";

const router = Router();

router.route("/dashboard-stats").get(verifyJWT, getDashboardStats)

router.route("/upcoming-posts").get(verifyJWT, getUpcomingPosts)

router.route("/recent-posts").get(verifyJWT, getRecentPosts)

export default router