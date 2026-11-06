import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { profile } from "@/data/profile";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-border/60 bg-section-glow py-24 sm:py-28"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <FadeIn className="text-center">
          <SectionHeading
            eyebrow="Hablemos"
            title="Contacto"
            description="¿Tenés una propuesta o querés conversar? Encontrame en estos canales."
            className="mx-auto"
          />
        </FadeIn>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              href: `mailto:${profile.email}`,
              label: profile.email,
              detail: "Enviame un email",
              icon: <Mail className="size-4" strokeWidth={1.75} />,
              external: false,
            },
            {
              href: profile.linkedin,
              label: "LinkedIn",
              detail: "Perfil profesional",
              icon: <LinkedinIcon className="size-4" />,
              external: true,
            },
            {
              href: profile.github,
              label: "GitHub",
              detail: "Mis proyectos",
              icon: <GithubIcon className="size-4" />,
              external: true,
            },
            {
              href: profile.whatsapp,
              label: "WhatsApp",
              detail: "Chat directo",
              icon: <MessageCircle className="size-4" strokeWidth={1.75} />,
              external: true,
            },
          ].map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                {...(item.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group relative flex h-full flex-col items-center rounded-2xl glass glass-hover p-6 text-center text-foreground transition-colors hover:text-accent"
              >
                <span className="inline-flex size-12 items-center justify-center rounded-xl border border-border/70 bg-background/30 text-accent transition-colors group-hover:border-accent/40">
                  {item.icon}
                </span>
                <span className="mt-4 text-sm font-medium">{item.label}</span>
                <span className="mt-1 text-xs text-muted">{item.detail}</span>
                <ArrowUpRight className="absolute right-4 top-4 size-4 text-muted transition-colors group-hover:text-accent" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
