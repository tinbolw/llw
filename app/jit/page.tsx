import { TitledPage } from "@/app/ui/titledpage";
import Link from "next/link";

export default function Page() {
  const title = "Jit";
  const description = "Definitions soon...";
  return (
    <TitledPage title={title} description={description} backButton={true}>
      <div className="flex flex-col items-center text-2xl underline">
        <Link href="/jit/jitbot">Talk to Jitbot</Link>
      </div>
    </TitledPage>
  );
}
