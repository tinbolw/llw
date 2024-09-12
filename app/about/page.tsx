'use client';

import Link from "next/link";
import { useState } from "react";
//use mini icon here
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import { AboutCard } from "@/app/ui/about/card";
import { ExpandedCard } from "@/app/ui/about/card";

// create ui element for card, load bunch of cards as data
export default function Home() {
  // to remove
  const [currentlyViewingCard, toggleCard] = useState(false);
  function cardViewHandler() {
    toggleCard(!currentlyViewingCard);
  }
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
          <AboutCard title="Test1" date="09/11/2024" author="tinbolw" onClick={cardViewHandler}/>
          <AboutCard title="Test2" date="09/11/2024" author="tinbolw" onClick={cardViewHandler}/>
          <AboutCard title="Test3" date="09/11/2024" author="tinbolw" onClick={cardViewHandler}/>
          <AboutCard title="Test4" date="09/11/2024" author="tinbolw" onClick={cardViewHandler}/>
          <AboutCard title="Test5" date="09/11/2024" author="tinbolw" onClick={cardViewHandler}/>
          <AboutCard title="Test6" date="09/11/2024" author="tinbolw" onClick={cardViewHandler}/>
          <AboutCard title="Test7" date="09/11/2024" author="tinbolw" onClick={cardViewHandler}/>
          <AboutCard title="Test8" date="09/11/2024" author="tinbolw" onClick={cardViewHandler}/>
        </div>
        {
          // find way to pass info from aboutcard to expandedcard
          currentlyViewingCard ?
          <ExpandedCard title="Test" date="09/11/2024" author="tinbolw" onClick={cardViewHandler}/>:null
        }
      </div>
    </main>
  );
}
