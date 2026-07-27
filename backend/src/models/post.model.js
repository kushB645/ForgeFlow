import mongoose from "mongoose";
import { Schema } from "mongoose";

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Post title is required"],
      trim: true,
      index: true,
    },

    content: {
      type: String,
      required: [true, "Post content is required"],
      trim: true,
    },

    media: {
      type: [
        {
          type: {
            type: String,
            enum: ["image", "video", "gif", "pdf"],
          },

          url: String,

          publicId: String,
        },
      ],
      default: [],
    },

    hashtags: [
      {
        type: String,
        trim: true,
      },
    ],

    status: {
      type: String,
      enum: ["draft", "scheduled", "published"],
      default: "draft",
    },

    scheduledAt: {
      type: Date,
    },

    aiGenerated: {
      type: Boolean,
      default: false,
    },

    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    visibility: {
      type: String,
      enum: ["public", "connections"],
      default: "public",
    },

    platform: {
      type: String,
      enum: ["linkedin"],
      default: "linkedin",
    },
  },
  {
    timestamps: true,
  }
);

export const Post = mongoose.model("Post", postSchema);
