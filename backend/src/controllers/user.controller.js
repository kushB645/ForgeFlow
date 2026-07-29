import asyncHandler from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import ApiError from "../utils/apiError.js";
import validator from "validator";
import uploadOnCloudinary from "../utils/cloudinary.js";
import ApiResponse from "../utils/apiResponse.js";

const registerUser = asyncHandler(async (req, res) => {
  //get user details form frontend

  const { fullName, email, password, username } = req.body;


  //validation

  if (
    [fullName, email, password, username].some((field) => field?.trim() === "") //.some even if one is true
  ) {
    throw new ApiError(400, "All field require");
  }

  if (!validator.isEmail(email)) {
    throw new ApiError(400, "Invalid email address");
  }

  if (
    !validator.isStrongPassword(password, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    })
  ) {
    throw new ApiError(
      400,
      "Password must contain uppercase, lowercase, number and symbol."
    );
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

  const avatarLocalPath = req.file?.path;

  //upload it on cloudinary

  // console.log("Avatar Local Path:", avatarLocalPath);

  const avatar = await uploadOnCloudinary(avatarLocalPath);

  // console.log("Cloudinary Response:", avatar);

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

  if (!isUserCreated) {
    throw new ApiError(500, "Something went wrong while creating a user");
  }

  //return response

  return res
    .status(201)
    .json(new ApiResponse(200, isUserCreated, "User created sccessfully"));
});

export default registerUser;
