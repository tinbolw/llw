import {DevlogDocument} from "@/app/lib/definitions";
import {Header} from "@/app/ui/common";
import {fetchDocumentById} from "@/app/lib/api/mongodb/mongo-actions";
import MockTerminal from "@/app/ui/devlogs/mockterminal";

type Params = Promise<{ id: string }>;
export default async function Devlog(props: { params: Params }) {
    const params = await props.params;
    const id = params.id;
    const {
        title,
        description,
        author
    } = await fetchDocumentById<DevlogDocument>(id, "devlogs", "devlogs");

    return (
        <main>
            <Header pageTitle={`Devlogs/${title}`}/>
            <div className="flex flex-col items-center justify-center">
                <MockTerminal user={author} command={`cat ${id}.json`} commandResult={description} />
            </div>
        </main>
    )
}