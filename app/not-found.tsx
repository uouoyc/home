import Link from "next/link";

export default function NotFound() {
  return (
    <main className="from-bg-body-form to-bg-body-to flex h-screen flex-col items-center justify-center bg-gradient-to-br text-center text-white">
      <h1 className="font-mono text-[8rem] font-bold drop-shadow-lg">
        ERROR - 404
      </h1>

      <p className="mt-6 font-mono text-xl opacity-90">
        An error has occurred, to continue:
      </p>
      <p className="mt-2 font-mono text-lg opacity-80">
        * Return to our homepage.
        <br />* Send us an email about this error and try later.
      </p>

      <nav className="mt-10 flex space-x-6 font-mono text-lg">
        <Link
          href="/"
          className="hover:text-bg-body-to rounded px-3 py-1 transition-colors hover:bg-white"
        >
          index
        </Link>
        <Link
          href="mailto:cn.youc@gmail.com"
          className="hover:text-bg-body-to rounded px-3 py-1 transition-colors hover:bg-white"
        >
          webmaster
        </Link>
      </nav>
    </main>
  );
}
