<script setup lang="ts">

</script>

<template>
  <main class="max-w-5xl mx-auto p-4 py-14">
    <ContentList
      v-slot="{ list }"
      path="/md"
    >
      <NuxtLink
        v-for="article in list"
        :key="article._path"
        :href="article._path"
      >
        <h2>{{ article.title }}</h2>
        <p>{{ article.description }}</p>
      </NuxtLink>
    </ContentList>
  </main>
</template>
