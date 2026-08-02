import { upload } from "../middleware/multer.middleware.js";
import { verifyJWT } from "../middleware/auth.middleware.js";
import { Router } from "express";
import { getDashboardStats } from "../controllers/dashboard.controller.js";

const router = Router();

router.route("/dashboard-stats").post(verifyJWT, getDashboardStats);

export default router