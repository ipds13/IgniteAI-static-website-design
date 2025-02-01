<template>
  <section class="hero-section relative text-white py-20">
    <div class="container mx-auto flex justify-between items-center">
      <div class="flex flex-col items-center justify-between">
        <div class="md:w-1/2 z-30 text-center md:text-left">
          <h1 class="text-4xl md:text-7xl font-bold mb-6">
            The Future of Intelligent AI Agents
          </h1>
          <p class="text-xl md:text-2xl font-semibold mb-8">
            IgniteAI delivers AI Agents that don’t just work—they adapt, learn,
            and empower. Transform complexity into simplicity and unlock new
            opportunities effortlessly.
          </p>
          <div class="space-x-4">
            <button
              class="bg-black border border-white text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-100 hover:text-black transition-colors"
            >
              Get Started Now
            </button>
            <button
              class="bg-white border border-white text-black px-6 py-2 rounded-full font-semibold hover:bg-black hover:text-gray-100 transition-colors"
            >
              Meet the AI Agents
            </button>
          </div>
          <h2 class="text-white text-2xl font-bold mt-6">
            Smarter AI. Better Decisions. Infinite possibilities.
          </h2>
        </div>
      </div>
    </div>
    <!-- Gambar Ilustrasi -->
    <div class="justify-start flex mt-12">
      <img
        src="/assets/images/slide-1.png"
        alt="AI Agents"
        class="max-w-full md:max-w-2xl lg:max-w-4xl"
      />
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  min-height: 1000px;
  display: flex;
  align-items: center;
  background-image: url('@/assets/images/Slide-1-BG.png');
  background-size: cover;
  background-position: center;
}

.hero-section h1 {
  line-height: 1.2;
}

.hero-section p {
  line-height: 1.6;
}

@media (min-width: 768px) {
  .hero-section img {
    max-height: 600px; /* Adjust max height for better desktop layout */
  }
}
</style>
