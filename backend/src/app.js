import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.get("/", (req, res) => {
  res.send("ForgeFlow API is running...");
});

app.get("/api/v1/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "ForgeFlow API is healthy",
    timestamp: new Date().toISOString(),
  });
});

const corsOptions = {
  origin: process.env.CORS_ORIGIN,
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));


app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.use(express.static("public"));

app.use(cookieParser());

// routes

import userRouter from "./routes/user.routes.js";
import linkedinRouter from "./routes/linkedin.routes.js";
import postRouter from "./routes/post.routes.js";
import dashboardRouter from "./routes/dashboard.routes.js";
import aiRouter from "./routes/ai.routes.js";

app.use("/api/v1/users", userRouter);
app.use("/api/v1/linkedin", linkedinRouter);
app.use("/api/v1/posts", postRouter);
app.use("/api/v1/dashboard", dashboardRouter);
app.use("/api/v1/ai", aiRouter);

export default app;
