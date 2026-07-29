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

//routes declartion 

app.use("/api/v1/users", userRouter)

//this will create url like http://localhost:8000/api/v1/users/register or what ever 
//this will give control to the user.routes

export default app;