<template>
  <section class="ai-agents py-20">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-6xl font-bold mb-4 text-white">
          Your Personal AI Agents for Every Need
        </h2>
        <p class="text-xl text-white opacity-90">
          Experience Next-Gen AI Solutions Tailored For You
        </p>
      </div>

      <!-- AI Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <!-- Manually adding each agent image -->
        <div
          class="group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
        >
          <img
            src="/assets/images/Slide-3-FinIgnite.png"
            alt="FinIgnite"
            class="w-full h-auto object-cover"
          />
        </div>

        <div
          class="group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
        >
          <img
            src="/assets/images/Slide-3-MedIgnite.png"
            alt="MedIgnite"
            class="w-full h-auto object-cover"
          />
        </div>

        <div
          class="group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
        >
          <img
            src="/assets/images/Slide-3-EduIgnite.png"
            alt="EduIgnite"
            class="w-full h-auto object-cover"
          />
        </div>

        <div
          class="group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
        >
          <img
            src="/assets/images/Slide-3-CreateIgnite.png"
            alt="CreateIgnite"
            class="w-full h-auto object-cover"
          />
        </div>

        <div
          class="group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
        >
          <img
            src="/assets/images/Slide-3-BizIgnite.png"
            alt="BizIgnite"
            class="w-full h-auto object-cover"
          />
        </div>

        <div
          class="group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
        >
          <img
            src="/assets/images/Slide-3-MetaIgnite.png"
            alt="MetaIgnite"
            class="w-full h-auto object-cover"
          />
        </div>
      </div>

      <div class="text-center">
        <button class="cosmic-button">Try The Agents</button>
      </div>
    </div>
  </section>
</template>

<script setup>
// No need for dynamic image paths here since we manually added them.
</script>

<style scoped>
.ai-agents {
  background-image: url('/assets/images/Slide-3-BG.png');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

/* Smooth hover effect */
.group:hover img {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}

.cosmic-button {
  @apply bg-transparent border-2 border-white text-white px-8 py-3 rounded-full
         text-lg font-bold hover:bg-white hover:text-black transition-all
         duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)];
}
</style>
