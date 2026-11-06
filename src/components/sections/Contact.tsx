"use client";

import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { profile } from "@/data/profile";
import { Mail, MessageCircle, Send } from "lucide-react";
import { useState, type FormEvent } from "react";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = encodeURIComponent(`Contacto portfolio — ${name}`);
    const body = encodeURIComponent(
      `Nombre: ${name}\nEmail: ${email}\n\n${message}`,
    );

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
    form.reset();
  }

  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-border/60 bg-section-glow py-24 sm:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <FadeIn>
          <SectionHeading
            eyebrow="Hablemos"
            title="Contacto"
            description="Si buscás un Senior Full Stack con experiencia real en sistemas críticos, escribime."
          />

          <ul className="mt-10 space-y-3">
            {[
              {
                href: `mailto:${profile.email}`,
                label: profile.email,
                icon: <Mail className="size-4" strokeWidth={1.75} />,
                external: false,
              },
              {
                href: profile.linkedin,
                label: "LinkedIn",
                icon: <LinkedinIcon className="size-4" />,
                external: true,
              },
              {
                href: profile.github,
                label: "GitHub",
                icon: <GithubIcon className="size-4" />,
                external: true,
              },
              {
                href: profile.whatsapp,
                label: "WhatsApp",
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
                  className="inline-flex w-full items-center gap-3 rounded-2xl glass glass-hover px-3 py-2.5 text-foreground transition-colors hover:text-accent sm:w-auto"
                >
                  <span className="inline-flex size-10 items-center justify-center rounded-xl border border-border/70 bg-background/30">
                    {item.icon}
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={0.12}>
          <form
            onSubmit={handleSubmit}
            className="glass glow-border rounded-2xl p-6 sm:p-8"
            noValidate
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block sm:col-span-1">
                <span className="mb-2 block text-sm text-muted">Nombre</span>
                <input
                  name="name"
                  required
                  autoComplete="name"
                  className="w-full rounded-xl border border-border/80 bg-background/40 px-3 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted/60 focus:border-accent"
                  placeholder="Tu nombre"
                />
              </label>
              <label className="block sm:col-span-1">
                <span className="mb-2 block text-sm text-muted">Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="w-full rounded-xl border border-border/80 bg-background/40 px-3 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted/60 focus:border-accent"
                  placeholder="tu@email.com"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-2 block text-sm text-muted">Mensaje</span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full resize-y rounded-xl border border-border/80 bg-background/40 px-3 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted/60 focus:border-accent"
                  placeholder="Contame sobre el rol o el desafío..."
                />
              </label>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Button type="submit">
                Enviar mensaje
                <Send className="size-4" />
              </Button>
              {status === "sent" ? (
                <p className="text-sm text-muted">
                  Se abrirá tu cliente de correo para completar el envío.
                </p>
              ) : null}
            </div>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
