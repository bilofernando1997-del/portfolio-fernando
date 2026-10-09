// Configuration de Vite (l'outil qui lance le site en local et le compile)
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()]
})
