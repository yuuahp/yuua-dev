// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: ["@nuxtjs/tailwindcss", "@nuxt/image"],
    css: [
        "@fortawesome/fontawesome-svg-core/styles.css",
        "~/assets/css/main.css"
    ]
})