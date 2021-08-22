export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'health-website',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/sass/style.scss',
    '~/assets/sass/layout/_flexbox.scss',
    '~/assets/sass/layout/_header.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@plugins/scroll.js', '@/plugins/utils.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/firebase',
    '@nuxtjs/style-resources',
  ],
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // extend(config, ctx) {
    //   const vueLoader = config.module.rules.find(
    //     (loader) => loader.loader === 'vue-loader'
    //   )
    //   vueLoader.options.transformToRequire = {
    //     video: 'src',
    //     source: 'src',
    //   }
    // },
  },
  firebase: {
    config: {
      apiKey: 'AIzaSyCXeHWmYjsFYeSb7jI3NUTbak5-5ryM5xc',
      authDomain: 'health-website-c58ef.firebaseapp.com',
      projectId: 'health-website-c58ef',
      storageBucket: 'health-website-c58ef.appspot.com',
      messagingSenderId: '980880698793',
      appId: '1:980880698793:web:0379ce6408cabdfde3e8b8',
      measurementId: 'G-KLQS0G4Y18',
    },
    services: {
      firestore: true,
      storage: true,
      database: true,
    },
  },
  styleResources: {
    scss: [
      '@/assets/sass/base/_variables.scss',
      '@/assets/sass/base/_responsive.scss',
      '@/assets/sass/base/_general.scss',
    ],
  },
}
