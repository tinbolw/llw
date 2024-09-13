"use server";

import client from "@/app/lib/mongodb";
import { ObjectId } from "mongodb";
import { AboutInfo } from "./definitions";

// import { AboutInfo, DateInfo } from "./definitions";
// import { MongoClient } from "mongodb";

// async function listDatabases(client) {
//   var databasesList = await client.db().admin().listDatabases();

//   console.log("Databases:");
//   databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };
// fix fact that site loads multiple times and triggers multiple queries for some rzn
export async function fetchAbouts() {
  try {
    const mongoClient = await client.connect();
    const db = client.db("history");
    const about = await db
      .collection("about")
      .find({})
      .limit(10)
      .toArray();
    console.log(about);
  } catch (e) {
    console.error(e);
  } finally {
    client.close();
  }
}

export async function fetchAboutById(id: string) {
  // todo
  try {
    await client.connect();
    const db = client.db("history");
    const about = await db
      .collection("about")
      .findOne({ "_id": new ObjectId(id) });
    console.log(about);
    return about;
  } catch (e) {
    // BSONError
    console.error(e);
  } finally {
    client.close();
  }
}