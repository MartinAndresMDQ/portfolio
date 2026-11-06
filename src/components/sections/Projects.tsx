import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

export function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 border-t border-border/60 bg-surface py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Selección"
            title="Proyectos destacados"
            description="Plataformas financieras, soluciones de comunicación y proyectos personales desarrollados end-to-end."
            className="mb-14"
          />
        </FadeIn>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={0.07 * index} className="h-full">
              <article className="group glass glass-hover glow-border flex h-full flex-col rounded-2xl p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl font-semibold text-foreground transition-colors group-hover:text-accent">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="size-5 shrink-0 text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    strokeWidth={1.5}
                  />
                </div>

                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>

                <p className="mt-6 font-mono text-[11px] leading-relaxed tracking-wide text-accent/90">
                  {project.tech.join(" · ")}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
