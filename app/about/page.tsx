import Link from "next/link";
// import { useState } from "react";
//use mini icon here
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import { AboutCard } from "@/app/ui/about/card";
import { fetchAbouts } from "@/app/lib/actions";
import { ObjectId } from "mongodb";

// create ui element for card, load bunch of cards as data
export default function Home() {
  fetchAbouts();
  // instead of making toggle, make card spawn expanded and back destroy it
  // const [currentlyViewingCard, toggleCard] = useState(false);
  // function cardViewHandler() {
  //   toggleCard(!currentlyViewingCard);
  // }
  return (
    <main>
      <div>
        <p className="md:text-3xl text-center">About</p><br />
        {/* <SectionTitle title="Website"/>
        <p className="text-center">
          Made using:
        </p>
        <ul className="text-center">
          <li>Next.js</li>
          <li>React</li>
          <li>JSX</li>
          <li>Tailwind</li>
          <li>MongoDB</li>
        </ul><br/> */}
        {/* <SectionTitle title="Server"/>
        <p className="text-center">
          Ling Ling was created on March 5, 2017 at 02:58:03 UTC (6:58:03 PM PST). The
        </p> */}
        <div className="flex justify-center">
          <p className="text-2xl">What do you want to know about?</p>
        </div><br />
        <div className="grid grid-cols-4 grid-flow-row grid-rows-4 gap-2 pr-2 pl-2">
          {/* dynamically load buttons */}
          {/* add skeleton for buttons loading and pagination */}
          {/* button click redirect to link by id */}
          <AboutCard title="Manually Added" editDate={new Date("09/12/24")} author="tinbolw" _id={new ObjectId("66e3858cc0ab140cef1a9a26")}/>
          </div>
      </div>
    </main>
  );
}
