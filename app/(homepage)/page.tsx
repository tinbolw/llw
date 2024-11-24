import Link from "next/link";

export default function Home() {
  return (
    // todo add dev tag
    <main>
      <div>
        <p className="md:text-3xl text-center">Ling Ling Website</p>
        <p className="text-center">
          Welcome to the Ling Ling Website.
        </p><br />
      </div>
      <div className="flex justify-around items-start">
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
            <li>
              <Link href="/jit/jitbot">
                Talk to Jitbot
              </Link>
            </li>
            <li>
              <Link href="/devlogs">
                Read the devlogs
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl animate-bounce">
            Coming Soon:
          </h1>
          <ul className="text-xl flex flex-col items-center justify-center">
            <li>
              Server Statistics
            </li>
            <li>
              Jit definitions
            </li>
            <li>
              Date Browser?
            </li>
            <li>
              Timeline?
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
