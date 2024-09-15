import { Suspense } from "react";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import { buttonTypes } from "@/app/ui/frequent";
import { AboutCardsSkeleton } from "@/app/ui/skeletons";
import Table from "@/app/ui/about/table";
import { auth } from "@/auth";



export default async function About() {
  const session = await auth();
  revalidatePath('/about');
  // const query = searchParams?.query || '';
  // const currentPage = Number(searchParams?.page) || 1;
  // add processing for these and pagination
  const query = '';
  const currentPage = 1;
  return (
    <main>
      <div>
        <p className="md:text-3xl text-center">About</p><br />
        <div className="flex justify-center">
          <p className="text-2xl">What do you want to know about?</p>
        </div><br />
        <Suspense fallback={<AboutCardsSkeleton />}>
          <Table query={query} currentPage={currentPage} />
        </Suspense>
        {
          // can this be spoofed?
          session?.user?.email === 'tinbolw@gmail.com' ? <div className="flex justify-center">
            <Link className={`${buttonTypes.hoverable} text-2xl w-24 text-center`} href="/about/create">Create</Link>
          </div> : <></>
        }
      </div>
    </main>
  );
}
