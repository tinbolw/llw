// "use server";

import { auth } from "@/auth";

import { DataTable } from "@/app/ui/about/data-table";
import {Header} from "@/app/ui/common";

export default async function EditAboutPage({ params }: { params: { id: string } }) {
  const session = await auth();
  if (session?.user?.email === 'tinbolw@gmail.com') {
    return (
      <div>
        <Header pageTitle="About/Edit"/>
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