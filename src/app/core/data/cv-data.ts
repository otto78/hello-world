import type { CVData } from '../types/cv.types';

export const cvData: CVData = {
  personal: {
    name: 'Andrea Mazzarotto',
    role: 'Web Developer',
    location: 'San Stino di Livenza - VE',
    email: 'andrea.mazzarotto@gmail.com',
    phone: '+39 339 4987305',
    website: 'https://andreamazzarotto.it',
    bio: `Sono uno sviluppatore Web Full-Stack. Conosco i linguaggi di programmazione HTML, CSS, JS, PHP, il Framework Bootstrap e Laravel e sono formato sulla metodologia Agile e Scrum. Sono appassionato di Grafica e orientato al Frontend. Arrivo dal corso Full-Stack Web Developer di Aulab Hackademy e da studi universitari di Arte, Cinema e Teatro. Sono una persona artistica dalle spiccate doti relazionali e sempre alla ricerca di nuove sfide. Aspiro al costante miglioramento di me stesso.`,
  },
  socials: [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/andrea-mazzarotto-63141936/', icon: 'bi-linkedin' },
    { name: 'Facebook', url: 'https://www.facebook.com/andrea.mazzarotto', icon: 'bi-facebook' },
    { name: 'YouTube', url: 'https://www.youtube.com/channel/UCmLoj1Q9Yrkr-MoQzSaOy4w', icon: 'bi-youtube' },
    { name: 'Twitter', url: 'https://twitter.com/amazzar8', icon: 'bi-twitter' },
    { name: 'GitHub', url: 'https://github.com/otto78', icon: 'bi-github' },
  ],
  experiences: [
    {
      title: 'Full-Stack Developer Junior',
      company: 'Presto.it - Portale di annunci',
      location: 'Aulab Hackademy',
      period: 'Nov 2021 - Gen 2022',
      description: [
        'Sviluppo web design e sito con Wordpress ed Elementor Page builder',
        'Sviluppo Local SEO',
      ],
    },
    {
      title: 'Web Graphic Designer',
      company: 'www.seforaanonello.it',
      location: 'Freelance',
      period: 'Mar 2020 - Apr 2020',
      description: ['Gestione del servizio e del personale'],
    },
    {
      title: 'Resident Barman',
      company: 'Falkensteiner Hotel & Spa *****',
      location: 'Jesolo',
      period: 'Apr 2019 - Ott 2021',
      description: ['Preparazione Cocktail'],
    },
    {
      title: 'Barman Manager',
      company: 'Bar Rosa - Camping Marina di Venezia *****',
      location: 'Jesolo',
      period: 'Apr 2014 - Ott 2019',
    },
    {
      title: 'Videomaker',
      company: 'Freelance',
      location: 'Bologna - Jesolo',
      period: '2003 - 2014',
    },
  ],
  education: [
    {
      degree: 'Corso Full-Stack Developer',
      institution: 'Aulab Hackademy',
      period: '2021 - 2022',
    },
    {
      degree: 'Laurea in DAMS - Discipline di Arte, Musica e Spettacolo',
      institution: 'Università degli Studi di Bologna',
      period: '2001 - 2008',
    },
    {
      degree: 'Maturità Scientifica',
      institution: 'Liceo Scientifico G. Galilei - San Donà di Piave',
      period: '1993 - 1998',
    },
  ],
  skills: [
    { name: 'frontend', items: ['HTML', 'CSS', 'JavaScript', 'Bootstrap 5', 'OOP'] },
    { name: 'backend', items: ['Laravel', 'Laravel Scout', 'Laravel Fortify', 'Google Vision API', 'Spatie'] },
    { name: 'cms', items: ['WordPress', 'Elementor'] },
    {
      name: 'creative',
      items: ['Adobe Premiere CS6', 'Adobe After Effects CS6', 'Adobe Photoshop CS6', 'Adobe Illustrator CS6', 'Open Office', 'Garageband'],
    },
    {
      name: 'video',
      items: ['Sceneggiatura', 'Ripresa', 'Fotografia', 'Regia', 'Recitazione', 'Montaggio', 'Post-Produzione Video/audio', 'Copywriting'],
    },
    { name: 'languages', items: ['Italiano (madrelingua)', 'Inglese (ottimo)', 'Tedesco (base)'] },
  ],
  projects: [
    {
      title: 'Breackout Game',
      link: 'https://otto78.github.io/breakout/',
      description: 'Allena i tuoi riflessi con Breackout game! Il gioco più antico della rete!',
      tech: ['HTML', 'CSS', 'Bootstrap', 'JS Vanilla', 'OOP'],
      image: 'breackout.png',
    },
    {
      title: 'seforaantonello.it',
      link: 'http://www.seforaantonello.it',
      description: 'Sito web personale della dott.ssa Psicologa Sefora Antonello',
      tech: ['Wordpress', 'Elementor'],
      image: 'seforaAntonello.png',
    },
    {
      title: 'Memory Game',
      link: 'http://otto78.github.io/memory',
      description: 'Allena la tua memoria con Memory, il gioco di carte più famoso!',
      tech: ['HTML', 'CSS', 'JS Vanilla', 'OOP'],
      image: 'memory.png',
    },
    {
      title: 'presto.it',
      link: 'https://github.com/otto78/presto.it',
      description: 'Portale di annunci e scambi.',
      tech: ['HTML', 'CSS', 'JS', 'jQuery', 'Laravel 8', 'Fortify', 'Spatie', 'Google Vision API'],
      image: 'presto.png',
    },
  ],
};
