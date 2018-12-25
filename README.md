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

![Imagen página inicio con título y logo](readme-images/home-page.jpg?raw=true)

### Instalación Paso 2

- Tener creada cuenta en Spotify (free o premium).

- Ir al [Dashboard](https://developer.spotify.com/dashboard/) y crear un client ID. Apuntar Client ID y Client Secret para usarlos en el taller.

- Clonar proyecto en local (en otra ruta distinta al proyecto) para obtener un token: [Spotify Web API Token generator](https://github.com/JMPerez/spotify-web-api-token):

    ```
    git clone https://github.com/JMPerez/spotify-web-api-token.git
    cd spotify-web-api-token
    npm install
    ```

- Exportar Client ID y Client Secret y arrancar el proyecto:
    ```
    export SPOTIFY_CLIENT_ID=<your_client_id>
    export SPOTIFY_CLIENT_SECRET=<your_client_secret>
    npm start
    ```

- Acceder a http://localhost:3000/token para coger el token. Apuntarlo para añadirlo en el fichero `.env`.

#### Instalar dotenv

- [Dotenv](https://github.com/nuxt-community/dotenv-module)

  ```
  npm install @nuxtjs/dotenv --save
  ```

- Añadir como primera línea en `nuxt.config-js`:
  ```
  require('dotenv').config()
  ```

- Añadirlo en la sección de `modules` de `nuxt.config.js`:

  ```
  {
    modules: [
      '@nuxtjs/dotenv'
  ]
  }
  ```

- Crear un fichero .env en la raíz del proyecto para añadir el token que obtuvimos en "Instalación paso 2". Si se va a subir a un repositorio git añadirlo a .gitignore para evitar subirlo por error.

  ```
  SPOTIFY_ACCESS_TOKEN=xxxxxxxxxx
  ```

- Parar el servidor de desarrollo (Control + C) y arrancarlo de nuevo (`npm run dev`) para cargar los cambios.

#### Instalar [Spotify Web API JS]

  ```
  npm install spotify-web-api-js --save
  ```

Probar que funciona en `pages/index.vue`:
- En la sección `script` añadir:

  ```js
  const SpotifyWebApi = require('spotify-web-api-js');
  const spotifyApi = new SpotifyWebApi()

  export default {
    components: {
      Logo
    },

    mounted() {
      const token = process.env.SPOTIFY_ACCESS_TOKEN;
      if (token) {
        spotifyApi.setAccessToken(token);
      }
      // Get Elvis' albums
      spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE').then(
        function(data) {
          console.log('Artist albums', data.items)
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
  ```

![Imagen consola JS](readme-images/spotify-test.jpg?raw=true)

Un ejemplo de la prueba de Spotify API se encuentra en la rama [nuxt0](https://github.com/cristinafsanz/taller-nuxt/tree/nuxt0).

### Instalación Paso 3

- Tener cuenta en [GitHub](https://github.com/) y [Git](https://tutorial.djangogirls.org/es/installation/#instalar-git) instalado.
