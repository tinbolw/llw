// "use server";

import { auth } from "@/auth";
import Link from "next/link";
import { DataTable } from "@/app/ui/about/data-table";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";

export default async function EditAboutPage({ params }: { params: { id: string } }) {
  const session = await auth();
  if (session?.user?.email === 'tinbolw@gmail.com') {
    return (
      <div>
        <div className="flex text-3xl justify-center space-x-2">
          <Link href="/about">
            <ArrowUturnLeftIcon className="h-8" color="#dbdee1" />
          </Link>
          <h1>About/Edit</h1>
        </div>
        <DataTable id={params.id} />
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