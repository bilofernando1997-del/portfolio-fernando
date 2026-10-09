<!-- Modale dynamique : elle affiche les infos de la création reçue en "prop" -->
<template>
  <!-- Le fond sombre : un clic dessus (en dehors de la boîte) ferme la modale -->
  <div class="fond" @click.self="fermer">
    <div class="modale" role="dialog" aria-modal="true" :aria-labelledby="'titre-' + creation.id">
      <button class="fermer" type="button" aria-label="Fermer la fenêtre" @click="fermer">×</button>

      <h2 :id="'titre-' + creation.id">{{ creation.titre }}</h2>
      <p class="date">Créé le : {{ creation.date }}</p>

      <!-- Les photos de la création -->
      <div class="photos">
        <img
          v-for="(photo, index) in creation.photos"
          :key="photo"
          :src="photo"
          :alt="creation.titre + ', image ' + (index + 1)"
        >
      </div>

      <p>{{ creation.description }}</p>

      <h3>Technologies utilisées</h3>
      <ul class="technos">
        <li v-for="techno in creation.technologies" :key="techno">{{ techno }}</li>
      </ul>

      <!-- Les liens s'ouvrent dans un nouvel onglet -->
      <div class="liens">
        <a :href="creation.lien" target="_blank" rel="noopener noreferrer" class="bouton">
          {{ creation.texteLien }}
        </a>
        <!-- Le lien GitHub n'apparaît que s'il existe (v-if) -->
        <a v-if="creation.github" :href="creation.github" target="_blank" rel="noopener noreferrer" class="bouton bouton-secondaire">
          Voir sur GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

// La création à afficher est envoyée par la page d'accueil
defineProps({
  creation: { type: Object, required: true }
})

// On prévient la page d'accueil qu'il faut fermer la modale
const emit = defineEmits(['fermer'])

function fermer() {
  emit('fermer')
}

// Bonus accessibilité : la touche Échap ferme aussi la modale
function toucheClavier(event) {
  if (event.key === 'Escape') fermer()
}

onMounted(() => document.addEventListener('keydown', toucheClavier))
onUnmounted(() => document.removeEventListener('keydown', toucheClavier))
</script>

<style scoped>
/* position: fixed = la modale reste en place même si on fait défiler la page */
.fond {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: rgba(15, 23, 42, 0.75);
}

.modale {
  position: relative;
  width: 100%;
  max-width: 700px;
  max-height: 90vh;
  overflow-y: auto;
  padding: 2rem;
  border-radius: 12px;
  background-color: var(--blanc);
}

.fermer {
  position: absolute;
  top: 0.5rem;
  right: 0.75rem;
  border: none;
  background: none;
  font-size: 2rem;
  line-height: 1;
  cursor: pointer;
  color: var(--bleu-nuit);
}

h2 {
  margin-top: 0;
  color: var(--bleu-nuit);
}

.date {
  color: var(--gris);
  font-style: italic;
}

.photos {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.photos img {
  flex: 1 1 200px;
  width: 100%;
  max-width: 300px;
  border-radius: 8px;
  border: 1px solid #ddd;
}

.technos {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  list-style: none;
  padding: 0;
}

.technos li {
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  background-color: var(--creme);
  color: var(--bleu-nuit);
  font-size: 0.9rem;
}

.liens {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1.5rem;
}
</style>
