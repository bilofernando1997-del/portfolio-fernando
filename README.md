# Portfolio de Fernando Bilo

Portfolio personnel réalisé avec **Vue.js 3** dans le cadre de ma formation de développeur Web et Mobile.
Il présente mon profil, mes créations (CV, cahier des charges, site communautaire) et un formulaire de contact.

## Technologies

- Vue.js 3 (Composition API, `<script setup>`)
- Vue Router 4 (page d'accueil + page 404)
- Vite (outil de développement)
- HTML5, CSS3 (Flexbox), JavaScript
- Git et GitHub

## Prérequis

- [Node.js](https://nodejs.org/) version 18 ou plus (avec npm)
- Git
- Un éditeur de code, par exemple Visual Studio Code

## Installation

```bash
# 1. Cloner le projet
git clone https://github.com/bilofernando1997-del/portfolio-fernando.git
cd portfolio-fernando

# 2. Installer les dépendances
npm install

# 3. Créer le fichier .env à partir de l'exemple
#    puis y mettre l'adresse e-mail qui recevra les messages
cp .env.example .env
```

Sous Windows (PowerShell), l'étape 3 s'écrit : `copy .env.example .env`

## Lancement

```bash
npm run dev
```

Puis ouvrir l'adresse affichée dans le terminal (en général http://localhost:5173).

Autres commandes :

- `npm run build` : crée la version finale du site dans le dossier `dist`
- `npm run preview` : affiche la version finale en local

## Structure du projet

```
portfolio-fernando/
├── public/
│   ├── docs/            → PDF du CV et du cahier des charges
│   └── images/          → logo, icônes, images des créations, image 404
├── src/
│   ├── assets/style.css → styles généraux et couleurs
│   ├── components/
│   │   ├── AppHeader.vue     → logo + menu (élément actif souligné)
│   │   ├── AppFooter.vue     → réseaux sociaux + date de mise à jour
│   │   ├── ContactForm.vue   → formulaire de contact
│   │   └── CreationModal.vue → modale dynamique d'une création
│   ├── data/creations.js → liste des créations (données de la modale)
│   ├── router/index.js   → routes : accueil et 404
│   ├── views/
│   │   ├── HomePage.vue  → présentation, créations, contact
│   │   └── NotFound.vue  → page 404
│   ├── App.vue
│   └── main.js
├── .env.example          → modèle de variable d'environnement
├── index.html            → title et meta description (référencement)
└── package.json
```

## Formulaire de contact

L'adresse de destination est lue dans la variable d'environnement `VITE_CONTACT_EMAIL` (fichier `.env`).
À l'envoi, le formulaire vérifie que les champs sont remplis, puis ouvre la messagerie de l'utilisateur
avec l'objet et le message déjà écrits (lien `mailto:`). Le fichier `.env` n'est pas publié sur GitHub.

## Auteur

Fernando Bilo, développeur Web et Mobile en formation
