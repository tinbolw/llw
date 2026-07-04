// "use server";

import { auth } from "@/auth";

import { AboutTable } from "@/app/ui/about/abouttable";
import { TitledPage } from "@/app/ui/titledpage";

type Params = Promise<{ id: string }>;
export default async function Page(props: { params: Params }) {
  const title = "About/Edit";
  const params = await props.params;
  if (false) {
    return (
      <div>
        <TitledPage title={title}>
          <AboutTable id={params.id} />
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
