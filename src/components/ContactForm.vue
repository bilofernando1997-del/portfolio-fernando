<!-- Formulaire de contact : nom/prénom, objet, message -->
<template>
  <form class="formulaire" @submit.prevent="envoyer" novalidate>
    <div class="champ">
      <label for="nom">Nom et prénom</label>
      <input id="nom" v-model.trim="nom" type="text" name="nom" autocomplete="name" required>
    </div>

    <div class="champ">
      <label for="objet">Objet</label>
      <input id="objet" v-model.trim="objet" type="text" name="objet" required>
    </div>

    <div class="champ">
      <label for="message">Message</label>
      <textarea id="message" v-model.trim="message" name="message" rows="6" required></textarea>
    </div>

    <!-- Message d'erreur ou de confirmation, lu par les lecteurs d'écran -->
    <p v-if="retour" class="retour" :class="{ erreur: estErreur }" role="status">{{ retour }}</p>

    <button type="submit" class="bouton">Envoyer</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'

// Valeurs des champs (liées avec v-model)
const nom = ref('')
const objet = ref('')
const message = ref('')

const retour = ref('')
const estErreur = ref(false)

// L'adresse e-mail est lue dans le fichier .env (variable d'environnement)
const emailDestinataire = import.meta.env.VITE_CONTACT_EMAIL

function envoyer() {
  // Programmation défensive : on vérifie les champs avant d'envoyer
  if (!nom.value || !objet.value || !message.value) {
    estErreur.value = true
    retour.value = 'Merci de remplir tous les champs.'
    return
  }
  if (!emailDestinataire) {
    estErreur.value = true
    retour.value = "L'adresse de contact n'est pas configurée (fichier .env)."
    return
  }

  // On prépare un e-mail avec l'objet et le message, puis on ouvre la messagerie
  const sujet = encodeURIComponent(objet.value)
  const corps = encodeURIComponent(message.value + '\n\n' + nom.value)
  window.location.href = `mailto:${emailDestinataire}?subject=${sujet}&body=${corps}`

  estErreur.value = false
  retour.value = 'Votre messagerie va s’ouvrir pour envoyer le message. Merci !'
  nom.value = ''
  objet.value = ''
  message.value = ''
}
</script>

<style scoped>
.formulaire {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 600px;
  margin: 0 auto;
}

.champ {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

label {
  font-weight: 600;
}

input,
textarea {
  padding: 0.75rem;
  border: 2px solid #ccc;
  border-radius: 8px;
  font: inherit;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: var(--orange);
}

.retour {
  margin: 0;
  color: #1a7f37;
  font-weight: 600;
}

.retour.erreur {
  color: #b42318;
}

.bouton {
  align-self: flex-start;
}
</style>
