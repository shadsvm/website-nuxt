<template>
  <main class="max-w-3xl mx-auto h-[100dvh] flex flex-col justify-center items-center  gap-5  px-10">
    <!-- Header -->

    <section class="w-full flex justify-start items-center gap-4 sm:gap-6 ">
      <NuxtImg
        format="webp"
        fit="inside"
        width="75"
        height="75"
        src="/img/memoji-wink.png"
        alt="Cartoon-style picuter of me"
        class="bg-white/20 shadow-lg rounded-full max-w-20"
      />

      <header>
        <h1 class="text-3xl sm:text-4xl font-semibold ">
          Samuel Kaminski
        </h1>
        <h2 class="text-stone-300 text-lg">
          Senior Full Stack Developer
        </h2>
      </header>
    </section>

    <!-- Filler -->
    <section class="text-stone-500 text-justify tracking-wider px-4">
      driven by a passion for technology and a love for bringing ideas to life. I guide products from concept to
      launch with a thoughtful, hands-on approach.
    </section>
    <!-- Links -->
    <section class="w-full flex gap-2 flex-wrap ">
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
    <!-- Chat alike -->
    <section class="flex flex-col gap-2 justify-start  items-end my-5 w-full">
      <ChatMessage
        :items="messages"
      />
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
