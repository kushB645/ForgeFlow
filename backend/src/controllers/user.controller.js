import asyncHandler from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import ApiError from "../utils/apiError.js";
import validator from "validator";
import {uploadOnCloudinary} from "../utils/cloudinary.js";
import ApiResponse from "../utils/apiResponse.js";
import jwt from "jsonwebtoken";

const generateAccessAndRefreshToken = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generatesAccessTokens();
    const refreshToken = user.generatesRefreshTokens();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      "Something went wrong while generating access and refresh token"
    );
  }
};

//register user

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
    throw new ApiError(500, "Something went wrong while registering a user");
  }

  //return response

  return res
    .status(201)
    .json(new ApiResponse(200, isUserCreated, "User created sccessfully"));
});

//login user

const loginUser = asyncHandler(async (req, res) => {
  //reqbody -> data

  const { email, username, password } = req.body;

  //username or email

  if (!(username || email)) {
    throw new ApiError(400, "Username or email is required");
  }

  //find the user

  const user = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (!user) {
    throw new ApiError(401, "User does not exist");
  }

  //password check

  const passwordValidate = await user.isPasswordCorrect(password);

  if (!passwordValidate) {
    throw new ApiError(404, "Invaild user credentials");
  }
  //access and refersh token

  const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
    user._id
  );

  const loggedInUser = await User.findById(user._id).select(
    " -password -refreshToken "
  );

  //send cookies

  const option = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, option)
    .cookie("refreshToken", refreshToken, option)
    .json(
      new ApiResponse(
        200,
        {
          user: loggedInUser,
          refreshToken,
          loggedInUser,
        },
        "Successfully Logged In"
      )
    );
});

//logout user

const logoutUser = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: {
        refreshToken: undefined,
      },
    },
    {
      returnDocument: "after",
    }
  );

  const option = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .clearCookie("accessToken", option)
    .clearCookie("refreshToken", option)
    .json(new ApiResponse(200, {}, "User logout Successfully"));
});

//refresh access token

const refreshAccessToken = asyncHandler(async (req, res) => {
  console.log("Cookies:", req.cookies);
console.log("Body:", req.body);
  const incomingRefreshToken =
  req.cookies?.refreshToken ||
  req.body?.refreshToken ||
  req.header("Authorization")?.replace("Bearer ", "");

  if (!incomingRefreshToken) {
    throw new ApiError(400, "Unauthorized access");
  }

  console.log("Incoming Refresh Token:", incomingRefreshToken);

  try {
    const decodeRefreshToken = jwt.verify(
      incomingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );

    //now i have the token so the user

    const user = await User.findById(decodeRefreshToken?._id);

    if (!user) {
      throw new ApiError(401, "Invalid Refresh token");
    }

    if (incomingRefreshToken !== user?.refreshToken) {
      throw new ApiError(401, "Refresh token is expired");
    }

    const option = {
      httpOnly: true,
      secure: true,
    };

    const { accessToken, refreshToken } =
      await generateAccessAndRefreshToken(user._id);

    return res
      .status(200)
      .cookie("accessToken", accessToken, option)
      .cookie("refreshToken", refreshToken, option)
      .json(
        new ApiResponse(
          200,
          { accessToken, refreshToken },
          "Access token refreshed"
        )
      );
  } catch (error) {
    throw new ApiError(400, "Invalid refresh token");
  }
});

export { registerUser, loginUser, logoutUser, refreshAccessToken };
