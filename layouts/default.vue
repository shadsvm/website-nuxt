<template>
  <main class="max-w-5xl mx-auto">
    <slot />
  </main>
</template>
<!-- <div class="font-['David_Libre'] text-5xl text-center mx-auto">שמואל</div> -->

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
</style>
