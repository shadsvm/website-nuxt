<template>
  <DevOnly>
    <pre>{{ JSON.stringify({ links }, null, 2) }}</pre>
  </DevOnly>
</template>

<script setup lang="ts">
const links = useState('links')
</script>
