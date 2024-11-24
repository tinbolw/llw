// "use server";

import { auth } from "@/auth";
import { AboutTable } from "@/app/ui/about/abouttable";
import {Header} from "@/app/ui/common";

export default async function CreateAboutPage() {
  const session = await auth();
  if (session?.user?.email === 'tinbolw@gmail.com') {
    return (
      <div>
          <Header pageTitle="About/Create"/>
        <AboutTable id="" />
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