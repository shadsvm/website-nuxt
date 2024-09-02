<template>
  <!-- <ClientOnly> -->
  <div class="max-w-5xl mx-auto">
    <section class="h-[100dvh] flex justify-center items-center flex-col">
      <nav class="py-10">
        <NuxtLink
          :href="'/test'"
          class="font-['Libre_Barcode_39_Text'] text-5xl text-center mx-auto"
        >
          SVM
        </NuxtLink>
      </nav>

      <div class="h-full flex gap-8 justify-between items-center">
        <!--  -->
        <div class="space-y-4">
          <section class="font-bold text-5xl">
            I'm <span class="text-gradient"> Samuel Kaminski </span>
            <br>
            Full Stack Developer
          </section>

          <section class="text-stone-500 ">
            driven by a passion for technology and a love for bringing ideas to life. I guide products from concept to
            launch with a thoughtful, hands-on approach.
          </section>
        </div>
        <!--  -->
        <div class=" w-full max-w-xs flex flex-col gap-5 border items-end">
          <section>
            <img
              src="/img/memoji-wink.png"
              alt="Cartoon-style picuter of me"
              class="bg-white/60 rounded-full max-w-52"
            >
          </section>

          <section
            ref="bubble"
            class="bubble px-5 py-3 flex gap-3 w-min bg-gray-50 rounded-tr-full rounded-l-full"
          >
            <p
              ref="message"
              class="message hidden text-nowrap text-black"
            >
              Hello 👋 I'm Sam
            </p>
            <span
              ref="loading"
              class="loading flex gap-2 "
            >
              <div class="loading-dot w-4 h-4 bg-gray-500 rounded-full" />
              <div class="loading-dot w-4 h-4 bg-gray-500 rounded-full" />
              <div class="loading-dot w-4 h-4 bg-gray-500 rounded-full" />
            </span>
          </section>
        </div>
      </div>
    </section>
  </div>
  <!-- </ClientOnly> -->
</template>

<script setup lang="ts">
import anime from 'animejs'

// defineRouteRules({
//   prerender: true,
// })

// import { useAnime } from '#anime'
// import useAnime from 'animejs'

// const bubble = ref()
// const message = ref()
// const loading = ref()

// .add({
//   targets: '.loading-dot',
//   backgroundColor: [
//     { value: '#9ca3af', easing: 'easeOutSine' },
//     { value: '#6b7280', easing: 'easeOutSine' },
//   ],
//   scale: [
//     { value: 0.6, easing: 'easeOutSine', duration: 500 },
//     { value: 1, easing: 'easeOutSine', duration: 500 },
//   ],
//   loop: 3,
//   delay: anime.stagger(200, {
//     grid: [1, 3],
//     from: 'first',
//   }),
// }).add({
//   targets: '.loading',
//   opacity: 0,
//   duration: 1000,
// }).add({
//   targets: ['.message'],
//   // width: [loading.value.width],
//   easing: 'easeInOutQuad',
//   opacity: 1,
//   begin: function () {
//     loading.value.style.display = 'none'
//     message.value.style.display = 'block'
//   },
// })
onMounted(() => {
  const test = anime.timeline({
    targets: 'section',
    translateY: ['50', 0],
    opacity: [0, 1],
    delay: anime.stagger(250),
  }).add({
    targets: '.loading-dot',
    backgroundColor: [
      { value: '#9ca3af', easing: 'easeOutSine' },
      { value: '#6b7280', easing: 'easeOutSine' },
    ],
    scale: [
      { value: 0.6, easing: 'easeOutSine', duration: 500 },
      { value: 1, easing: 'easeOutSine', duration: 500 },
    ],
    loop: 3,
    delay: anime.stagger(200, {
      grid: [1, 3],
      from: 'first',
    }),
  }).add({
    targets: ['.message'],
    // width: [loading.value.width],
    easing: 'easeInOutQuad',
    opacity: [0, 1],
    // begin: function () {
    //   loading.value.style.display = 'none'
    //   message.value.style.display = 'block'
    // },
  })
  test.play()
})
</script>
