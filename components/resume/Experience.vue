<script setup>
// const {company, timeline, }
</script>


<template>
    <div class="">
      <div class="flex text-black dark:text-white justify-between items-center">
        <h2 class="font-semibold">{company}</h2>
        <h3 class="font-semibold">{timeline}</h3>
      </div>
      <div class="flex justify-between items-center text-gray-800 dark:text-gray-300 mb-3">
        <h3>{position}</h3>
        <h4>{remote ? "remote" : "on-site"}</h4>
      </div>
      <p class="font-thin">{desc}</p>
      <h3 class=" text-gray-700 dark:text-gray-400 my-2">
        {tech && "Tech: " + tech}
      </h3>
    </div>
</template>
