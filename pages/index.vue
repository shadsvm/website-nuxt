<template>
  <main class="max-w-5xl mx-auto">
    <!--  -->
    <section class="h-[100dvh] flex justify-center items-center flex-col px-10">
      <!-- Header,Links & ChatMessage -->
      <div class="h-full flex flex-col-reverse md:flex-row gap-8 justify-center md:justify-between items-center ">
        <!-- Header,Links -->
        <div class="flex flex-col gap-6 justify-center items-center text-center md:text-start md:justify-start md:items-start">
          <!-- Header -->
          <section class="">
            <h1 class="text-3xl sm:text-3xl lg:text-4xl  text-black dark:text-white font-semibold tracking-widest">
              Samuel Kaminski
            </h1>
            <h4 class="text-stone-600 dark:text-white tracking-widest ">
              Full Stack Developer
            </h4>
          </section>
          <!-- Filler -->
          <section class="text-stone-500 text-justify tracking-wider max-w-sm md:max-w-md">
            driven by a passion for technology and a love for bringing ideas to life. I guide products from concept to
            launch with a thoughtful, hands-on approach.
          </section>

          <!-- Links -->
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
        <div class=" w-full max-w-xs flex flex-col justify-end gap-5 items-center mb-10">
          <section>
            <NuxtImg
              src="/img/memoji-wink.png"
              alt="Cartoon-style picuter of me"
              class="bg-white shadow-lg rounded-full max-w-52"
            />
          </section>
          <section class="flex flex-col gap-2 justify-start items-end  w-full">
            <ChatMessage
              :items="messages"
            />
          </section>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import anime from 'animejs'
import type { BioLink } from '~/app.vue'

const links = useState<BioLink[]>('links')
const messages = useState<string[]>('messages')

onMounted(() => {
  anime({
    targets: 'section',
    translateY: ['50', 0],
    opacity: [0, 1],
    delay: anime.stagger(250),
  })
})
</script>

<style>
section{
  @apply opacity-0
}
</style>
