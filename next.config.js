const path = require('path')

// module.exports = {
//     distDir: 'build',
//     sassOptions: {
//         includePaths: [path.join(__dirname, 'styles')],
//     },
//     trailingSlash: true,
// }

module.exports = {
  // other exports
  assetPrefix: '/images/',
  target: 'serverless', // add this line
};