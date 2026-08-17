import express from "express";
import cookieParser from "cookie-parser";

const app = express();

const allowedOrigin = "https://forgeflow01.vercel.app";

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", allowedOrigin);
  res.header("Access-Control-Allow-Credentials", "true");

  res.header(
    "Access-Control-Allow-Methods",
    "GET,POST,PUT,PATCH,DELETE,OPTIONS"
  );

  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  next();
});

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
