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
              <a href="https://wa.me/message/2YYNJJNAGPDHN1" target="_blank" rel="noopener noreferrer"
                 class="inline-flex items-center justify-center px-4 sm:px-8 py-2 sm:py-4 border border-transparent text-base sm:text-lg font-medium rounded-md text-white bg-[#25D366] hover:bg-[#128C7E] transition-colors duration-200">
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
              <router-link to="/contact" class="md:inline-flex items-center justify-center px-4 sm:px-8 py-2 sm:py-4 border border-transparent text-base sm:text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200">
                Contact Us
              </router-link>
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