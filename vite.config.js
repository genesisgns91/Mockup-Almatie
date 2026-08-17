import { defineConfig } from 'vite'
import react from '@vitejs/react'

export default defineConfig({
  plugins: [react()],
  base: '/Mockup-Almatie/', // <-- ADICIONE ESTA LINHA COM O NOME EXATO DO SEU REPOSITÓRIO
})
