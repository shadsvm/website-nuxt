<template>
  <div
    v-for="(item, index) in items"
    :key="index"
    ref="itemRefs"
    class="bubble opacity-0 relative"
  >
    <p
      ref="messageRefs"
      class="message text-white!"
    >
      {{ item }}
    </p>
    <span
      ref="loadingRefs"
      class="loading flex gap-1.5 sm:gap-2 absolute"
    >
      <div
        v-for="i in 3"
        :key="i+'dot'"
        class="dot"
      />
    </span>
  </div>
</template>

<script setup lang="ts">
import anime from 'animejs'

interface Props {
  items: string[]
}

const { items } = defineProps<Props>()
const itemRefs = ref<Ref[]>([])
const messageRefs = ref<HTMLDivElement[]>()
const loadingRefs = ref<HTMLDivElement[]>()
const loadingSpeed = 600

onMounted(() => {
  const timeline = anime.timeline({
    easing: 'easeInOutSine',
  })

  itemRefs.value.forEach((bubble, index) => {
    if (!bubble || !messageRefs.value || !loadingRefs.value) return
    const message = messageRefs.value[index]
    const loading = loadingRefs.value[index]

    timeline.add({
      targets: bubble,
      easing: 'easeOutSine',
      duration: 200,
      opacity: 1,
      scale: [0, 1],
      translateX: [150, 0],
    }).add({
      targets: '.dot',
      opacity: [
        { value: 0.6, easing: 'easeOutSine', duration: loadingSpeed },
        { value: 1, easing: 'easeOutSine', duration: loadingSpeed },
        { value: 0.6, easing: 'easeOutSine', duration: loadingSpeed },
        { value: 1, easing: 'easeOutSine', duration: loadingSpeed },
        { value: 0.6, easing: 'easeOutSine', duration: loadingSpeed },
        { value: 1, easing: 'easeOutSine', duration: loadingSpeed },
      ],
      scale: [
        { value: 0.7, easing: 'easeOutSine', duration: loadingSpeed },
        { value: 1, easing: 'easeOutSine', duration: loadingSpeed },
        { value: 0.7, easing: 'easeOutSine', duration: loadingSpeed },
        { value: 1, easing: 'easeOutSine', duration: loadingSpeed },
        { value: 0.7, easing: 'easeOutSine', duration: loadingSpeed },
        { value: 1, easing: 'easeOutSine', duration: loadingSpeed },
      ],
      delay: anime.stagger(300, {
        grid: [1, 3],
        from: 'first',
      }),
    }).add({
      targets: bubble,
      borderBottomRightRadius: ['0px', '9999px'],
      width: [loading.offsetWidth + 40, message.offsetWidth + 40],
      height: [loading.offsetHeight + 30, message.offsetHeight + 24],
      easing: 'easeOutSine',
      duration: 200,
      begin: function () {
        loading.style.display = 'none'
        message.style.color = 'black'
      },
    }).add({
      targets: message,
      opacity: [0, 1],
      duration: 200,
      easing: 'easeOutSine',
    })
  })
  timeline.play()
})
</script>

<style>
.bubble{
@apply px-3 sm:px-5 py-1.5 sm:py-3 flex justify-center items-center gap-3 w-min  text-white bg-white dark:bg-stone-200 rounded-tr-full rounded-l-full font-[Poppins] text-center tracking-wider font-semibold whitespace-pre  shadow
}

.message {
@apply w-min text-start
}

.dot {
@apply w-3 sm:w-4 h-3 sm:h-4 bg-gray-500 rounded-full
}
</style>
