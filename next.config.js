/** @type {import('next').NextConfig} */
const nextConfig = {
    /* config options here */
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'image.tmdb.org'
        }]
    }
}

module.exports = nextConfig