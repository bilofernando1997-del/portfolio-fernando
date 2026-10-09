<!-- Composant principal : le header et le footer sont présents sur toutes les pages -->
<template>
  <AppHeader />
  <main>
    <!-- Ici le router affiche la page d'accueil ou la page 404 -->
    <RouterView />
  </main>
  <AppFooter />
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>
