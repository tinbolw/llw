import Link from "next/link";
import { FaceFrownIcon } from "@heroicons/react/24/outline";

export default function Custom404() {
  return (
    <main>
      <h1 className="md:text-3xl text-center">
        404 - Page Not Found
      </h1>
      <div className="flex flex-col items-center justify-center">
        <Link href="/" className="flex space-x-1">
          <span className="md:text-xl">Return Home</span>
          <FaceFrownIcon className="size-6" color="#dbdee1" />
        </Link>
      </div>
    </main>
  );
}
