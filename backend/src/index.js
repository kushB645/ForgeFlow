import "dotenv/config";

import app from "./app.js";
import dbConnection from "./db/index.js";

dbConnection()
  .then(async () => {
    // Start Worker after DB connection
    await import("./queue/post.worker.js");

    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });

    app.on("error", (error) => {
      console.error("Error occurred in the server:", error);
      throw error;
    });
  })
  .catch((err) => {
    console.log("Error in DB connection:", err);
  });