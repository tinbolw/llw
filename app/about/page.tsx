import { Suspense } from "react";
import { revalidatePath } from "next/cache";
import { AboutCardsSkeleton } from "@/app/ui/skeletons";
import Table from "@/app/ui/about/table";

export default function About() {
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
      </div>
    </main>
  );
}
