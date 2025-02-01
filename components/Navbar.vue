<template>
  <nav
    class="shadow-lg rounded-lg fixed top-4 left-4 right-4 z-50 px-6 py-4 bg-opacity-10 bg-white dark:bg-white border border-white/10"
  >
    <div class="container mx-auto flex justify-between items-center">
      <div class="flex items-center">
        <!-- Logo -->
        <img src="/assets/logo/igniteAI-06.png" alt="Logo" class="w-20 h-20" />
        <!-- Judul -->
        <h1 class="text-4xl font-bold text-white ml-4">IgniteAI</h1>
      </div>
      <div class="flex items-center space-x-6">
        <a
          href="#"
          class="text-white font-bold text-xl hover:text-gray-300 transition-colors"
          >About</a
        >
        <a
          href="#"
          class="text-white font-bold text-xl hover:text-gray-300 transition-colors"
          >Features</a
        >
        <a
          href="#"
          class="text-white font-bold text-xl hover:text-gray-300 transition-colors"
          >Our Products</a
        >
        <a
          href="#"
          class="text-white font-bold text-xl hover:text-gray-300 transition-colors"
          >Roadmap</a
        >
        <button class="text-white px-6 py-2 text-4xl font-bold">BUY NOW</button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
a {
  transition: color 0.3s ease;
}
</style>
