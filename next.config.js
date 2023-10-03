/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');
const nextConfig = {

    ...withPWA({
        dest:'public',
        register:true,
        skipWaiting:true,
    }),

    images:{
        domains:['cdn.sanity.io']
    },
}
    
  

module.exports = nextConfig
