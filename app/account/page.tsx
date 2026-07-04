import { TitledPage } from "../ui/titledpage";
import { Suspense } from "react";
import { AccountCard } from "@/app/ui/account";
import Spinner from "@/app/ui/components/spinner";

export default function Page() {
  const title = "Account";
  return (
    <TitledPage title={title} backButton={true}>
      <Suspense fallback={<Spinner />}>
        <AccountCard />
      </Suspense>
    </TitledPage>
  );
}
