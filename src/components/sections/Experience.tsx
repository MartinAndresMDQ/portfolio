import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 border-t border-border/60 bg-section-glow py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Carrera"
            title="Experiencia profesional"
            description="Trayectoria completa en banca, pagos, salud y sector público — del backend crítico al frontend de gestión."
            className="mb-14"
          />
        </FadeIn>

        <ol className="relative space-y-6 sm:ml-2 sm:border-l sm:border-border/70 sm:pl-0">
          {experience.map((job, index) => (
            <li key={`${job.company}-${job.period}`} className="relative sm:pl-10">
              <span
                className="absolute -left-[5px] top-8 hidden size-2.5 rounded-full bg-gradient-to-br from-accent to-accent-secondary shadow-[0_0_12px] shadow-accent/60 sm:block"
                aria-hidden
              />

              <FadeIn delay={0.05 * index}>
                <article className="glass glass-hover glow-border rounded-2xl p-6 sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="font-mono text-xs tracking-wide text-accent">{job.period}</p>
                      <h3 className="mt-2 font-display text-xl font-semibold text-foreground sm:text-2xl">
                        {job.role}
                      </h3>
                      <p className="mt-1 text-base text-accent-secondary">{job.company}</p>
                      <p className="mt-1 text-sm text-muted">{job.location}</p>
                    </div>
                    <span className="rounded-full border border-border/80 bg-background/30 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted">
                      {index === 0 ? "Actual" : `Rol ${experience.length - index}`}
                    </span>
                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-foreground/90 sm:text-base">
                    {job.summary}
                  </p>

                  <ul className="mt-5 space-y-2.5">
                    {job.highlights.map((item) => (
                      <li
                        key={item}
                        className="relative pl-4 text-sm leading-relaxed text-muted before:absolute before:left-0 before:top-[0.55em] before:size-1.5 before:rounded-full before:bg-accent/70"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2 border-t border-border/60 pt-5">
                    {job.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-border/70 bg-background/35 px-2.5 py-1 font-mono text-[11px] tracking-wide text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              </FadeIn>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
