import { Schema, model } from "mongoose";

const PostSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      index: true,
    },
    imageUrl: {
      type: String,
      trim: true,
      required: true,
    },
    content: {
      type: String,
      required: true,
      index: true,
    },
  },
  { collection: "posts", timestamps: { createdAt: "created_at" } } // By default created_at but to ensure :p
);

module.exports = model("User", PostSchema);
