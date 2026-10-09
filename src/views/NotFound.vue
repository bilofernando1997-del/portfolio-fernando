<!-- Page 404 : affichée pour toute adresse qui n'existe pas -->
<template>
  <section class="page-404">
    <img src="/images/404.svg" alt="Une balle de ping-pong sortie de la table" width="320" height="220">
    <h1>404</h1>
    <p>Oups ! Cette page n'existe pas.</p>
    <RouterLink to="/" class="bouton">Retour à l'accueil</RouterLink>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

// On change le titre de l'onglet pour cette page
onMounted(() => {
  document.title = 'Page introuvable (404) | Fernando Bilo'
})
</script>

<style scoped>
.page-404 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  min-height: 70vh;
  padding: 3rem 5%;
  text-align: center;
}

h1 {
  margin: 0;
  font-size: 6rem;
  color: var(--orange-fonce);
}

img {
  max-width: 100%;
  height: auto;
}
</style>
