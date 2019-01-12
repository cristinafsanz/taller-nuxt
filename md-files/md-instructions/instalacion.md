# Previo al taller

## 1) Crear una aplicación en Spotify

- Visitar https://developer.spotify.com/dashboard/.
- Iniciar sesión con tu cuenta de Spotify y crear un `Client ID`. Copiar el Client ID para usarlo en el taller.
- Editar settings dentro de la aplicación creada y añadir como Redirect URIs: `http://localhost:3000/`
- Guardar los cambios.

## 2) Instalar herramientas

- Instalar [npm](https://www.npmjs.com/get-npm).
- Crear cuenta en [GitHub](https://github.com/).
- Instalar [Git](https://tutorial.djangogirls.org/es/installation/#instalar-git).
- Instalar un editor de código (ej. [Visual Studio Code](https://code.visualstudio.com/)). Instalar extensión [Vetur](https://github.com/vuejs/vetur) o similar para programar con Vue.
- Instalar la extensión de Chrome [Vue.js devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en).

## 3) Bajar el proyecto

- Clonar el repositorio en local: `git clone https://github.com/cristinafsanz/taller-nuxt.git`
- Entrar en el proyecto: `cd taller-nuxt`
- Situarse en la rama de inicio del taller: `git checkout nuxt1`
- Instalar las dependencias: `npm install`

## 4) Arrancar la aplicación

- Arrancar el servidor: `npm run dev`
- Abrir la aplicación en el navegador: http://localhost:3000
- Deberías ver una aplicación como ésta:

![Página inicial](../md-images/home-page.jpg?raw=true)