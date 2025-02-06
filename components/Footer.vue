<template>
  <footer class="bg-black text-white py-6">
    <div
      class="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between"
    >
      <!-- Left: Logo -->
      <div class="flex justify-center md:justify-start mb-4 md:mb-0">
        <img
          src="/assets/logo/igniteAI-06.png"
          alt="Logo"
          class="w-16 h-16 md:w-24 md:h-24"
        />
      </div>

      <!-- Centered: Copyright Text -->
      <div class="text-center text-lg font-bold mb-4 md:mb-0">
        <p>&copy; {{ currentYear }} IgniteAI. All rights reserved.</p>
      </div>

      <!-- Right: Social Media Logos -->
      <div class="flex justify-center md:justify-end space-x-4">
        <a
          href="https://x.com/myigniteai?s=21"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/assets/icons/twitter-logo.svg"
            alt="Twitter"
            class="w-6 h-6 md:w-8 md:h-8"
          />
        </a>
        <a
          href="https://t.me/igniteai"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/assets/icons/telegram_logo.svg"
            alt="Telegram"
            class="w-6 h-6 md:w-8 md:h-8"
          />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>

<style scoped>
footer {
  background-color: #090909;
}

footer img {
  transition: transform 0.3s;
}

footer img:hover {
  transform: scale(1.1);
}

@media (max-width: 768px) {
  footer {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  footer .container {
    flex-direction: column;
  }
}
</style>
