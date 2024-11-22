import { Suspense } from "react";
import { auth } from "@/auth";
import Link from "next/link";
import { revalidatePath } from "next/cache";

import Search from "@/app/ui/search";
import Table from "@/app/ui/about/table";
import { AboutCardsSkeleton } from "@/app/ui/skeletons";
import { Header, buttonTypes } from "@/app/ui/common";

// fix scaling on smaller screens
export default async function About({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const session = await auth();
  // todo fix revalidations for /about
  // revalidatePath('/about');
  // todo SHOULD BE AWAITED
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  // add processing for these and pagination
  // const query = '';
  // const currentPage = 1;
  return (
    <main>
      <Header pageTitle="About"/>
      <div>
        <div className="flex justify-center">
          <p className="text-2xl">What do you want to know about?</p>
        </div><br />
        {/* if no placeholder from url params, use "Search" */}
        <div className="flex justify-center">
          <Search placeholder="Search"/>
        </div><br/>
        <Suspense key={query + currentPage} fallback={<AboutCardsSkeleton />}>
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
