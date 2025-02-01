<template>
  <section class="value-proposition py-20">
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row items-center justify-between">
        <!-- Logo di Sebelah Kiri -->
        <div class="md:w-1/3 flex justify-center md:justify-start">
          <img
            src="~/assets/images/Slide-2-Coin.png"
            alt="IgniteAI Logo"
            class="w-100 h-100"
          />
        </div>

        <!-- Teks di Sebelah Kanan -->
        <div class="md:w-2/3 mt-8 md:mt-0">
          <h1 class="text-8xl font-extrabold mb-8 text-white text-left">
            Why IgniteAI is the Future of AI Agents
          </h1>
          <p class="text-2xl font-semibold mb-8 text-white text-left">
            In a world overwhelmed by tools that can’t keep up, IgniteAI’s
            Intelligent AI Agents redefine what’s possible. These AI companions
            adapt to your needs, solve real-world challenges, and empower you to
            stay ahead—whether in finance, health, business, or creativity.
          </p>

          <div class="flex justify-center">
            <div
              class="bg-black border border-white border-3 rounded-full shadow-lg p-4 inline-flex items-center space-x-6 md:space-x-12 transition-all hover:shadow-xl"
            >
              <!-- List Item 1 -->
              <div class="flex items-center space-x-2">
                <div class="w-2 h-2 bg-white rounded-full"></div>
                <h3 class="text-base font-semibold text-white">
                  AI that learns and evolves with you.
                </h3>
              </div>

              <!-- Separator -->
              <div class="h-8 w-px bg-gray-200"></div>

              <!-- List Item 2 -->
              <div class="flex items-center space-x-2">
                <div class="w-2 h-2 bg-white rounded-full"></div>
                <h3 class="text-base font-semibold text-white">
                  Practical, affordable, and scalable.
                </h3>
              </div>

              <!-- Separator -->
              <div class="h-8 w-px bg-gray-200"></div>

              <!-- List Item 3 -->
              <div class="flex items-center space-x-2">
                <div class="w-2 h-2 bg-white rounded-full"></div>
                <h3 class="text-base font-semibold text-white">
                  Designed to simplify complexity and amplify results.
                </h3>
              </div>
            </div>
          </div>

          <!-- Tombol -->
          <div class="flex justify-center mt-8">
            <button class="cosmic-button cosmic-button-white">
              Explore the Technology
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Script setup jika diperlukan
</script>

<style scoped>
.value-proposition {
  background-image: url('@/assets/images/Slide-2-BG.png');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

/* Scrollbar styling untuk pills */
::-webkit-scrollbar {
  height: 6px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.cosmic-button {
  @apply border-2 px-8 py-3 rounded-full text-lg font-bold transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)];
}

.cosmic-button-white {
  @apply border-black text-black bg-white hover:bg-black hover:text-white;
}
</style>
