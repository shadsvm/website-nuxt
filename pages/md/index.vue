<script setup lang="ts">

</script>

<template>
  <main>
    <ContentList path="/md" v-slot="{ list }">
      <div v-for="article in list" :key="article._path">
        <h2>{{ article.title }}</h2>
        <p>{{ article.description }}</p>
      </div>
    </ContentList>
  </main>
</template>
