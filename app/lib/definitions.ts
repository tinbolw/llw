// todo better type names
import { ObjectId } from "mongodb";

export type DateInfo = {
  "_id": ObjectId;
  date: Date;
  description: string;
  author: string;
}

export type AboutInfo = {
  "_id"?: ObjectId;
  editDate?: Date;
  title: string;
  description?: string;
  author?: string;
}