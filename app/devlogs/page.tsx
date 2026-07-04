import { TitledPage } from "../ui/titledpage";
import { Suspense } from "react";
import { Devlogs } from "@/app/ui/devlogs";
import Spinner from "@/app/ui/components/spinner";

export default function Page() {
  const title = "Devlogs";
  return (
    <TitledPage title={title} backButton={true}>
      <div className="flex flex-col items-center justify-center">
        {/*todo sort by date, add limit*/}
        <Suspense fallback={<Spinner />}>
          <Devlogs />
        </Suspense>
      </div>
    </TitledPage>
  );
}
