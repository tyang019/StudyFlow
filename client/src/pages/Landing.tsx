import {
  BookOpenCheck,
  FilePenLine,
  Search,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import InfoCard from "../components/InfoCard";
import PublicPageCta from "../components/PublicPageCta";
import dashboardScreenshot from "../assets/dashboard.png";

type FeatureSummary = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const features: FeatureSummary[] = [
  {
    title: "Track resources",
    description:
      "Add courses, articles, and projects into one focused workspace for your learning plan.",
    icon: BookOpenCheck,
  },
  {
    title: "Search and filter",
    description:
      "Find the right item quickly with debounced search, status filters, type filters, and sorting.",
    icon: Search,
  },
  {
    title: "Edit in place",
    description:
      "Update titles, mark resources complete, and remove items without leaving the dashboard.",
    icon: FilePenLine,
  },
  {
    title: "Private dashboard",
    description:
      "JWT-based sessions and user-scoped resources keep each learner's workspace separate.",
    icon: ShieldCheck,
  },
];

const stack = [
  "React",
  "TypeScript",
  "React Router",
  "Tailwind CSS",
  "REST APIs",
  "JWT Auth",
  "Node.js",
  "Express",
  "Prisma",
  "PostgreSQL",
];

export default function Landing() {
  const hasToken = Boolean(localStorage.getItem("token"));

  return (
    <div className="min-h-screen overflow-hidden bg-white text-zinc-950">

      <main>
        <section className="relative isolate border-b border-zinc-200 bg-zinc-50">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_20%_20%,rgba(196,181,253,0.28),transparent_34%),radial-gradient(circle_at_82%_18%,rgba(186,230,253,0.32),transparent_32%)]"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 opacity-40 [background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] [background-size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_72%)]"
          />

          <div className="mx-auto grid max-w-7xl gap-14 px-6 pb-20 pt-16 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-12 lg:pb-28 lg:pt-24">
            <div className="relative z-10">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200/80 bg-white/80 px-3 py-1 text-xs font-medium text-zinc-600 shadow-sm backdrop-blur">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-emerald-500"
                />
                Learning Progress Dashboard
              </div>

              <h1 className="max-w-3xl text-4xl font-semibold tracking-[-0.035em] text-zinc-950 sm:text-5xl lg:text-6xl">
                Track your learning progress with clarity.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg">
                StudyFlow helps you organize courses, articles, and projects
                with searchable resources, progress tracking, inline editing,
                and a responsive dashboard built for focused learning.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  className="rounded-xl bg-black px-5 py-3 text-center text-sm font-medium text-white shadow-lg shadow-zinc-950/10 transition hover:-translate-y-0.5 hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2"
                  to={hasToken ? "/dashboard" : "/register"}
                >
                  {hasToken ? "Open Dashboard" : "Get Started"}
                </Link>

                <Link
                  className="rounded-xl border border-zinc-300 bg-white/90 px-5 py-3 text-center text-sm font-medium text-zinc-800 shadow-sm transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2"
                  to={hasToken ? "/features" : "/login"}
                >
                  {hasToken ? "Explore Features" : "Sign In"}
                </Link>
              </div>
            </div>

            <figure className="relative mx-auto w-full max-w-3xl lg:-mr-28 lg:max-w-none">
              <div
                aria-hidden="true"
                className="absolute -inset-8 -z-10 rounded-[2.5rem] bg-gradient-to-br from-violet-200/60 via-sky-100/30 to-transparent blur-2xl"
              />

              <div className="overflow-hidden rounded-2xl border border-zinc-300/80 bg-white shadow-[0_30px_80px_-28px_rgba(24,24,27,0.38)] ring-1 ring-black/5 sm:rounded-3xl">
                <div className="flex h-10 items-center border-b border-zinc-200 bg-zinc-100/90 px-4 sm:h-12">
                  <div aria-hidden="true" className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </div>

                  <div className="mx-auto flex h-6 w-1/2 items-center justify-center rounded-md border border-zinc-200 bg-white text-[9px] text-zinc-400 sm:h-7 sm:text-[10px]">
                    app.studyflow.dev/dashboard
                  </div>

                  <div aria-hidden="true" className="w-[50px]" />
                </div>

                <img
                  src={dashboardScreenshot}
                  alt="StudyFlow dashboard with learning statistics, search and filter controls, and a list of tracked resources"
                  className="block h-auto w-full"
                  width="1440"
                  height="900"
                />
              </div>
            </figure>
          </div>
        </section>

        <section className="relative mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Built for focus
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Everything you need to keep learning moving.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 [&>article]:transition [&>article]:duration-200 [&>article]:hover:-translate-y-1 [&>article]:hover:shadow-lg">
            {features.map((feature) => (
              <InfoCard key={feature.title} {...feature} />
            ))}
          </div>
        </section>

        <section className="border-y border-zinc-200 bg-zinc-950 text-white">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 md:grid-cols-[0.7fr_1.3fr] md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                Under the hood
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                Built with modern frontend tools
              </h2>
            </div>

            <div className="flex flex-wrap gap-2 md:justify-end">
              {stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-300 backdrop-blur"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <div className="bg-[radial-gradient(circle_at_50%_0%,rgba(212,212,216,0.34),transparent_55%)]">
          <PublicPageCta
            title="Ready to organize your learning?"
            description="Create an account and start tracking your study resources today."
          />
        </div>
      </main>
    </div>
  );
}