// "use server";

import { auth } from "@/auth";
import Link from "next/link";
import { DataTable } from "@/app/ui/about/data-table";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";

export default async function CreateAboutPage() {
  const session = await auth();
  if (session?.user?.email === 'tinbolw@gmail.com') {
    return (
      <div>
        <div className="flex justify-center space-x-2">
          <Link href="/about">
            <ArrowUturnLeftIcon className="size-8" />
          </Link>
          <h1 className="text-3xl text-center">
            About/Create
          </h1>
        </div>
        <DataTable id="" />
      </div>
    )
  } else {
    return (
      <div>
        <h1 className="text-center text-3xl">Unauthorized.</h1>
      </div>
    )
  }
}