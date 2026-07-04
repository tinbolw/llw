import { TitledPage } from "@/app/ui/titledpage";
import Link from "next/link";

export default async function Page() {
  const title = "Jit";
  const description = "Definitions soon...";
  return (
    <TitledPage
      title={title}
      description={description}
      backButton={true}
    ></TitledPage>
  );
}
