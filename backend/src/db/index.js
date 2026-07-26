import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const dbConnection = async () => {
    try {
        const connectionReq = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`database is connected successfully !! DB host: ${connectionReq.connection.host}`);
    } catch (error) {
        console.log("Error in connecting database !!", error);
        process.exit(1);
    }
};

export default dbConnection;