# Cursor Rules - Angular Standalone CV Project

## Regole globali (sempre)
- Preferire soluzioni semplici, leggibili e a basso accoppiamento.
- Seguire SRP: ogni file/modulo ha una responsabilita chiara.
- Naming semantico e coerente (no acronimi non comuni).
- Non introdurre over-engineering se non necessario per i requisiti.

## Angular: Standalone-only
- Usare esclusivamente componenti standalone.
- Evitare NgModules.
- Separare responsabilita:
  - presentazione (componenti)
  - orchestrazione (container se serve)
  - modelli e tipi (types/interfaces)
  - logica condivisa (shared/core)

## Struttura del progetto (feature-first)
- Organizzare per feature con cartelle:
  - `features/`
  - `shared/`
  - `core/`
- In `features/`, tenere tutto ciò che serve per una feature vicino (componenti, types, servizi specifici).
- In `shared/`, mettere solo ciò che è riusabile tra feature.
- In `core/`, tenere le astrazioni/servizi “di base” (es. wrapper di fetch/HTTP, guardie comuni) e le convenzioni.

## Component design
- Preferire componenti presentazionali: input/output puliti, niente logica pesante nel template.
- Nel template, usare espressioni semplici: niente condizioni complesse o trasformazioni annidate.
- Tipizzare sempre `@Input()` e `@Output()`.
- Se possibile, usare `ChangeDetectionStrategy.OnPush`.

## State management (Signals)
- Usare `signal()` per stato locale quando serve reattività “in componenti”.
- Usare `computed()` per derived state.
- Usare `effect()` solo quando ha un vero side-effect o sincronizza sorgenti esterne.
- Evitare `subscribe()` manuali: preferire `async pipe` o conversioni verso signals.
- Evitare NgRx a meno di requisiti espliciti.
- Centralizzare lo stato solo se una feature lo condivide davvero; altrimenti tenerlo localmente.

## Type safety (obbligatorio)
- Rispettare la configurazione TypeScript del progetto (strict abilitato via `tsconfig.*`).
- Vietato usare `any` nel codice.
- Preferire `unknown` al posto di `any` e fare type narrowing.
- Tutti i modelli del CV (es. Experience/Skills/Projects/Education) devono avere interfacce/typen definiti e riusati.

## Dependency injection
- Usare `inject()` quando è il modo più leggibile e coerente nel componente/service.
- Usare constructor injection solo quando migliora chiarezza o per casi consolidati.
- Limitare servizi “globali” e tenere scope il più local possibile.

## Performance e qualità UI
- Usare `trackBy` nelle liste renderizzate con `*ngFor` quando la lista può cambiare.
- Se ci sono route: preferire lazy loading dove sensato.
- Immagini: usare formati ottimizzati (es. webp) e lazy loading quando appropriato.
- Accessibilita di base: usare HTML semantico e attributi aria quando serve.
- Mobile-first: evitare layout che “rompono” su schermi piccoli.

## Naming & dimensioni
- File: `kebab-case` (es. `cv-page.ts`, `experience-card.ts`).
- Componenti/classi: `PascalCase`.
- Ridurre la dimensione: target massimo 300 righe per file; spezzare per feature/compiti se cresce.

## Stile del codice e lint/format
- Rispettare eslint/prettier già configurati nel progetto.
- Non cambiare stile “a caso”: applicare solo ciò che serve per compilare/adeguarsi agli standard esistenti.
- Niente commenti inutili: usare nomi e struttura del codice per l’auto-esplicitazione.

## Quando Cursor genera modifiche (comportamento richiesto)
- Se c’è ambiguita (es. dove mettere una nuova feature o che tipo usare), chiedere chiarimenti prima di procedere.
- Prima di modificare molte parti, spiegare il piano in 3-5 punti e indicare quali file verranno toccati.
- Dopo la modifica, includere i comandi di verifica minimi (es. `npm test`/`npm run build`) se esistono in package.json o se ragionevolmente necessari.

