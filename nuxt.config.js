const BASE_DIR = process.env.BASE_DIR || '';

module.exports = {
  head: {
    title: 'simplizm',
    meta: [
      { charset: 'utf-8' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  router: {
    base: BASE_DIR
  },
  loading: { color: '#0f4f7d' },
  css: [
    {src: '~/assets/scss/reset.scss', lang: 'scss'},
    {src: '~/assets/scss/common.scss', lang: 'scss'}
  ],
  build: {
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
    '~/plugins/AxiosConfig.js'
  ]
}

