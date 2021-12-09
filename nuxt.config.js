const isDev = process.env.NODE_ENV !== 'production'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: true,
  router: {
    base: '/app/'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  // Можно указывать в обьекте head в компоненте <script>export default {head: {meta: [{}]}
  head: {
    title: 'Error Page',
    // Мета каждой страницы по дефолту
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Описание страницы' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    // ссылки в каждой странице по дефолту
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      //{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap' }

    ],
  },


  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // SCSS file in the project
    '@/assets/scss/style.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    //{ src: '@/plugins/nuxt-swiper-plugin.js'},
    { src: '@/plugins/animateOnScroll.client.js'},
    { src: '@/plugins/nuxt-particle.client.js' }
  ],
  // Путь к папке исходников
  srcDir: 'src/',

// Loading
// Customize the progress bar color
// https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-loading

  loading: {
    color: '#d71c1c',
    height: '25px',
    zindex: '99999',
    position: 'fixed'
  },

  // Each key:value maps to the equivalent attribute:value of the <html> element.
  // Example input: foo: 'bar', amp: undefined
  // Example output: , <html foo="bar" amp></html>
  // Можно указывать в обьекте head в компоненте <script>export default {head: {htmlAttrs: {}}
  htmlAttrs: {
  },

  // Each key:value maps to the equivalent attribute:value of the <body> element.
  // same as htmlAttrs above
  // Можно указывать в обьекте head в компоненте <script>export default {head: {bodyAttrs: {}}
  bodyAttrs: {

  },

  noscript: [
    { innerHTML: 'Для корректной работы сайта, пожалуйста активируйте JavaScript.' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    '@nuxt/image',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    //'@nuxtjs/pwa',
    // https://marquez.co/docs/nuxt-optimized-images/
    //'cookie-universal-nuxt',
    '@nuxtjs/style-resources',
    'nuxt-webfontloader',
    ['nuxt-vuex-localstorage', {
      ...(isDev && {
        mode: 'debug'
      }),
      localStorage: ['local'] //  If not entered, “localStorage” is the default value
    }]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  styleResources: {
    // your settings here
    scss: [ '~/assets/scss/project/mymixins.scss'] ,

  },

  webfontloader: {
    events: false,
    google: {
      families: ['Merriweather:400;700;900:cyrillic&display=swap']
      //{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap' }
    },
    timeout: 3000
  },

  optimizedImages: {
    optimizeImages: true
  },
  // Web module configuration: https://go.nuxtjs.dev/pwa
  // Тут меняется язык
  pwa: {
    manifest: {
      lang: 'ru',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    optimizeCss: false,
    filenames: {
      app: ({ isDev }) => isDev ? '[name].js' : 'js/[contenthash].js',
      chunk: ({ isDev }) => isDev ? '[name].js' : 'js/[contenthash].js',
      css: ({ isDev }) => isDev ? '[name].css' : 'css/[contenthash].css',
      img: ({ isDev }) => isDev ? '[path][name].[ext]' : 'img/[contenthash:7].[ext]',
      font: ({ isDev }) => isDev ? '[path][name].[ext]' : 'fonts/[contenthash:7].[ext]',
      video: ({ isDev }) => isDev ? '[path][name].[ext]' : 'videos/[contenthash:7].[ext]'
    },
    ...(!isDev && {
      html: {
        minify: {
          collapseBooleanAttributes: true,
          decodeEntities: true,
          minifyCSS: true,
          minifyJS: true,
          processConditionalComments: true,
          removeEmptyAttributes: true,
          removeRedundantAttributes: true,
          trimCustomFragments: true,
          useShortDoctype: true
        }
      }
    }),
  },
  postcss: {
    plugins: {
      ...(!isDev && {
        cssnano: {
          preset: ['advanced', {
            autoprefixer: false,
            cssDeclarationSorter: false,
            zindex: false,
            discardComments: {
              removeAll: true
            }
          }]
        }
      })
    },
    ...(!isDev && {
      preset: {
        browsers: 'cover 99.5%',
        autoprefixer: true
      }
    }),

    order: 'cssnanoLast'
  },
  vue: {
    config: {
      devtools: true
    }
  },

}
