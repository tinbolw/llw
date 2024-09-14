import Link from "next/link";
import { AboutInfo } from "@/app/lib/definitions";
import { DateParser } from "@/app/lib/utils";
import { buttonTypes } from "@/app/ui/frequent";

export function AboutCard({  _id, editDate, title, author }: AboutInfo) {
  return (
    // add undefined handling here for now
    <Link 
    href={`/about/${_id||undefined}`}
    className={`col-span-1 h-20 ${buttonTypes.hoverable}`}
    >
      <div className="grid grid-cols-2 grid-rows-2 pt-1">
        <p className="text-2xl col-span-2 text-center">{title||'undefined'}</p>
        {/* all attempts to align text bottom didnt work, pt as bandage fix */}
        <p className="text-left pl-2 pt-2">{DateParser(editDate)}</p>
        <p className="text-right pr-2 pt-2">{author||'undefined'}</p>
      </div>
    </Link>
  )
}