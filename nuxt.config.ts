// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  devtools: { enabled: true },
  tailwindcss: {
    config: {
      content: [],
      theme: {
        colors: {
          "background-primary": "#0c001d",
          "background-secondary": "#000e39",
          "accent-primary": "#ba0855",
          "accent-secondary": "#25005a",
          "text-primary": "#ffffff",
          "text-secondary": "#bcbcbc",
        },
      },
    },
  },
});
