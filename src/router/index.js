// Le router décide quelle page afficher selon l'adresse (URL)
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  // Page d'accueil
  { path: '/', name: 'accueil', component: HomePage },
  // Toutes les autres adresses affichent la page 404
  { path: '/:pathMatch(.*)*', name: 'introuvable', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  // Gère le défilement quand on clique sur un lien d'ancre (#presentation...)
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, top: 80, behavior: 'smooth' }
    }
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
