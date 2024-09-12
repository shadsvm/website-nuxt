<template>
  <DevOnly>
    <pre>{{ JSON.stringify({ messages, links }, null, 2) }}</pre>
  </DevOnly>
</template>

<script setup lang="ts">
const messages = useState('messages')
const links = useState('links')
</script>
