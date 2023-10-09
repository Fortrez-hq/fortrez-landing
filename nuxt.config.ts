// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    '@nuxtjs/google-fonts',
    '@tresjs/nuxt',
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
  app: {
    head: {
      charset: "UTF-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Fortrez",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Our web application seamlessly blends the power of social engagement with the allure of tangible rewards.",
        },
      ],
    },
  },
  googleFonts: {
    families: {
      Lato: [100, 300, 400, 500, 700, 900],
      Raleway: true,
      Roboto: [100, 300, 400, 500, 700, 900],
      Poppins: [100, 300, 400, 500, 700, 900],
      Lora: true,
       // ...other font families
    }
 },
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      email: "",
      waitList: "",
    },
  },
  build:{
    transpile: ["gsap"]
  }
});
