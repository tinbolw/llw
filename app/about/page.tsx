import Link from "next/link";
// might need to make page not cache and refresh every time viewed
//use mini icon here
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import { AboutCard } from "@/app/ui/about/card";
// import { fetchAbouts } from "@/app/lib/actions";
import { ObjectId } from "mongodb";
import Table from "@/app/ui/about/table";

// create ui element for card, load bunch of cards as data
export default function Home() {
  // const query = searchParams?.query || '';
  // const currentPage = Number(searchParams?.page) || 1;
  const query = '';
  const currentPage = 1;
  // const abouts = fetchAbouts();
  return (
    <main>
      <div>
        <p className="md:text-3xl text-center">About</p><br />
        <div className="flex justify-center">
          <p className="text-2xl">What do you want to know about?</p>
        </div><br />
        {/* add skeleton for buttons loading and pagination */}
        <Table query={query} currentPage={currentPage}/>
      </div>
    </main>
  );
}
