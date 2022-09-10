const withImages = require('next-images')

module.exports = {
  ...withImages(),
    images: {
      domains: ['astrowind.vercel.app'],
      formats: ['image/avif', 'image/webp'],
      disableStaticImages: true
    },
    trailingSlash: true,
    future: {
      webpack5: true,
  },
  }
