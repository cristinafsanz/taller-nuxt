# TODO taller

[x] Pantallazos 2018 en resumen: reducir tamaño

[x] Pasos instalación en README (algo similar a [Django Girls](https://tutorial.djangogirls.org/es/installation/) o [VueVixens](https://vuevixens.github.io/docs/workshop/ch1.html)):
- [x] Crear cuenta GitHub si no se tiene (para Codesandbox y para despliegue).
- [x] Opción 1: Descargar en local
    - [x] [Nuxt (node, npm, npx) en Mac, Windows y Linux](https://nuxtjs.org/guide/installation/).
    - [x] Vue Dev tools en Chrome.
    - [x] VS Code.
    - [x] Git.
- [x] Opción 2: Usar [Codesandbox](https://codesandbox.io/s/github/nuxt/codesandbox-nuxt)
- [x] Spotify API.

[x] Conectar con API Spotify para ver qué pantallas se podrían mostrar en la aplicación.
- [x] Crear un Client ID en el [Dashboard](https://developer.spotify.com/dashboard/applications):
    - App Name: Wecodefy
    - Description: Get your statistics from last year in a similar way as spotify wrappers.
    - What are you building? Website.
    - Are you developing a commercial integration? No
- [x] Get Top User artists: Se necesita [User Authorization](https://developer.spotify.com/documentation/general/guides/authorization-guide/): To get that authorization, your application generates a call to the Spotify Accounts Service /authorize endpoint, passing along a list of the scopes for which access permission is sought.
    - [Get User's Top Artists and Tracks](https://developer.spotify.com/console/get-current-user-top-artists-and-tracks/?type=artists&time_range=&limit=&offset=)

[ ] Rama en GitHub por cada funcionalidad de la aplicación (nuxt1, ...nuxtn):
- [ ] Componentes y layout con parte estática. Global CSS (metodología BEM). Nuxt-link. Transición entre páginas.
- [ ] SEO y meta tags. Mostrar code-splitting.
- [ ] Spotify API. Plugins.
- [ ] Vuex guardar estado distintas páginas.
- [ ] Despliegue estático GitHub Pages o Netlify.

[ ] Hacer la misma aplicación en Codesandbox para apuntar los pasos en README.
- Opción 2: Usar editor online CodeSandbox
    - Crear cuenta en [CodeSandbox](https://codesandbox.io/) y hacer un fork de [codesandbox-nuxt](https://codesandbox.io/s/github/nuxt/codesandbox-nuxt).

[ ] Explicación Nuxt en README:
- [ ] Qué es Nuxt: framework Vue. SEO friendly. Mejora performance.
- [ ] Modos Pre-render y SSR. 
- [ ] Muestra en Chrome Dev tools de parte de SEO y code-splitting.
- [ ] Lo que no vamos a ver (en cursos de Nuxt en Vue School): 
    - [ ] Async data / fetch. 
    - [ ] Dynamic routes. 
    - [ ] Despliegue Heroku.
 
[ ] Enlaces a los resultados en cada rama (nuxt1, nuxt2...)

[ ] Revisar versión final del README de master, debería contener lo último (rama nuxtn)

## Opcional

[ ] ¿Usar nuxt-linter?

[ ] ¿Proxy para API?

[ ] Animaciones CSS entre páginas

## Ideas

[ ] Adaptar texto a "Música mientras programas": Cuando ejecutabas tests, te ponías...

## Despliegue

- Añadir en el Dashboard de spotify la redirect uris de producción.

## Día del taller

[ ] Fichero txt con export client ID y client Secret para generar el token antes del taller (el token dura 1 hora)
