import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © 2026 <span className="text-foreground">{profile.name}</span>. Disponible para nuevos
          desafíos.
        </p>
        <p className="font-mono text-xs tracking-wide text-accent/80">{profile.location}</p>
      </div>
    </footer>
  );
}
