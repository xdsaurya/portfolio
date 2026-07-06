import { GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { education } from "@/data/resume";

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="Education" title="Academic background" />

      <StaggerGroup className="grid gap-4 sm:grid-cols-3">
        {education.map((entry) => (
          <StaggerItem key={entry.degree}>
            <Card className="h-full border border-border/60 shadow-none transition-colors hover:border-primary/40">
              <CardContent className="flex h-full flex-col gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <GraduationCap className="size-5" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold leading-snug">{entry.degree}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{entry.institution}</p>
                </div>
                <span className="mt-auto text-sm font-medium text-primary">{entry.year}</span>
              </CardContent>
            </Card>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
