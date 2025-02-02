<template>
  <LoadingScreen />
  <div
    class="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300"
  >
    <Navbar />
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import LoadingScreen from '@/components/LoadingScreen.vue'
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
</style>
