import Link from "next/link";
//use mini icon here
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import { fetchAboutById } from "@/app/lib/actions";

// create ui element for card, load bunch of cards as data
export default async function Home({ params }: { params: { id: string } }) {
  const id = params.id;
  const { editDate, title, description, author } = await fetchAboutById(id) || 
  {
    editDate: '404',
    title: '404',
    description: '404',
    author: '404'
  };
  return (
    <main>
      <div>
        <p className="md:text-3xl text-center">About</p><br />
        <div className="flex justify-center space-x-2">
          {/* the back button is not inline vertically with the text. */}
          <Link href="/about">
            <ArrowUturnLeftIcon className="size-6" />
          </Link>
          <p className="text-2xl">{title}</p>
        </div>
        <p className="text-center">
          {`Last Edited: ${editDate} by ${author}`}
        </p><br/>
        <div className="text-center text-xl">
          {description}
        </div>
      </div>
    </main>
  );
}
