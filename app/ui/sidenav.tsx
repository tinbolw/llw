'use client';
import Link from "next/link"
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import { SentientLink } from "@/app/ui/sentientlink";

export default function SideNav() {
  const pathName = usePathname();
  const [sideNavEnabled, toggleSideNav] = useState(false);
  function sideNavHandler() {
    toggleSideNav(!sideNavEnabled);
  }
  return (
    // <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-slate-950">
    // can activate sidebar by alternating w-40 and w-0 (and animate that)
    <div className="pl-1">
      <button onClick={sideNavHandler} className="size-8 absolute z-50">
        <Bars3Icon color="#dbdee1" />
      </button>
      {
        sideNavEnabled ?
          <div className={`absolute inset-y-0 left-0 w-40 bg-[#42454d] h-full pt-10 pl-2`}>
            {/* more dynamic way to add the > */}
            {/* <Link href="/" className="text-xl">
              {pathName == href ? '> Home' : 'Home'}
            </Link><br />
            <Link href="/tools" className="text-xl">
              {pathName == '/tools' ? '> Home' : 'Home'}
            </Link><br />
            <Link href="/about" className="text-xl">
              {pathName == '/' ? '> Home' : 'Home'}
            </Link> */}
            <SentientLink href="/" label="Home" className="text-xl"/><br/>
            <SentientLink href="/tools" label="Tools" className="text-xl"/><br/>
            <SentientLink href="/about" label="About" className="text-xl"/>
          </div>
          : null
      }
    </div>
  )
}