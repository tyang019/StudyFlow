import type { LucideIcon } from "lucide-react";

type InfoCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  label?: string;
  headingLevel?: "h2" | "h3";
};

export default function InfoCard({
  title,
  description,
  icon: Icon,
  label,
  headingLevel = "h2",
}: InfoCardProps) {
  const Heading = headingLevel;

  return (
    <article className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700">
        <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />
      </div>
      {label && (
        <p className="mt-5 text-xs font-medium uppercase tracking-[0.18em] text-zinc-400">
          {label}
        </p>
      )}
      <Heading className={`${label ? "mt-2" : "mt-5"} text-base font-semibold text-zinc-950`}>
        {title}
      </Heading>
      <p className="mt-2 text-sm leading-6 text-zinc-600">{description}</p>
    </article>
  );
}