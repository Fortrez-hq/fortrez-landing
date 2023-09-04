<script lang="ts" setup>
import { Engine, Container, Options } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

const particlesInit = async (engine: Engine) => {
  await loadSlim(engine);
};

const particlesLoaded = async (container: Container) => {
  container.options.fullScreen.zIndex = 1;
  console.log("Particles container loaded", container);
};
</script>
<template>
  <vue-particles
    id="tparticles"
    :particlesInit="particlesInit"
    :particlesLoaded="particlesLoaded"
    :options="{
      background: {
        color: {
          value: '',
        },
      },
      fpsLimit: 120,
      fullScreen: {
        enable: false,
        zIndex: 0,
      },
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: 'push',
          },
          onHover: {
            enable: false,
            mode: 'repulse',
          },
          resize: true,
        },
        modes: {
          bubble: {
            distance: 500,
            duration: 2,
            opacity: 0.8,
            size: 40,
          },
          push: {
            quantity: 5,
          },
          repulse: {
            distance: 200,
            duration: 0.8,
          },
        },
      },
      particles: {
        color: {
          value: '#ffffff',
        },
        // links: {
        //   color: '#3B008E',
        //   distance: 230,
        //   enable: true,
        //   opacity: 0.3,
        //   width: 1,
        // },
        move: {
          direction: 'none',
          enable: true,
          outMode: 'bounce',
          random: false,
          speed: 3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 1,
        },
        opacity: {
          value: 0.3,
        },
        shape: {
          type: 'star',
        },
        size: {
          random: false,
          value: 5,
        },
      },
      detectRetina: true,
    }"
  />
</template>
