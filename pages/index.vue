<template>
  <!-- <ClientOnly> -->
  <div class="max-w-5xl mx-auto">
    <!-- <pre>{{ JSON.stringify({ loadingWidth, messageWidth }, null, 2) }}</pre> -->
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
              class="message hidden font-[Poppins] text-right tracking-wider font-semibold text-nowrap text-black"
            >
              Hi, give me a call 👋
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
// import { useElementSize } from '@vueuse/core'

const bubble = ref()
const message = ref()
const loading = ref()
// const { width: messageWidth } = useElementSize(message)
// const { width: loadingWidth } = useElementSize(loading)

onMounted(() => {
  const test = anime.timeline({
    targets: 'section',
    translateY: ['50', 0],
    opacity: [0, 1],
    delay: anime.stagger(250),
  }).add({
    targets: '.loading-dot',
    opacity: [
      { value: 0.6, easing: 'easeOutSine', duration: 700 },
      { value: 1, easing: 'easeOutSine', duration: 700 },
      { value: 0.6, easing: 'easeOutSine', duration: 700 },
      { value: 1, easing: 'easeOutSine', duration: 700 },
      { value: 0.6, easing: 'easeOutSine', duration: 700 },
      { value: 1, easing: 'easeOutSine', duration: 700 },
    ],
    scale: [
      { value: 0.7, easing: 'easeOutSine', duration: 700 },
      { value: 1, easing: 'easeOutSine', duration: 700 },
      { value: 0.7, easing: 'easeOutSine', duration: 700 },
      { value: 1, easing: 'easeOutSine', duration: 700 },
      { value: 0.7, easing: 'easeOutSine', duration: 700 },
      { value: 1, easing: 'easeOutSine', duration: 700 },
    ],
    delay: anime.stagger(300, {
      grid: [1, 3],
      from: 'first',
    }),
  }).add({
    targets: ['.bubble'],
    width: [104, 200],
    easing: 'easeOutSine',
    duration: 200,
    begin: function () {
      loading.value.style.display = 'none'
      message.value.style.display = 'block'
    },
  }).add({
    targets: '.message',
    opacity: [0, 1],
    easing: 'easeOutSine',
    duration: 300,
  })
  test.play()
})
</script>

<style>
.text-gradient{
  color: #2ea8ff;
  background-image: -webkit-linear-gradient(45deg, #2ea8ff 0%, #d900ff 100%);
  background-clip: text;
  /* text-fill-color: transparent; */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

}
</style>
