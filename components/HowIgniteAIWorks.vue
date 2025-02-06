<template>
  <section class="how-it-works relative min-h-screen">
    <!-- Shared Circle Background (parallax) -->
    <div class="absolute inset-0 flex items-center justify-center z-0">
      <div
        class="cosmic-circle w-[90vw] h-[90vw] md:w-[60vw] md:h-[60vw] max-w-[2000px] max-h-[2000px]"
        ref="cosmicCircle"
      >
        <img
          src="@/assets/images/Slide-6-7-lingkaran.png"
          class="w-full h-full object-contain animate-rotate"
          alt="Cosmic circle"
        />
      </div>
    </div>

    <!-- Content Container -->
    <div
      class="relative z-10 container mx-auto h-screen flex items-center px-4 md:px-6"
    >
      <div class="text-center w-full" ref="contentContainer">
        <!-- Section 1 Content -->
        <div class="mb-8 md:mb-12 opacity-0 translate-y-10" ref="section1">
          <div class="space-y-4 md:space-y-6 max-w-3xl mx-auto">
            <button class="cosmic-button w-full md:w-auto">
              Learn More About the Tech
            </button>
            <p class="text-base md:text-xl text-gray-300 leading-relaxed">
              IgniteAI combines advanced machine learning, intuitive design, and
              secure architecture to deliver AI Agents that anyone can use.
            </p>
            <hr class="bg-gray-100 h-1 md:h-2 my-4 md:my-6" />
            <p class="text-base md:text-xl text-gray-300 leading-relaxed">
              Each agent is tailored for specific needs, providing seamless and
              highly personalized experiences.
            </p>
            <p class="text-xl md:text-3xl font-bold text-white mt-6 md:mt-8">
              Secure • Scalable • Built for everyone
            </p>
          </div>
        </div>

        <!-- Section 2 Content -->
        <div class="pt-8 md:pt-12 opacity-0 translate-y-10" ref="section2">
          <h2 class="text-4xl md:text-8xl font-bold mb-6 md:mb-8 text-white">
            From Vision to Reality
          </h2>
          <div
            class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto"
          >
            <div
              v-for="(item, index) in roadmap"
              :key="index"
              class="p-4 md:p-6 bg-black/30 backdrop-blur-lg rounded-xl border border-white/10"
            >
              <h3
                class="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-4"
              >
                {{ item.year }}
              </h3>
              <p class="text-sm md:text-base text-gray-300">
                {{ item.description }}
              </p>
            </div>
          </div>
          <p
            class="text-lg md:text-2xl font-semibold text-white mt-6 md:mt-8 italic"
          >
            "Our journey to shape the future of AI is just beginning."
          </p>
          <button class="mt-6 md:mt-8 cosmic-button w-full md:w-auto">
            See the Full Roadmap
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

// Initialize GSAP plugins
gsap.registerPlugin(ScrollTrigger)

const cosmicCircle = ref(null)
const contentContainer = ref(null)
const section1 = ref(null)
const section2 = ref(null)

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

onMounted(() => {
  // Parallax effect for the cosmic circle
  gsap.to(cosmicCircle.value, {
    scrollTrigger: {
      trigger: contentContainer.value,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
    y: '-50px', // Adjust this value for parallax intensity
    ease: 'none',
  })

  // Animate Section 1 content
  gsap.set(section1.value, { opacity: 0, y: 50 })
  gsap.to(section1.value, {
    scrollTrigger: {
      trigger: section1.value,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power2.out',
  })

  // Animate Section 2 content
  gsap.set(section2.value, { opacity: 0, y: 50 })
  gsap.to(section2.value, {
    scrollTrigger: {
      trigger: section2.value,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power2.out',
  })
})
</script>

<style scoped>
.how-it-works {
  background-image: url('@/assets/images/Slide-7-BG.png');
  background-size: cover;
  background-position: center;
}
.cosmic-circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  @apply bg-transparent border-2 border-white text-white px-6 py-2 md:px-8 md:py-3 rounded-full
         text-base md:text-lg font-bold hover:bg-white hover:text-black transition-all
         duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)];
}
/* Responsive Design */
@media (max-width: 768px) {
  .cosmic-circle {
    width: 280vw; /* Increased for better fit on smaller screens */
    height: 280vw; /* Increased for better fit on smaller screens */
  }
  .how-it-works {
    @apply text-center;
  }
  .how-it-works h1 {
    @apply text-3xl;
  }
  .how-it-works p {
    @apply text-lg;
  }
}
</style>
