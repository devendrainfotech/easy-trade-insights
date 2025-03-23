<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: ''
  },
  width: {
    type: [String, Number],
    default: 'auto'
  },
  height: {
    type: [String, Number],
    default: 'auto'
  },
  fallbackSrc: {
    type: String,
    default: '/images/placeholder.jpg' // You'll need to add this image to your public folder
  }
})

const isLoading = ref(true)
const hasError = ref(false)
const imageSrc = ref(props.src)

const handleLoad = () => {
  isLoading.value = false
}

const handleError = () => {
  hasError.value = true
  imageSrc.value = props.fallbackSrc
  isLoading.value = false
}

onMounted(() => {
  // If the image is already cached, it might not trigger the load event
  const img = new Image()
  img.onload = handleLoad
  img.onerror = handleError
  img.src = props.src
})
</script>

<template>
  <div class="relative" :style="{ width, height }">
    <!-- Loading State -->
    <div v-if="isLoading" 
         class="absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse">
      <div class="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>

    <!-- Error State -->
    <div v-if="hasError" 
         class="absolute inset-0 flex items-center justify-center bg-gray-100">
      <div class="text-center">
        <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <p class="mt-2 text-sm text-gray-500">Failed to load image</p>
      </div>
    </div>

    <!-- Image -->
    <img
      :src="imageSrc"
      :alt="alt"
      class="w-full h-full object-cover"
      :class="{ 'opacity-0': isLoading }"
      @load="handleLoad"
      @error="handleError"
    />
  </div>
</template> 