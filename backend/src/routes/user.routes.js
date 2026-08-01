import { Router } from "express";
import {loginUser, logoutUser, registerUser, refreshAccessToken} from "../controllers/user.controller.js";
import { upload } from "../middleware/multer.middleware.js";
import { verifyJWT } from "../middleware/auth.middleware.js";
import { createPost, deletePost, getAllPost, updatePost } from "../controllers/post.controller.js";

const router = Router();

router.route("/register").post(
    upload.single("avatar"), //<-middleware
    registerUser
)

router.route("/login").post(loginUser)

router.route("/logout").post(verifyJWT,logoutUser)

router.route("/refresh-token").post(refreshAccessToken)

router.route("/create-post").post(verifyJWT, upload.array("media") ,createPost)

router.route("/get-all-post").get(verifyJWT, getAllPost)

router.route("/update-post/:postId").patch(verifyJWT,upload.array("media"), updatePost )

router.route("/delete-post/:postId").delete(verifyJWT, deletePost)


export default router