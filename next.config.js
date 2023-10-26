/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "res.cloudinary.com",
      },
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "assets/stylessheets")],
  },
};

module.exports = nextConfig;
