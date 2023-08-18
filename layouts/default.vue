<template>
  <div
    class="flex min-h-screen flex-col gap-3 text-text-primary bg-background-primary"
  >
    <main
      class="flex-1 relative snap-y snap-mandatory overflow-y-auto h-screen menu-scroll"
    >
      <NavBar class="absolute min-w-full z-20" />
      <NuxtPage />
      <Footer />
    </main>
  </div>
</template>

<style>
#tsparticles {
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
