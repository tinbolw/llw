import { TitledPage } from "../ui/titledpage";
import { Suspense } from "react";
import { AccountCard } from "@/app/ui/account";

export default function Page() {
  const title = "Account";
  return (
    <TitledPage title={title} backButton={true}>
      <Suspense
        fallback={<div className="flex flex-col items-center">Loading...</div>}
      >
        <AccountCard />
      </Suspense>
    </TitledPage>
  );
}
