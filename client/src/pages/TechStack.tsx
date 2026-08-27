import {
  Atom,
  Boxes,
  Braces,
  Cloud,
  Code2,
  Database,
  KeyRound,
  LockKeyhole,
  Network,
  Palette,
  Route,
  ScanSearch,
  Send,
  Server,
  Shapes,
  Zap,
  type LucideIcon,
} from "lucide-react";
import InfoCard from "../components/InfoCard";

type Technology = {
  name: string;
  description: string;
  icon: LucideIcon;
};

type Category = {
  id: string;
  title: string;
  description: string;
  technologies: Technology[];
};

const categories: Category[] = [
  {
    id: "frontend",
    title: "Frontend",
    description: "The browser application, navigation, styling, and API communication layer.",
    technologies: [
      {
        name: "React",
        description:
          "Builds StudyFlow's reusable pages and interactive components, including authentication forms, resource cards, and dashboard views.",
        icon: Atom,
      },
      {
        name: "TypeScript",
        description:
          "Defines component props, API payloads, resource models, filters, and page data so mistakes are caught during development.",
        icon: Braces,
      },
      {
        name: "React Router",
        description:
          "Maps public, authentication, informational, and protected dashboard URLs while preserving browser history navigation.",
        icon: Route,
      },
      {
        name: "Tailwind CSS",
        description:
          "Provides StudyFlow's responsive spacing, typography, zinc color palette, cards, borders, and focus-state utilities.",
        icon: Palette,
      },
      {
        name: "Vite",
        description:
          "Runs the local development server and produces the optimized static frontend bundle deployed to Vercel.",
        icon: Zap,
      },
      {
        name: "Axios",
        description:
          "Centralizes requests to the StudyFlow API, attaches bearer tokens, serializes filters, and handles unauthorized responses.",
        icon: Send,
      },
      {
        name: "Lucide React",
        description:
          "Supplies the accessible decorative icons used to make feature and technology cards easier to scan.",
        icon: Shapes,
      },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    description: "The HTTP API and application logic that connect the frontend to persistent data.",
    technologies: [
      {
        name: "Node.js",
        description:
          "Runs the compiled TypeScript server and provides the JavaScript runtime for StudyFlow's backend services.",
        icon: Code2,
      },
      {
        name: "Express",
        description:
          "Defines JSON middleware, authentication endpoints, protected resource routes, and centralized error handling.",
        icon: Server,
      },
      {
        name: "REST APIs",
        description:
          "Expose registration, login, and resource CRUD operations through predictable HTTP methods and JSON responses.",
        icon: Network,
      },
    ],
  },
  {
    id: "database",
    title: "Database",
    description: "The relational persistence layer for accounts and user-owned learning resources.",
    technologies: [
      {
        name: "PostgreSQL",
        description:
          "Stores users and learning resources in related tables so saved dashboard data persists across sessions.",
        icon: Database,
      },
      {
        name: "Prisma ORM",
        description:
          "Defines the User and Resource schema, manages migrations, and provides typed database queries in backend services.",
        icon: Boxes,
      },
    ],
  },
  {
    id: "authentication",
    title: "Authentication",
    description: "The account and request-verification tools protecting user-specific resources.",
    technologies: [
      {
        name: "JSON Web Tokens",
        description:
          "Represent authenticated sessions and carry the user ID used to scope protected resource requests.",
        icon: KeyRound,
      },
      {
        name: "bcrypt",
        description:
          "Hashes passwords before database storage and compares submitted credentials during login.",
        icon: LockKeyhole,
      },
    ],
  },
  {
    id: "quality-and-deployment",
    title: "Quality and deployment",
    description: "The verified tools used to check and publish the current StudyFlow codebase.",
    technologies: [
      {
        name: "ESLint",
        description:
          "Checks frontend source for code-quality, TypeScript, and React Hooks issues before deployment.",
        icon: ScanSearch,
      },
      {
        name: "Vercel",
        description:
          "Builds and hosts the Vite frontend with single-page-application rewrites for direct route navigation.",
        icon: Cloud,
      },
    ],
  },
];

export default function TechStack() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950">
      <main className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <header>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
            Architecture and tools
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            The technologies behind StudyFlow.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg">
            Every technology below has a specific role in the current repository, from rendering the
            interface to protecting and persisting user-owned resources.
          </p>
        </header>

        <div className="space-y-14 pb-16">
          {categories.map((category) => (
            <section key={category.id} aria-labelledby={category.id}>
              <h2 id={category.id} className="text-2xl font-semibold tracking-tight">
                {category.title}
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-600">
                {category.description}
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {category.technologies.map((technology) => (
                  <InfoCard
                    key={technology.name}
                    description={technology.description}
                    headingLevel="h3"
                    icon={technology.icon}
                    label={category.title}
                    title={technology.name}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}