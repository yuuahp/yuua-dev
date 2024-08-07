// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {enabled: true},
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@nuxtjs/i18n"],

  i18n: {
      defaultLocale: "en",
      locales: [{
          code: "en",
          file: "./locales/en.json"
      }, {
          code: "jp",
          file: "./locales/jp.json"
      }],
      detectBrowserLanguage: {
          useCookie: false
      }
  },

  css: [
      "@fortawesome/fontawesome-svg-core/styles.css",
      "~/assets/css/main.css"
  ],

  compatibilityDate: "2024-08-07"
})