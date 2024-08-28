<template>
  <div>
    <h1 class="title">
      Nuxt Anime
    </h1>

    <div class="rect bg-white w-10 h-10" />
    <div class="timeline bg-white w-10 h-10" />
    <div class="timeline bg-white w-10 h-10" />
    <div class="timeline bg-white w-10 h-10" />
  </div>
</template>

<script setup lang="ts">
import { useAnime } from '#anime'

onMounted(() => {
  // useAnime({
  //   targets: '.rect',
  //   keyframes: [
  //     { translateX: 250 },
  //     { translateY: 200 },
  //     { rotate: 360, easing: 'easeOutExpo' },
  //   ],
  //   duration: 1000,
  //   easing: 'easeOutElastic(1, .8)',
  //   // loop: true,
  // })
  const test = useAnime.timeline({
    easing: 'easeOutExpo',
    duration: 750,
  }).add({
    targets: '.timeline .el.square',
    translateX: 250,
  }).add({
    targets: '.timeline .el.circle',
    translateX: 250,
  }).add({
    targets: '.timeline .el.triangle',
    translateX: 250,
  })

  test.play()
})
</script>
