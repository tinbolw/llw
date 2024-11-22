"use server";
// focus on cleaning up code

import { ObjectId } from "mongodb";
import { z } from "zod";
import client from "@/app/lib/api/mongodb/mongodb";
import { AboutInfo } from "@/app/lib/definitions";
import { redirect } from "next/navigation";

export async function fetchAbouts(query?:string) {
  try {
    await client.connect();
    const db = client.db("history");
    // deletes index
    // console.log(await db.collection("about").dropIndex("title_text"));
    // creates index
    // db.collection("about").createIndex({ title: "text", description: "text", editDate: "text", author: "text" });
    return await db
      .collection("about")
      // .find "creates cursor, may need to call client.close or something"
      .find(query?{ $text: { $search: query } }:{})
      .limit(8)
      .toArray() as AboutInfo[];
  } catch (e) {
    console.error(e);
  }
}
//
export async function fetchAboutById(id: string) {
  try {
    await client.connect();
    const db = client.db("history");
    return await db
      .collection("about")
      .findOne({ "_id": new ObjectId(id) }) as AboutInfo;
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
      // does go through if id is null, figure out how to suppress
      .updateOne({"_id": new ObjectId(id)}, { $set:{editDate, title, description, author} }, {upsert:true});
    return;
  } catch (e) {
    console.error(e);
  } finally {
    redirect("/about");
  }
}