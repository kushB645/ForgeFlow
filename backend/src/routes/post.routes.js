import {
  createPost,
  deletePost,
  getAllPost,
  updatePost,
} from "../controllers/post.controller.js";
import { schedulePost,cancelScheduledPost,reschedulePost } from "../controllers/schedule.controller.js";
import { upload } from "../middleware/multer.middleware.js";
import { verifyJWT } from "../middleware/auth.middleware.js";
import { Router } from "express";

const router = Router();

router.route("/create-post").post(verifyJWT, upload.array("media"), createPost);

router.route("/get-all-post").get(verifyJWT, getAllPost);

router
  .route("/update-post/:postId")
  .patch(verifyJWT, upload.array("media"), updatePost);

router.route("/delete-post/:postId").delete(verifyJWT, deletePost);

router.route("/schedule-post/:postId").post(verifyJWT, schedulePost);

router.route("/cancel-schedule-post/:postId").post(verifyJWT, cancelScheduledPost);

router.route("/reschedule-post/:postId").post(verifyJWT, reschedulePost);


export default router;
