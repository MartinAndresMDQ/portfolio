"use client";

import { Button } from "@/components/ui/Button";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { profile } from "@/data/profile";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";

export function Hero() {
  const reduce = useReducedMotion();

  const item = (delay: number) =>
    reduce
      ? undefined
      : {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section
      id="top"
      className="relative isolate min-h-[100svh] overflow-hidden bg-hero-wash pt-16"
      aria-labelledby="hero-name"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid" aria-hidden />

      {/* Soft floating orbs */}
      <div
        className="pointer-events-none absolute -left-24 top-24 size-72 rounded-full bg-accent/20 blur-3xl dark:bg-accent/15"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-10 size-80 rounded-full bg-accent-secondary/25 blur-3xl dark:bg-accent-secondary/20"
        aria-hidden
      />

      {/* Tech structure motif */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[50%] lg:block"
        aria-hidden
      >
        <div className="absolute inset-0 bg-gradient-to-l from-background/40 via-transparent to-transparent" />
        <svg
          className="absolute inset-0 h-full w-full opacity-40 dark:opacity-30"
          viewBox="0 0 600 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="80" y="120" width="180" height="120" stroke="currentColor" className="text-border" strokeWidth="1.5" />
          <rect x="300" y="180" width="160" height="90" stroke="currentColor" className="text-border" strokeWidth="1.5" />
          <rect x="160" y="320" width="220" height="140" stroke="currentColor" className="text-accent" strokeWidth="1.5" />
          <rect x="420" y="360" width="120" height="80" stroke="currentColor" className="text-accent-secondary" strokeWidth="1.5" />
          <rect x="100" y="520" width="140" height="100" stroke="currentColor" className="text-border" strokeWidth="1.5" />
          <rect x="280" y="540" width="200" height="110" stroke="currentColor" className="text-border" strokeWidth="1.5" />
          <path
            d="M170 240V320M380 270V320M270 460V520M480 440V540"
            stroke="currentColor"
            className="text-muted"
            strokeWidth="1"
            strokeDasharray="4 6"
          />
          <circle cx="170" cy="240" r="4" className="fill-accent" />
          <circle cx="380" cy="270" r="4" className="fill-accent-secondary" />
          <circle cx="270" cy="460" r="4" className="fill-accent" />
          <circle cx="480" cy="440" r="4" className="fill-accent-secondary" />
        </svg>
      </div>

      <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-6xl flex-col justify-center px-5 py-20 sm:px-8">
        <div className="max-w-2xl">
          <motion.div {...item(0.05)}>
            <span className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
              <span className="size-1.5 animate-pulse rounded-full bg-accent shadow-[0_0_10px] shadow-accent" />
              Disponible para nuevas oportunidades
            </span>
          </motion.div>

          <motion.h1
            id="hero-name"
            className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
            {...item(0.12)}
          >
            <span className="text-gradient">{profile.name}</span>
          </motion.h1>

          <motion.p
            className="mt-4 font-display text-xl text-muted sm:text-2xl"
            {...item(0.2)}
          >
            {profile.role}
          </motion.p>

          <motion.p
            className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
            {...item(0.28)}
          >
            {profile.headline} {profile.summary}
          </motion.p>

          <motion.div className="mt-10 flex flex-wrap items-center gap-3" {...item(0.36)}>
            <Button href="#projects">
              Ver Proyectos
              <ArrowDown className="size-4" />
            </Button>
            <Button href={profile.cvUrl} variant="secondary" download>
              Descargar CV
              <Download className="size-4" />
            </Button>
          </motion.div>

          <motion.div className="mt-8 flex items-center gap-4" {...item(0.44)}>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl glass px-3 py-2 text-sm text-muted transition-colors hover:text-accent"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="size-4" />
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl glass px-3 py-2 text-sm text-muted transition-colors hover:text-accent"
              aria-label="GitHub"
            >
              <GithubIcon className="size-4" />
              GitHub
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
