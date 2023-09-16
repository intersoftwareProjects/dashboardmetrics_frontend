/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: "http://localhost:8080",
    JWT_SECRET: "SIMONxALEJANDRA"
  }
}

module.exports = nextConfig
