"use server";

import client from "@/app/lib/mongodb";
import { ObjectId } from "mongodb";
import { AboutInfo } from "./definitions";

// fix topology is closed/
// Unchecked runtime.lastError: A listener indicated an asynchronous response by returning true, but the message channel closed before a response was received
export async function fetchAbouts() {
  try {
    await client.connect();
    const db = client.db("history");
    const about = await db
      .collection("about")
      .find({})
      .limit(8)
      .toArray() as AboutInfo[];
    return about;
  } catch (e) {
    console.error(e);
  }
}
//
export async function fetchAboutById(id: string) {
  try {
    await client.connect();
    const db = client.db("history");
    const about = await db
      .collection("about")
      .findOne({ "_id": new ObjectId(id) }) as AboutInfo;
    return about;
  } catch (e) {
    // BSONError if invalid id type, null if nonexistent
    console.error(e);
  } finally {
    client.close();
  }
}