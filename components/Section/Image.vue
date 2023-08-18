<template>
  <section :class="{ 'bg-background-secondary': hasBackground }">
    <div
      class="md:max-w-7xl xl:max-w-screen-2xl mx-auto grid grid-cols-12 gap-4 md:h-screen sm:h-full snap-start p-10"
    >
      <div
        class="col-span-12 w-full h-full lg:col-span-6 md:col-span-6 sm:col-span-12"
        :class="{
          'md:order-first': !reverse,
          'md:order-last': reverse,
          'order-last': isMobileReverse,
          'order-first': !isMobileReverse,
        }"
      >
        <div
          class="py-10 h-full flex flex-col gap-10 justify-center items-center"
        >
          <p
            class="text-center text-5xl inline-block lg:w-5/6 md:w-full mx-auto"
          >
            {{ title }}
          </p>
          <p
            class="text-text-secondary text-base font-medium leading-normal text-justify md:text-center inline-block lg:w-full md:w-full mx-auto"
          >
            <slot name="desc" />
          </p>

          <ButtonOutline #btn v-if="hasBtn"
            ><slot name="btn-name" />
          </ButtonOutline>
        </div>
      </div>
      <div
        class="col-span-12 w-full lg:col-span-6 md:col-span-6 sm:col-span-12 h-full flex-col flex justify-center"
        :class="{
          'md:order-first': reverse,
          'md:order-last': !reverse,
          'order-first': isMobileReverse,
          'order-last': isMobileReverse,
        }"
      >
        <div
          class="py-10 h-auto mx-auto md:mx-0 w-11/12 lg:w-[500px] md:w-auto sm:w-2/3"
          :class="{ 'md:mr-auto': reverse, 'md:ml-auto': !reverse }"
        >
          <img
            class="object-contain mx-auto md:mx-0"
            :class="{ 'md:mr-auto': reverse, 'md:ml-auto': !reverse }"
            :src="`/images/${image}.png`"
            alt="Food Image"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
defineProps({
  title: String,
  desc: String,
  buttonText: String,
  reverse: Boolean,
  hasBackground: Boolean,
  hasBtn: Boolean,
  isMobileReverse: Boolean,
  image: String,
});
</script>
