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

    console.log("Deleting:", absolutePath);
    console.log("Exists Before:", fs.existsSync(absolutePath));

    // Remove file from local storage after successful upload
    if (fs.existsSync(absolutePath)) {
      fs.unlinkSync(absolutePath);
    }

    console.log("Exists After:", fs.existsSync(absolutePath));

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

const deleteFromCloudinary = async (
  publicId,
  resourceType = "image"
) => {
  try {
    if (!publicId) return null;

    return await cloudinary.uploader.destroy(publicId, {
      resource_type: resourceType,
    });
  } catch (error) {
    console.error("Cloudinary Delete Error:", error);
    return null;
  }
};

export { uploadOnCloudinary, deleteFromCloudinary };
