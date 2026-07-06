"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site-config";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as const } },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center px-6 pt-24 pb-16"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="mx-auto flex max-w-4xl flex-col items-center text-center"
      >
        <motion.div
          variants={item}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-accent/50 px-4 py-1.5 text-sm font-medium text-accent-foreground"
        >
          <Sparkles className="size-3.5" />
          Available for new opportunities
        </motion.div>

        <motion.h1
          variants={item}
          className="font-heading text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl"
        >
          Hi, I&apos;m{" "}
          <span className="text-gradient">{siteConfig.name}</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-5 text-lg font-medium text-foreground/80 sm:text-xl"
        >
          {siteConfig.title}
        </motion.p>

        <motion.p
          variants={item}
          className="mt-4 max-w-2xl text-balance text-muted-foreground sm:text-lg"
        >
          {siteConfig.tagline} {siteConfig.yearsExperience} years building production
          web apps and GenAI features at {siteConfig.company}.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button
            size="lg"
            nativeButton={false}
            className="h-11 rounded-full px-6"
            render={
              <a href="#projects">
                View my work
                <ArrowRight className="size-4" />
              </a>
            }
          />
          <Button
            size="lg"
            variant="outline"
            nativeButton={false}
            className="h-11 rounded-full px-6"
            render={
              <a href={siteConfig.resumeUrl} download>
                Download resume
                <Download className="size-4" />
              </a>
            }
          />
        </motion.div>

        <motion.div
          variants={item}
          className="mt-16 grid w-full grid-cols-3 gap-4 border-t border-border pt-8 sm:max-w-lg"
        >
          {[
            { value: "3.4+", label: "Years experience" },
            { value: "4+", label: "Production platforms" },
            { value: "10+", label: "Team collaborations" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="font-heading text-2xl font-semibold sm:text-3xl">
                {stat.value}
              </span>
              <span className="mt-1 text-center text-xs text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
