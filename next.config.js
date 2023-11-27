/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['admin.vinsys.com'],
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
}

module.exports = nextConfig
