import { AboutInfo } from "@/app/lib/definitions"
import { textInputTypes, buttonTypes } from "@/app/ui/frequent";
import { createOrEditAbout } from "@/app/lib/actions";
import { fetchAboutById } from "@/app/lib/actions";

export async function DataTable({ id }: { id: string }) {
  // prefetch data, 'id' for edit, '' for create
  const defaultData = { editDate: '', title: '', description: '', author: '' };
  const { editDate, title, description, author } =
    id ? await fetchAboutById(id) ?? defaultData : defaultData;
  // parse date object into RFC3339 format for date defaultValue
  const autoDate = (new Date(editDate == '' ? new Date(1970, 0, 1) : editDate).toISOString()).substring(0, 10);
  return (
    // need use client
    // disable date by default
    // changestate on checkbox, if on, disable date, if off, enable date
    <form className="flex flex-col justify-center items-center" action={createOrEditAbout}>
      <input id="date" name="date" type="date" placeholder="Date" className={`${textInputTypes.default}`} defaultValue={autoDate} />
      <p>Set date automatically?</p>
      <input id="autoDate" name="autoDate" type="checkbox" defaultChecked /><br />
      <input id="title" name="title" placeholder="Title" className={`${textInputTypes.default}`} defaultValue={title ?? 'Not Found'} /><br />
      <input id="description" name="description" placeholder="Description" className={`${textInputTypes.default} w-96 h-48`} defaultValue={description ?? 'Not Found'} /><br />
      <input id="author" name="author" placeholder="Author" className={`${textInputTypes.default}`} defaultValue={author ?? 'Not Found'} /><br />
      {/* bandage fix, adding arbitrary id input to enable differentiation between create and update */}
      <input id="mongoId" name="mongoId" className={`${textInputTypes.default} h-0`} defaultValue={id ?? 'Not Found'} /><br />
      <button className={`${buttonTypes.hoverable} w-20 text-xl`}>{id === '' ? 'Create' : 'Edit'}</button>
    </form>
  )
}