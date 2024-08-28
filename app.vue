<template>
  <NuxtLoadingIndicator />
  <NuxtRouteAnnouncer />
  <NuxtPage />
</template>

<style>
html {
    scroll-behavior: smooth;
  }

  body {
    background-image: url("/img/noise.png");
    background-size: 200px 200px;
    background-position: 0 0;
    @apply bg-zinc-100 text-black dark:bg-neutral-900 dark:text-white font-['DM_Mono']

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
</style>
