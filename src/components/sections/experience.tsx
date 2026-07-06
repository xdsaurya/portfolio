import { Briefcase } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { experience } from "@/data/resume";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Professional experience"
        title="Where I've made an impact"
        description="Building and scaling full-stack applications and GenAI features at HestaBit Technologies."
      />

      <div className="relative ml-3 border-l border-border sm:ml-4">
        {experience.map((role, idx) => (
          <Reveal key={role.role + role.period} delay={idx * 0.08} className="relative pb-12 pl-8 last:pb-0 sm:pl-10">
            <span className="absolute top-1 -left-[9px] flex size-4.5 items-center justify-center rounded-full bg-gradient-to-br from-brand-from to-brand-to ring-4 ring-background sm:-left-[11px] sm:size-5.5">
              <Briefcase className="size-2.5 text-white sm:size-3" />
            </span>

            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-heading text-xl font-semibold">{role.role}</h3>
              <span className="text-sm font-medium text-muted-foreground">{role.period}</span>
            </div>
            <p className="text-sm font-medium text-primary">{role.company}</p>

            <ul className="mt-4 space-y-2.5">
              {role.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-sm text-muted-foreground sm:text-base">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-border" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
