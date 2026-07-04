import Link from "next/link";
import { TitledPage } from "@/app/ui/titledpage";

export default function Home() {
  const title = "Ling Ling Website";
  const description = "Welcome to the Ling Ling Website.";
  return (
    <TitledPage title={title} description={description}>
      <div className="flex flex-row w-full">
        <div className="flex flex-col items-center w-1/2">
          <h1 className="text-2xl">You can:</h1>
          <ul className="underline text-xl flex flex-col items-center justify-center">
            <li>
              <Link href="/about">Learn About Ling Ling</Link>
            </li>
            <li>
              <Link href="/jit/jitbot">Talk to Jitbot</Link>
            </li>
            <li>
              <Link href="/devlogs">Read the devlogs</Link>
            </li>
            <li>
              <Link href="/account">View your account</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center w-1/2">
          <h1 className="text-2xl animate-bounce">Coming in the Future:</h1>
          <ul className="text-xl flex flex-col items-center justify-center">
            <li>Server Statistics</li>
            <li>Jit definitions</li>
            <li>Date Browser?</li>
            <li>Timeline?</li>
          </ul>
        </div>
      </div>
    </TitledPage>
  );
}
