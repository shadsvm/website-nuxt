<template>
  <div class="max-w-3xl py-20 mx-auto prose dark:prose-invert prose-pre:bg-stone-100 dark:prose-pre:bg-stone-950/50 hover:prose-a:text-primary-400 prose-a:font-normal prose-a:no-underline transition duration-300">
    <ContentDoc>
      <template #default="{ doc }">
        <div class="flex justify-between items-center">
          <header>
            <h1 class="mb-0">
              {{ doc.title }}
            </h1>
            <h4 class="m-0">
              {{ doc.description }}
            </h4>
          </header>
          <UButton
            icon="i-heroicons-printer"
            size="sm"
            color="primary"
            variant="soft"
            label="Print"
            :trailing="false"
            @click="printer"
          />
        </div>
        <article>
          <ContentRenderer :value="doc" />
        </article>
      </template>
      <template #not-found>
        <h1>Document not found</h1>
      </template>
    </ContentDoc>
  </div>
</template>

<script setup lang="ts">
const printer = () => window.print()
</script>
