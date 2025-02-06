<template>
  <LoadingScreen />
  <transition name="fade">
    <div
      v-if="!isLoading"
      class="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <Navbar />
      <main>
        <slot />
      </main>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Navbar from '@/components/Navbar.vue'
import LoadingScreen from '@/components/LoadingScreen.vue'

const isLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false // Set loading selesai setelah 2 detik
  }, 2000)
})
</script>

<style>
html,
body {
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

.transition-colors {
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}

/* Efek fade untuk transisi halaman */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
