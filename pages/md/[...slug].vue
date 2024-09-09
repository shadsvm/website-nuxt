<template>
  <div>
    <UBreadcrumb :links="links">
      <template #default="{ link, isActive, index }">
        <UBadge
          :color="isActive ? 'primary' : 'gray'"
          class="rounded-full truncate"
        >
          {{ index + 1 }}. {{ link.label }}
        </UBadge>
      </template>
    </UBreadcrumb>
    <UButton
      icon="i-heroicons-pencil-square"
      size="sm"
      color="primary"
      variant="solid"
      label="Button"
      :trailing="false"
    />
    <main class="max-w-5xl mx-auto p-4 py-14 flex flex-col gap-5 prose dark:prose-invert prose-pre:bg-stone-100 dark:prose-pre:bg-stone-950/50 hover:prose-a:text-primary-400 prose-a:font-normal prose-a:no-underline transition duration-300">
      <ContentDoc />
    </main>
  </div>
</template>

<script setup lang="ts">
const links = [{
  label: 'Home',
  icon: 'i-heroicons-home',
  to: '/',
}, {
  label: 'Files',
  icon: 'i-heroicons-square-3-stack-3d',
  to: '/md',
}, {
  label: 'Resume',
  icon: 'i-heroicons-link',
  to: '/md/resume',
},
]
</script>
