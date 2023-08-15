<template>
  <nav class="py-2 bg-black/20 md:bg-transparent">
    <div class="grid grid-cols-6 w-5/6 md:w-full lg:w-5/6 mx-auto">
      <div class="col-span-2 sm:col-span-1 flex">
        <NuxtLink to="/" class="flex max-w-max gap-2 text-2xl items-center"
          ><img src="/images/logo.png" alt="" />
          <span class="text-stone-300 text-3xl font-normal leading-10"
            >Fortrez</span
          ></NuxtLink
        >
      </div>

      <div class="col-span-2 sm:col-span-4 flex flex-col justify-center grow">
        <div
          class="max-w-max mx-auto hidden justify-self-center md:justify-center bg-text-secondary bg-opacity-10 px-12 py-2.5 backdrop-blur-lg rounded-full gap-14 sm:hidden md:flex"
        >
          <NuxtLink
            to="/"
            class="text-white/90 hover:text-white text-sm md:text-base whitespace-nowrap"
            >Home</NuxtLink
          >
          <NuxtLink
            to="/white-paper"
            class="text-white/90 hover:text-white text-sm md:text-base whitespace-nowrap"
            >White Paper</NuxtLink
          >
          <NuxtLink
            to="/contact"
            class="text-white/90 hover:text-white text-sm md:text-base whitespace-nowrap"
            >Contact</NuxtLink
          >
        </div>
      </div>

      <div
        class="col-span-2 sm:col-span-1 flex flex-col justify-center items-end grow"
      >
        <NuxtLink
          to="/"
          class="hidden md:block text-white text-opacity-90 text-base font-medium"
        >
          <div
            class="ml-auto max-w-max md:px-7 lg:px-8 py-2.5 rounded-3xl border border-accent-secondary justify-center items-center gap-2.5"
          >
            Join Now
          </div>
        </NuxtLink>

        <transition mode="out-in" name="menu">
          <button class="md:hidden" @click="is_open = !is_open" v-if="!is_open">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
          </button>

          <button
            class="md:hidden"
            @click="is_open = !is_open"
            v-else-if="is_open"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </transition>
      </div>
    </div>
    <transition name="shutter" mode="in-out">
      <div v-if="is_open" class="w-5/6 md:w-full lg:w-5/6 mx-auto">
        <div
          class="flex w-full flex-col align-items-center py-2 gap-[2.5rem] md:hidden text-right"
        >
          <NuxtLink
            to="/"
            class="text-white/90 hover:text-white text-sm md:text-base whitespace-nowrap"
            >Home</NuxtLink
          >
          <NuxtLink
            to="/white-paper"
            class="text-white/90 hover:text-white text-sm md:text-base whitespace-nowrap"
            >White Paper</NuxtLink
          >
          <NuxtLink
            to="/contact"
            class="text-white/90 hover:text-white text-sm md:text-base whitespace-nowrap"
            >Contact</NuxtLink
          >
          <div class="flex justify-center items-center">
            <NuxtLink
              to="/"
              class="text-white text-opacity-90 font-medium mx-auto max-w-max px-4 py-2.5 rounded-3xl border border-accent-secondary gap-2.5"
            >
              Join Now
            </NuxtLink>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script lang-="ts" setup>
const is_open = ref(false);
</script>

<style scoped>
.router-link-active,
.router-link-exact-active {
  color: white;
}

.menu-enter-active {
  animation: scale-up-center 0.25s ease 0s 1 normal none;
}

.shutter-leave-active {
  animation: scale-down-center 0.25s ease 0s 1 normal none;
}
.shutter-enter-active {
  animation: shutter-in-top 0.25s ease 0s 1 normal none;
}
.shutter-leave-active {
  animation: shutter-out-top 0.25s ease 0s 1 normal none;
}

@keyframes scale-up-center {
  0% {
    transform: scale(0.2);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes scale-down-center {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.2);
  }
}

@keyframes shutter-in-top {
  0% {
    transform: rotateX(-100deg);
    transform-origin: top;
    opacity: 0;
  }
  100% {
    transform: rotateX(0deg);
    transform-origin: top;
    opacity: 1;
  }
}
@keyframes shutter-out-top {
  0% {
    transform: rotateX(0deg);
    transform-origin: top;
    opacity: 1;
  }
  100% {
    transform: rotateX(70deg);
    transform-origin: top;
    opacity: 0;
  }
}
</style>
