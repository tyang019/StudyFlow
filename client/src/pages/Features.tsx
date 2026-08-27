import {
  CheckCircle2,
  Database,
  FilePenLine,
  ListFilter,
  LockKeyhole,
  LogIn,
  PlusCircle,
  Search,
  Trash2,
  UserPlus,
  type LucideIcon,
} from "lucide-react";
import InfoCard from "../components/InfoCard";

type StudyFlowFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const features: StudyFlowFeature[] = [
  {
    title: "User registration",
    description:
      "Create an account with an email and password. StudyFlow hashes passwords before saving account data.",
    icon: UserPlus,
  },
  {
    title: "User login",
    description:
      "Sign in to receive a time-limited JSON Web Token that is used for authenticated API requests.",
    icon: LogIn,
  },
  {
    title: "Protected dashboard",
    description:
      "Client-side route protection guides signed-out visitors to login, while the API independently verifies every resource request.",
    icon: LockKeyhole,
  },
  {
    title: "Create learning items",
    description:
      "Add study resources from the dashboard and save them to your personal learning workspace.",
    icon: PlusCircle,
  },
  {
    title: "View saved resources",
    description:
      "Load persisted resources from PostgreSQL whenever you return to the dashboard or refresh the page.",
    icon: Database,
  },
  {
    title: "Search, filter, and sort",
    description:
      "Use debounced title search, completion status, resource type, and alphabetical sorting to refine your workspace.",
    icon: Search,
  },
  {
    title: "Paginated workspace",
    description:
      "Move through matching resources in focused groups of eight using simple previous and next controls.",
    icon: ListFilter,
  },
  {
    title: "Inline editing",
    description:
      "Double-click a resource title to edit it in place, then save with Enter or cancel with Escape.",
    icon: FilePenLine,
  },
  {
    title: "Completion tracking",
    description:
      "Mark resources complete and see total, completed, and progress values update in the dashboard.",
    icon: CheckCircle2,
  },
  {
    title: "Secure deletion and ownership",
    description:
      "Delete resources through authenticated endpoints that verify the current user owns the requested item.",
    icon: Trash2,
  },
];

function PublicHeader() {
  return (
    <header className="border-b border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="text-lg font-semibold tracking-tight">
          StudyFlow
        </a>
        <nav className="flex items-center gap-4 text-sm text-zinc-600">
          <a href="/features" className="hover:text-zinc-950">
            Features
          </a>
          <a href="/login" className="hover:text-zinc-950">
            Log in
          </a>
        </nav>
      </div>
    </header>
  );
}

export default function Features() {
  return (
     <div className="min-h-screen bg-zinc-50 text-zinc-950">

      <main>
        <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
            Product capabilities
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            A focused workspace for managing learning progress.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg">
            StudyFlow combines account-based access, persistent resources, and practical dashboard tools
            so learners can organize work without losing focus.
          </p>
        </section>

        <section aria-labelledby="feature-grid-title" className="mx-auto max-w-6xl px-6 pb-16">
          <h2 id="feature-grid-title" className="sr-only">
            StudyFlow features
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <InfoCard key={feature.title} {...feature} />
            ))}
          </div>
        </section>

        <div className="border-t border-zinc-200 bg-white">
          <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
            <h2 className="text-2xl font-semibold tracking-tight">
              Ready to put the workflow into practice?
            </h2>
            <p className="mt-3 max-w-2xl text-zinc-600">
              Create an account to build your own resource list, or return to your dashboard if you are already signed in.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="/register"
                className="rounded-md bg-zinc-950 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
              >
                Create an account
              </a>
              <a
                href="/login"
                className="rounded-md border border-zinc-300 px-4 py-2 text-sm font-medium hover:bg-zinc-50"
              >
                Log in
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
} 