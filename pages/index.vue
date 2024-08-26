<script setup lang="ts">

</script>

<template>
  <section class="h-[100dvh] flex justify-center items-center flex-col">
      <nav class="py-10">
      <div class="font-['Libre_Barcode_39_Text'] text-5xl text-center mx-auto">SVM</div>
    </nav>

  <div class=" flex-1 flex gap-8 justify-between items-center">
    <div class="basis-2/3 space-y-4">

      <div>

      </div>
      <div class="font-bold text-5xl">
        I'm <span class="text-gradient"> Samuel Kaminski </span>
        <br/>
        Full Stack Developer
      </div>
      <p class="text-stone-500">
        driven by a passion for technology and a love for bringing ideas to life. I guide products from concept to launch with a thoughtful, hands-on approach.
      </p>
    </div>
    <div class="max-w-sm">
      <!-- <HeroSvg /> -->
       <img src="/public/img/sticker.png"/>
    </div>
  </div>
  </section>
  <section class="h-[100dvh]">

  </section>
</template>

<style>

.text-gradient{
  color: #2ea8ff;
  background-image: -webkit-linear-gradient(45deg, #2ea8ff 0%, #d900ff 100%);
  background-clip: text;
  /* text-fill-color: transparent; */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

}
</style>
