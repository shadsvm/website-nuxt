<script setup lang="ts">
const links = [
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/',
  },
  {
    label: 'Articles',
    icon: 'i-heroicons-square-3-stack-3d',
  },
]
</script>

<template>
  <main
    class="max-w-2xl mx-auto flex flex-col gap-5 p-4 my-14 divide-y rounded-xl bg-stone-950/80"
  >
    <UBreadcrumb :links="links" />
    <ContentList v-slot="{ list }">
      <NuxtLink
        v-for="article in list"
        :key="article._path"
        :href="article._path"
      >
        <div class="p-5 rounded">
          <h2 class="text-xl">
            {{ article.title }}
          </h2>
          <p>{{ article.description }}</p>
        </div>
      </NuxtLink>
    </ContentList>
  </main>
</template>
