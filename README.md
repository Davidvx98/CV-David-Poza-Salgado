# David Poza Salgado · Portfolio

Portfolio y CV personal bilingüe (español e inglés) hecho con Astro, Tailwind CSS v4 y GSAP.

## Características

- **Bilingüe con rutas i18n** (`/` en español y `/en/` en inglés): los textos viven en `src/i18n/*.json`.
- **Animaciones con GSAP**: intro opcional, canvas animado en el hero y cursor personalizado, todo desactivable desde la cabecera.
- **Modo claro y oscuro** con preferencia persistente.
- **Secciones**: presentación, sobre mí, habilidades, proyectos seleccionados y contacto con formulario (Formspree) y tarjeta de contacto.
- **SEO**: sitemap automático (`@astrojs/sitemap`), metadatos y `robots.txt`.
- CV descargable en PDF desde `public/`.

## Stack

Astro 5 · Tailwind CSS 4 · GSAP 3 · TypeScript

## Desarrollo

```bash
pnpm install
pnpm dev       # http://localhost:4321
pnpm build     # genera ./dist
pnpm preview
```

## Estructura

```text
src/
├── components/   # Hero, About, Skills, Projects, Contact, Header…
├── i18n/         # es.json, en.json y utilidades de traducción
├── layouts/      # Layout base con metadatos
├── pages/        # index.astro y en/index.astro
└── styles/       # global.css
```
