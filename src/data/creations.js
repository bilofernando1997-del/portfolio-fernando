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
    titre: 'Site communautaire',
    date: '2026',
    image: '/images/site-communautaire.svg',
    photos: ['/images/site-communautaire.svg', '/images/site-detail.svg'],
    description: 'Un site communautaire dynamique réalisé pendant ma formation.',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    // À REMPLACER par l'adresse de ton site et de ton dépôt GitHub
    lien: 'https://github.com/',
    texteLien: 'Visiter le site',
    github: 'https://github.com/'
  }
]
