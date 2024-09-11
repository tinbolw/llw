import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <p className="md:text-3xl text-center">Ling Ling Website</p>
        <p className="text-center">
          Welcome to the Ling Ling Website. Made using:
        </p>
        <ul className="text-center">
          <li>Next.js</li>
          <li>React</li>
          <li>JSX</li>
          <li>Tailwind</li>
          <li>MongoDB</li>
        </ul>
        <p className="md:text-2xl text-center">Check out this stuff:</p>
      </div>
      {/* use docs for class */}
      <div className="flex flex-row justify-center items-center">
        <Link href="/tools">
          <span className="text-xl">Tools</span>
        </Link>
      </div>
    </main>
  );
}
