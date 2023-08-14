<template>
  <nav class="py-2 w-5/6 mx-auto">
    <div class="grid grid-cols-3">
      <div class="col-span-1 flex">
        <NuxtLink to="/" class="flex max-w-max gap-2 text-2xl items-center"
          ><img src="/images/logo.png" alt="" />
          <span class="text-stone-300 text-3xl font-normal leading-10"
            >Fortrez</span
          ></NuxtLink
        >
      </div>

      <div class="col-span-1 flex flex-col justify-center grow">
        <div
          class="max-w-max mx-auto hidden justify-self-center md:justify-center bg-text-secondary bg-opacity-10 px-5 md:px-12 py-2 md:py-3.5 backdrop-blur-lg rounded-full gap-14 sm:hidden md:flex"
        >
          <NuxtLink
            to="/"
            class="text-white/90 hover:text-white text-sm md:text-base"
            >Home</NuxtLink
          >
          <NuxtLink
            to="/data-types"
            class="text-white/90 hover:text-white text-sm md:text-base"
            >White Paper</NuxtLink
          >
          <NuxtLink
            to="/data-types"
            class="text-white/90 hover:text-white text-sm md:text-base"
            >Contact</NuxtLink
          >
        </div>
      </div>

      <div class="col-span-1 flex flex-col justify-center grow">
        <NuxtLink
          to="/"
          class="text-white text-opacity-90 text-base font-medium"
        >
          <div
            class="ml-auto max-w-max px-10 py-2.5 rounded-3xl border border-accent-secondary justify-center items-center gap-2.5"
          >
            Join Now
          </div>
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>
