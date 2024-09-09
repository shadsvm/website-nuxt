<template>
  <DevOnly>
    <pre>{{ JSON.stringify({ links }, null, 2) }}</pre>

    <div class="w-full space-y-10" />
    <div class="w-full border p-10">
      <div class="w-1/2 border p-10" />
      <div class="w-1/3 border p-10" />
    </div>
  </DevOnly>
</template>

<script setup lang="ts">
const links = useState('links')
</script>
