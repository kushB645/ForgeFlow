import { Router } from "express";
import registerUser from "../controllers/user.controller.js";
import { upload } from "../middleware/multer.middleware.js";

const router = Router();

router.route("/register").post(
    upload.single("avatar"), //<-middleware
    registerUser
)


export default router