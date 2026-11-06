# Portfolio — Martín Lencina

Portfolio profesional minimalista para búsqueda laboral como **Senior Full Stack Developer**.

## Stack

- [Next.js](https://nextjs.org) (App Router) — SSR/SSG, SEO y despliegue en Vercel
- [Tailwind CSS](https://tailwindcss.com) v4 — diseño responsive + dark/light mode
- [Framer Motion](https://www.framer.com/motion/) — micro-animaciones
- [Lucide React](https://lucide.dev) — iconografía
- [next-themes](https://github.com/pacocoursey/next-themes) — tema sistema / claro / oscuro

## Empezar

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Scripts

| Comando       | Descripción              |
| ------------- | ------------------------ |
| `npm run dev` | Servidor de desarrollo   |
| `npm run build` | Build de producción    |
| `npm run start` | Servir build local     |
| `npm run lint`  | ESLint                 |

## Contenido editable

Los datos del portfolio viven en `src/data/`:

- `profile.ts` — nombre, bio, enlaces, CV
- `experience.ts` — trayectoria laboral
- `skills.ts` — categorías de stack
- `projects.ts` — proyectos destacados

El CV PDF está en `public/CV_Martin_Lencina.pdf`.

## Despliegue en Vercel

1. Subí el repo a GitHub.
2. Importá el proyecto en [vercel.com](https://vercel.com).
3. Framework preset: **Next.js** (detectado automáticamente).
4. Deploy.

Opcional: actualizá `metadataBase` en `src/app/layout.tsx` con tu dominio final.
