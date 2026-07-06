import { Download, Mail } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { siteConfig } from "@/data/site-config";

const links = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: siteConfig.linkedin,
    icon: LinkedinIcon,
  },
  {
    label: "GitHub",
    value: "View my code",
    href: siteConfig.github,
    icon: GithubIcon,
  },
];

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something together"
        description="Open to new full-stack and GenAI opportunities. Reach out through any of the channels below."
        align="center"
        className="items-center text-center"
      />

      <Reveal className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-3">
        {links.map((link) => (
          <Card key={link.label} className="border border-border/60 shadow-none transition-colors hover:border-primary/40">
            <CardContent>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex flex-col items-center gap-3 text-center"
              >
                <div className="flex size-11 items-center justify-center rounded-full bg-gradient-to-br from-brand-from to-brand-to text-white">
                  <link.icon className="size-5" />
                </div>
                <div>
                  <p className="font-heading text-sm font-semibold">{link.label}</p>
                  <p className="mt-0.5 break-all text-xs text-muted-foreground">{link.value}</p>
                </div>
              </a>
            </CardContent>
          </Card>
        ))}
      </Reveal>

      <Reveal delay={0.15} className="mt-10 flex justify-center">
        <Button
          size="lg"
          nativeButton={false}
          className="h-11 rounded-full px-6"
          render={
            <a href={siteConfig.resumeUrl} download>
              Download full resume
              <Download className="size-4" />
            </a>
          }
        />
      </Reveal>
    </section>
  );
}
