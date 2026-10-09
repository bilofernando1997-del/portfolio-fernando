// Point d'entrée de l'application Vue.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style.css'

// On crée l'application, on ajoute le router, puis on l'affiche dans <div id="app">
createApp(App).use(router).mount('#app')
