exports.config = {
  files: {
    stylesheets: {
      joinTo: 'css/app.css'
    },
    javascripts: {
      joinTo: 'js/app.js',
      order: {
        after: ['styles/reset.css']
      }
    },
  },
  plugins: {
    postcss: {
      processors: [require('autoprefixer')]
    },
  },
};
