import Link from "next/link";

export default function Custom404() {
  return (
    <main>
      <p className="md:text-3xl text-center">404 - Page Not Found</p>
      <Link href="/">
        <span className="md:text-xl">Return</span>
      </Link>
    </main>
  );
}
