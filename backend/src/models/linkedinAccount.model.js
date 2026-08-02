import mongoose from "mongoose";
import { Schema } from "mongoose";

const linkedinAccountSchema = new Schema({

    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true
    },

    linkedinId: {
        type: String,
        required: true,
        unique: true,
    },

    accessToken: {
        type: String,
        required:true
    },

    refreshToken: {
        type: String,
    },

    expiresAt: {
        type: Date
    },

    profileUrl: {
        type: String,
    },

    profilePicture: {
      type: String,
    },

    isConnected: {
      type: Boolean,
      default: true,
    },
},
{
    timestamps: true
}
)

export const LinkedInAccount = mongoose.model("LinkedInAccount", linkedinAccountSchema)