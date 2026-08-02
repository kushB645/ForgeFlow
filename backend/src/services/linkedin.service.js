import axios from "axios";
import ApiError from "../utils/apiError.js";

const generateAuthUrl = (state) => {
  const authUrl = new URL("https://www.linkedin.com/oauth/v2/authorization");

  // After the user approves my app, send me an authorization code.

  authUrl.searchParams.append("response_type", "code");

  //this will create something like that https://www.linkedin.com/oauth/v2/authorization?response_type=code

  authUrl.searchParams.append("client_id", process.env.LINKEDIN_CLIENT_ID);

  authUrl.searchParams.append(
    "redirect_uri",
    process.env.LINKEDIN_REDIRECT_URI
  );

  authUrl.searchParams.append("scope", process.env.LINKEDIN_SCOPE);

  authUrl.searchParams.append("state", state);

  return authUrl.toString();
};

const exchangeCodeForToken = async (code) => {
  // requesting access token from LinkedIn bcz code stays for small time

  const params = new URLSearchParams();

  params.append("grant_type", "authorization_code");
  params.append("code", code);
  params.append("redirect_uri", process.env.LINKEDIN_REDIRECT_URI);
  params.append("client_id", process.env.LINKEDIN_CLIENT_ID);
  params.append("client_secret", process.env.LINKEDIN_CLIENT_SECRET);

  // The OAuth Token API doesn't accept JSON.

  // It expects data like an HTML form. that's why we create params

  try {
    const response = await axios.post(
      "https://www.linkedin.com/oauth/v2/accessToken",
      params,
      {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      } // this is the format of our data
    );

    return response.data;
  } catch (error) {
    throw new ApiError(
      500,
      error.response?.data?.error_description ||
        "Failed to exchange authorization code for access token"
    );
  }
};

const getLinkedInProfile = async (accessToken) => {
  try {
    const response = await axios.get("https://api.linkedin.com/v2/userinfo", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data;
  } catch (error) {
    throw new ApiError(
      500,
      error.response?.data?.message || "Failed to fetch LinkedIn profile"
    );
  }
};

const publishToLinkedIn = async (accessToken, linkedinId, post) => {
  const body = {
    author: `urn:li:person:${linkedinId}`,
    commentary: post.content,
    visibility: "PUBLIC",
    distribution: {
      feedDistribution: "MAIN_FEED",
      targetEntities: [],
      thirdPartyDistributionChannels: [],
    },
    lifecycleState: "PUBLISHED",
    isReshareDisabledByAuthor: false,
  };
  console.log("LinkedIn API Version:", process.env.LINKEDIN_API_VERSION);
  try {
    const response = await axios.post(
      "https://api.linkedin.com/rest/posts",
      body,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
          "LinkedIn-Version": process.env.LINKEDIN_API_VERSION,
          "X-Restli-Protocol-Version": "2.0.0",
        },
      }
    );

    return {
      id: response.headers["x-restli-id"],
      status: response.status,
    };
    
  } catch (error) {
    console.log("LinkedIn Error:");
    console.log(error.response?.status);
    console.log(error.response?.data);

    throw new ApiError(
      error.response?.status || 500,
      error.response?.data?.message ||
        error.response?.data?.error ||
        "Failed to publish post to LinkedIn"
    );
  }
};

export {
  generateAuthUrl,
  exchangeCodeForToken,
  getLinkedInProfile,
  publishToLinkedIn,
};
