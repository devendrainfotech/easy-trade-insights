<script setup>
import { ref } from 'vue'
import { useMeta } from '../composables/useMeta'
import BaseImage from './BaseImage.vue'

useMeta({
  title: 'Contact Us - Easy Trade Insights',
  description: 'Get in touch with Easy Trade Insights. Contact our expert team for personalized trading guidance, market analysis, and trading strategies.',
  keywords: 'contact us, trading support, financial guidance, trading consultation, market analysis help',
  ogTitle: 'Contact Easy Trade Insights - Get Expert Trading Guidance',
  ogDescription: 'Get in touch with Easy Trade Insights. Contact our expert team for personalized trading guidance, market analysis, and trading strategies.',
})

const formData = ref({
  name: '',
  email: '',
  phone: '',
  segment: '',
  capital: '',
  message: ''
})

const submitStatus = ref({
  loading: false,
  success: false,
  error: false
})

const handleSubmit = async () => {
  submitStatus.value.loading = true
  submitStatus.value.success = false
  submitStatus.value.error = false

  try {
    const response = await fetch('https://formsubmit.co/ajax/easytradeadvisor1@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData.value)
    })

    if (response.ok) {
      submitStatus.value.success = true
      formData.value = {
        name: '',
        email: '',
        phone: '',
        segment: '',
        capital: '',
        message: ''
      }
    } else {
      throw new Error('Form submission failed')
    }
  } catch (error) {
    submitStatus.value.error = true
    console.error('Form submission error:', error)
  } finally {
    submitStatus.value.loading = false
  }
}
</script>

<template>
  <div class="relative min-h-screen bg-white">
    <!-- Hero Section -->
    <div class="relative">
      <div class="absolute inset-0">
        <BaseImage
          src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Customer support team ready to assist with trading queries and investment guidance"
          class="w-full !h-full"
        />
        <div class="absolute inset-0 bg-gray-900 mix-blend-multiply"></div>
      </div>
      <div class="relative w-screen mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl text-center">Contact Us</h1>
        <p class="mt-6 text-xl text-gray-300 max-w-3xl mx-auto text-center">
          Get in touch with our team of experts. We're here to help you with your trading journey.
        </p>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Information -->
        <div class="bg-white rounded-lg p-8 shadow-xl border border-gray-200">
          <h2 class="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
          <div class="space-y-8">
            <div class="flex items-center space-x-4">
              <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-indigo-50 rounded-full">
                <svg class="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <p class="text-gray-500 text-left flex-1">+91 8009532429</p>
            </div>

            <div class="flex items-center space-x-4">
              <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-indigo-50 rounded-full">
                <svg class="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p class="text-gray-500 text-left flex-1">easytradeadvisor1@gmail.com</p>
            </div>

            <div class="flex items-center space-x-4">
              <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-indigo-50 rounded-full">
                <svg class="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p class="text-gray-500 text-left flex-1">26/150 CROMA COMPLEX SEC 16<br>VRINDAVAN, LUCKNOW UP<br>PINCODE: 226301</p>
            </div>

            <div class="flex items-center space-x-4">
              <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-indigo-50 rounded-full">
                <svg class="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p class="text-gray-500 text-left flex-1">Monday - Friday: 9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="bg-white rounded-lg p-8 shadow-xl border border-gray-200">
          <h2 class="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div v-if="submitStatus.success" class="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
              <span class="block sm:inline">Thank you for your message! We'll get back to you soon.</span>
            </div>
            <div v-if="submitStatus.error" class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
              <span class="block sm:inline">Sorry, there was an error submitting your message. Please try again.</span>
            </div>
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 text-left">Name</label>
              <input
                type="text"
                id="name"
                v-model="formData.name"
                class="mt-1 block w-full rounded-md bg-white border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 h-12 px-4 text-gray-900 placeholder-gray-400"
                required
              />
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 text-left">Email</label>
              <input
                type="email"
                id="email"
                v-model="formData.email"
                class="mt-1 block w-full rounded-md bg-white border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 h-12 px-4 text-gray-900 placeholder-gray-400 [&:not(:placeholder-shown)]:bg-white"
                required
              />
            </div>

            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700 text-left">Phone</label>
              <input
                type="tel"
                id="phone"
                v-model="formData.phone"
                class="mt-1 block w-full rounded-md bg-white border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 h-12 px-4 text-gray-900 placeholder-gray-400 [&:not(:placeholder-shown)]:bg-white"
                required
              />
            </div>

            <div>
              <label for="segment" class="block text-sm font-medium text-gray-700 text-left">Segment you trade</label>
              <select
                id="segment"
                v-model="formData.segment"
                class="mt-1 block w-full rounded-md bg-white border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 h-12 px-4 text-gray-900"
                required
              >
                <option value="">Select a segment</option>
                <option value="equity">Equity</option>
                <option value="futures">Futures</option>
                <option value="options">Options</option>
                <option value="forex">Forex</option>
              </select>
            </div>

            <div>
              <label for="capital" class="block text-sm font-medium text-gray-700 text-left">How much is your capital investment*</label>
              <input
                type="number"
                id="capital"
                v-model="formData.capital"
                class="mt-1 block w-full rounded-md bg-white border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 h-12 px-4 text-gray-900 placeholder-gray-400 [&:not(:placeholder-shown)]:bg-white"
                required
              />
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 text-left">Message</label>
              <textarea
                id="message"
                v-model="formData.message"
                rows="4"
                class="mt-1 block w-full rounded-md bg-white border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 min-h-[120px] px-4 py-3 text-gray-900 placeholder-gray-400 [&:not(:placeholder-shown)]:bg-white"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="submitStatus.loading"
              class="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors duration-300 h-12 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ submitStatus.loading ? 'Sending...' : 'Send Message' }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template> 