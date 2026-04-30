# Örebro Plåt AB — Hemsida

En modern, responsiv och tillgänglig hemsida för plåtslageriföretaget Örebro Plåt AB. Sidan är helt **statisk** — inget backend, ingen databas, inga API-anrop — och kan hostas var som helst (Netlify, Vercel, GitHub Pages, valfri statisk webserver eller Lovable).

## Teknisk stack

- **React 18** + **TypeScript 5**
- **Vite 5** (byggverktyg och dev-server)
- **Tailwind CSS 3** med eget designsystem (HSL-tokens i `src/index.css`)
- **shadcn/ui** komponenter
- **React Router** för routing
- **lucide-react** för ikoner

## Förutsättningar

Du behöver ett av följande installerat:

- [Bun](https://bun.sh) (rekommenderas — snabbast)
- eller [Node.js](https://nodejs.org) ≥ 18 med `npm`/`pnpm`/`yarn`

## Kom igång lokalt

```bash
# 1. Klona projektet
git clone <repo-url>
cd <repo-mapp>

# 2. Installera beroenden
bun install
# eller: npm install

# 3. Starta dev-servern (hot reload på http://localhost:8080)
bun run dev
# eller: npm run dev
```

## Bygga för produktion

```bash
# Skapar en optimerad statisk build i mappen dist/
bun run build
# eller: npm run build
```

Mappen `dist/` innehåller efter byggningen ren HTML, CSS och JS — inga serverkrav.

### Förhandsgranska produktionsbygget lokalt

```bash
bun run preview
# eller: npm run preview
```

## Driftsättning (statisk hosting)

Ladda upp innehållet i `dist/` till valfri statisk värd:

| Tjänst | Kommando / inställning |
|---|---|
| **Netlify** | Build command: `npm run build` · Publish directory: `dist` |
| **Vercel** | Framework preset: **Vite** (auto-detekteras) |
| **GitHub Pages** | Pusha innehållet i `dist/` till `gh-pages`-branchen |
| **Egen server (nginx/Apache)** | Servera `dist/` som static root |

> **Tips för SPA-routing:** konfigurera servern att falla tillbaka till `index.html` för okända rutter så att React Router fungerar vid direktbesök på undersidor.

## Projektstruktur

```
src/
├── assets/              # Bilder (hero, projekt)
├── components/
│   ├── site/            # Sidkomponenter (Header, Hero, Services, ...)
│   └── ui/              # shadcn/ui-komponenter
├── pages/
│   ├── Index.tsx        # Startsida (alla sektioner)
│   └── NotFound.tsx     # 404-sida
├── index.css            # Designsystem (HSL-tokens, typografi)
└── main.tsx             # App-entry
```

## Anpassa innehåll

Allt textinnehåll, telefonnummer, adress och projektreferenser ligger hårdkodat i komponenterna under `src/components/site/`:

- **Telefon / e-post / adress** → `src/components/site/Contact.tsx` och `src/components/site/Header.tsx`
- **Tjänster** → `src/components/site/Services.tsx`
- **Projekt** → `src/components/site/Projects.tsx`
- **FAQ** → `src/components/site/FAQ.tsx`
- **Om oss** → `src/components/site/About.tsx`
- **SEO / meta / JSON-LD** → `index.html`

## Anpassa design

Färger, skuggor och typografi definieras som HSL-tokens i `src/index.css` och mappas i `tailwind.config.ts`. Ändra tokens där så slår det igenom överallt.

## Tillgänglighet

Sidan är byggd enligt **WCAG 2.1 AA**:

- Skip-to-content-länk
- Semantisk HTML och korrekta rubriknivåer
- Synliga fokus-tillstånd
- Tillräcklig färgkontrast
- ARIA-attribut där det behövs

## Licens

© Örebro Plåt AB. Alla rättigheter förbehållna.
