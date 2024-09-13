"use server";

import client from "@/app/lib/mongodb";
import { ObjectId } from "mongodb";
import { AboutInfo } from "./definitions";

export async function fetchAbouts() {
  try {
    const mongoClient = await client.connect();
    const db = client.db("history");
    const about = await db
      .collection("about")
      .find({})
      .limit(8)
      .toArray() as AboutInfo[];
    return about;
  } catch (e) {
    console.error(e);
  } finally {
    client.close();
  }
}

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