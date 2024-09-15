"use server";

import { auth } from "@/auth";
import { DataTable } from "@/app/ui/about/data-table";

export default async function CreateAboutPage() {
  const session = await auth();
  if (session?.user?.email === 'tinbolw@gmail.com') {
    return (
    <body>
      <h1 className="text-3xl text-center">
        About/Create
      </h1>
      <DataTable id=""/>
    </body>
  )
  } else {
    return(
      <h1 className="text-center text-3xl">Unauthorized.</h1>
    )
  }
}