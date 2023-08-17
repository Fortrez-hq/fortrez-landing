<template>
  <div class="flex flex-col">
    <header
      class="bg-[url('/images/unblurred_logo.png')] bg-no-repeat bg-center"
    >
      <div class="flex h-screen justify-center items-center">
        <div
          class="w-full md:w-3/4 h-5/6 md:h-2/3 mx-auto absolute bg-opacity-10 rounded-3xl sm:rounded-full shadow-[0px_0px_200px_50px_rgba(37,0,90,0.15)] blur-3xl backdrop-blur-none"
        ></div>
        <div class="justify-center items-center inline-flex z-10">
          <div
            class="self-stretch flex-col justify-start items-center gap-7 inline-flex px-2"
          >
            <div
              class="text-center text-text-primary text-3xl sm:text-5xl max-w-3xl font-semibold"
            >
              Ignite Your Social Media Experience and Earn Rewards on our
              Innovative Platform!
            </div>
            <div
              class="text-center text-text-secondary text-opacity-80 text-base max-w-md font-normal leading-normal"
            >
              Discover a revolutionary way to engage with the world; connecting
              with like-minded individuals while earning.
            </div>
            <div class="justify-center items-center gap-2.5 inline-flex">
              <NuxtLink
                to="/"
                class="text-center text-text-primary text-sm sm:max-lg:text-base lg:text-xl font-normal leading-loose px-5 md:px-10 py-2 bg-accent-primary hover:bg-accent-primary/90 rounded-full transition-colors duration-300"
              >
                Pre-Register
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </header>

    <SectionImage title="Interact and Engages" :hasBackground="true">
      <template #desc>
        Express your thoughts, ideas, and opinions by liking, commenting, and
        reposting content that resonates with you. Engage in meaningful
        conversations, share valuable insights, and collaborate with fellow
        enthusiasts to build a strong network within the crypto community.
      </template>
      <template #btn> Learn More </template>
    </SectionImage>

    <SectionImage title="Earn and Get Rewarded" :reverse="true">
      <template #desc>
        Express your thoughts, ideas, and opinions by liking, commenting, and
        reposting content that resonates with you. Engage in meaningful
        conversations, share valuable insights, and collaborate with fellow
        enthusiasts to build a strong network within the crypto community.
      </template>
      <template #btn> Learn More </template>
    </SectionImage>

    <section id="early-access" class="bg-background-secondary">
      <div class="">
        <div class="flex justify-center items-center h-screen">
          <div class="flex-col justify-start items-center gap-20 inline-flex">
            <div class="text-center text-white text-4xl max-w-4xl font-normal">
              Join Now for Exclusive Access to Our Exciting Social Media
              Platform!
            </div>
            <div
              class="text-center text-stone-300 text-base font-medium max-w-5xl"
            >
              We're thrilled to announce the upcoming launch of our
              revolutionary social media platform that will transform the way
              you engage, connect, and earn in the digital world. Be among the
              first to experience the power of our platform by joining our
              exclusive pre-launch community. By submitting your email below,
              you'll receive priority access and updates as we get closer to the
              official launch.
            </div>

            <div class="flex">
              <form action="">
                <div class="relative">
                  <input
                    class="relative border-4 focus:outline-none text-gray-900 caret-accent-primary border-accent-secondary rounded-full px-10 py-4"
                    type="email"
                    name="email"
                    placeholder="Enter your Email"
                  />
                  <button
                    type="submit"
                    class="absolute my-auto right-0 inset-y-0 text-center text-text-primary text-sm sm:max-lg:text-base lg:text-xl font-normal leading-loose px-3 md:px-8 bg-accent-primary hover:bg-accent-primary/90 rounded-full transition-colors duration-300"
                  >
                    Join Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script></script>

<style scoped></style>
