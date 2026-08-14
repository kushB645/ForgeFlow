import { Router } from "express";
import {
  loginUser,
  logoutUser,
  registerUser,
  refreshAccessToken,
  getCurrentUser,
  updateProfile,
  updateAvatar,
  changePassword,
  deleteAccount,
  updateAIPreferences,
  getAIPreferences,
  updateNotificationPreferences,
  getNotificationPreferences,
} from "../controllers/user.controller.js";
import { upload } from "../middleware/multer.middleware.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const router = Router();

router.route("/register").post(
  upload.single("avatar"), //<-middleware
  registerUser
);

router.route("/login").post(loginUser);

router.route("/logout").post(verifyJWT, logoutUser);

router.route("/refresh-token").post(refreshAccessToken);

router.route("/current-user").get(verifyJWT, getCurrentUser);

router.route("/update-profile").patch(verifyJWT, updateProfile);

router
  .route("/update-avatar")
  .patch(verifyJWT, upload.single("avatar"), updateAvatar);

router.route("/change-password").patch(verifyJWT, changePassword);

router.route("/delete-account").delete(verifyJWT, deleteAccount);

router
  .route("/ai-preferences")
  .get(verifyJWT, getAIPreferences)
  .patch(verifyJWT, updateAIPreferences);


router
  .route("/notification-preferences")
  .get(verifyJWT, getNotificationPreferences)
  .patch(verifyJWT, updateNotificationPreferences);



export default router;
