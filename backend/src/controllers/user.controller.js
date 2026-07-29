import asyncHandler from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import ApiError from "../utils/apiError.js";
import validator from "validator";
import uploadOnCloudinary from "../utils/cloudinary.js";
import ApiResponse from "../utils/apiResponse.js"

const registerUser = asyncHandler(async (req, res) => {
  //get user details form frontend

  const { fullName, email, password, username } = req.body;

  console.log("email: ", email);

  //validation

  if (
    [fullName, email, password, username].some((field) => field?.trim() === "") //.some even if one is true
  ) {
    throw new ApiError(400, "All field require");
  }

  if (!validator.isEmail(email)) {
    throw new ApiError(400, "Invalid email address");
  }

  //check if user already exist

  const normalizedUsername = username.toLowerCase();

  const userExist = await User.findOne({
    $or: [{ username: normalizedUsername }, { email }],
  });

  if (userExist) {
    throw new ApiError(409, "Username or email already exists");
  }

  //check for image

  const avatarLocalPath = req.files?.avatar?.[0]?.path;

  //upload it on cloudinary

  const avatar = await uploadOnCloudinary(avatarLocalPath);

  //create user object -in db and remove password and refersh token field from response and check for user creation

  const user = await User.create({
    fullName,
    avatar: avatar?.url || "",
    email,
    password,
    username: normalizedUsername,
  });

  const isUserCreated = await User.findById(user._id).select(
    " -password -refreshToken "
  );

  if(!isUserCreated){
    throw new ApiError(500 , "Something went wrong while creating a user")
  }


  //return response

  return res.status(201).json(
    new AopiResponse(200, isUserCreated, "User created sccessfully")
  )
});

export default registerUser;
