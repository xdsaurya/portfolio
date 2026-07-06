"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/resume";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Featured projects"
        title="Selected work"
        description="Production platforms spanning campaign automation, GenAI-powered natural language interfaces, and AI-driven advertising."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            whileHover={{ y: -6 }}
            className="h-full"
          >
            <Card className="group h-full border border-border/60 shadow-none transition-colors hover:border-primary/40">
              <CardContent className="flex h-full flex-col gap-4">
                <div className="h-1.5 w-12 rounded-full bg-gradient-to-r from-brand-from to-brand-to transition-all duration-300 group-hover:w-20" />

                <div>
                  <h3 className="font-heading text-lg font-semibold leading-snug">
                    {project.name}
                  </h3>
                  <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                    <span className="font-medium text-primary">{project.role}</span>
                    <span className="inline-flex items-center gap-1">
                      <Users className="size-3" />
                      Team of {project.team}
                    </span>
                  </div>
                </div>

                <ul className="flex-1 space-y-2">
                  {project.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 size-1 shrink-0 rounded-full bg-border" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 border-t border-border pt-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="h-auto py-1 font-normal">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
