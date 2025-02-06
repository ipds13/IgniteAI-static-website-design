<template>
  <section
    class="hero-section relative text-white py-16 md:py-20 opacity-0 transform translate-y-10"
    ref="heroSection"
  >
    <!-- Background Video -->
    <div class="absolute inset-0 z-0">
      <video
        ref="backgroundVideo"
        autoplay
        muted
        loop
        playsinline
        class="w-full h-full object-cover"
      >
        <source src="~/assets/videos/Slide-1-BG.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <!-- <div v-else class="w-full h-full bg-cover bg-center bg-image"></div> -->
    </div>

    <!-- Content -->
    <div
      class="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between text-center md:text-left px-4 sm:px-6 lg:px-8 relative z-10"
    >
      <!-- Text Content -->
      <div class="md:w-1/2 md:mt-0">
        <h1 class="title title-xl mb-4 mt-20 md:mb-6">
          The Future of Intelligent AI Agents
        </h1>
        <p class="subtitle subtitle-lg mb-6 md:mb-8">
          IgniteAI delivers AI Agents that don’t just work—they adapt, learn,
          and empower. Transform complexity into simplicity and unlock new
          opportunities effortlessly.
        </p>
        <div
          class="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0"
        >
          <button class="cosmic-button cosmic-button-black">
            Get Started Now
          </button>
          <button class="cosmic-button cosmic-button-white">
            Explore the technology behind IgniteAI
          </button>
        </div>
        <h2 class="subtitle subtitle-lg mt-6">
          Smarter AI. Better Decisions. Infinite possibilities.
        </h2>
      </div>
      <!-- Gambar Ilustrasi (Hanya tampil di desktop) -->
      <div class="hidden md:block md:w-1/2">
        <img
          src="/assets/images/slide-1.png"
          alt="AI Agents"
          class="w-[90%] lg:w-[1350%] max-w-5xl ml-auto"
        />
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

const heroSection = ref(null)
const backgroundVideo = ref(null)
const isVideoLoaded = ref(false)

onMounted(() => {
  // Check if video is loaded
  if (backgroundVideo.value) {
    backgroundVideo.value.addEventListener('loadeddata', () => {
      isVideoLoaded.value = true
    })
  }

  // Add fade-in animation
  setTimeout(() => {
    if (heroSection.value) {
      heroSection.value.classList.add('fade-in-slide-up')
    }
  }, 100)

  // Parallax effect with GSAP
  gsap.to(heroSection.value, {
    scrollTrigger: {
      trigger: heroSection.value,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
    y: '-50px', // Adjust this value for parallax intensity
    ease: 'none',
  })
})
</script>

<style scoped>
.bg-image {
  background-image: url('@/assets/images/Slide-1-BG.png');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  transition:
    opacity 1s ease-out,
    transform 1s ease-out;
}
.fade-in-slide-up {
  opacity: 1 !important;
  transform: translateY(0) !important;
}
.cosmic-button {
  @apply border-2 px-6 py-3 rounded-full text-lg font-bold transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)];
}
.cosmic-button-black {
  @apply border-white text-white bg-black hover:bg-white hover:text-black;
}
.cosmic-button-white {
  @apply border-black text-black bg-white hover:bg-black hover:text-white;
}
@media (max-width: 768px) {
  .hero-section {
    @apply text-center;
  }
}
</style>
