<template>
  <div>
    <NavBar
      class="block md:hidden absolute min-w-full z-40"
      @state="blur_background"
    />
    <div
      :class="{
        'backdrop-blur-none blur-sm fixed w-full h-full z-30 ': is_open,
      }"
    ></div>

    <div class="grid grid-cols-12 h-screen">
      <div class="md:col-span-7 xl:col-span-8 px-40 my-auto">
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
      <div
        class="hidden md:col-span-5 xl:col-span-4 bg-background-secondary px-20 py-20 order-first md:flex flex-col justify-center"
      >
        <div class="py-10 mx-auto md:mx-0 w-full">
          <p class="text-xl md:text-3xl lg:text-5xl xl:text-8xl text-center">
            <ClientOnly>
              <VueTyped
                :strings="typedStrings"
                :typeSpeed="100"
                :backSpeed="50"
                :loop="true"
              />
            </ClientOnly>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const typedStrings = [
  "Want to <span class='text-accent-primary font-bold'>^500 Connect...?</span>",
  "Want to <span class='text-accent-secondary font-bold'>^500 Interact...?</span>",
  "And what if you could <span class='text-accent-primary font-bold'>^1000 Earn</span> while doing it?",
  "Contact us <span class='text-accent-secondary font-bold'>^1000 Now</span>",
];

const is_open = ref(false);

const blur_background = (args) => {
  is_open.value = args;
};
</script>
