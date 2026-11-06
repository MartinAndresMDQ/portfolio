import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillCategories } from "@/data/skills";

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 border-t border-border/60 bg-surface py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Capacidades"
            title="Stack tecnológico"
            description="Lenguajes, plataformas y herramientas con las que diseño, implemento y opero soluciones en producción."
            className="mb-14"
          />
        </FadeIn>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, index) => (
            <FadeIn key={category.title} delay={0.07 * index} className="h-full">
              <div className="glass glass-hover glow-border flex h-full flex-col rounded-2xl p-6">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <li key={skill}>
                      <span className="inline-flex rounded-lg border border-border/80 bg-background/40 px-2.5 py-1 text-xs text-muted transition-colors hover:border-accent/40 hover:text-accent">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
