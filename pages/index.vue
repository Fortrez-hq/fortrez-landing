<template>
  <div class="relative snap-y snap-mandatory overflow-y-auto h-screen menu-scroll">
    <NavBar class="block md:hidden absolute min-w-full z-40 " @state="blur_background" />
    <div :class="{
      'backdrop-blur-none blur-sm fixed w-full h-full z-30 ': is_open,
    }"></div>
    <header class="relative bg-[url('/images/unblurred_logo.png')] bg-no-repeat bg-center h-screen snap-start">
      <ParticleCirclelines class="z-10"></ParticleCirclelines>
      <div class="flex h-screen justify-center items-center">
        <div
          class="w-full md:w-3/4 h-5/6 md:h-2/3 mx-auto absolute bg-opacity-10 rounded-3xl sm:rounded-full shadow-[0px_0px_200px_50px_rgba(37,0,90,0.15)] blur-3xl backdrop-blur-none">
        </div>
        <div class="justify-center items-center inline-flex z-20">
          <div class="self-stretch flex-col justify-start items-center gap-7 inline-flex px-2">
            <div class="text-center text-text-primary text-3xl sm:text-5xl max-w-3xl font-semibold">
              Ignite Your Social Media Experience and Earn Rewards on our
              Innovative Platform!
            </div>
            <div class="text-center text-text-secondary text-base max-w-md font-normal leading-normal">
              Discover a revolutionary way to engage with the world; connecting
              with like-minded individuals while earning.
            </div>
            <div class="justify-center items-center gap-2.5 inline-flex">
              <button @click="handleScroll"
                class="text-center text-text-primary text-sm sm:max-lg:text-base lg:text-xl font-normal leading-loose px-5 md:px-10 py-2 bg-accent-primary hover:bg-accent-primary/90 rounded-full transition-colors duration-300">
                Pre-Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>

    <SectionImage title="Interact and Engage" :hasBackground="true" image="vector1" class="snap=start"
      :isMobileReverse="true" buttonText="Learn More">
      <template #desc>
        Express your thoughts, ideas, and opinions by liking, commenting, and
        reposting content that resonates with you. Engage in meaningful
        conversations, share valuable insights, and collaborate with fellow
        enthusiasts to build a strong network within the crypto community.
      </template>
    </SectionImage>

    <SectionImage title="Earnings and Rewards" :reverse="true" :hasBtn="true" image="vector2" :isMobileReverse="true"
      buttonText="Learn More">
      <template #desc>
        Express your thoughts, ideas, and opinions by liking, commenting, and
        reposting content that resonates with you. Engage in meaningful
        conversations, share valuable insights, and collaborate with fellow
        enthusiasts to build a strong network within the crypto community.
      </template>
    </SectionImage>

    <section id="early-access" class="bg-background-secondary snap-start relative">
      <ParticleStar class="absolute z-10"> </ParticleStar>
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="37" viewBox="0 0 40 37" fill="none"
        class="absolute top-[15%] left-3/4">
        <path
          d="M20 3.23607L23.5392 14.1287L23.7637 14.8197H24.4903H35.9434L26.6776 21.5517L26.0899 21.9787L26.3144 22.6697L29.8536 33.5623L20.5878 26.8303L20 26.4033L19.4122 26.8303L10.1464 33.5623L13.6856 22.6697L13.9101 21.9787L13.3224 21.5517L4.05655 14.8197H15.5097H16.2363L16.4608 14.1287L20 3.23607Z"
          stroke="url(#paint0_linear_23_634)" stroke-width="2" />
        <defs>
          <linearGradient id="paint0_linear_23_634" x1="-13" y1="8" x2="25.5" y2="34.5" gradientUnits="userSpaceOnUse">
            <stop offset="0.013597" stop-color="white" />
            <stop offset="1" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="37" viewBox="0 0 40 37" fill="none"
        class="absolute top-1/3 right-[85%]">
        <path
          d="M20 3.23607L23.5392 14.1287L23.7637 14.8197H24.4903H35.9434L26.6776 21.5517L26.0899 21.9787L26.3144 22.6697L29.8536 33.5623L20.5878 26.8303L20 26.4033L19.4122 26.8303L10.1464 33.5623L13.6856 22.6697L13.9101 21.9787L13.3224 21.5517L4.05655 14.8197H15.5097H16.2363L16.4608 14.1287L20 3.23607Z"
          stroke="url(#paint0_linear_23_635)" stroke-width="2" />
        <defs>
          <linearGradient id="paint0_linear_23_635" x1="65" y1="35" x2="13" y2="-14" gradientUnits="userSpaceOnUse">
            <stop offset="0.013597" stop-color="white" />
            <stop offset="0.884522" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="37" viewBox="0 0 40 37" fill="none"
        class="absolute bottom-1/4 right-1/3">
        <path
          d="M20 3.23607L23.5392 14.1287L23.7637 14.8197H24.4903H35.9434L26.6776 21.5517L26.0899 21.9787L26.3144 22.6697L29.8536 33.5623L20.5878 26.8303L20 26.4033L19.4122 26.8303L10.1464 33.5623L13.6856 22.6697L13.9101 21.9787L13.3224 21.5517L4.05655 14.8197H15.5097H16.2363L16.4608 14.1287L20 3.23607Z"
          stroke="url(#paint0_linear_23_636)" stroke-width="2" />
        <defs>
          <linearGradient id="paint0_linear_23_636" x1="25.5" y1="70" x2="9.5" y2="11.5" gradientUnits="userSpaceOnUse">
            <stop offset="0.013597" stop-color="white" />
            <stop offset="1" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <div>
        <div class="flex justify-center items-center h-screen">
          <div class="flex-col justify-start items-center gap-20 inline-flex p-5 z-20">
            <div class="text-center text-text-primary text-4xl max-w-4xl font-normal">
              Join Now for Exclusive Access to Our Exciting Social Media
              Platform!
            </div>
            <div class="text-justify md:text-center text-text-secondary text-base font-medium max-w-5xl">
              We're thrilled to announce the upcoming launch of our
              revolutionary social media platform that will transform the way
              you engage, connect, and earn in the digital world. Be among the
              first to experience the power of our platform by joining our
              exclusive pre-launch community. By submitting your email below,
              you'll receive priority access and updates as we get closer to the
              official launch.
            </div>

            <div class="w-full">
              <form action="">
                <div class="relative max-w-lg mx-auto">
                  <div class="flex relative justify-around">
                    <input
                      class="relative peer border-4 focus:outline-none text-sm text-gray-900 caret-accent-primary border-accent-secondary rounded-full px-5 md:px-10 py-3.5 w-full"
                      type="email" name="email" placeholder="Enter your Email" />
                    <button type="submit"
                      class="peer-focus:opacity-0 md:peer-focus:opacity-100 transition-all absolute my-auto inset-y-2 right-2.5 text-sm md:text-base text-center text-text-primary font-medium px-5 md:px-8 bg-accent-secondary hover:bg-accent-secondary/90 rounded-full duration-300">
                      Join Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer class="snap-start" />
  </div>
</template>

<script setup>
const is_open = ref(false);


const blur_background = (args) => {
  is_open.value = args;
};

const handleScroll = () => {
  document
    .querySelector("#early-access")
    .scrollIntoView({ behavior: "smooth" }, true);
};

</script>

<style scoped></style>
