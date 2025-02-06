<template>
  <section class="ai-agents py-20">
    <div class="container mx-auto px-6">
      <!-- Header Content -->
      <div class="text-center mb-16" ref="headerContent">
        <h2 class="text-6xl font-bold mb-4 text-white">
          Your Personal AI Agents for Every Need
        </h2>
        <p class="text-xl text-white opacity-90">
          Experience Next-Gen AI Solutions Tailored For You
        </p>
      </div>

      <!-- AI Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12" ref="aiGrid">
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

      <!-- Button -->
      <div class="text-center" ref="buttonContainer">
        <button class="cosmic-button">Try The Agents</button>
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

const headerContent = ref(null)
const aiGrid = ref(null)
const buttonContainer = ref(null)

onMounted(() => {
  // Debugging logs
  console.log('Header Content:', headerContent.value)
  console.log('AI Grid:', aiGrid.value)
  console.log('Button Container:', buttonContainer.value)

  // Parallax effect for the entire section
  gsap.to('.ai-agents', {
    scrollTrigger: {
      trigger: '.ai-agents',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
    y: '-50px', // Adjust this value for parallax intensity
    ease: 'none',
  })

  // Animate Header Content
  if (headerContent.value) {
    gsap.set(headerContent.value, { autoAlpha: 0 }) // Use autoAlpha instead of opacity
    gsap.to(headerContent.value, {
      scrollTrigger: {
        trigger: headerContent.value,
        start: 'top center', // Simplified trigger
      },
      autoAlpha: 1, // Automatically handles opacity and visibility
      clearProps: 'transform', // Clear transform after animation ends
      duration: 1,
      ease: 'power2.out',
    })
  }

  // Animate AI Grid
  if (aiGrid.value) {
    gsap.set(aiGrid.value.children, { autoAlpha: 0 }) // Use autoAlpha instead of opacity
    gsap.to(aiGrid.value.children, {
      scrollTrigger: {
        trigger: aiGrid.value,
        start: 'top center', // Simplified trigger
      },
      autoAlpha: 1, // Automatically handles opacity and visibility
      clearProps: 'transform', // Clear transform after animation ends
      duration: 1,
      stagger: 0.2, // Stagger animations by 0.2 seconds
      ease: 'power2.out',
    })
  }

  // Animate Button Container
  if (buttonContainer.value) {
    gsap.set(buttonContainer.value, { autoAlpha: 0 }) // Use autoAlpha instead of opacity
    gsap.to(buttonContainer.value, {
      scrollTrigger: {
        trigger: buttonContainer.value,
        start: 'top center', // Simplified trigger
      },
      autoAlpha: 1, // Automatically handles opacity and visibility
      clearProps: 'transform', // Clear transform after animation ends
      duration: 1,
      ease: 'power2.out',
    })
  }
})
</script>

<style scoped>
.ai-agents {
  background-image: url('/assets/images/Slide-3-BG.png');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  align-items: center;
  transform: none !important; /* Reset transform */
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
