import colors from "vuetify/es5/util/colors";

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - Servcy",
    title: "Servcy",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Servcy is for freelance entrepreneurs, it's their virtual office with features like inbox aggregation, payments, invoicing, reporting, contract management, project management, boilerplates for commonly used documents, and integrations to support other SaaS who provide these features.",
      },
      { property: "og:site_name", content: "Servcy" },
      { hid: "og:type", property: "og:type", content: "website" },
      { hid: "og:url", property: "og:url", content: "https://servcy.com" },
      {
        hid: "og:title",
        property: "og:title",
        content: "Virtual Office For Freelance Entrepreneurs | Servcy",
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "Servcy is for freelance entrepreneurs, it's their virtual office with features like inbox aggregation, payments, invoicing, reporting, contract management, project management, boilerplates for commonly used documents, and integrations to support other SaaS who provide these features.",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://servcy.com/inbox-management-isometric.svg",
      },
      { hid: "og:image:width", property: "og:image:width", content: "15141" },
      { hid: "og:image:height", property: "og:image:height", content: "16290" },
      { name: "format-detection", content: "telephone=yes" },
      {
        name: "robots",
        content:
          "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/global.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/notifier.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
    "@nuxtjs/google-analytics",
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: "#26542F",
          secondary: "#4D7E3E",
          success: "#5BA959",
          accent: colors.grey.darken3,
          dark: "#2b3232",
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          errorLight: colors.red.lighten1,
          silver: "#7E84A3",
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "nuxtjs-microsoft-clarity",
    "@nuxtjs/firebase",
    "@nuxt/content",
    "@nuxtjs/sitemap",
    "@nuxtjs/gtm",
  ],

  firebase: {
    config: {
      apiKey: process.env.FIREBASE_apiKey,
      authDomain: process.env.FIREBASE_authDomain,
      projectId: process.env.FIREBASE_projectId,
      storageBucket: process.env.FIREBASE_storageBucket,
      messagingSenderId: process.env.FIREBASE_messagingSenderId,
      appId: process.env.FIREBASE_appId,
      measurementId: process.env.FIREBASE_measurementId,
    },
    services: {
      auth: true,
      firestore: true,
    },
  },

  sitemap: {
    hostname: "https://servcy.com",
    gzip: true,
  },

  microsoftClarity: {
    id: process.env.CLARITY_PROJECT_ID,
  },

  googleAnalytics: {
    id: "UA-254127105-1",
  },

  gtm: {
    id: process.env.GTM_ID,
  },
};
