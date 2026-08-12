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

const escapeLinkedInText = (text = "") => {
  return text
    .replaceAll("\\", "\\\\")
    .replaceAll("|", "\\|")
    .replaceAll("{", "\\{")
    .replaceAll("}", "\\}")
    .replaceAll("@", "\\@")
    .replaceAll("[", "\\[")
    .replaceAll("]", "\\]")
    .replaceAll("(", "\\(")
    .replaceAll(")", "\\)")
    .replaceAll("<", "\\<")
    .replaceAll(">", "\\>")
    .replaceAll("#", "\\#")
    .replaceAll("*", "\\*")
    .replaceAll("_", "\\_")
    .replaceAll("~", "\\~");
};

const publishToLinkedIn = async (accessToken, linkedinId, post) => {
  let mediaContent = {};

  if (post.media?.length > 0) {
    const upload = await initializeImageUpload(accessToken, linkedinId);

    console.log("========== LINKEDIN IMAGE INIT ==========");
    console.dir(upload, { depth: null });
    console.log("=========================================");

    await uploadImageToLinkedIn(upload.uploadUrl, post.media[0].url);

    mediaContent = {
      content: {
        media: {
          id: upload.image,
        },
      },
    };
  }

  const safeContent = escapeLinkedInText(post.content);

  const hashtags =
    post.hashtags?.length > 0
      ? `\n\n${post.hashtags
          .map((tag) => `#${tag.replace(/^#/, "")}`)
          .join(" ")}`
      : "";

  const body = {
    author: `urn:li:person:${linkedinId}`,
    commentary: `${safeContent}${hashtags}`,
    visibility: "PUBLIC",

    distribution: {
      feedDistribution: "MAIN_FEED",
      targetEntities: [],
      thirdPartyDistributionChannels: [],
    },

    lifecycleState: "PUBLISHED",

    isReshareDisabledByAuthor: false,

    ...mediaContent,
  };
  console.log("========== LINKEDIN REQUEST ==========");
  console.log("Content length:", body.commentary.length);
  console.log("Content:");
  console.log(body.commentary);
  console.log("Body:");
  console.dir(body, { depth: null });
  console.log("=======================================");
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

    console.log("LINKEDIN POST ID:", response.headers["x-restli-id"]);

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

const initializeImageUpload = async (accessToken, linkedinId) => {
  try {
    const response = await axios.post(
      "https://api.linkedin.com/rest/images?action=initializeUpload",
      {
        initializeUploadRequest: {
          owner: `urn:li:person:${linkedinId}`,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
          "LinkedIn-Version": process.env.LINKEDIN_API_VERSION,
          "X-Restli-Protocol-Version": "2.0.0",
        },
      }
    );

    return response.data.value;
  } catch (error) {
    console.log(error.response?.data);

    throw new ApiError(
      error.response?.status || 500,
      "Failed to initialize LinkedIn image upload"
    );
  }
};

const uploadImageToLinkedIn = async (uploadUrl, imageUrl) => {
  try {
    const imageResponse = await axios.get(imageUrl, {
      responseType: "arraybuffer",
    });

    await axios.put(uploadUrl, imageResponse.data, {
      headers: {
        "Content-Type": "application/octet-stream",
      },
      maxBodyLength: Infinity,
    });
  } catch (error) {
    console.log(error.response?.data);

    throw new ApiError(
      error.response?.status || 500,
      "Failed to upload image to LinkedIn"
    );
  }
};

const getLinkedInPost = async (accessToken, postUrn) => {
  try {
    const response = await axios.get(
      `https://api.linkedin.com/rest/posts/${encodeURIComponent(postUrn)}`,
      {
        params: {
          viewContext: "AUTHOR",
        },
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "LinkedIn-Version": process.env.LINKEDIN_API_VERSION,
          "X-Restli-Protocol-Version": "2.0.0",
        },
      }
    );

    console.log("========== LINKEDIN STORED POST ==========");
    console.dir(response.data, { depth: null });
    console.log("==========================================");

    return response.data;
  } catch (error) {
    console.log("LinkedIn GET POST ERROR:");
    console.log(error.response?.status);
    console.log(error.response?.data);

    throw new ApiError(
      error.response?.status || 500,
      error.response?.data?.message || "Failed to fetch LinkedIn post"
    );
  }
};

export {
  generateAuthUrl,
  exchangeCodeForToken,
  getLinkedInProfile,
  publishToLinkedIn,
  getLinkedInPost,
};
