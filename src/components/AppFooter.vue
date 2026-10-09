<!-- Pied de page : identique sur toutes les pages -->
<template>
  <footer class="footer">
    <ul class="reseaux">
      <li v-for="reseau in reseaux" :key="reseau.nom">
        <!-- target="_blank" ouvre le lien dans un nouvel onglet -->
        <a :href="reseau.url" target="_blank" rel="noopener noreferrer" :aria-label="reseau.nom + ' (nouvel onglet)'">
          <img :src="reseau.icone" :alt="reseau.nom" width="32" height="32">
        </a>
      </li>
    </ul>
    <p>© 2026 Fernando Bilo</p>
    <p>Dernière mise à jour : <time datetime="2026-10-09">{{ derniereMiseAJour }}</time></p>
  </footer>
</template>

<script setup>
// Mes réseaux sociaux (LinkedIn à remplacer par mon profil)
const reseaux = [
  { nom: 'GitHub', url: 'https://github.com/bilofernando1997-del', icone: '/images/github.svg' },
  { nom: 'LinkedIn', url: 'https://www.linkedin.com/', icone: '/images/linkedin.svg' }
]

// Date à modifier à chaque mise à jour du site
const derniereMiseAJour = '9 octobre 2026'
</script>

<style scoped>
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 2rem 5%;
  background-color: var(--bleu-nuit);
  color: var(--blanc);
  text-align: center;
}

.footer p {
  margin: 0;
}

.reseaux {
  display: flex;
  gap: 1rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.reseaux a {
  display: block;
  transition: transform 0.2s;
}

.reseaux a:hover,
.reseaux a:focus-visible {
  transform: scale(1.15);
}
</style>
