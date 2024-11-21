// https://nuxt.com/docs/api/configuration/nuxt-config
import connectDB from '~/server/plugins/conent_db';
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig:{
    dburi: process.env.MONGO_URI,
  }
 
})
