// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['assets/css/main.css'],
  app: {
    head: {
      title: 'E-Commerce',
      meta: [
        { name: 'E-Commerce Page', content: 'E-Commerce website' },
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Matierial+Icons' },
      ]
    }
  }
})
