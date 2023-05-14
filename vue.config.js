module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost',
        changeOrigin: true,
        ws: true,
      },
    },
  },
};
