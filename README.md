# Taller Nuxt

## Previo al taller

En el taller realizaremos 3 pasos:

1. Creación de aplicación sin conectar a ningún API.
2. Conexión a API Spotify para recoger datos reales.
3. Despliegue de la aplicación para comprobar SEO y meta tags al compartir la aplicación en Twitter.

Puedes instalarte sólo lo necesario para el primer paso, con ello tendrás una idea de cómo crear una aplicación con Nuxt. El resto de pasos nos servirán para ver casos de uso con Nuxt.

### Instalación Paso 1

- Tener instalado [npx](https://www.npmjs.com/package/npx) o [yarn](https://yarnpkg.com/en/). Yo usaré el primero para el taller.

- Tener instalado un editor de código (ej. [Visual Studio Code](https://code.visualstudio.com/)). Recomendable instalar extensión [Vetur](https://github.com/vuejs/vetur) o similar para ayudar al programar en Vue.

- Recomendable: Tener instalada la extensión de Chrome [Vue.js devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en).

#### Crear la aplicación

Se va a usar la herramienta de scaffolding [create-nuxt-app](https://nuxtjs.org/guide/installation/#using-code-create-nuxt-app-code-).

- Ejecutar:

  ```
  npx create-nuxt-app Wecodefy
  ```

- Ejemplo de elecciones al crear el proyecto:
    ```
    - Project name: Wecodefy
    - Project description: My glorious Nuxt.js project
    - Use a custom server framework: none
    - Use a custom UI framework: none
    - Choose rendering mode: Universal
    - Use axios module: no
    - Use eslint: yes
    - Use prettier: no
    - Author name: Cristina Fernández
    - Choose a package manager: npm
    ```

- Situarse en el proyecto y comprobar que arranca correctamente:

    ```
    cd Wecodefy
    npm run dev
    ```

- Abrir el navegador: http://localhost:3000

- Se debería ver una página de inicio parecida a ésta:

![Imagen página inicio con título y logo](md-images/home-page.jpg?raw=true)

### Instalación Paso 2

- Tener creada cuenta en Spotify (free o premium).

- Ir al [Dashboard](https://developer.spotify.com/dashboard/) y crear un client ID.

- Editar settings en el Dashboard y añadir como Redirect URIs: 'http://localhost:3000/'.

#### Instalar [Spotify Web API JS]

Instalar el paquete spotify-web-api-js en la raíz del proyecto.,

  ```
  npm install spotify-web-api-js --save
  ```

Probar que funciona en `pages/index.vue`:
- En la sección `script` añadir importar librería de spotify-api y el código en la función mounted (cambiando el client ID por el tuyo):

  ```js
  const SpotifyWebApi = require('spotify-web-api-js');
  const spotifyApi = new SpotifyWebApi()

  export default {

    mounted() {
      // https://gist.github.com/igorPhelype/68239ecab9afcc50230ce0c61c3bac2f
      const callback_url = window.location.href
      const client_id = 'YOUR_CLIENT_ID'
      const api_url = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&redirect_uri=${callback_url}`;
      let access_token
      let hash
      if(!window.location.hash) {
          window.location.replace(api_url)
      } else {
          const url = window.location.href
          hash = url.split('#')[1]
          hash = hash.split('&')[0]
          hash = hash.split('=')[1]
      }
      access_token = hash
      if (access_token) {
        spotifyApi.setAccessToken(access_token)
      }
      // Get Elvis' albums (initial test)
      spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE').then(
        function(data) {
          console.log('Artist albums', data.items)
        },
        function(err) {
          console.error(err)
        }
      )
      // Get my top Artists
      spotifyApi.getMyTopArtists({
        limit: 5,
        time_range: 'medium_term'
      }).then(
        function(data) {
          console.log('getMyTopArtists', data)
        },
        function(err) {
          console.error(err)
        }
      )
      // Get my top tracks
      spotifyApi.getMyTopTracks({
        limit: 5,
        time_range: 'medium_term'
      }).then(
        function(data) {
          console.log('getMyTopTracks', data)
        },
        function(err) {
          console.error(err)
        }
      )
    }
  }
  ```

- En localhost:3000 deberías ver en la consola:

  ```
  Artist albums (20) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
  getMyTopArtists {items: Array(5), total: 11, limit: 5, offset: 0, href: "https://api.spotify.com/v1/me/top/artists?limit=5&offset=0", …}
  getMyTopTracks {items: Array(5), total: 50, limit: 5, offset: 0, href: "https://api.spotify.com/v1/me/top/tracks?limit=5&offset=0", …}
  ```

![Imagen consola JS](md-images/spotify-test.jpg?raw=true)

Un ejemplo de la prueba de Spotify API se encuentra en la rama [nuxt0](https://github.com/cristinafsanz/taller-nuxt/tree/nuxt0).

### Instalación Paso 3

- Tener cuenta en [GitHub](https://github.com/) y [Git](https://tutorial.djangogirls.org/es/installation/#instalar-git) instalado.
