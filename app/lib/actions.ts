"use server";
// focus on cleaning up code

import { ObjectId } from "mongodb";
import { z } from "zod";
import { stringToDate } from "@/app/lib/utils";
import client from "@/app/lib/mongodb";
import { AboutInfo } from "@/app/lib/definitions";
import { redirect } from "next/navigation";

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
  }
}

const schema = z.object({
  fetchedDate: z.coerce.date({
    invalid_type_error: 'Invalid Date',
  }),
  title: z.string({
    invalid_type_error: 'Invalid Title',
  }),
  description: z.string({
    invalid_type_error: 'Invalid Description',
  }),
  author: z.string({
    invalid_type_error: 'Invalid Author',
  }),
})
// figure out error handling for these
// export async function createAbout(formData: FormData) {
//   const { fetchedDate, title, description, author } = schema.parse({
//     fetchedDate: formData.get('date'),
//     title: formData.get('title'),
//     description: formData.get('description'),
//     author: formData.get('author'),
//   });
//   // if settimeauto checked, set time to now, otherwise use fetched
//   const editDate = formData.get('autoDate') ? new Date(Date.now()) : fetchedDate;
//   // console.log(validatedFields.error);
//   // if (!validatedFields.success) {
//   //   return {
//   //     errors: validatedFields.error.flatten().fieldErrors,
//   //   }
//   // }
//   try {
//     await client.connect();
//     const db = client.db("history");
//     await db
//       .collection('about')
//       .insertOne({ editDate, title, description, author });
//     return;
//   } catch (e) {
//     console.error(e);
//   }
// }

export async function createOrEditAbout(formData: FormData) {
  const { fetchedDate, title, description, author } = schema.parse({
    fetchedDate: formData.get('date'),
    title: formData.get('title'),
    description: formData.get('description'),
    author: formData.get('author'),
  });
  // if settimeauto checked, set time to now, otherwise use fetched
  const editDate = formData.get('autoDate') ? new Date(Date.now()) : fetchedDate;
  const id = formData.get('mongoId')==''?undefined:formData.get('mongoId')?.toString()??undefined;
  // console.log(validatedFields.error);
  // if (!validatedFields.success) {
  //   return {
  //     errors: validatedFields.error.flatten().fieldErrors,
  //   }
  // }
  try {
    await client.connect();
    const db = client.db("history");
    await db
      .collection('about')
      // does go through if id is null, figure out how to supress
      .updateOne({"_id": new ObjectId(id)}, { $set:{editDate, title, description, author} }, {upsert:true});
    return;
  } catch (e) {
    console.error(e);
  } finally {
    redirect("/about");
  }
}