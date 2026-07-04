import { TitledPage } from "../ui/titledpage";

export default async function Home() {
  const title = "Server Statistics";
  return (
    <TitledPage title={title}>
      <div>
        {/*TODO*/}
        {/*NUMBER OF MEMBERS, MESSAGES SENT, AGE OF SERVER, */}
        <p className="flex justify-center md:text-2xl">Nothing here yet...</p>
      </div>
    </TitledPage>
  );
}
