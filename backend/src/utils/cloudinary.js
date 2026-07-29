import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import path from "path";

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    // Configure Cloudinary
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });

    // Convert relative path to absolute path
    const absolutePath = path.resolve(localFilePath);

    // Upload file
    const response = await cloudinary.uploader.upload(absolutePath, {
      resource_type: "auto",
    });

    //console.log("File uploaded successfully:", response.secure_url);

    // Remove file from local storage after successful upload
    if (fs.existsSync(absolutePath)) {
      fs.unlinkSync(absolutePath);
    }

    return response;
  } catch (error) {
    console.error("Cloudinary Error:", error);

    // Remove local file even if upload fails
    if (localFilePath) {
      const absolutePath = path.resolve(localFilePath);

      if (fs.existsSync(absolutePath)) {
        fs.unlinkSync(absolutePath);
      }
    }

    return null;
  }
};

export default uploadOnCloudinary;