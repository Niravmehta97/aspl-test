// const path = require('path')

// module.exports = {
//     distDir: 'build',
//     sassOptions: {
//         includePaths: [path.join(__dirname, 'styles')],
//     },
//     trailingSlash: true,
// }

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    output: 'export',
    distDir: 'dist',
  }
   
  module.exports = nextConfig