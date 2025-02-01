<template>
  <section class="problem-solution py-20">
    <div class="container mx-auto px-6">
      <h2 class="text-8xl md:text-8xl font-bold mb-16 text-white text-center">
        Why the World Needs IgniteAI
      </h2>

      <div
        class="flex flex-col md:flex-row items-center justify-between gap-12 mb-16"
      >
        <!-- Problem Section -->
        <div class="md:w-1/2 text-center md:text-left">
          <h3 class="text-6xl font-bold mb-6 text-white">The Problem</h3>
          <p
            class="text-xl text-white leading-relaxed max-w-2xl mx-auto md:mx-0"
          >
            The world is overwhelmed by disconnected, inefficient tools that
            fail to adapt to personal or business needs.
          </p>
        </div>

        <!-- Separator -->
        <div
          class="text-white text-8xl font-bold rotate-90 md:rotate-0 hidden md:block"
        >
          /
        </div>

        <!-- Solution Section -->
        <div class="md:w-1/2 text-center md:text-right">
          <h3 class="text-6xl font-bold mb-6 text-white">The Solution</h3>
          <p
            class="text-xl text-white leading-relaxed max-w-2xl mx-auto md:mx-0"
          >
            IgniteAI simplifies the chaos with intelligent, adaptive AI Agents
            designed to make life and business easier, smarter, and more
            effective.
          </p>
        </div>
      </div>

      <div class="text-center">
        <p class="text-2xl md:text-3xl font-bold text-white italic">
          "Stop juggling tools. Let IgniteAI do the heavy lifting for you."
        </p>

        <button class="cosmic-button cosmic-button-white mt-12">
          Discover How We Help
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
// Script setup jika diperlukan
</script>

<style scoped>
.problem-solution {
  background-image: url('@/assets/images/Slide-4-BG.png');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

/* Animasi untuk separator */
.rotate-90 {
  transform: rotate(90deg);
}

@media (min-width: 768px) {
  .rotate-90 {
    transform: rotate(0);
  }
}

.cosmic-button {
  @apply border-2 px-8 py-3 rounded-full text-lg font-bold transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)];
}

.cosmic-button-white {
  @apply border-black text-black bg-white hover:bg-black hover:text-white;
}
</style>
