// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({

        css: ['~/assets/styles/main.scss', '~/assets/css/bootstrap-icons.css',  '~/assets/css/template.css'],


        head: {
            script: [
              {
                src: "~/assets/js/jquery.min.js",
              },
              {
                src: "~/assets/js/bootstrap.min.js",
              },
              {
                src: "~/assets/js/counter.js",
              },
              {
                src: "~/assets/js/custom.js",
              },
            ],
          }
})
