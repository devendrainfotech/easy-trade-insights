<script setup>
import { useMeta } from '../composables/useMeta'
import BaseImage from './BaseImage.vue'

useMeta({
  title: 'About Us - Easy Trade Insights',
  description: 'Learn about Easy Trade Insights - your trusted partner in trading. With over 25 years of experience, we provide expert guidance and market analysis.',
  keywords: 'about us, trading expertise, market experience, trading team, financial advisors',
  ogTitle: 'About Easy Trade Insights - Your Trusted Trading Partner',
  ogDescription: 'Learn about Easy Trade Insights - your trusted partner in trading. With over 25 years of experience, we provide expert guidance and market analysis.',
})

const stats = [
  { label: 'Years of Experience', value: '25+' },
  { label: 'Success Rate', value: '92%' },
  { label: 'Happy Clients', value: '1000+' },
  { label: 'Trading Strategies', value: '50+' }
]

const team = [
  {
    name: 'Expert Trading Team',
    description: 'Our team of seasoned professionals brings decades of market experience and expertise.',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
  },
  {
    name: 'Research & Analysis',
    description: 'Comprehensive market research and technical analysis for informed trading decisions.',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
  },
  {
    name: 'Risk Management',
    description: 'Proven risk management strategies to protect your investments.',
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
  }
]
</script>

<template>
  <div class="bg-white">
    <!-- Hero Section -->
    <div class="relative h-[400px] w-screen">
      <div class="absolute inset-0 h-full">
        <BaseImage
          src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Professional trading team analyzing market trends and discussing investment strategies"
          class="!w-full !h-full object-cover"
        />
        <div class="absolute inset-0 bg-gray-900 mix-blend-multiply"></div>
      </div>
      <div class="relative max-w-7xl mx-auto h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl text-center">About Us</h1>
        <p class="mt-6 text-xl text-gray-300 max-w-3xl mx-auto text-center">
          Your trusted partner in the world of trading. We combine expertise, technology, and personalized service to help you achieve your trading goals.
        </p>
      </div>
    </div>

    <!-- Stats Section -->
    <div class="bg-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div v-for="stat in stats" :key="stat.label" class="text-center">
            <div class="text-4xl font-bold text-indigo-600">{{ stat.value }}</div>
            <div class="mt-2 text-sm text-gray-500">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mission Section -->
    <div class="bg-gray-50 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Mission</h2>
          <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Empowering Traders with Knowledge
          </p>
          <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            At Easy Trade Insights, we believe in empowering traders with the knowledge and tools they need to make informed decisions. Our mission is to provide comprehensive trading insights and analysis that help you navigate the markets with confidence.
          </p>
        </div>
      </div>
    </div>

    <!-- Team Section -->
    <div class="bg-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center mb-12">
          <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Expertise</h2>
          <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            What Sets Us Apart
          </p>
        </div>
        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div v-for="item in team" :key="item.name" class="relative p-6 bg-white rounded-lg shadow-lg">
            <div class="text-indigo-600 mb-4">
              <svg class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="item.icon" />
              </svg>
            </div>
            <h3 class="text-xl font-medium text-gray-900">{{ item.name }}</h3>
            <p class="mt-2 text-gray-500">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="bg-indigo-700">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span class="block">Ready to start your trading journey?</span>
          <span class="block text-indigo-200">Get started with us today.</span>
        </h2>
        <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div class="inline-flex rounded-md shadow">
            <a href="#contact" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 