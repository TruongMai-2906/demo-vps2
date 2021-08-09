export default {
	mode:'universal',
	publicPath: '/',
	ssr: true,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'coursecom_web',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
		{ rel: 'stylesheet', href:'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css'}
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
	'@fortawesome/fontawesome-svg-core/styles.css',
    '~/assets/plugins/bootstrap.min.css',
    '~/assets/style.css',
    '~/assets/flaticon-2/flaticon.css',
	 '~/assets/flaticon/flaticon.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
	'@/plugins/bootstrap-vue.js',
	'~/plugins/fontawesome.js',
   '~/plugins/vue-checkview.js',
	'~/plugins/vue-slimscroll.js',
	'~/plugins/vue2-touch-events.js',
	'~/plugins/vue-touch-scroll.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
	  extend(config, ctx) {},
 		babel: { compact: true }
  },

}
