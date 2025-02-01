<template>
  <section class="final-cta text-white py-20">
    <div class="container mx-auto text-center mt-64">
      <h2 class="text-9xl font-extrabold mb-8">
        Join the Future of AI Agents Today
      </h2>
      <p class="text-2xl font-semibold my-8">
        IgniteAI is more than a product—it’s a revolution in how humans and AI
        work together. With AI Agents designed to empower, adapt, and simplify,
        the possibilities are endless. Be part of this movement, and let’s build
        the future together.
      </p>
      <div class="space-x-4">
        <button class="cosmic-button cosmic-button-black">
          Start Your Journey with IgniteAI
        </button>
        <button class="cosmic-button cosmic-button-white">
          Meet the Agents
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
// Script setup jika diperlukan
</script>

<style scoped>
.final-cta {
  background-image: url('@/assets/images/Slide-8-BG.png');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
}

.cosmic-button {
  @apply border-2 px-8 py-3 rounded-full text-lg font-bold transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)];
}

.cosmic-button-black {
  @apply border-white text-white bg-black hover:bg-white hover:text-black;
}

.cosmic-button-white {
  @apply border-black text-black bg-white hover:bg-black hover:text-white;
}
</style>
