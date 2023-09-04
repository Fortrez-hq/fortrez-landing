<template>
  <div class="flex text-text-secondary">
    <ul class="list-outside list-disc mx-5 marker:text-animation-primary">
      <li>
        <span class="text-text-primary">{{ title }}</span> :
        <span><slot name="text" /></span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: String,
});
</script>

<style scoped></style>
