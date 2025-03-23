import { useHead } from '@vueuse/head'

export function useMeta(options = {}) {
  const defaults = {
    title: 'Easy Trade Insights - Your Gateway to Smart Trading',
    description: 'Get comprehensive trading insights, market analysis, and expert guidance. Make informed trading decisions with our advanced analytics tools.',
    keywords: 'trading insights, market analysis, trading strategies, stock market, trading tips, financial analysis',
    author: 'Easy Trade Insights',
    ogTitle: 'Easy Trade Insights - Your Gateway to Smart Trading',
    ogDescription: 'Get comprehensive trading insights, market analysis, and expert guidance. Make informed trading decisions with our advanced analytics tools.',
    ogImage: '/og-image.jpg', // You'll need to add this image to your public folder
    ogUrl: 'https://easytradeinsights.com', // Replace with your actual domain
    twitterCard: 'summary_large_image',
    twitterTitle: 'Easy Trade Insights - Your Gateway to Smart Trading',
    twitterDescription: 'Get comprehensive trading insights, market analysis, and expert guidance. Make informed trading decisions with our advanced analytics tools.',
    twitterImage: '/og-image.jpg', // You'll need to add this image to your public folder
    canonical: 'https://easytradeinsights.com', // Replace with your actual domain
  }

  const meta = {
    ...defaults,
    ...options,
  }

  useHead({
    title: meta.title,
    meta: [
      { name: 'description', content: meta.description },
      { name: 'keywords', content: meta.keywords },
      { name: 'author', content: meta.author },
      
      // Open Graph / Facebook
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: meta.ogTitle },
      { property: 'og:description', content: meta.ogDescription },
      { property: 'og:image', content: meta.ogImage },
      { property: 'og:url', content: meta.ogUrl },
      
      // Twitter
      { name: 'twitter:card', content: meta.twitterCard },
      { name: 'twitter:title', content: meta.twitterTitle },
      { name: 'twitter:description', content: meta.twitterDescription },
      { name: 'twitter:image', content: meta.twitterImage },
      
      // Canonical URL
      { rel: 'canonical', href: meta.canonical },
    ],
  })
} 