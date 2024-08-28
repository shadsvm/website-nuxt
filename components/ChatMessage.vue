<template>
  <div class="chat-container">
    <div
      ref="messagesEl"
      class="messages"
    >
      <div
        v-for="(message, index) in messages"
        :key="index"
        class="bubble"
        :class="message.position"
      >
        <span class="message">{{ message.text }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useWindowScroll } from '@vueuse/core'
import anime from 'animejs'

// Define message interface
interface Message {
  text: string
  position: 'left' | 'right'
}

// Messages data (this would typically come from an API or state management)
const messages = ref<Message[]>([
  { text: 'Hi there!', position: 'left' },
  { text: 'Hello! How can I help you today?', position: 'right' },
])

// Refs
const messagesEl = ref<HTMLElement | null>(null)

// Use composable for scroll tracking
const { y } = useWindowScroll()

// Scroll to bottom on new message
const scrollToBottom = () => {
  if (messagesEl.value) {
    anime({
      targets: messagesEl.value,
      scrollTop: messagesEl.value.scrollHeight,
      duration: 750,
      easing: 'easeOutQuad',
    })
  }
}

onMounted(() => {
  scrollToBottom() // Initial scroll
})

messages.value.push({ text: 'Here is a new message!', position: 'left' })
scrollToBottom()
</script>

<style scoped>
.chat-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  overflow-y: auto;
  height: 80vh;
  /* background-color: #f7f7f8; */
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.messages {
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: auto;
}

.bubble {
  max-width: 75%;
  padding: 10px 15px;
  border-radius: 20px;
  background-color: #007aff;
  color: white;
  font-size: 14px;
  line-height: 1.4;
  opacity: 0;
  transform: scale(0.95);
  transition: all 0.3s ease-out;
}

.bubble.left {
  align-self: flex-start;
  background-color: #e5e5ea;
  color: black;
}

.bubble.right {
  align-self: flex-end;
  background-color: #007aff;
}

.bubble.enter-active, .bubble.move-active {
  transform: scale(1);
  opacity: 1;
  transition: all 0.3s ease-out;
}

.message {
  display: block;
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>
