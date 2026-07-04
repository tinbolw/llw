// "use server";

import { auth } from "@/auth";
import { AboutTable } from "@/app/ui/about/abouttable";
import { TitledPage } from "@/app/ui/titledpage";

export default async function CreateAboutPage() {
  const title = "About/Create";
  if (false) {
    return (
      <div>
        <TitledPage title={title}>
          <AboutTable id="" />
        </TitledPage>
      </div>
    );
  } else {
    return (
      <div>
        <h1 className="text-center text-3xl">Unauthorized.</h1>
      </div>
    );
  }
}
