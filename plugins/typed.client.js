import VueTyped from "vue3-typed-js";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueTyped);
});
