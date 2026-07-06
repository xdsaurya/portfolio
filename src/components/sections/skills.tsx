import {
  BrainCircuit,
  Cloud,
  Database,
  LayoutDashboard,
  Server,
  Terminal,
  Wrench,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/data/resume";

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "GenAI & LLM": BrainCircuit,
  Frontend: LayoutDashboard,
  Backend: Server,
  Databases: Database,
  Languages: Terminal,
  "Cloud & DevOps": Cloud,
  Tools: Wrench,
};

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Technical skills"
        title="Tools & technologies I work with"
        description="A full-stack toolkit spanning GenAI integration, modern frontend and backend development, databases, and cloud infrastructure."
      />

      <StaggerGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => {
          const Icon = categoryIcons[group.category] ?? Terminal;
          return (
            <StaggerItem key={group.category}>
              <Card className="h-full border border-border/60 shadow-none transition-colors hover:border-primary/40">
                <CardContent className="flex h-full flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex size-9 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                      <Icon className="size-4.5" />
                    </div>
                    <h3 className="font-heading font-semibold">{group.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="h-auto py-1 font-normal">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          );
        })}
      </StaggerGroup>
    </section>
  );
}
