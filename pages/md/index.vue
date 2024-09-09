<script setup lang="ts">
const links = [{
  label: 'Home',
  icon: 'i-heroicons-home',
  to: '/',
},
{
  label: 'Files',
  icon: 'i-heroicons-square-3-stack-3d',
  to: '/md',
  rel: '/',
},
]
</script>

<template>
  <main class="max-w-5xl mx-auto flex flex-col border gap-5 p-4 py-14">
    <UBreadcrumb :links="links">
      <template #default="{ link, isActive }">
        <UBadge
          :color="isActive ? 'primary' : 'gray'"
          class="rounded-full truncate"
        >
          {{ link.label }}
        </UBadge>
      </template>
    </UBreadcrumb>
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
