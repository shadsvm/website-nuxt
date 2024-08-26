
<template>
  <div>

    <main class="max-w-5xl mx-auto">
      <div class="absolute blur inset-0 -z-10 bg-[35%_top] bg-no-repeat sm:bg-[38%_top] md:bg-[40%_top] lg:bg-[44%_top] xl:bg-top forced-colors:hidden " style="background-image: url('https://headlessui.com/_next/static/media/bg-top.c54a3f7e.jpg ');" aria-hidden="true"></div>

      <slot />

    </main>
  <!-- <div class="absolute blur inset-0 -z-10 bg-[35%_bottom] bg-no-repeat mix-blend-screen sm:bg-[38%_bottom] md:bg-[40%_bottom] lg:bg-[44%_bottom] xl:bg-bottom forced-colors:hidden" style="background-image:url('https://headlessui.com/_next/static/media/bg-bottom.e4e0724b.jpg')" aria-hidden="true"></div> -->
  </div>

</template>
<!-- <div class="font-['David_Libre'] text-5xl text-center mx-auto">שמואל</div> -->
<!-- <div class="absolute inset-0 -z-10 bg-top opacity-10 forced-colors:hidden" style="background-image:url('https://headlessui.com/_next/static/media/bg-noise.67fd2524.png')" aria-hidden="true"></div> -->






<style>

  html {
    scroll-behavior: smooth;
  }

  body {
    background-image: url("/img/noise.png");
    background-size: 200px 200px;
    background-position: 0 0;
    @apply bg-zinc-100 text-black dark:bg-black dark:text-white font-['Space_Mono']

  }

  /* h1 {
    @apply font-semibold text-xl my-1;
  }
  h2 {
    @apply text-lg;
  }
  h3 {
    @apply text-base;
  }
  h4 {
    @apply text-sm;
  }
  h5 {
    @apply text-sm;
  } */

  /* p {
    @apply text-gray-500 text-sm text-justify;
  } */

</style>
