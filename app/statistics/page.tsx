import { Header } from "@/app/ui/common"

export default async function Home() {
    return (
        <main>
            <Header pageTitle="Server Statistics"/>
            <div>
                {/*TODO*/}
                {/*NUMBER OF MEMBERS, MESSAGES SENT, AGE OF SERVER, */}
                <p className="flex justify-center md:text-2xl">Nothing here yet...</p>
            </div>
        </main>
    );
}
