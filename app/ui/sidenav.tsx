'use client';
import Link from "next/link"
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

export default function SideNav() {
  const [sideNavEnabled, toggleSideNav] = useState(false);
  function sideNavHandler() {
    toggleSideNav(!sideNavEnabled);
  }
  return (
    // <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-slate-950">
    // can activate sidebar by alternating w-40 and w-0 (and animate that)
    <div>
      <button onClick={sideNavHandler} className="size-8 absolute z-50">
        <Bars3Icon color="#FFFFFF" />
      </button>
      {
        sideNavEnabled ?
          <div className={`absolute inset-y-0 left-0 w-40 bg-[#42454d] h-full pt-8 pl-2`}>
            <Link href="/" className="text-xl">
              Home
            </Link><br/>
            <Link href="/tools" className="text-xl">
              Tools
            </Link><br/>
            <Link href="/about" className="text-xl">
              About
            </Link>
          </div>
          : null
      }
    </div>
  )
}