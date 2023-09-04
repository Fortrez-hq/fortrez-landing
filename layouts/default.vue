<template>
  <div
    class="flex min-h-screen flex-col gap-3 text-text-primary bg-background-primary"
  >
    <NavBar
      class="absolute min-w-full z-40"
      :solid="is_solid"
      @state="blur_background"
    />
    <main
      class="flex-1 relative snap-y snap-mandatory overflow-y-auto h-screen menu-scroll"
    >
      <div
        :class="{
          'backdrop-blur-none blur-sm absolute w-full h-full z-30 ': is_open,
        }"
      ></div>
      <NuxtPage />
    </main>
  </div>
</template>

<script setup>
const handleScroll = () => {
  document
    .querySelector("#early-access")
    .scrollIntoView({ behavior: "smooth" }, true);
};

const is_open = ref(false);

const blur_background = (args) => {
  is_open.value = args;
};
</script>
<style>
#tsparticles {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

#tparticles {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

body::-webkit-scrollbar {
  display: none;
}
.menu-scroll::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.menu-scroll {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
