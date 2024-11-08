<template>
  <NuxtLoadingIndicator />
  <NuxtRouteAnnouncer />
  <NuxtPage />
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'en',
  },
})
useSeoMeta({
  title: 'Samuel Kaminski',
  ogTitle: 'Samuel Kaminski',
  description: 'Samuel Kaminski - Full Stack Developer',
  ogDescription: 'Samuel Kaminski - Full Stack Developer',
  ogImage: '/img/memoji-wink.png',
  twitterCard: 'summary_large_image',
})
useState<string[]>('messages', () => [
  'Looking for dev? 👋',
  'I can build your ideas',
  'Send message, I will respond asap',
])
export type BioLink = {
  label: string
  href: string
  icon: string
}
useState<BioLink[]>('links', () => [
  {
    label: 'Github',
    href: 'https://github.com/shadsvm',
    icon: 'uil:github',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/sam-kmn',
    icon: 'uil:linkedin',
  },
  {
    label: 'Resume',
    href: '/md/resume',
    icon: 'uil:file',
  },
  {
    label: 'hello@svm.engineer',
    href: 'mailto:hello@svm.engineer',
    icon: 'uil:envelope',
  },
])
</script>

<style>
html {
  scroll-behavior: smooth;
}

body {
  background-image: url('/img/noise.png');
  background-size: 200px 200px;
  background-position: 0 0;
  @apply text-sm bg-zinc-50 text-black dark:bg-neutral-900 dark:text-white font-['DM_Mono'];
}
body::before {
  --line: color-mix(in lch, canvasText 25%, transparent);
  --size: 40px;
  content: '';
  height: 100vh;
  width: 100vw;
  position: fixed;
  background:
    linear-gradient(90deg, var(--line) 1px, transparent 1px var(--size)) 0 -5vmin /
      var(--size) var(--size),
    linear-gradient(var(--line) 1px, transparent 1px var(--size)) 0 -5vmin / var(
        --size
      ) var(--size);
  mask: linear-gradient(-15deg, transparent 70%, white);
  top: 0;
  z-index: -1;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
.border {
  @apply border-red-500;
}

h1,
h2 {
  @apply tracking-widest;
}
</style>
