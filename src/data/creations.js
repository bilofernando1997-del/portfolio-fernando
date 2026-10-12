// Liste de mes créations.
// Pour ajouter un projet, il suffit d'ajouter un objet dans ce tableau :
// la carte et la modale se remplissent automatiquement.
export const creations = [
  {
    id: 1,
    titre: 'Mon CV',
    date: '2026',
    image: '/images/cv.svg',
    photos: ['/images/cv.svg', '/images/cv-detail.svg'],
    description: 'Mon curriculum vitae : mon parcours en marketing digital, mes expériences et ma formation de développeur Web et Mobile.',
    technologies: ['Word', 'Mise en page', 'PDF'],
    lien: '/docs/cv-fernando-bilo.pdf',
    texteLien: 'Voir le CV (PDF)',
    github: ''
  },
  {
    id: 2,
    titre: 'Cahier des charges',
    date: 'Octobre 2026',
    image: '/images/cahier-des-charges.svg',
    photos: ['/images/cahier-des-charges.svg', '/images/cahier-detail.svg'],
    description: 'Le cahier des charges de ce portfolio : objectifs, public visé, pages, fonctionnalités, charte graphique et planning.',
    technologies: ['Analyse du besoin', 'Rédaction', 'PDF'],
    lien: '/docs/cahier-des-charges.pdf',
    texteLien: 'Voir le cahier des charges (PDF)',
    github: ''
  },
  {
    id: 3,
    titre: 'Ce portfolio',
    date: 'Octobre 2026',
    image: '/images/portfolio.svg',
    photos: ['/images/portfolio.svg', '/images/portfolio-detail.svg'],
    description: 'Le site que vous visitez : un portfolio réalisé avec Vue.js 3 et Vue Router, avec une modale dynamique, un formulaire de contact et une page 404.',
    technologies: ['Vue.js 3', 'Vue Router', 'HTML5', 'CSS3 (Flexbox)', 'JavaScript', 'Git / GitHub'],
    lien: 'https://github.com/bilofernando1997-del/portfolio-fernando',
    texteLien: 'Voir le code sur GitHub',
    github: ''
  }
]
