<script setup>
import { ref } from 'vue'
import logo from '../assets/logo.jpg'

const isMobileMenuOpen = ref(false)
const activeMenuItem = ref('home')

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const setActiveMenuItem = (item) => {
  activeMenuItem.value = item
}
</script>

<template>
  <nav class="bg-white shadow-lg">
    <div class="max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-20">
        <div class="flex items-center">
          <router-link to="/">
            <img :src="logo" alt="Easy Trade Insights Logo" class="h-20 w-auto mr-3 py-4" />
          </router-link>
        </div>
        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <div class="relative group">
            <router-link to="/" 
               @click="setActiveMenuItem('home')"
               :class="[
                 'text-lg transition-colors duration-300',
                 activeMenuItem === 'home' 
                   ? 'text-blue-600 font-semibold' 
                   : 'text-gray-600 hover:text-gray-900'
               ]">
              Home
            </router-link>
            <div class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            <div :class="['absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform transition-transform duration-300', 
                         activeMenuItem === 'home' ? 'scale-x-100' : 'scale-x-0']"></div>
          </div>
          
          <div class="relative group">
            <router-link to="/about" 
               @click="setActiveMenuItem('about')"
               :class="[
                 'text-lg transition-colors duration-300',
                 activeMenuItem === 'about' 
                   ? 'text-blue-600 font-semibold' 
                   : 'text-gray-600 hover:text-gray-900'
               ]">
              About
            </router-link>
            <div class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            <div :class="['absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform transition-transform duration-300', 
                         activeMenuItem === 'about' ? 'scale-x-100' : 'scale-x-0']"></div>
          </div>
          
          <div class="relative group">
            <router-link to="/contact" 
               @click="setActiveMenuItem('contact')"
               :class="[
                 'text-lg transition-colors duration-300',
                 activeMenuItem === 'contact' 
                   ? 'text-blue-600 font-semibold' 
                   : 'text-gray-600 hover:text-gray-900'
               ]">
              Contact
            </router-link>
            <div class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            <div :class="['absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform transition-transform duration-300', 
                         activeMenuItem === 'contact' ? 'scale-x-100' : 'scale-x-0']"></div>
          </div>
          
          <a href="https://wa.me/message/2YYNJJNAGPDHN1" 
             target="_blank" 
             class="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.287.129.332.202.045.073.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/>
            </svg>
            WhatsApp
          </a>
          <a href="https://upstox.com/open-account/?f=4TAWEG" 
             target="_blank" 
             class="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            Open Upstox Account
          </a>
        </div>
        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center">
          <button @click="toggleMobileMenu" 
                  class="text-gray-600 hover:text-gray-900 bg-white border-white hover:border-white focus:outline-none px-4 transition-colors duration-300">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-show="isMobileMenuOpen" 
         class="md:hidden bg-white border-t border-gray-200 transform transition-all duration-300 ease-in-out">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <div class="flex flex-col space-y-2">
          <router-link to="/" 
             @click="setActiveMenuItem('home')"
             :class="[
               'px-4 py-3 text-base font-medium rounded-lg transition-all duration-300',
               activeMenuItem === 'home'
                 ? 'bg-blue-50 text-blue-600'
                 : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
             ]">
            <span class="flex items-center">
              <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
              </svg>
              Home
            </span>
          </router-link>
          <router-link to="/about" 
             @click="setActiveMenuItem('about')"
             :class="[
               'px-4 py-3 text-base font-medium rounded-lg transition-all duration-300',
               activeMenuItem === 'about'
                 ? 'bg-blue-50 text-blue-600'
                 : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
             ]">
            <span class="flex items-center">
              <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              About
            </span>
          </router-link>
          <router-link to="/contact" 
             @click="setActiveMenuItem('contact')"
             :class="[
               'px-4 py-3 text-base font-medium rounded-lg transition-all duration-300',
               activeMenuItem === 'contact'
                 ? 'bg-blue-50 text-blue-600'
                 : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
             ]">
            <span class="flex items-center">
              <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              Contact
            </span>
          </router-link>
        </div>
        <div class="pt-4 space-y-3">
          <a href="https://wa.me/message/2YYNJJNAGPDHN1" 
             target="_blank" 
             class="block w-full text-center px-4 py-3 text-base font-medium text-white bg-green-500 hover:bg-green-600 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg">
            <span class="flex items-center justify-center">
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.287.129.332.202.045.073.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/>
              </svg>
              WhatsApp
            </span>
          </a>
          <a href="https://upstox.com/open-account/?f=4TAWEG" 
             target="_blank" 
             class="block w-full text-center px-4 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg">
            <span class="flex items-center justify-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Open Upstox Account
            </span>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template> 