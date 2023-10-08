const path = require("path")

module.exports = {
  webpack: {
    entry: './src/index.jsx',
    configure: {
      resolve: {
        alias: {
          '@': path.resolve(__dirname, "./src")
        }
      }
    }
  },
};
