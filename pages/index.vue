<template>
  <main class="max-w-5xl mx-auto">
    <!--  -->
    <section class="h-[100dvh] flex justify-center items-center flex-col px-10">
      <div class="h-full flex flex-col-reverse md:flex-row gap-8 justify-center md:justify-between items-center ">
        <!-- Hero buttons -->
        <div class="space-y-8">
          <section class="font-bold text-2xl sm:text-3xl lg:text-4xl text-center md:text-start text-stone-400 tracking-widest">
            I'm <span class="text-black dark:text-white font-extrabold tracking-widest"> Samuel Kaminski </span>
            <br>
            Full Stack Developer
          </section>

          <section class="text-stone-500 text-justify tracking-wider">
            driven by a passion for technology and a love for bringing ideas to life. I guide products from concept to
            launch with a thoughtful, hands-on approach.
          </section>
          <section class="flex gap-8 flex-wrap">
            <NuxtLink
              v-for="link in links"
              :key="link.href"
              :href="link.href"
              class="flex justify-center items-center gap-2 text-lg hover:bg-stone-500/20 transition duration-300 px-4 py-2 rounded-full"
            >
              <Icon
                :name="link.icon"
                size="20"
              />
              {{ link.label }}
            </NuxtLink>
          </section>
        </div>
        <!-- Chat alike -->
        <div class=" w-full max-w-xs flex flex-col justify-end gap-5 items-center">
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
              {{ test }}
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
          <p

            class="px-5 py-3 flex gap-3 w-min bg-gray-50 rounded-tr-full rounded-l-full  font-[Poppins] text-right tracking-wider font-semibold text-nowrap text-black"
          >
            {{ test }}
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import anime from 'animejs'
import type { BioLink } from '~/app.vue'

const bubble = ref()
const message = ref()
const loading = ref()
const links = useState<BioLink[]>('links')
const test = ref('Hi, let\'s get in touch 👋')
// const msgwidth = useElementSize(message)

onMounted(() => {
  const animations = anime.timeline({
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
    width: [104, test.value.length * 7 + 40],
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
  animations.play()
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
