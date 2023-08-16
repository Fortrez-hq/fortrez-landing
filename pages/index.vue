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
    <section class="bg-background-secondary">
      <div
        class="md:max-w-7xl xl:max-w-screen-2xl mx-auto grid grid-cols-12 gap-4 md:h-screen sm:h-full snap-start p-10"
      >
        <div
          class="col-span-12 w-full h-full lg:col-span-6 md:col-span-6 sm:col-span-12"
        >
          <div
            class="py-10 h-full flex flex-col gap-10 justify-center items-center"
          >
            <p
              class="text-center text-5xl inline-block lg:w-4/6 md:w-full mx-auto"
            >
              Interact and Engages
            </p>
            <p
              class="text-text-secondary text-base font-medium leading-normal text-center inline-block lg:w-full md:w-full mx-auto"
            >
              Express your thoughts, ideas, and opinions by liking, commenting,
              and reposting content that resonates with you. Engage in
              meaningful conversations, share valuable insights, and collaborate
              with fellow enthusiasts to build a strong network within the
              crypto community.
            </p>

            <NuxtLink
              to="/white-paper"
              class="text-center text-text-secondary text-xl font-normal px-7 py-2.5 rounded-full border border-accent-primary max-w-max"
            >
              Learn More
            </NuxtLink>
          </div>
        </div>
        <div
          class="col-span-12 w-full lg:col-span-6 md:col-span-6 sm:col-span-12 h-full flex-col flex justify-center"
        >
          <div
            class="py-10 h-auto mx-auto md:mx-0 md:ml-auto w-11/12 lg:w-[500px] md:w-auto sm:w-2/3"
          >
            <img
              class="object-contain mx-auto md:mx-0 md:ml-auto"
              src="/images/vector1.png"
              alt="Food Image"
            />
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="flex justify-around items-center min-h-screen gap-10 p-40">
        <div class="basis-1/2 justify-center items-center">
          <div class="">
            <img src="/images/vector2.png" alt="" class="mr-auto min-w-[70%]" />
          </div>
        </div>

        <div class="justify-center items-center inline-flex basis-1/2">
          <div class="self-stretch justify-start items-center inline-flex">
            <div class="flex-col justify-start items-center gap-7 inline-flex">
              <div class="text-center text-text-secondary text-5xl font-normal">
                Earn and Get Rewarded
              </div>
              <div
                class="text-center text-text-secondary text-base font-medium leading-normal"
              >
                Your engagement on our platform doesn't go unnoticed. As you
                interact with other users' posts, you earn tokens as a token of
                appreciation for your valuable contributions. The more you
                engage, the more tokens you accumulate, unlocking exciting
                benefits and exclusive opportunities within the platform.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

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
              <form action=""></form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script></script>

<style scoped></style>
