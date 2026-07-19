import Link from "next/link";
import { ArrowLeft, Radar } from "lucide-react";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#05070d] px-5 text-center text-white">
      <div>
        <Radar className="mx-auto h-10 w-10 text-cyan-100" />
        <p className="mt-7 font-mono text-xs uppercase tracking-[0.3em] text-cyan-100">404</p>
        <h1 className="mt-5 text-4xl font-semibold sm:text-6xl">This workflow ends here.</h1>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-300">
          The page you requested could not be found.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-cyan-100 px-6 text-sm font-semibold text-slate-950"
        >
          <ArrowLeft className="h-4 w-4" />
          Return Home
        </Link>
      </div>
    </main>
  );
}

