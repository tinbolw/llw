import {Suspense} from "react";
import Link from "next/link";
import {revalidatePath} from "next/cache";
import {AboutPage} from "@/app/ui/about/aboutpage";
import {AboutPageSkeleton} from "@/app/ui/skeletons";
import {ArrowUturnLeftIcon} from "@heroicons/react/24/solid";

// /[id]/edit lets you edit specific, /create lets you add new, add checkbox for custom time or date.now

type Params = Promise<{ id: string }>;
// i was wondering if passing all of the about info as props to this page and rendering it statically would save api
// fetches, but i dont think thats a good idea
export default async function About(props: { params: Params }) {
    const params = await props.params;
    const id = params.id;
    // revalidatePath(`/about/${id}`);
    return (
        <main>
            <div className="flex justify-center space-x-2">
                <Link href="/about">
                    <ArrowUturnLeftIcon className="size-7"/>
                </Link>
                <p className="md:text-3xl text-center">About</p>
            </div>
            <div className="text-center">
                <Suspense fallback={<AboutPageSkeleton/>}>
                    <AboutPage params={{id: id}}/>
                </Suspense>
                {/*add side text padding*/}
            </div>
        </main>
    );
}
