# CLAUDE.md - Linee guida per lo sviluppo Angular CV

## Contesto del progetto
Migrazione del sito CV da Vanilla JS (`hello-world/`) ad Angular moderno standalone.

## Stack target
- **Angular 17+** con componenti standalone (no NgModules)
- **Signals** per state management (no RxJS manuale, no NgRx)
- **Bootstrap 5** via CDN o SCSS custom
- **TypeScript strict** (vietato `any`)
- **Deploy statico** (serverless: dati JSON locali, no backend)

## Architettura
```
src/
├── features/           # Feature-first organization
│   ├── home/           # Hero section con foto/bio
│   ├── portfolio/      # Lista progetti
│   └── cv/             # Esperienze, skills, educazione
├── shared/             # Componenti riusabili (card, buttons)
├── core/               # Services, types, interfaces
└── styles/             # Global styles + responsive
```

## Principi di sviluppo

### Signals & State
```typescript
// ✅ CORRETTO
const showBio = signal(false);
const showJobs = signal(false);
const devMode = computed(() => showBio() ? 'dx' : 'sx');

// ❌ SBAGLIATO
let showBio = false;
this.showBio.subscribe(...)
```

### Componenti
- Standalone: `standalone: true`
- ChangeDetection: `ChangeDetectionStrategy.OnPush`
- Input tipizzati: `@Input({ required: true }) items: Project[];`
- Max 300 righe per file

### Naming
- File: `kebab-case.ts` (es. `portfolio-card.ts`)
- Componenti: `PascalCase` (es. `PortfolioCardComponent`)
- Signals: `camelCase` (es. `showJobs`, `imgFiltered`)

### Responsive
Mantenere i 6 breakpoints originali in `styles.scss`:
- 1400px, 1200px, 992px, 767px, 476px, 400px

## Stati da replicare (da main.js)

| Signal | Tipo | Default | CSS mapping |
|--------|------|---------|-------------|
| `showJobs` | boolean | false | `#jobs.d-none`, `#card.d-none` |
| `showBio` | boolean | false | `#bio.d-none` + `fade-in` |
| `imgFiltered` | boolean | false | `img.filter` |
| `devMode` | 'sx' \| 'dx' | 'sx' | `dev-sx` / `dev-dx` |
| `frecciaMode` | 'downLeft' \| 'x' | 'downLeft' | `bi-arrow-down-left` / `bi-x-lg` |

## Azioni da implementare

### `toggleBio()` (freccia)
- Toggle devMode, frecciaMode, imgFiltered, showBio
- Se `showJobs === true`: reset a stato "card"

### `togglePortfolio()` (portfolioBtn)
- Se `imgFiltered === true`: mostra jobs, nascondi bio
- Altrimenti: toggle jobs/card + devMode + frecciaMode

### `goBack()` (backBtn)
- Nascondi jobs, mostra card
- Toggle devMode (mantiene frecciaMode corrente)

## Dati CV
I dati sono in `data.md` - estrarre in `core/data/cv-data.ts` come costanti tipizzate:
```typescript
interface PersonalInfo { name: string; role: string; ... }
interface Experience { title: string; company: string; ... }
interface Project { title: string; link: string; tech: string[]; ... }
```

## Comandi utili
```bash
ng serve --port=4202        # Dev server (porta fissa 4202)
ng build                    # Build production
ng lint                     # Lint check
```

## Porta dev server
Usare sempre **porta 4202** per `ng serve`.

## Regole di comportamento
1. Prima di modifiche estese: spiegare piano in 3-5 punti
2. Chiedere se ambiguità su feature placement o tipi
3. Dopo modifiche: indicare comandi di verifica
4. Mantenere SRP: un file = una responsabilità
5. No over-engineering: soluzioni semplici e leggibili
