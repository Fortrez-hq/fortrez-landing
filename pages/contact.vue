<template>
  <div>
    <div class="grid grid-cols-12 h-screen">
      <div class="col-span-7 px-40 my-auto">
        <div class="mt-20">
          <div class="flex-col flex gap-4">
            <p class="text-3xl text-text-primary">Contact Us</p>
            <p class="text-text-secondary">
              Get in touch and let us know how we can help
            </p>
          </div>
          <Form />
        </div>
      </div>
      <div class="col-span-5 bg-background-secondary px-20 pt-40 order-first">
        <div class="py-10 h-auto mx-auto md:mx-0 w-full">
          <img
            class="mx-auto md:mx-0 w-full h-full"
            src="/images/vector4.svg"
            alt="Food Image"
          />
          <ClientOnly>
            <VueTyped
              :strings="typedStrings"
              :typeSpeed="50"
              :backSpeed="30"
              :loop="true"
              @onComplete="handleComplete"
            />
          </ClientOnly>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const typedStrings = ["Hello, ^1000 I am Typed.js", "And I work with Vue 3!"];

const handleComplete = () => {
  console.log("Done");
};
</script>
