/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    extend: {
      minHeight: {
        'input-sm': '28px'
      },
      maxWidth: {
        'aside': '350px'
      },
      colors: {
        'header': '#24292e',
        'link': '#0366d6',
        'main': '#f6f8fa',
        'description': '#586069',
        'new-btn': '#2ea44f',
        'new-btn-hover': '#2c974b',
        'star-btn-hover': '#f3f4f6',
        'search-bar': 'rgba(255, 255, 255, 0.125)',
        'search-bar-focus': 'hsla(0,0%,100%,.125)'
      }
    }
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
