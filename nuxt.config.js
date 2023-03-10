export default {
  target: 'static',

  head: {
    title: 'Secure Lite Cam',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'width=device-width, user-scalable=no, user-scalable=0, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0 user-scalable=0' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  styleResources: {
    scss: ['~/assets/scss/_functions.scss']
  },
  css: ["~/styles/global.scss"],

  plugins: [
	],

  components: true,

  buildModules: [
  ],

  modules: [
  ],

  build: {
  }
}
