import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <p className="md:text-3xl text-center">Ling Ling Website</p>
        <p className="text-center">
          Welcome to the Ling Ling Website.
        </p>
        <p className="md:text-2xl text-center">Check out this stuff:</p>
      </div>
      {/* use docs for class */}
      <div className="flex flex-row justify-center items-center">
        {/* create dynamic loading in /lib */}
        <Link href="/tools">
          <span className="text-xl">Tools</span>
        </Link>
      </div>
    </main>
  );
}
