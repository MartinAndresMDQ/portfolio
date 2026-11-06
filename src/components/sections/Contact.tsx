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

      </div>
    </section>
  );
}
