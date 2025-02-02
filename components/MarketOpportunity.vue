<template>
  <section class="market-opportunity py-20">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-8xl md:text-8xl font-bold mb-8 text-white">
          The AI Revolution is Here<br />
          <span class="text-teal-400">And We're Leading It</span>
        </h2>
      </div>

      <div class="flex flex-col lg:flex-row items-center gap-12 mb-16">
        <!-- Chart Container -->
        <div class="w-full lg:w-2/3">
          <div class="bg-white/10 p-8 rounded-2xl backdrop-blur-lg">
            <canvas ref="chartCanvas" class="w-full h-96"></canvas>
          </div>
        </div>

        <!-- Text Content -->
        <div class="w-full lg:w-1/3 text-left">
          <p class="text-xl text-white mb-8 leading-relaxed">
            The global AI market is projected to reach
            <span class="text-teal-400 font-bold">$1.8 trillion by 2030</span>.
            IgniteAI is positioned at the forefront of this revolution with
            groundbreaking AI Agents that redefine productivity, creativity, and
            innovation.
          </p>
          <button class="cosmic-button">Invest in IgniteAI</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Chart from 'chart.js/auto'

const chartCanvas = ref(null)
let chartInstance = null

const chartData = {
  labels: [
    '2020',
    '2021',
    '2022',
    '2023',
    '2024',
    '2025',
    '2026',
    '2027',
    '2028',
    '2029',
    '2030',
  ],
  datasets: [
    {
      label: 'AI Market Value (in $B)',
      data: [
        93.27, 202.59, 124.79, 135.93, 184.04, 243.72, 320.14, 415.61, 529.23,
        667.74, 1800,
      ],
      backgroundColor: 'rgba(173, 216, 230, 0.8)',
      borderColor: 'rgba(173, 216, 230, 1)',
      borderWidth: 2,
      fill: true,
      tension: 0.4,
    },
  ],
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: {
        color: 'white',
        font: {
          size: 14,
        },
      },
    },
  },
  scales: {
    x: {
      grid: {
        color: 'rgba(255, 255, 255, 0.1)',
      },
      ticks: {
        color: 'white',
      },
    },
    y: {
      grid: {
        color: 'rgba(255, 255, 255, 0.1)',
      },
      ticks: {
        color: 'white',
        callback: function (value) {
          return '$' + value + 'B'
        },
      },
    },
  },
}

onMounted(() => {
  const ctx = chartCanvas.value.getContext('2d')

  // Create gradient
  const gradient = ctx.createLinearGradient(0, 0, 0, 400)
  gradient.addColorStop(0, 'rgba(173, 216, 230, 0.6)')
  gradient.addColorStop(1, 'rgba(173, 216, 230, 0.1)')

  chartData.datasets[0].backgroundColor = gradient

  chartInstance = new Chart(ctx, {
    type: 'line',
    data: chartData,
    options: chartOptions,
  })
})

onBeforeUnmount(() => {
  if (chartInstance) {
    chartInstance.destroy()
  }
})
</script>

<style scoped>
.market-opportunity {
  background-image: url('@/assets/images/Slide-5-BG.png');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

/* Responsive typography */
@media (max-width: 768px) {
  .market-opportunity h2 {
    @apply text-4xl;
  }

  .market-opportunity h3 {
    @apply text-3xl;
  }

  .market-opportunity p {
    @apply text-lg;
  }
}

/* Smooth animations for chart container */
canvas {
  transition: transform 0.3s ease;
}

canvas:hover {
  transform: scale(1.01);
}

.cosmic-button {
  @apply bg-transparent border-2 border-white text-white px-8 py-3 rounded-full
         text-lg font-bold hover:bg-white hover:text-black transition-all
         duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)];
}
</style>
