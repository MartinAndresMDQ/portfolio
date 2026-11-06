import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-t border-border/60 bg-section-glow py-24 sm:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
        <FadeIn>
          <SectionHeading
            eyebrow="Trayectoria"
            title="Sobre mí"
            description="Más de 10 años resolviendo problemas end-to-end: autonomía, calidad de código y mejora continua de procesos técnicos."
          />

          <div className="mt-8 grid grid-cols-2 gap-3">
            {profile.focus.map((item, index) => (
              <FadeIn key={item.label} delay={0.08 * (index + 1)}>
                <div className="glass glass-hover rounded-2xl p-4">
                  <p className="font-display text-sm font-semibold text-accent">{item.label}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted">{item.detail}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>

        <div className="space-y-5">
          {profile.about.map((paragraph, index) => (
            <FadeIn key={paragraph} delay={0.08 * (index + 1)}>
              <p className="text-base leading-relaxed text-muted sm:text-lg">{paragraph}</p>
            </FadeIn>
          ))}

          <FadeIn delay={0.4}>
            <div className="glass glow-border rounded-2xl p-5">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent-secondary">
                Formación
              </p>
              {profile.education.map((item) => (
                <div key={item.title} className="mt-2">
                  <p className="font-medium text-foreground">{item.title}</p>
                  <p className="text-sm text-muted">
                    {item.place} · {item.period}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
