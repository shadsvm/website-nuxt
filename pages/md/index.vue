<script setup lang="ts">
</script>

<template>
  <main class="max-w-5xl mx-auto flex flex-col gap-5 p-4 py-14">
    <ContentList
      v-slot="{ list }"
      path="/md"
    >
      <NuxtLink
        v-for="article in list"
        :key="article._path"
        :href="article._path"
      >
        <div class="backdrop-blur-md bg-white/5 p-5 rounded">

          <h2 class="text-3xl">
            {{ article.title }}
          </h2>
          <p>{{ article.description }}</p>
        </div>
      </NuxtLink>
    </ContentList>
  </main>
</template>
