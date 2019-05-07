import pkg from './package'

export default {
  mode: 'universal',

  server: {
    port: 8090,
    host: '127.0.0.1'
  },

  generate: {
    routes: []
  },

  head: {
    title: 'Fundación Weenjoy',
    meta: [
      { charset: 'utf-8' },
      { name: 'theme-color', content: '#78d7e1' },
      { name: 'msapplication-TileColor', content: '#78d7e1' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: pkg.description, hid: 'description' }
    ],
    noscript: [{
      innerHTML: 'Lo lamentamos pero Fundación Weenjoy necesita javascript para funcionar correctaente, activalo o utiliza un navegador compatible.'
    }],
    link: [
      { href: 'https://fonts.googleapis.com/css?family=Montserrat:400,600', rel: 'stylesheet' },

      // favicons
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
      { rel: 'manifest', href: '/favicon/site.webmanifest' },
      { rel: 'mask-icon', href: '/favicon/safari-pinned-tab.svg', color: '#78D7E7' },
    ]
  },

  loading: { color: '#78D7E1' },

  css: [
    '~/assets/scss/style.scss'
  ],

  plugins: [
    { src: '~/plugins/aos', ssr: false  },
    { src: '~/plugins/lazy', ssr: false  },
    { src: '~/plugins/rellax', ssr: false  }
  ],


  modules: [
    '@nuxtjs/pwa',
  ],

  build: {
    extend(config, ctx) {
    }
  }
}
