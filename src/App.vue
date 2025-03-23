<script setup>
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'
import { useMeta } from './composables/useMeta'

// Set default meta tags for the entire site
useMeta()
</script>

<template>
  <div class="min-h-screen bg-white">
    <Navigation />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
