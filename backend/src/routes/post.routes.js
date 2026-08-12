import {
  createPost,
  deletePost,
  getAllPost,
  updatePost,
  getPostById,
  publishPost,
  duplicatePost
} from "../controllers/post.controller.js";
import {
  schedulePost,
  cancelScheduledPost,
  reschedulePost,
} from "../controllers/schedule.controller.js";
import { upload } from "../middleware/multer.middleware.js";
import { verifyJWT } from "../middleware/auth.middleware.js";
import { Router } from "express";

const router = Router();

router
  .route("/")
  .post(verifyJWT, upload.array("media"), createPost)
  .get(verifyJWT, getAllPost);

  router
  .route("/duplicate/:postId")
  .post(verifyJWT, duplicatePost);

router
  .route("/:postId")
  .get(verifyJWT, getPostById)
  .patch(verifyJWT, upload.array("media"), updatePost)
  .delete(verifyJWT, deletePost);

  router.route("/publish/:postId").post(verifyJWT, publishPost);

router.route("/schedule-post/:postId").post(verifyJWT, schedulePost);

router
  .route("/cancel-schedule-post/:postId")
  .post(verifyJWT, cancelScheduledPost);

router.route("/reschedule-post/:postId").post(verifyJWT, reschedulePost);

export default router;