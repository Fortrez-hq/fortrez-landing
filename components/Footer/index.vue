<template>
  <footer class="p-4">
    <div class="w-full lg:w-5/6 mx-auto">
      <div class="flex flex-wrap justify-between items-center md:items-start py-16 gap-10">
        <div class="flex flex-col gap-5 text-text-secondary w-full md:w-6/12">
          <NuxtLink to="/" class="flex max-w-max gap-2 text-2xl items-center"><img class="h-10 md:h-auto"
              src="/images/logo.png" alt="" />
            <span class="text-text-primary text-2xl md:text-3xl font-normal leading-10">Fortrez</span>
          </NuxtLink>
          <p class="max-w-full md:max-w-lg text-justify md:text-left text-base leading-5">
            Fortrez is an innovative and immersive social media platform that
            redefines the way you engage, connect, and earn in the digital
            realm. Fusing the power of social media with the exciting world of
            earning rewards, Fortrez is designed to ignite your online journey
            like never before.
          </p>
        </div>
        <div class="flex flex-col gap-14 items-center w-full md:w-5/12 xl:w-3/12">
          <div class="flex flex-col gap-7 w-full">
            <div class="flex justify-evenly lg:justify-between text-text-primary/90 font-medium">
              <p>Socials</p>
              <NuxtLink to="/contact" class="hover:text-text-primary transition-colors duration-300">
                <p>Contact Us</p>
              </NuxtLink>
              <NuxtLink to="/white-paper" class="hover:text-text-primary transition-colors duration-300">
                <p>White Paper</p>
              </NuxtLink>
            </div>

            <div class="flex text-text-secondary justify-evenly lg:justify-between">
              <NuxtLink to="mailto:contact@fortrez.io"
                class="fill-text-secondary hover:fill-text-primary transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" class="w-4 h-4">
                  <title>Gmail</title>
                  <path
                    d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                </svg>
              </NuxtLink>

              <NuxtLink to="https://www.linkedin.com/company/fortrezofficial/"
                class="fill-text-secondary hover:fill-text-primary transition-colors duration-300">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="class=w-4 h-4">
                  <title>LinkedIn</title>
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </NuxtLink>

              <NuxtLink to="/" class="fill-text-secondary hover:fill-text-primary transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" class="w-4 h-4">
                  <title>Facebook</title>
                  <path
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </NuxtLink>

              <NuxtLink to="https://x.com/fortrezofficial?s=21&t=GJgp0iq3dq55NoN_dPrMag"
                class="fill-text-secondary hover:fill-text-primary transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" class="w-4 h-4">
                  <title>X</title>
                  <path
                    d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
              </NuxtLink>

              <NuxtLink to="https://t.me/FortrezNews"
                class="fill-text-secondary hover:fill-text-primary transition-colors duration-300">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4">
                  <title>Telegram</title>
                  <path
                    d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </NuxtLink>

              <NuxtLink to="/" class="fill-text-secondary hover:fill-text-primary">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4">
                  <title>Discord</title>
                  <path
                    d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                </svg>
              </NuxtLink>
            </div>
          </div>

          <p class="text-text-primary text-center">
            Copyright © 2023, All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
