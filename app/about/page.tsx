import { Suspense } from "react";
import Link from "next/link";
import { revalidatePath } from "next/cache";
import { TitledPage } from "@/app/ui/titledpage";

import Search from "@/app/ui/search";
import Table from "@/app/ui/about/table";
import { AboutCardsSkeleton } from "@/app/ui/skeletons";
import { buttonTypes } from "@/app/ui/common";

// fix scaling on smaller screens
// todo it seems as if page loading itself depends on the fetch, which is what suspense is supposed to prevent, look into this
// todo instead of making the entire page itself await the props, load rest of the site and suspense the cards
type SearchParams = Promise<{ query?: string; page?: string }>;
export default async function Page(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;
  // todo fix revalidations for /about
  // revalidatePath('/about');
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  // add processing for these and pagination
  // const query = '';
  // const currentPage = 1;
  const title = "About";
  const description = "What do you want to know about?";
  return (
    <TitledPage title={title} description={description} backButton={true}>
      <div>
        <br />
        <div className="flex justify-center">
          <Search placeholder="Search" />
        </div>
        <br />
        <Suspense key={query + currentPage} fallback={<AboutCardsSkeleton />}>
          <Table query={query} currentPage={currentPage} />
        </Suspense>
        {false ? (
          <div className="flex justify-center">
            <Link
              className={`${buttonTypes.hoverable} text-2xl w-24 text-center`}
              href="/about/create"
            >
              Create
            </Link>
          </div>
        ) : (
          <></>
        )}
      </div>
    </TitledPage>
  );
}
