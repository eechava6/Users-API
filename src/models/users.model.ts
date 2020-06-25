import { Schema, model } from "mongoose";
import { hashSync } from "bcrypt";
import { saltRounds } from "../constants/bcrypt.constant";

const UserSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      required: true,
      index: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      index: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,
    },
  },
  { collection: "users" }
);
// hash user password before saving into database
UserSchema.pre("save", (next) => {
  this.password = hashSync(this.password, saltRounds);
  next();
});

module.exports = model("User", UserSchema);
