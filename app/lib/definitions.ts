import { ObjectId } from "mongodb";

// export type DateInfo = {
//   "_id": ObjectId;
//   date: Date;
//   description: string;
//   author: string;
// }

export type AboutDocument = {
  "_id": ObjectId;
  editDate: Date;
  title: string;
  description: string;
  author: string;
}

export type DevlogDocument = {
  "_id": ObjectId;
  editDate: Date;
  title: string;
  description: string;
  author: string;
}