const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')

const nextConfig = {
  images: {
    domains: ["links.papareact.com","fakestoreapi.com"]
  },
  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
}, 
}

module.exports = withPlugins([[withImages]], nextConfig)
