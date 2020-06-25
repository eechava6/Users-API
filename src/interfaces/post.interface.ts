import { Document } from "mongoose";

export interface IPost {
  title: string;
  imageUrl: string;
  content: string;
}
export interface IPostDocument extends Document, IPost {}
