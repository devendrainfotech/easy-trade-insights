<script setup>
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  phone: '',
  segment: '',
  capital: '',
  message: ''
})

const handleSubmit = () => {
  // Handle form submission logic here
  console.log('Form submitted:', formData.value)
}
</script>

<template>
  <div class="relative min-h-screen bg-white">
    <!-- Mobile Background Image -->
    <div class="lg:hidden absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="Trading Insights"
        class="w-full h-full object-cover opacity-10"
      />
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
      <div class="lg:text-center pb-16" id="why-choose-us">
        <h2 class="text-lg text-indigo-600 font-semibold tracking-wide uppercase">Connect With Us</h2>
        <p class="mt-2 text-4xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
          Let's Start Your Trading Journey Together
        </p>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Form Section -->
        <div class="bg-white rounded-lg p-8 shadow-xl border border-gray-200">
          <h2 class="text-3xl font-bold text-gray-900 mb-8">Connect With Us</h2>
          <form @submit.prevent="handleSubmit" class="space-y-6">
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
              class="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors duration-300 h-12"
            >
              Send Message
            </button>
          </form>
        </div>

        <!-- Image Section (Desktop) -->
        <div class="hidden lg:block">
          <img 
            src="https://images.unsplash.com/photo-1504270997636-07ddfbd48945?q=80&w=4471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Trading Insights"
            class="w-full h-full object-cover rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  </div>
</template> 