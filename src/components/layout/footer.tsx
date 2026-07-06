import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/data/site-config";
import { navLinks } from "@/data/nav";

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-6 pb-10">
      <Separator className="mb-8" />
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <p className="font-heading font-semibold">
            <span className="text-gradient">{siteConfig.name}</span>
          </p>
          <p className="text-sm text-muted-foreground">{siteConfig.title}</p>
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-foreground">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={`mailto:${siteConfig.email}`}
            aria-label="Email"
            className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
          >
            <Mail className="size-4" />
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
          >
            <LinkedinIcon className="size-4" />
          </a>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
          >
            <GithubIcon className="size-4" />
          </a>
        </div>
      </div>

      <p className="mt-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {siteConfig.name}. Built with Next.js, Tailwind CSS & Framer Motion.
      </p>
    </footer>
  );
}
