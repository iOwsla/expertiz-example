
const { i18n } = require('./next-i18next.config')
const { routes, redirects } = require('./lib/routes')

module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  i18n,
  async redirects() {
    return redirects
  },
  async rewrites() {
    return {
      fallback: [
        ...routes()
      ]
    }
  },
}