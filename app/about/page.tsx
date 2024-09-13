// might need to make page not cache and refresh every time viewed
import Table from "@/app/ui/about/table";

// create ui element for card, load bunch of cards as data
export default function About() {
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
        {/* add skeleton for buttons loading */}
        <Table query={query} currentPage={currentPage}/>
      </div>
    </main>
  );
}
