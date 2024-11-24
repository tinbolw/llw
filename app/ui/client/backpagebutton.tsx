'use client';

import {usePathname} from "next/navigation";
import Link from "next/link";
import {ArrowUturnLeftIcon} from "@heroicons/react/24/solid";

export default function BackPageButton() {
    const pathname = usePathname();
    const lastPath = pathname.match(/.*\//)?.[0] ?? "/";
    return (
        <Link href={lastPath} className="flex items-center justify-center">
            <ArrowUturnLeftIcon className="size-6" />
        </Link>
    )
}