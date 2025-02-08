<template>
  <nav
    ref="navbar"
    class="navbar shadow-lg rounded-lg fixed top-4 left-4 right-4 z-50 px-6 py-4 bg-opacity-10 bg-white dark:bg-white border border-white/10 transition-opacity duration-500"
    :class="{
      'opacity-0 pointer-events-none': isHidden,
      'opacity-100': !isHidden,
    }"
  >
    <div class="container mx-auto flex justify-between items-center">
      <div class="flex items-center">
        <img
          src="/assets/logo/igniteAI-06.png"
          alt="Logo"
          class="w-16 h-16 md:w-24 md:h-24"
        />
        <h1 class="title title-lg text-white ml-4"><b>Ignite</b>AI</h1>
      </div>

      <div class="hidden md:flex items-center space-x-6">
        <a
          v-for="link in links"
          :key="link.name"
          :href="link.url"
          class="font-bold text-xl text-white hover:text-gray-300 transition-colors"
          >{{ link.name }}</a
        >
        <a
          href="#"
          class="text-white px-6 py-2 text-4xl font-extrabold rounded"
        >
          BUY NOW
        </a>
      </div>

      <button
        class="md:hidden text-white focus:outline-none"
        @click="toggleMenu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>

    <!-- Menu Mobile -->
    <div
      v-if="isMenuOpen"
      class="absolute top-20 left-4 right-4 bg-white text-black p-4 rounded-lg shadow-lg flex flex-col space-y-4 text-center"
    >
      <a
        v-for="link in links"
        :key="link.name"
        :href="link.url"
        class="hover:text-gray-600"
        @click="toggleMenu"
        >{{ link.name }}</a
      >
      <button class="bg-black text-white px-6 py-2 rounded" @click="toggleMenu">
        BUY NOW
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isHidden = ref(false)
const isMenuOpen = ref(false)
const links = [
  { name: 'Community', url: 'https://t.me/igniteai' },
  { name: 'Whitepaper', url: 'https://github.com/IgniteAI-eth' },
  { name: 'Linktree', url: '' },
  // { name: 'Linktree', url: 'https://x.com/myigniteai?s=21' },
]
let lastScrollY = 0

const handleScroll = () => {
  const currentScrollY = window.scrollY
  isHidden.value = currentScrollY > lastScrollY && currentScrollY > 50
  lastScrollY = currentScrollY
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  z-index: 999;
  transition: opacity 0.5s ease-in-out;
}
</style>
