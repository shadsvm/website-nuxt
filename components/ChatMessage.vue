<template>
  <div
    v-for="(item, index) in items"
    :key="index"
    ref="itemRefs"
    class="bubble"
  >
    <p
      class="message hidden "
    >
      <!-- {{ text }} -->
    </p>
    <span
      class="loading flex gap-2 "
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
const itemRefs = ref([])
const message = ref()
const loading = ref()
// const { width: msgWidth } = useElementSize(message)
// const { width: bubbleWidth } = useElementSize(bubble)
// const msgwidth = useElementSize(message)

onMounted(() => {
  const timeline = anime.timeline({
    easing: 'easeInOutSine',
    duration: 750,
  })

  // Loop through refs and animate them in sequence
  itemRefs.value.forEach((el) => {
    if (el) {
      timeline.add({
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
        width: [104, 300],
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
    }
  })
})
</script>

<style>
.bubble{
@apply px-5 py-3 flex gap-3 w-min bg-gray-50 rounded-tr-full rounded-l-full font-[Poppins] text-center tracking-wider font-semibold text-nowrap text-black
}

.dot {
@apply w-4 h-4 bg-gray-500 rounded-full
}
</style>
