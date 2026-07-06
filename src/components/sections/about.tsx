import { Code2, Rocket, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { summary } from "@/data/resume";
import { siteConfig } from "@/data/site-config";

const highlights = [
  {
    icon: Rocket,
    title: "Full-stack ownership",
    description:
      "Ship production-grade apps end-to-end with Next.js, Node.js, Express.js, and MongoDB.",
  },
  {
    icon: Sparkles,
    title: "GenAI integration",
    description:
      "Design prompt engineering workflows and structured LLM output pipelines for real products.",
  },
  {
    icon: Code2,
    title: "Performance-minded",
    description:
      "Optimize with Redis caching, async processing, and efficient API design at scale.",
  },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="About me"
        title="Turning ideas into scalable, AI-enabled products"
        description={`${siteConfig.yearsExperience} years of experience delivering full-stack and GenAI-powered features at ${siteConfig.company}.`}
      />

      <div className="grid gap-12 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <ul className="space-y-4">
            {summary.map((line) => (
              <li key={line} className="flex gap-3 text-muted-foreground">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gradient-to-r from-brand-from to-brand-to" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <StaggerGroup className="grid gap-4 lg:col-span-2">
          {highlights.map((h) => (
            <StaggerItem key={h.title}>
              <Card className="border border-border/60 shadow-none transition-colors hover:border-primary/40">
                <CardContent className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-from to-brand-to text-white">
                    <h.icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold">{h.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {h.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
