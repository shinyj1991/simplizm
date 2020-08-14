const BASE_DIR = process.env.BASE_DIR || '';

module.exports = {
  head: {
    title: 'SIMPLIZM',
    meta: [
      { charset: 'utf-8' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap' },
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700;900&display=swap' }
    ]
  },
  router: {
    base: BASE_DIR,
    middleware: 'RouteEnter'
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
    '~/plugins/GlobalComponents.js',
    '~/plugins/AxiosConfig.js',
    '~/plugins/Directives.js'
  ]
}

