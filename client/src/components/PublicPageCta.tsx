import { Link } from "react-router-dom";

type PublicPageCtaProps = {
  title: string;
  description: string;
};

export default function PublicPageCta({ title, description }: PublicPageCtaProps) {
  const hasToken = Boolean(localStorage.getItem("token"));

  return (
    <section className="mx-auto max-w-4xl px-6 py-16 text-center">
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">{title}</h2>
      <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-zinc-600">{description}</p>
      <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
        <Link
          className="rounded-xl bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2"
          to={hasToken ? "/dashboard" : "/register"}
        >
          {hasToken ? "Open Dashboard" : "Create Account"}
        </Link>
        <Link
          className="rounded-xl border border-zinc-300 bg-white px-5 py-3 text-sm font-medium text-zinc-800 transition hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2"
          to="/"
        >
          Back to StudyFlow
        </Link>
      </div>
    </section>
  );
}