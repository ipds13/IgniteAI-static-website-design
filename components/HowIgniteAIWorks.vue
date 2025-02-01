<!-- components/HowIgniteAIWorks.vue -->
<template>
  <section class="how-it-works relative min-h-screen">
    <!-- Shared Circle Background -->
    <div class="absolute inset-0 flex items-center justify-center">
      <div
        class="cosmic-circle w-[60vw] h-[60vw] max-w-[2000px] max-h-[2000px]"
      >
        <img
          src="@/assets/images/Slide-6-7-lingkaran.png"
          class="w-full h-full object-contain animate-rotate"
          alt="Cosmic circle"
        />
      </div>
    </div>

    <!-- Content Container -->
    <div class="relative z-10 container mx-auto h-screen flex items-center">
      <div class="text-center w-full">
        <!-- Section 1 Content -->
        <div class="mb-12">
          <div class="space-y-6 max-w-3xl mx-auto">
            <button class="mt-8 cosmic-button">
              Learn More About the Tech
            </button>
            <p class="text-xl text-gray-300 leading-relaxed">
              IgniteAI combines advanced machine learning, intuitive design, and
              secure architecture to deliver AI Agents that anyone can use.
            </p>
            <hr class="bg-gray-100 h-2" />
            <p class="text-xl text-gray-300 leading-relaxed">
              Each agent is tailored for specific needs, providing seamless and
              highly personalized experiences.
            </p>
            <p class="text-3xl font-bold text-white mt-8">
              Secure • Scalable • Built for everyone
            </p>
          </div>
        </div>

        <!-- Section 2 Content -->
        <div class="pt-12">
          <h2 class="text-5xl md:text-8xl font-bold mb-8 text-white">
            From Vision to Reality
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div
              v-for="(item, index) in roadmap"
              :key="index"
              class="p-6 bg-black/30 backdrop-blur-lg rounded-xl border border-white/10"
            >
              <h3 class="text-3xl font-bold text-white mb-4">
                {{ item.year }}
              </h3>
              <p class="text-gray-300">{{ item.description }}</p>
            </div>
          </div>
          <p class="text-2xl font-semibold text-white mt-8 italic">
            "Our journey to shape the future of AI is just beginning."
          </p>
          <button class="mt-8 cosmic-button">See the Full Roadmap</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const roadmap = [
  {
    year: '2024-2025',
    description: 'Building the foundation and community',
  },
  {
    year: '2025',
    description: 'Launching the six AI Agents and scaling adoption',
  },
  {
    year: 'Beyond',
    description: 'Continuous innovation to stay ahead of the curve',
  },
]
</script>

<style scoped>
.how-it-works {
  background-image: url('@/assets/images/Slide-7-BG.png');
  background-size: cover;
  background-position: center;
}

.cosmic-circle {
  position: absolute;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-rotate {
  animation: rotate 120s linear infinite;
}

.cosmic-button {
  @apply bg-transparent border-2 border-white text-white px-8 py-3 rounded-full
         text-lg font-bold hover:bg-white hover:text-black transition-all
         duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)];
}

/* Responsive Design */
@media (max-width: 768px) {
  .cosmic-circle {
    width: 200vw;
    height: 200vw;
  }

  h2 {
    @apply text-5xl;
  }

  .roadmap-item {
    @apply p-4;
  }
}
</style>
