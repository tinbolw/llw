import { Header } from "@/app/ui/common";
import Link from "next/link"

export default async function Home() {
    return (
        <main>
            <Header pageTitle="Jit"/>
            <div className="flex justify-center">
                <Link href="/jit/jitbot" className="text-2xl underline">
                    Jitbot
                </Link>
            </div>
            <p className="text-2xl text-center">Definitions soon...</p>
        </main>
    );
}
