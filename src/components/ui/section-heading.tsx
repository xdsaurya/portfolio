import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "mb-12 flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-accent/50 px-3 py-1 text-xs font-medium tracking-wide text-accent-foreground uppercase">
        {eyebrow}
      </span>
      <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base text-muted-foreground">{description}</p>
      )}
    </Reveal>
  );
}
