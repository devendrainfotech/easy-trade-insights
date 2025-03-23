<script setup>
import HeroSlider from './HeroSlider.vue'
import Features from './Features.vue'
import ConnectWithUs from './ConnectWithUs.vue'
import { useMeta } from '../composables/useMeta'

useMeta({
  title: 'Easy Trade Insights - Home',
  description: 'Welcome to Easy Trade Insights. Get expert trading analysis, market insights, and personalized trading strategies to enhance your trading journey.',
  keywords: 'trading platform, market analysis, trading strategies, stock market tips, financial guidance',
  ogTitle: 'Easy Trade Insights - Your Trusted Trading Partner',
  ogDescription: 'Welcome to Easy Trade Insights. Get expert trading analysis, market insights, and personalized trading strategies to enhance your trading journey.',
})
</script>

<template>
  <div>
    <HeroSlider />
    <Features />
    <ConnectWithUs />
  </div>
</template> 