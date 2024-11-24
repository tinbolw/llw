"use server";
// focus on cleaning up code

import {ObjectId} from "mongodb";
import {z} from "zod";
import client from "@/app/lib/api/mongodb/mongodb";
import {AboutDocument, DevlogDocument} from "@/app/lib/definitions";
import {redirect} from "next/navigation";

export async function fetchAbouts(query?: string) {
    try {
        await client.connect();
        const db = client.db("history");
        // deletes index
        // console.log(await db.collection("about").dropIndex("title_text"));
        return await db
            .collection("about")
            // .find "creates cursor, may need to call client.close or something"
            .find(query ? {$text: {$search: query}} : {})
            .limit(8)
            .toArray() as AboutDocument[];
    } catch (e) {
        // todo improve the error handling for the abouts
        console.error(e);
    }
}

/**
 * Fetch a document from MongoDB
 * @param id The unique id of the document. Known as: _id, ObjectId()
 * @param database The database
 * @param collection The collection of the database
 // * @param type The type of data expected as the return. Most in @/app/lib/definitions.ts.
 * @return type
 */
export async function fetchDocumentById<Type>(id: string, database: string, collection: string) {
    try {
        await client.connect();
        const db = client.db(database);
        return await db
            .collection(collection)
            .findOne({"_id": new ObjectId(id)}) as Type || {
            // caveat of doing this for unfound and error is that other types wont work
            // not sure if theres a better way of error handling
            editDate: '404',
            title: '404',
            description: '404',
            author: '404'
        } as Type;
    } catch (e) {
        // BSONError if invalid id type, null if nonexistent
        console.error(e);
        return {
            editDate: 'error',
            title: 'error',
            description: 'error',
            author: 'error'
        } as Type;
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

export async function createOrEditAbout(formData: FormData) {
    const {fetchedDate, title, description, author} = schema.parse({
        fetchedDate: formData.get('date'),
        title: formData.get('title'),
        description: formData.get('description'),
        author: formData.get('author'),
    });
    // if settimeauto checked, set time to now, otherwise use fetched
    const editDate = formData.get('autoDate') ? new Date(Date.now()) : fetchedDate;
    const id = formData.get('mongoId') == '' ? undefined : formData.get('mongoId')?.toString() ?? undefined;
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
            .updateOne({"_id": new ObjectId(id)}, {$set: {editDate, title, description, author}}, {upsert: true});
        return;
    } catch (e) {
        console.error(e);
    } finally {
        redirect("/about");
    }
}

// maybe add search by date?
export async function fetchDevlogs() {
    try {
        await client.connect();
        const db = client.db("devlogs");
        return await db
            .collection("devlogs")
            .find()
            .sort({_id: -1})
            .limit(10)
            .toArray() as DevlogDocument[];
    } catch (e) {
        console.error(e);
    }
}

export async function createOrEditDevlog() {
    try {
        const editDate = new Date(Date.now());
        const title = "test";
        const description = "test";
        const author = "jit";
        await client.connect();
        const db = client.db("devlogs");
        await db
            .collection('devlogs')
            // does go through if id is null, figure out how to suppress
            .updateOne({"_id": new ObjectId()}, {$set: {editDate, title, description, author}}, {upsert: true});
        return;
    } catch (e) {
        console.error(e);
    } finally {

    }
}