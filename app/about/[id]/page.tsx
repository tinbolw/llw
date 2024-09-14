import { Suspense } from "react";
import Link from "next/link";
import { revalidatePath } from "next/cache";
import { AboutPage } from "@/app/ui/about/aboutpage";
import { AboutPageSkeleton } from "@/app/ui/skeletons";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

export default async function Home({ params }: { params: { id: string } }) {
  const id = params.id;
  revalidatePath(`/about/${id}`);
  return (
    <main>
      <div className="flex justify-center space-x-2">
        <Link href="/about">
          <ArrowUturnLeftIcon className="size-7" />
        </Link>
        <p className="md:text-3xl text-center">About</p>
      </div>
      <div className="text-center">
        <Suspense fallback={<AboutPageSkeleton/>}>
          <AboutPage params={{id:id}}/>
        </Suspense>
      </div>
    </main>
  );
}
