import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import app from "./app.js";
import dbConnection from "./db/index.js";

dbConnection()
.then( () => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`server is running on this port ${process.env.PORT}`);

        app.on("error", (error) => {
            console.error("Error occurred in the server:", error);
            throw error
        })
        
    })
})
.catch((err)=>{
    console.log("error in db connection ",err)
})
