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
    creativity,
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
    creativity,
  });

  const cleanResult = result
    .replace(/```json/gi, "")
    .replace(/```javascript/gi, "")
    .replace(/```typescript/gi, "")
    .replace(/```jsx/gi, "")
    .replace(/```js/gi, "")
    .replace(/```java/gi, "")
    .replace(/```/g, "")
    .trim();

  const parsedResult = JSON.parse(cleanResult);

  // Clean LinkedIn content
  if (parsedResult.content) {
    parsedResult.content = parsedResult.content.normalize("NFKC").trim();
  }

  return res
    .status(200)
    .json(new ApiResponse(200, parsedResult, "Post generated successfully"));
});

export { generateLinkedInPost };
