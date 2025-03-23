<script setup>
const features = [
  {
    title: 'SEBI-Registered Advisory',
    description: 'Trade with confidence knowing you\'re working with a SEBI-registered advisory firm.',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
  },
  {
    title: '92% Accuracy Rate',
    description: 'Benefit from our highly accurate trading signals backed by proven track record.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z'
  },
  {
    title: '25+ Years Experience',
    description: 'Leverage our extensive market experience and qualified analysis team.',
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    title: 'Strategic Trading',
    description: 'Trade with proper targets and stop-loss strategies for better risk management.',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
  },
  {
    title: 'Consistent Profits',
    description: 'Stay consistently profitable with our expert guidance and proven strategies.',
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    title: 'Intraday Trading Tips',
    description: 'Get real-time intraday trading tips to maximize your daily trading opportunities.',
    icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
  }
]
</script>

<template>
  <div class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center" id="why-choose-us">
        <h2 class="text-lg text-indigo-600 font-semibold tracking-wide uppercase">Why Choose Us</h2>
        <p class="mt-2 text-4xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
          Your Trusted Partner in Trading Success
        </p>
      </div>

      <div class="mt-16">
        <div class="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="(feature, index) in features" :key="index" class="p-8 bg-white rounded-lg shadow-lg">
            <div class="text-indigo-600 mb-6">
              <svg class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="feature.icon" />
              </svg>
            </div>
            <h3 class="text-2xl font-medium text-gray-900">{{ feature.title }}</h3>
            <p class="mt-4 text-lg text-gray-500">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 