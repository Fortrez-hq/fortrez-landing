<script lang="ts" setup>
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const get_time_lines = (selector: string) => {
  const triggers = document.querySelectorAll('.heading')
  
  let timelines : any[] = []

  triggers.forEach((element) => {
    let trigger = ".mechanism"
    if(element.classList.contains('intro'))trigger = ".intro"
    else if (element.classList.contains('solution')) trigger = ".solution" 

    const value = gsap.timeline({
      scrollTrigger :{
      trigger : trigger,
      start : 'top 75%',
      end : 'bottom bottom',
      scrub : false,
      markers :false,
    }
    });
    timelines.push(value)
  })

  return timelines
}

onMounted(() => {

  const [tl_1, tl_2,tl_3] = get_time_lines('.heading')
  
  
    const intro_lists = document.querySelectorAll('.intro-text')
    intro_lists.forEach(list => {
      tl_1.fromTo(list, {yPercent: 20,opacity:0}, {yPercent: 0, opacity:1 , duration:1})
      
    });

    const solution_lists = document.querySelectorAll('.solution-text')
    solution_lists.forEach(list => {
      tl_2.fromTo(list, {yPercent: 20,opacity:0}, {yPercent: 0, opacity:1 , duration:1})
    });

    const mechanism_lists = document.querySelectorAll('.mechanism-text')
    mechanism_lists.forEach(list => {
      tl_3.fromTo(list, {yPercent: 20,opacity:0}, {yPercent: 0, opacity:1 , duration:1})
    });

})

defineProps({
  title: String,
  intro: Boolean,
  solution: Boolean,
});
</script>


<template>
  <div class="flex text-text-secondary" :class="{
    'intro-text' : intro,
    'solution-text' : solution,
  }">
    <ul class="list-outside list-disc mx-5 marker:text-animation-primary">
      <li>
        <span class="text-text-primary">{{ title }}</span> :
        <span>
          <slot name="text" />
        </span>
      </li>
    </ul>
  </div>
</template>


<style scoped></style>
