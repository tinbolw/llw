import Link from "next/link";
import { FaceFrownIcon } from "@heroicons/react/24/outline";

export default function Custom404() {
  return (
    <main>
      <p className="md:text-3xl text-center">
        404 - Page Not Found
        <FaceFrownIcon className="size-8" color="FFFFFF"/>
      </p>
      <Link href="/">
        <span className="md:text-xl">Return Home</span>
      </Link>
    </main>
  );
}
