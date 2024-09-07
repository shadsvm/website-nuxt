<template>
  <NuxtLoadingIndicator />
  <NuxtRouteAnnouncer />
  <NuxtPage />
</template>

<script setup lang="ts">
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
    href: 'https://github.com/shadsvm',
    icon: 'uil:linkedin',
  },
  {
    label: 'Resume',
    href: 'https://github.com/shadsvm',
    icon: 'uil:file',
  },
  {
    label: 'contact@svm.engineer',
    href: 'mailto:contact@svm.engineer',
    icon: 'uil:envelope',
  },

])

useState<string[]>('messages', () => [
  'Interested in collaborating? 😄', 'Drop me a message', 'I’ll get back to you soon',
])
</script>

<style>
html {
    scroll-behavior: smooth;
  }

  body {
    background-image: url("/img/noise.png");
    background-size: 200px 200px;
    background-position: 0 0;
    @apply bg-zinc-50 text-black dark:bg-neutral-900 dark:text-white font-['Source_Code_Pro']

  }

  h1,h2,h3 {
    @apply text-3xl tracking-widest
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

  body::before {
  --line: color-mix(in lch, canvasText 25%, transparent);
  --size: 40px;
  content: '';
  height: 100vh;
  width: 100vw;
  position: fixed;
  background: linear-gradient(
        90deg,
        var(--line) 1px,
        transparent 1px var(--size)
      )
      0 -5vmin / var(--size) var(--size),
    linear-gradient(var(--line) 1px, transparent 1px var(--size)) 0 -5vmin / var(
        --size
      ) var(--size);
  mask: linear-gradient(-15deg, transparent 70%, white);
  top: 0;
  z-index: -1;
  }
</style>
