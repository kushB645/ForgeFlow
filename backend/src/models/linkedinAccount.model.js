import mongoose from "mongoose";
import { Schema } from "mongoose";
import { User } from "./user.model";

const linkedinAccountSchema = new Schema({

    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        require: true,
        unique: true
    },

    linkedinId: {
        type: String,
        required: true,
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