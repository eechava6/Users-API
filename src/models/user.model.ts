import { Schema, model, set } from "mongoose";
import { hashSync } from "bcrypt";
import { saltRounds } from "../constants/bcrypt.constant";
import { IUserDocument } from "../interfaces/user.interface";

set("useCreateIndex", true);

const UserSchema = new Schema(
  {
    name: {
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
UserSchema.pre<IUserDocument>("save", function (next): void {
  this.password = hashSync(this.password as string, saltRounds);
  next();
});

export const UserModel = model<IUserDocument>("User", UserSchema);
