import "dotenv/config";

import app from "./app.js";
import dbConnection from "./db/index.js";

dbConnection()
  .then(async () => {
    // Start Worker after DB connection
    await import("./queue/post.worker.js");

    const PORT = process.env.PORT || 8000;

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server is running on port ${PORT}`);
    });

    app.on("error", (error) => {
      console.error("Error occurred in the server:", error);
      throw error;
    });
  })
  .catch((err) => {
    console.log("Error in DB connection:", err);
  });
     