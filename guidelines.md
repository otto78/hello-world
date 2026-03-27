Storia/animazioni che dobbiamo replicare (da main.js)
Tre azioni principali:

#freccia:
Alterna #dev tra dev-sx e dev-dx
Alterna l’icona tra bi-arrow-down-left e bi-x-lg
Alterna img tra “con filtro” e “senza filtro” (filter)
Alterna la bio: d-none / fade-in (la bio si mostra/nasconde)
Caso speciale: se stiamo nel pannello “jobs” (cioè #card ha d-none), allora ritorna allo stato “card” e nasconde bio + rimuove filter
#portfolioBtn:
Caso A (se img ha filter): passa dallo stato bio verso jobs (mostra jobs, nasconde bio, rimuove filtro)
Caso B (se img non ha filter): toggla tra card e jobs e contemporaneamente toggla #dev e l’icona freccia
#backBtn:
Rimette lo stato “card” (nasconde jobs, mostra card)
Toggla solo #dev (non rimette l’icona freccia: rimane nello stato che aveva)
Stati Angular consigliati (signals)
Per replicare fedelmente anche i “casi speciali”, conviene separare le decisioni in segnali indipendenti e poi rifletterle nelle classi CSS:

showJobs: boolean (in CSS equivale a #jobs.d-none e #card.d-none)
showBio: boolean (in CSS equivale a #bio.d-none + fade-in)
imgFiltered: boolean (in CSS equivale a img.filter)
devMode: 'sx' | 'dx' (in CSS equivale a dev-sx / dev-dx)
frecciaMode: 'downLeft' | 'x' (in CSS equivale a bi-arrow-down-left / bi-x-lg)
Stati iniziali (coerenti con index.html + JS)
showJobs = false
showBio = false (bio parte con d-none)
imgFiltered = false
devMode = 'sx' (in HTML #dev ha dev-sx)
frecciaMode = 'downLeft' (in HTML #freccia ha bi-arrow-down-left)
Mapping classi CSS -> template Angular
#dev: [ngClass]="devMode === 'sx' ? 'dev-sx' : 'dev-dx'"
#freccia: [ngClass]="frecciaMode === 'downLeft' ? 'bi-arrow-down-left' : 'bi-x-lg'"
img: [ngClass]="{ 'filter': imgFiltered }"
#bio: [ngClass]="{ 'd-none': !showBio, 'fade-in': showBio }"
#jobs: [ngClass]="{ 'd-none': !showJobs }"
#card: [ngClass]="{ 'd-none': showJobs }"
Breakpoints / responsive da mantenere (da mediaquery.css)
Dobbiamo copiare le stesse regole in Angular (probabilmente src/styles.scss o uno stylesheet globale) perché il responsive agisce su classi/id:

max-width: 1400px, 1200px, 992px, 767px, 476px, 400px
Cambiano: h1/h2, padding di #bloccoTitoli, dimensione font bio, altezza .altezza, trasformazioni di #dev e rotazione di #freccia su mobile.