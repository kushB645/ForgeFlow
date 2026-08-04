import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/apiResponse.js";
import ApiError from "../utils/apiError.js";

import { generatePost } from "../services/ai.service.js";

const generateLinkedInPost = asyncHandler(async (req, res) => {
  const {
    topic,
    tone,
    audience,
    length,
    difficulty,
    style,
    instructions,
  } = req.body;

  if (!topic?.trim()) {
    throw new ApiError(400, "Topic is required");
  }

  const result = await generatePost({
    topic,
    tone,
    audience,
    length,
    difficulty,
    style,
    instructions,
  });

  const cleanResult = result
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  const parsedResult = JSON.parse(cleanResult);

  return res.status(200).json(
    new ApiResponse(
      200,
      parsedResult,
      "Post generated successfully"
    )
  );
});

export { generateLinkedInPost };