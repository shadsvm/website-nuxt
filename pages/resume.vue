<script setup lang="ts">

</script>

<template>
  <main class="p-5 sm:py-20 mx-auto w-full max-w-2xl flex flex-col gap-16">
    <section class="flex flex-col-reverse sm:flex-row justify-between gap-20 sm:gap-10 text-sm">
      <div class="flex flex-col gap-4 max-w-xs">
        <div>
          <h1>Samuel Kaminski</h1>

          <p class="flex gap-1 justify-start items-center">
            Poznan, Poland, CET
          </p>
        </div>
        <p>
          I’m a Full Stack Developer driven by a passion for technology and a
          love for bringing ideas to life. I guide products from concept to
          launch with a thoughtful, hands-on approach.
        </p>
        <div class="flex flex-col gap-1 mt-5">
          <button class="btn-link">
            Print my resume
          </button>
          <LucidePrinter />

          <a
            class="btn-link"
            href="mailto:contact@svm.engineer"
          >
            <LucideMail />
            contact@svm.engineer
          </a>
          <a
            class="btn-link"
            href="tel:+48530643361"
          >
            <LucidePhone />
            +48 530-643-361
          </a>
        </div>
      </div>

      <div class="flex flex-row-reverse sm:flex-col items-center gap-4 p-5">
        <div class="w-16 h-16 sm:w-full sm:h-auto sm:max-w-40 rounded  overflow-hidden">
          <img
            src="/me.jpeg"
            class="aspect-square object-cover scale-150  "
            alt=""
          >
        </div>
        <div class="flex flex-col items-end gap-1">
          <a
            class="btn-link"
            href="https://github.com/shadsvm"
          >
            <LucideGithub />
            shadsvm
          </a>

          <a
            class="btn-link"
            href="https://linkedin.com/u/sam-kmn"
          >
            <LucideLinkedin />
            sam-kmn
          </a>
        </div>
      </div>
    </section>

    <section class="">
      <h1>Experience</h1>
      <p>
        I bring concepts to life by guiding products from the initial idea to
        a successful launch. I start by working closely with stakeholders to
        define the project’s goals and vision. Through years of working on
        different products, I’ve learned how to deliver a final product that
        not only meets business needs but also provides a great user
        experience. My experience, combined with a dedication to continuous
        learning, makes me a reliable engineer who gets the job done
        efficiently.
      </p>
    </section>
  </main>
</template>
