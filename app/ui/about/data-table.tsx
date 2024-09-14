import { AboutInfo } from "@/app/lib/definitions"
import { textInputTypes, buttonTypes } from "@/app/ui/frequent";
import { createAbout } from "@/app/lib/actions";

export async function DataTable({fetch}:{fetch:boolean}) {
  const { editDate, title, description, author } =
  // replace placeholder ternary with fetched items
    fetch ?  { editDate: '', title: '', description: '', author: '' } : { editDate: '', title: '', description: '', author: '' };
  return (
    // need use client
    // disable date by default
    // changestate on checkbox, if on, disable date, if off, enable date
    <form className="flex flex-col justify-center items-center" action={createAbout}>
        {/* could create custom date selector with mmddyyyy */}
        <input id="date" name="date" type="date" placeholder="Date" className={`${textInputTypes.default}`} />
        <p>Set time automatically?</p><input id="autoDate" name="autoDate" type="checkbox" defaultChecked></input><br />
        <input id="title" name="title"  placeholder="Title" className={`${textInputTypes.default}`} /><br />
        <input id="description" name="description"  placeholder="Description" className={`${textInputTypes.default} w-96 h-48`} /><br />
        <input id="author" name="author"  placeholder="Author" className={`${textInputTypes.default}`} /><br />
        <button className={`${buttonTypes.hoverable} w-20 text-xl`}>Submit</button>
    </form>
  )
}