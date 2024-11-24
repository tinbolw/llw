// "use server";

import {auth} from "@/auth";

import {AboutTable} from "@/app/ui/about/abouttable";
import {Header} from "@/app/ui/common";

type Params = Promise<{ id: string }>;
export default async function EditAboutPage(props: {params: Params}) {
    const params = await props.params;
    const session = await auth();
    if (session?.user?.email === 'tinbolw@gmail.com') {
        return (
            <div>
                <Header pageTitle="About/Edit"/>
                <AboutTable id={params.id}/>
            </div>
        )
    } else {
        return (
            <div>
                <h1 className="text-center text-3xl">Unauthorized.</h1>
            </div>
        )
    }
}