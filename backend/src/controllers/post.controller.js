import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/apiError.js";
import ApiResponse from "../utils/apiResponse.js";
import { Post } from "../models/post.model.js";
import uploadOnCloudinary from "../utils/cloudinary.js";

//createPost

const createPost = asyncHandler(async (req, res) => {
  //data from req.body

  const { content, hashtags } = req.body;

  // verifying the data
  if (!content?.trim()) {
    throw new ApiError(400, "Content is required");
  }

  //getting loggin user

  const user = req.user._id;

  //checking for image

  const mediaLocalPath = req.files?.[0]?.path;

  //posting it on cloudinary

    const uploadedMedia = await uploadOnCloudinary(mediaLocalPath);

  //create post

  const post = await Post.create({
    content,
    hashtags,
    media: uploadedMedia
      ? [
          {
            type: uploadedMedia.resource_type,
            url: uploadedMedia.url,
            publicId: uploadedMedia.public_id,
          },
        ]
      : [],
    user,
  });

  //is post created 

  if(!post){
    throw new ApiError(500, "Something went wrong...")
  }

//   sending response

   return res.status(201)
   .json( new ApiResponse (201, post, "Post created sccessfully") )

});


export {createPost};
