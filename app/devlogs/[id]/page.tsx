import { DevlogDocument } from "@/app/lib/definitions";
import { fetchDocumentById } from "@/app/lib/api/mongodb/mongo-actions";
import MockTerminal from "@/app/ui/devlogs/mockterminal";
import { TitledPage } from "@/app/ui/titledpage";

type Params = Promise<{ id: string }>;
export default async function Page(props: { params: Params }) {
  const params = await props.params;
  const id = params.id;
  const { title, description, author } =
    await fetchDocumentById<DevlogDocument>(id, "devlogs", "devlogs");
  const pageTitle = `Devlogs/${title}`;

  return (
    <TitledPage title={pageTitle}>
      <div className="flex flex-col items-center justify-center">
        <MockTerminal
          user={author}
          command={`cat ${id}.json`}
          commandResult={description}
        />
      </div>
    </TitledPage>
  );
}
