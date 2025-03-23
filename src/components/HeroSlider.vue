<script setup>
import { ref } from 'vue'
import BaseImage from './BaseImage.vue'

const currentSlide = ref(0)

const scrollToServices = () => {
  const element = document.querySelector('#why-choose-us')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=4470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Welcome to Easy Trade Insights',
    subtitle: 'Your Gateway to Smart Trading',
    alt: 'Professional trader analyzing market data on multiple screens'
  },
  {
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: 'Advanced Trading Analytics',
    subtitle: 'Make Data-Driven Decisions',
    alt: 'Trading analytics dashboard with real-time market data and charts'
  },
  {
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: 'Real-Time Market Insights',
    subtitle: 'Stay Ahead of the Curve',
    alt: 'Financial market trading floor with real-time data displays'
  }
]

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length
}

// Auto-advance slides every 5 seconds
setInterval(nextSlide, 5000)
</script>

<template>
  <div class="relative min-h-[calc(100vh-5rem)] h-[100dvh] w-screen overflow-hidden">
    <!-- Background Slides -->
    <div class="absolute inset-0 w-full h-full">
      <div v-for="(slide, index) in slides" :key="index"
        class="absolute inset-0 transition-opacity duration-1000 w-full h-full"
        :class="{ 'opacity-100': currentSlide === index, 'opacity-0': currentSlide !== index }">
        <BaseImage
          :src="slide.image"
          :alt="slide.alt"
          class="!h-full w-full object-cover min-h-[calc(100vh-5rem)]"
        />
        <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
    </div>

    <!-- Content -->
    <div class="relative h-full w-full max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex h-full items-center">
        <div class="w-full md:w-2/3 md:pl-12">
          <div class="space-y-8">
            <div>
              <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight md:text-left">
                {{ slides[currentSlide].title }}
              </h1>
              <p class="mt-4 text-xl md:text-2xl text-gray-200 md:text-left">
                {{ slides[currentSlide].subtitle }}
              </p>
            </div>
            <div class="flex flex-row gap-4 justify-center md:justify-start">
              <router-link to="/contact" class="inline-flex items-center justify-center px-4 sm:px-8 py-2 sm:py-4 border border-transparent text-base sm:text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200">
                Contact Us
              </router-link>
              <a href="#why-choose-us" 
                 @click="(e) => {
                   e.preventDefault();
                   scrollToServices();
                 }"
                 class="inline-flex items-center justify-center px-4 sm:px-8 py-2 sm:py-4 border-2 border-white text-base sm:text-lg font-medium rounded-md text-white hover:bg-white hover:text-gray-900 transition-colors duration-200">
                Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Arrows -->
    <button @click="prevSlide" class="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-transparent hover:bg-white hover:bg-opacity-10 transition-colors duration-200 hidden md:block">
      <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    <button @click="nextSlide" class="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-transparent hover:bg-white hover:bg-opacity-10 transition-colors duration-200 hidden md:block">
      <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>

    <!-- Slide Indicators -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
      <button v-for="(slide, index) in slides" :key="index"
        @click="currentSlide = index"
        class="w-14 h-1 p-1 rounded-full transition-colors duration-200"
        :class="currentSlide === index ? 'bg-white' : 'bg-white bg-opacity-20'">
      </button>
    </div>
  </div>
</template> 