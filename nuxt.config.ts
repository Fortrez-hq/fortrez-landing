// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    [
      "nuxt-mail",
      {
        message: {
          to: process.env.NUXT_PUBLIC_EMAIL,
        },
        smtp: {
          host: process.env.ZOHO_ENDPOINT,
          port: 465,
          secure: true,
          auth: {
            user: process.env.NUXT_PUBLIC_EMAIL,
            pass: process.env.PASS,
          },
        },
      },
    ],
  ],
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      email: "",
      waitList: "",
    },
  },
});
