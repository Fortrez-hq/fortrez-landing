// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "nuxt-mail"],
  mail: {
    message:{
      to: "contact@fortrez.io",
    },
    smtp: {
      host: "sandbox.smtp.mailtrap.io",
      port: 587,
      auth:{
        user: "a284daccf15427",
        pass: "d831f767ca8394"
      }
    }
  },
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      waitList: ""
    }
  }
});
