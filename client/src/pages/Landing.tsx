import { Link } from "react-router-dom";

const features = [
  {
    title: "Track resources",
    description: "Add courses, articles, and projects into one focused workspace for your learning plan.",
  },
  {
    title: "Search and filter",
    description: "Find the right item quickly with debounced search, status filters, type filters, and sorting.",
  },
  {
    title: "Edit in place",
    description: "Update titles, mark resources complete, and remove items without leaving the dashboard.",
  },
  {
    title: "Private dashboard",
    description: "JWT-based sessions and user-scoped resources keep each learner's workspace separate.",
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
    <div className="min-h-screen bg-zinc-50 text-zinc-950">
      {/* <header className="border-b border-zinc-200 bg-white/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2" aria-label="StudyFlow home">
            <img src={StudyPerson} alt="book icon" className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-tight">StudyFlow</span>
          </Link>
          <input placeholder="Search..." className="bg-gray-100 border-none rounded-xl w-64 p-1.5 focus:outline-none" />
          <div className="flex items-center gap-4 mx-right">
             <button><a href="/features" className="px-4 py-1 text-gray-700 hover:bg-zinc-200 transition rounded-xl mx-auto">
              Features
            </a></button>
            <button><a href="/tech-stack" className="px-4 py-1 text-gray-700 hover:bg-zinc-200 transition rounded-xl">
                Tech Stack
            </a></button>
          </div>
         
          <div className="flex items-center gap-3 text-sm">
            {hasToken ? (
              <>
                <Link className="text-zinc-600 hover:text-zinc-950" to="/dashboard">
                  Dashboard
                </Link>
                <ProfileDropdown />
              </>
            ) : (
              <>
                <Link className="text-zinc-600 hover:text-zinc-950" to="/login">
                  Sign In
                </Link>
                <Link
                  className="rounded-xl bg-black px-4 py-2 font-medium text-white transition hover:bg-zinc-800"
                  to="/register"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </nav>
      </header> */}

      <main>
        <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:py-24">
          <div>
            <div className="mb-5 inline-flex rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-600 shadow-sm">
              Learning Progress Dashboard
            </div>

            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
              Track your learning progress with clarity.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg">
              StudyFlow helps you organize courses, articles, and projects with searchable resources,
              progress tracking, inline editing, and a responsive dashboard built for focused learning.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                className="rounded-xl bg-black px-5 py-3 text-center text-sm font-medium text-white transition hover:bg-zinc-800"
                to={hasToken ? "/dashboard" : "/register"}
              >
                {hasToken ? "Open Dashboard" : "Get Started"}
              </Link>
              <Link
                className="rounded-xl border border-zinc-300 bg-white px-5 py-3 text-center text-sm font-medium text-zinc-800 transition hover:bg-zinc-100"
                to="/login"
              >
                Sign In
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-wide text-zinc-400">Progress</p>
                <p className="text-3xl font-semibold">67%</p>
              </div>
              <div className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600">
                8 of 12 complete
              </div>
            </div>

            <div className="mb-5 grid grid-cols-3 gap-3 text-sm">
              <div className="rounded-2xl border border-zinc-200 p-3">
                <p className="text-xs text-zinc-500">Total</p>
                <p className="mt-1 text-xl font-semibold">12</p>
              </div>
              <div className="rounded-2xl border border-zinc-200 p-3">
                <p className="text-xs text-zinc-500">Done</p>
                <p className="mt-1 text-xl font-semibold">8</p>
              </div>
              <div className="rounded-2xl border border-zinc-200 p-3">
                <p className="text-xs text-zinc-500">Active</p>
                <p className="mt-1 text-xl font-semibold">4</p>
              </div>
            </div>

            <div className="mb-4 rounded-xl border border-zinc-200 px-3 py-2 text-sm text-zinc-400">
              Search title...
            </div>

            <div className="space-y-3">
              {[
                ["React Router notes", "Course", true],
                ["Prisma auth cleanup", "Project", false],
                ["Tailwind dashboard polish", "Article", true],
              ].map(([title, type, done]) => (
                <div key={String(title)} className="flex items-center justify-between rounded-2xl border border-zinc-200 p-3">
                  <div className="flex items-center gap-3">
                    <span className={`h-4 w-4 rounded border ${done ? "border-black bg-black" : "border-zinc-300"}`} />
                    <div>
                      <p className={`text-sm font-medium ${done ? "text-zinc-400 line-through" : "text-zinc-900"}`}>
                        {title}
                      </p>
                      <p className="text-xs uppercase text-zinc-500">{type}</p>
                    </div>
                  </div>
                  <span className="text-xs text-zinc-400">Edit</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <article key={feature.title} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                <h2 className="text-sm font-semibold">{feature.title}</h2>
                <p className="mt-2 text-sm leading-6 text-zinc-600">{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-zinc-200 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <p className="text-sm font-semibold text-zinc-950">Built with modern frontend tools</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {stack.map((item) => (
                <span key={item} className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-600">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-16 text-center">
          <h2 className="text-2xl font-semibold tracking-tight">Ready to organize your learning?</h2>
          <p className="mt-3 text-sm leading-6 text-zinc-600">
            Create an account and start tracking your study resources today.
          </p>
          <Link
            className="mt-6 inline-flex rounded-xl bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
            to={hasToken ? "/dashboard" : "/register"}
          >
            {hasToken ? "Open Dashboard" : "Create Account"}
          </Link>
        </section>
      </main>
    </div>
  );
}
