// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "@nuxt/image"],
    googleFonts: {
        families: {
            "Noto+Sans+JP": true,
            "JetBrains+Mono": true,
            "Herr Von Muellerhoff": true
        }
    },
    css: [
        "@fortawesome/fontawesome-svg-core/styles.css"
    ]
})