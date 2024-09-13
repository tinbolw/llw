// what's the red?
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

export function ExpandedCard({ title, date, author, onClick }) {
  return (
    <div
      className="absolute w-2/3 h-2/3 z-50 inset-0 m-auto bg-[#3c3e45] rounded-lg col-span-1 h-20 border-2"
    >
      <div className="flex pt-2 pl-2 pr-2 justify-between">
        {/* figure out how to left align button but center text */}
        <button onClick={onClick}>
          <ArrowUturnLeftIcon color="#dbdee1" className="size-8" />
        </button>
        <p className="text-2xl">{title}</p>
      </div>
      {/* all attempts to align text bottom didnt work, pt as bandage fix */}
      {/* <p className="text-left pl-2 pt-2">{date}</p>
      <p className="text-right pr-2 pt-2">{author}</p> */}
    </div>
  )
}

export function AboutCard({ title, date, author, onClick }) {
  return (
    <button
      className="bg-[#3c3e45] rounded-lg col-span-1 h-20 border-2 hover:bg-sky-700"
      // onClick={onClick}
      onClick={onClick}
    >
      <div className="grid grid-cols-2 grid-rows-2">
        <p className="text-2xl col-span-2">{title}</p>
        {/* all attempts to align text bottom didnt work, pt as bandage fix */}
        <p className="text-left pl-2 pt-2">{date}</p>
        <p className="text-right pr-2 pt-2">{author}</p>
      </div>
    </button>
  )
}