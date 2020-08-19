const BASE_DIR = process.env.BASE_DIR || '';

module.exports = {
  head: {
    title: 'SIMPLIZM',
    meta: [
      { charset: 'utf-8' },
      { hid: 'description', name: 'description', content: 'Welcome to SIMPLIZM.' },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'theme-color', content: '#000000' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap' },
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700;900&display=swap' }
    ]
  },
  router: {
    base: BASE_DIR,
    middleware: 'routeEnter'
  },
  mode: 'spa',
  generate: {
    fallback: true
  },
  loading: { color: '#ffffff' },
  css: [
    {src: '~/assets/scss/reset.scss', lang: 'scss'},
    {src: '~/assets/scss/common.scss', lang: 'scss'}
  ],
  build: {
    assetsPublicPath: '/',
    assetsSubDirectory: 'static',
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: [
    '~/plugins/routerPush',
    '~/plugins/globalComponents',
    '~/plugins/axiosConfig',
    '~/plugins/directives'
  ]
}

