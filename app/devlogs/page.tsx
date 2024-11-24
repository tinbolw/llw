import Link from "next/link";
import {Header} from "@/app/ui/common";
import {fetchDevlogs, createOrEditDevlog} from "@/app/lib/api/mongodb/mongo-actions";
import {dateToString} from "@/app/lib/utils";
import {DevlogDocument} from "@/app/lib/definitions";
import localFont from "next/font/local";
const Hack = localFont({src: "../fonts/Hack-Regular.ttf"});

export default async function Devlogs() {
    // todo check suspense, proper way of await
    const devLogs = await fetchDevlogs();
    return (
        <main>
            <Header pageTitle="Devlogs"/>
            <div className="flex flex-col items-center justify-center">
                {/*<button onClick={createOrEditDevlog}>Jit</button>*/}
                {/*todo sort by date, add limit*/}
                {devLogs?.map((devLog: DevlogDocument) => (
                    <Link className={`text-2xl ${Hack.className}`}
                          href={`/devlogs/${devLog._id}`}
                    >
                        {`${devLog.title}, ${dateToString(devLog.editDate, true)}`}
                    </Link>
                ))}
            </div>
        </main>
    )
}