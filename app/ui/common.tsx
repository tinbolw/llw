import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
//consider also making default page builder here or adding that to layout

export function Header({ pageTitle }: { pageTitle: string }) {
  return (
    <div className="flex justify-center space-x-2">
      {/*  the buttons a bit too high, fix later*/}
      {/*  todo make the href actually go one back instead of always redirecting home*/}
      <Link href="/">
        <ArrowUturnLeftIcon className="size-7" />
      </Link>
      <p className="md:text-3xl text-center">{pageTitle}</p>
    </div>
  );
}

export const buttonTypes = {
  default: "bg-[#3c3e45] rounded-lg border-2",
  hoverable: "bg-[#3c3e45] rounded-lg border-2 hover:bg-sky-700",
};

export const textInputTypes = {
  default: "bg-[#2B2D31] rounded-lg w-1/6 text-xl text-center",
};
