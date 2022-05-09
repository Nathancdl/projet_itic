import i18n from './static/i18n/index'

module.exports = {
  ssr: true,
  telemetry: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5'},
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'Streaming, film'
      },
      {
        hid: 'robots',
        name: 'keywords',
        content: 'Streaming, film'
      },
      {
        name: 'msapplication-TileColor',
        content: '#ffffff'
      },
      {
        name: 'msapplication-TileImage',
        content: '/icons/favicon/ms-icon-144x144.png'
      },
      {
        name: 'theme-color',
        content: '#ffffff'
      }
    ],
    link: [
      {rel: 'apple-touch-icon', sizes: '57x57', href: '/icons/favicon/apple-icon-57x57.png'},
      {rel: 'apple-touch-icon', sizes: '60x60', href: '/icons/favicon/apple-icon-60x60.png'},
      {rel: 'apple-touch-icon', sizes: '72x72', href: '/icons/favicon/apple-icon-72x72.png'},
      {rel: 'apple-touch-icon', sizes: '76x76', href: '/icons/favicon/apple-icon-76x76.png'},
      {rel: 'apple-touch-icon', sizes: '114x114', href: '/icons/favicon/apple-icon-114x114.png'},
      {rel: 'apple-touch-icon', sizes: '120x120', href: '/icons/favicon/apple-icon-120x120.png'},
      {rel: 'apple-touch-icon', sizes: '144x144', href: '/icons/favicon/apple-icon-144x144.png'},
      {rel: 'apple-touch-icon', sizes: '152x152', href: '/icons/favicon/apple-icon-152x152.png'},
      {rel: 'apple-touch-icon', sizes: '180x180', href: '/icons/favicon/apple-icon-180x180.png'},
      {rel: 'icon', type: 'image/png', sizes: '192x192', href: '/icons/favicon/android-icon-192x192.png'},
      {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/icons/favicon/favicon-32x32.png'},
      {rel: 'icon', type: 'image/png', sizes: '96x96', href: '/icons/favicon/favicon-96x96.png'},
      {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/icons/favicon/favicon-16x16.png'},
      {rel: 'manifest', href: '/icons/favicon/manifest.json'},
      {rel: 'search', type:"application/opensearchdescription+xml", title:"Streaming", href: '/opensearch.xml'},
    ]
  },
  loading: { color: '#2bcd6d', height: '3px', throttle: 500 },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/style/global/index.import.styl'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '@/plugins/common',},
    {src: '~/plugins/client', mode: 'client'},
    {src: '~/plugins/filters'},
    {src: '~/plugins/formatQuery'},
    {src: '~/plugins/axios'}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    [
      'nuxt-i18n',
      {
        strategy: 'prefix_and_default',
        vueI18nLoader: true,
        defaultLocale: 'en',
        locales: [
          {
            code: 'en',
            name: 'English',
            file: 'en.json'
          },
          {
            code: 'fr',
            name: 'Français',
            file: 'fr.json'
          }
        ],
        langDir: '@/static/i18n/',
        parsePages: false,
        pages: {
          search: false,
          premium: false,
          settings: false,
        },
        //CAN INTERACT WITH CRAWLER ROBOTS
        detectBrowserLanguage: {
          alwaysRedirect: true
        },
        vueI18n: i18n
      }
    ]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/toast',
    'cookie-universal-nuxt',
    ['cookie-universal-nuxt', {alias: 'cookiz'}],
  ],

  axios: {
    baseURL: process.env.API_BASE_URL,
    credentials: true
  },

  toast: {
    position: 'top-center',
    duration: 3000,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    templates: [
      {
        src: './templates/robots.txt',
        dst: '../static/robots.txt',
        options: {
          SEO_ACTIVATED: process.env.SEO_ACTIVATED || "false",
          BASE_URL: process.env.BASE_URL,
        }
      },
      {
        src: './templates/sitemap.xml',
        dst: '../static/sitemap.xml',
        options: {
          BASE_URL: process.env.BASE_URL || 'https://streaming.org',
        }
      }
    ],
    transpile: [
      'vee-validate',
      'vue-cookies',
      'vuex'
    ],
    extractCSS: {
      ignoreOrder: false
    },
  },
  env: {
    SEO_ACTIVATED: process.env.SEO_ACTIVATED || "false",
    BASE_URL: process.env.BASE_URL || 'https://streaming.org',
    API_BASE_URL: process.env.API_BASE_URL || 'https://api.streaming.org',
    SHOWCASE_BASE_URL: process.env.SHOWCASE_BASE_URL || 'http://localhost:3006',
    CHROME_EXTENSION_ID: process.env.CHROME_EXTENSION_ID || 'npeimmdidecgfamlonehonaimdmbnmme',
  },
  
}
