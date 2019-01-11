# Taller Nuxt

> Pasos y código para crear una aplicación web con Nuxt.js.

En este taller se va a crear una aplicación similar a [Spotify Wrapped](https://spotifywrapped.com/es/), mostrándote tus canciones y artistas más escuchados en Spotify. Para ello se van a adaptar estas 3 páginas:

![Imagen página inicial desktop](md-images/home-desktop-hover.button.jpg?raw=true)

![Imagen página 4/8](md-images/4-8-desktop.jpg?raw=true)

![Imagen página 8/8](md-images/8-8-desktop.jpg?raw=true)

## Pasos del taller:

- Paso 1) Creación del layout de la aplicación con datos ficticios.
- Paso 2) Conexión con el API de Spotify para recoger datos reales.
- Paso 3) Despliegue de la aplicación.

## Previo al taller

### 1) Crear una aplicación en Spotify
- Visitar https://developer.spotify.com/dashboard/.
- Iniciar sesión con tu cuenta de Spotify y crear un `Client ID`. Copiar el Client ID para usarlo en el taller.
- Editar settings dentro de la aplicación creada y añadir como Redirect URIs: `http://localhost:3000/`
- Guardar los cambios.

### 2)  Instalar herramientas
- Instalar [npm](https://www.npmjs.com/get-npm).
- Crear cuenta en [GitHub](https://github.com/).
- Instalar [Git](https://tutorial.djangogirls.org/es/installation/#instalar-git).
- Instalar un editor de código (ej. [Visual Studio Code](https://code.visualstudio.com/)). Instalar extensión [Vetur](https://github.com/vuejs/vetur) o similar para programar con Vue.
- Instalar la extensión de Chrome [Vue.js devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en).

### 3) Bajar el proyecto
- Clonar el repositorio en local: `git clone https://github.com/cristinafsanz/taller-nuxt.git`
- Entrar en el proyecto: `cd taller-nuxt`
- Situarse en la rama de inicio del taller: `git checkout nuxt1`
- Instalar las dependencias: `npm install`

### 4)  Arrancar la aplicación
- Arrancar el servidor: `npm run dev`
- Abrir la aplicación en el navegador: http://localhost:3000
- Deberías ver una aplicación como ésta:

![Página inicial](md-images/home-page.jpg?raw=true)

### Nota

Para crear el scaffolding de la aplicación se usó:

- La herramienta de scaffolding [create-nuxt-app](https://github.com/nuxt/create-nuxt-app).
- El paquete npm `spotify-web-api-js` para conectar con el API de Spotify. 
- Los linters de JavaScript y CSS `eslint` y `stylelint`. Para el linter de JavaScript se parte del linter de Airbnb y se añade el linter para Vue. Se pueden ver todos los paquetes instalados en las `devDependencies` del `package.json` y la configuración en `.eslintrc.js` y `.stylelintrc`. Para que en vez de errores salten warnings en consola se añadió `emitWarning: true` en el `eslint-loader` de `nuxt.config.js`.

Puede verse la explicación de la instalación completa justo con una prueba de la API de Spotify en el [README](https://github.com/cristinafsanz/taller-nuxt/blob/nuxt0/README.md) de la rama `nuxt0`.