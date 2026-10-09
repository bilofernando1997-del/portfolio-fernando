<!-- Page d'accueil : présentation, créations, contact -->
<template>
  <!-- Section 1 : présentation -->
  <section id="presentation" class="presentation">
    <div class="texte">
      <p class="bonjour">Bonjour, je suis</p>
      <h1>Fernando Bilo</h1>
      <p class="metier">Développeur Web et Mobile en formation</p>
      <p>
        Après un Bac+2 en marketing digital, je me forme au développement Web et Mobile
        pour obtenir un titre RNCP. J'ai travaillé sur WordPress, le webdesign et la
        communication sur les réseaux sociaux. Attentif et à l'écoute, j'aime transformer
        une idée en un site simple, clair et agréable à utiliser.
      </p>
      <p>
        Je parle espagnol couramment et je recherche un stage pour mettre en pratique
        mes compétences.
      </p>
      <RouterLink :to="{ path: '/', hash: '#contact' }" class="bouton">Me contacter</RouterLink>
    </div>
    <img src="/images/logo.svg" alt="" class="illustration" width="220" height="220">
  </section>

  <!-- Section 2 : créations -->
  <section id="creations" class="creations">
    <h2>Mes créations</h2>
    <ul class="grille">
      <li v-for="creation in creations" :key="creation.id">
        <!-- Un bouton pour que la carte soit accessible au clavier -->
        <button type="button" class="carte" @click="creationChoisie = creation">
          <img :src="creation.image" alt="" width="400" height="260">
          <h3>{{ creation.titre }}</h3>
        </button>
      </li>
    </ul>
  </section>

  <!-- Section 3 : contact -->
  <section id="contact" class="contact">
    <h2>Me contacter</h2>
    <ContactForm />
  </section>

  <!-- La modale s'affiche seulement quand une création est choisie -->
  <CreationModal
    v-if="creationChoisie"
    :creation="creationChoisie"
    @fermer="creationChoisie = null"
  />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { creations } from '../data/creations.js'
import CreationModal from '../components/CreationModal.vue'
import ContactForm from '../components/ContactForm.vue'

// null = aucune modale ouverte
const creationChoisie = ref(null)

// Titre de l'onglet (référencement)
onMounted(() => {
  document.title = 'Fernando Bilo | Portfolio développeur Web et Mobile'
})
</script>

<style scoped>
section {
  padding: 4rem 5%;
}

h2 {
  text-align: center;
  font-size: 2rem;
  color: var(--bleu-nuit);
}

/* --- Présentation --- */
.presentation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  background-color: var(--creme);
}

.texte {
  max-width: 650px;
}

.bonjour {
  margin: 0;
  color: var(--orange-fonce);
  font-weight: 600;
}

h1 {
  margin: 0;
  font-size: clamp(2.2rem, 6vw, 3.5rem);
  color: var(--bleu-nuit);
}

.metier {
  margin-top: 0;
  font-size: 1.25rem;
  font-weight: 600;
}

.illustration {
  width: 220px;
  height: auto;
}

/* --- Créations --- */
.grille {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  list-style: none;
  padding: 0;
}

.grille li {
  flex: 1 1 280px;
  max-width: 360px;
}

.carte {
  width: 100%;
  padding: 0;
  border: 2px solid var(--bleu-nuit);
  border-radius: 12px;
  overflow: hidden;
  background-color: var(--blanc);
  cursor: pointer;
  font: inherit;
  text-align: left;
  transition: box-shadow 0.3s, transform 0.3s;
}

.carte img {
  display: block;
  width: 100%;
  height: auto;
}

.carte h3 {
  margin: 0;
  padding: 1rem;
  color: var(--bleu-nuit);
}

/* Au survol, une ombre apparaît en bas à droite */
.carte:hover,
.carte:focus-visible {
  box-shadow: 10px 10px 0 var(--orange);
  transform: translate(-4px, -4px);
}

/* --- Contact --- */
.contact {
  background-color: var(--creme);
}

/* Sur mobile, l'illustration passe au-dessus du texte */
@media (max-width: 768px) {
  .presentation {
    flex-direction: column-reverse;
    text-align: center;
  }
  .illustration {
    width: 150px;
  }
}
</style>
