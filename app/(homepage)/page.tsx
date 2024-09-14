import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <p className="md:text-3xl text-center">Ling Ling Website</p>
        <p className="text-center">
          Welcome to the Ling Ling Website.
        </p><br />
        {/* <p className="md:text-2xl text-center">Check out this stuff:</p> */}
      </div>
      <div className="flex justify-around">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl">
            You can:
          </h1>
          <ul className="underline text-xl flex flex-col items-center justify-center">
            <li>
              <Link href="/about">
                Read some Abouts
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl animate-bounce">
            Upcoming:
          </h1>
          <ul className="text-xl flex flex-col items-center justify-center">
            <li>
              Date Browser
            </li>
            <li>
              Timeline?
            </li>
            <li>
              Server Statistics
            </li>
          </ul>
        </div>
      </div>
      {/* use docs for class */}
      {/* <div className="flex flex-row justify-center items-center"> */}
      {/* create dynamic loading in /lib */}
      {/* <Link href="/tools">
          <span className="text-xl">Tools</span>
        </Link> */}
      {/* </div> */}
    </main>
  );
}
