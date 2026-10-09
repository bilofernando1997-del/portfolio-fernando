<!-- En-tête du site : logo + menu de navigation -->
<template>
  <header class="header">
    <!-- Le logo ramène en haut de la page d'accueil -->
    <RouterLink to="/" class="logo" aria-label="Retour en haut de la page d'accueil" @click="remonterEnHaut">
      <img src="/images/logo.svg" alt="Logo Fernando Bilo" width="48" height="48">
      <span>Fernando Bilo</span>
    </RouterLink>

    <!-- Menu avec des liens d'ancrage vers les sections de l'accueil -->
    <nav aria-label="Menu principal">
      <ul class="menu">
        <li v-for="lien in liens" :key="lien.id">
          <RouterLink
            :to="{ path: '/', hash: '#' + lien.id }"
            :class="{ actif: sectionActive === lien.id }"
          >
            {{ lien.texte }}
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Les éléments du menu (id = id de la section dans la page d'accueil)
const liens = [
  { id: 'presentation', texte: 'Présentation' },
  { id: 'creations', texte: 'Créations' },
  { id: 'contact', texte: 'Contact' }
]

// Section actuellement visible à l'écran (pour souligner le bon lien)
const sectionActive = ref('')

// Regarde quelle section est en haut de l'écran
function detecterSection() {
  sectionActive.value = ''
  for (const lien of liens) {
    const section = document.getElementById(lien.id)
    // Si la section existe et que son haut est passé sous le header
    if (section && section.getBoundingClientRect().top <= 150) {
      sectionActive.value = lien.id
    }
  }
}

function remonterEnHaut() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// On écoute le défilement de la page quand le header apparaît…
onMounted(() => {
  window.addEventListener('scroll', detecterSection)
  detecterSection()
})
// … et on arrête d'écouter quand il disparaît
onUnmounted(() => {
  window.removeEventListener('scroll', detecterSection)
})
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 0.75rem 5%;
  background-color: var(--bleu-nuit);
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--blanc);
  font-weight: 700;
  font-size: 1.2rem;
  text-decoration: none;
}

.menu {
  display: flex;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.menu a {
  color: var(--blanc);
  text-decoration: none;
  padding-bottom: 4px;
  border-bottom: 3px solid transparent;
}

.menu a:hover,
.menu a:focus-visible {
  color: var(--orange);
}

/* L'élément de menu actif est souligné */
.menu a.actif {
  border-bottom-color: var(--orange);
}

/* Sur mobile, le menu passe sous le logo */
@media (max-width: 600px) {
  .header {
    justify-content: center;
  }
  .menu {
    gap: 1rem;
  }
}
</style>
