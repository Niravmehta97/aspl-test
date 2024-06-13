// const path = require('path')

// module.exports = {
//     distDir: 'build',
//     sassOptions: {
//         includePaths: [path.join(__dirname, 'styles')],
//     },
//     trailingSlash: true,
// }

module.exports = {
  sassOptions: {
            includePaths: [path.join(__dirname, 'styles')],
        },
        trailingSlash: true,
  // other exports
  target: 'serverless', // add this line
};