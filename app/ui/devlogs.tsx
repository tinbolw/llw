import {
  fetchDevlogs,
  createOrEditDevlog,
} from "@/app/lib/api/mongodb/mongo-actions";
import { dateToString } from "@/app/lib/utils";
import { DevlogDocument } from "@/app/lib/definitions";
import Link from "next/link";
import localFont from "next/font/local";
const Hack = localFont({ src: "../fonts/Hack-Regular.ttf" });

export async function Devlogs() {
  const devLogs = await fetchDevlogs();
  return devLogs?.map((devLog: DevlogDocument) => (
    <Link
      key={String(devLog._id)}
      className={`text-2xl ${Hack.className}`}
      href={`/devlogs/${devLog._id}`}
    >
      {`${devLog.title}, ${dateToString(devLog.editDate, true)}`}
    </Link>
  ));
}
