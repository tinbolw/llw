'use client';
import { useState, useEffect } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import { SentientLink } from "@/app/ui/sentientlink";
// consider adding discord palette colors to a config to be referenced
export default function SideNav() {
  const pathName = usePathname();
  // if route changes, hide sideNav
  const [changes, setChanges] = useState(0);
  useEffect(() => {
    if (sideNavEnabled) sideNavHandler();
    setChanges((prev) => prev + 1);
  }, [pathName]);

  const [sideNavEnabled, toggleSideNav] = useState(false);
  function sideNavHandler() {
    toggleSideNav(!sideNavEnabled);
  }

  return (
    // add animation?
    <div className="pl-1">
      <button onClick={sideNavHandler} className="size-8 absolute z-50">
        <Bars3Icon color="#dbdee1" />
      </button>
      {
        sideNavEnabled ?
          <div className={`absolute inset-y-0 left-0 w-40 bg-[#2B2D31] h-full pt-10 pl-2`}>
            {/* more dynamic way to add the > indicator */}
            <SentientLink href="/" label="Home" className="text-xl"/><br/>
            <SentientLink href="/tools" label="Tools" className="text-xl"/><br/>
            <SentientLink href="/about" label="About" className="text-xl"/>
          </div>
          : null
      }
    </div>
  )
}