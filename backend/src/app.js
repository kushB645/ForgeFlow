import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.get("/", (req, res) => {
  res.send("ForgeFlow API is running...");
});

app.use(cors({
    origin: process.env.CROS_ORIGIN,
    credentials: true
}))

// for json data

app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(express.static("public"))
app.use(cookieParser())


//routes import 

import userRouter from "./routes/user.routes.js"
import linkedinRouter from "./routes/linkedin.routes.js";
import postRouter from "./routes/post.routes.js";
import dashboardRouter from "./routes/dashboard.routes.js"

//routes declartion 

app.use("/api/v1/users", userRouter)
app.use("/api/v1/linkedin", linkedinRouter);
app.use("/api/v1/posts", postRouter);
app.use("/api/v1/dashboard", dashboardRouter);

//this will create url like http://localhost:8000/api/v1/users/register or what ever 
//this will give control to the user.routes

export default app;