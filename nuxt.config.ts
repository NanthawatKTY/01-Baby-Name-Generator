// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
    ],
    css: [
      '@/assets/css/main.scss',
        "~/assets/css/tailwind.css",
    ],
    build: {
      postcss: {
        postcssOptions: {
          plugins: {
            tailwindcss: {},
            autoprefixer: {},
          },
        },
      },
    },
    // vite: {
    //     css: {
    //         preprocessorOptions: {
    //             sass: {
    //                 additionalData: '@import "@/assets/css/_variables.sass"',
    //             },
    //         },
    //     },
    // },
})
