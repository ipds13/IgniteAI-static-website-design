<template>
  <section class="roadmap relative py-20">
    <div class="container mx-auto mb-20 text-center">
      <h2 class="text-8xl md:text-8xl font-bold text-white">
        Powered by Cutting-Edge AI Technology
      </h2>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.roadmap {
  background-image: url('@/assets/images/Slide-6-BG.png');
  background-size: cover;
  background-position: center;
}

/* Responsive typography */
@media (max-width: 768px) {
  .roadmap h2 {
    @apply text-4xl;
  }

  .roadmap h3 {
    @apply text-3xl;
  }

  .roadmap p {
    @apply text-lg;
  }
}
</style>
