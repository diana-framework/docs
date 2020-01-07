const path = require('path');

module.exports = {
  title: "Diana Framework documentation",
  description: '...',
  dest: 'public',
  themeConfig: {
    nav: [
      { text: 'Specification', link: '/specification/introduction' },
    ],
    sidebar: {
      '/specification/': [
        '/specification/introduction',
      ]
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname, "../assets")
      }
    }
  },
  head: [
    ['link', { rel: "icon", type: "image/icon", href: "/favicon.ico"}],
  ]
}
