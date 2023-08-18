<template>
  <NuxtLink
    to="/white-paper"
    class="text-center overflow-hidden border hover:border-accent-primary/0 text-text-secondary hover:text-accent-primary text-xl font-normal px-7 py-2.5 rounded-full border-accent-primary max-w-max relative z-10 duration-300 before:content-[''] before:absolute before:top-3 before:bottom-3 before:left-0 before:right-0 hover:before:bg-text-primary/70 before:-z-10 hover:before:animate-[spin_3s_ease-in-out_infinite] after:bg-background-primary after:content-[''] after:absolute after:inset-0.5 after:-z-10 after:rounded-full"
  >
    <slot name="btn" />
  </NuxtLink>
</template>

<script lang="ts" setup>
defineProps({
  btnText: String,
});
</script>

<style scoped></style>
