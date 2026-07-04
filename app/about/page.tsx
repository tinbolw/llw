import { Suspense } from "react";
import Link from "next/link";
import { revalidatePath } from "next/cache";
import { TitledPage } from "@/app/ui/titledpage";
import Search from "@/app/ui/search";
import Table from "@/app/ui/about/table";
import { AboutCardsSkeleton } from "@/app/ui/skeletons";
import { buttonTypes } from "@/app/ui/common";
import Spinner from "@/app/ui/components/spinner";

// fix scaling on smaller screens
// todo it seems as if page loading itself depends on the fetch, which is what suspense is supposed to prevent, look into this
// todo instead of making the entire page itself await the props, load rest of the site and suspense the cards
// type SearchParams = Promise<{ query?: string; page?: string }>;
export default function Page() {
  // const searchParams = await props.searchParams;
  // todo fix revalidations for /about
  // revalidatePath('/about');
  // const query = searchParams?.query || "";
  // const currentPage = Number(searchParams?.page) || 1;
  // add processing for these and pagination
  const query = "";
  const currentPage = 1;
  const title = "About";
  const description = "What do you want to know about?";
  return (
    <TitledPage title={title} description={description} backButton={true}>
      <div className="flex flex-col items-center w-full">
        {/*<Search placeholder="Search" />*/}
        <Suspense key={query + currentPage} fallback={<Spinner />}>
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
