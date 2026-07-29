import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async function (localFilePath) {
  try {
    if (!localFilePath) return null;
    //uploading post on the cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto", // auto will automatically decide it is jpg,mp4,mp3,pdf
    });

    console.log("file is uploaded", response.url);

    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); //it will remove the post from local as it fail
    return null;
  }
};
