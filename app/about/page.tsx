import Link from "next/link";

function SectionTitle({title}) {
  return (
    <p className="md:text-2xl text-center font-bold">{title}</p>
  )
}
//make about page also have sublinks
export default function Home() {
  return (
    <main>
      <div>
        <p className="md:text-3xl text-center">About</p><br/>
        <SectionTitle title="Website"/>
        <p className="text-center">
          Made using:
        </p>
        <ul className="text-center">
          <li>Next.js</li>
          <li>React</li>
          <li>JSX</li>
          <li>Tailwind</li>
          <li>MongoDB</li>
        </ul><br/>
        <SectionTitle title="Server"/>
        <p className="text-center">
          Ling Ling was created on March 5, 2017 at 02:58:03 UTC (6:58:03 PM PST). The
        </p>
      </div>
    </main>
  );
}
