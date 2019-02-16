# Previo al taller

## 1) Crear una aplicación en Spotify

- Visitar https://developer.spotify.com/dashboard/.
- Iniciar sesión con tu cuenta de Spotify y crear un `Client ID`. Copiar el Client ID para usarlo en el taller.
- Editar settings dentro de la aplicación creada y añadir como Redirect URIs:

    - `http://localhost:3000/`
    - `http://localhost:3000/my-music-1`
    - `http://localhost:3000/my-music-2`

- Guardar los cambios.

## 2) Instalar herramientas

- Tener instalado [Node y npm](https://www.npmjs.com/get-npm).
- Tener cuenta en [GitHub](https://github.com/).
- Tener instalado [Git](https://tutorial.djangogirls.org/es/installation/#instalar-git).
- Tener instalado un editor de código (ej. [Visual Studio Code](https://code.visualstudio.com/)). Instalar extensión [Vetur](https://github.com/vuejs/vetur) o similar para programar con Vue.
- Instalar la extensión de Chrome [Vue.js devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en).
- [Opcional] Instalar la extensión de Chrome [Octotree](https://chrome.google.com/webstore/detail/octotree/bkhaagjahfmjljalopjnoealnfndnagc) para acceder a las instrucciones más fácilmente.

## 3) Bajar el proyecto

- Clonar el repositorio en local: `git clone https://github.com/cristinafsanz/taller-nuxt.git` (también puedes hacer un fork del repositorio y clonarlo para subir tu código y desplegarlo durante el taller).
- Entrar en el proyecto: `cd taller-nuxt`
- Situarse en la rama de inicio del taller: `git checkout nuxt1`
- Instalar las dependencias: `npm install`

## 4) Arrancar la aplicación

- Arrancar el servidor: `npm run dev`
- Abrir la aplicación en el navegador: http://localhost:3000
- Deberías ver una aplicación como ésta:

![Página inicial](../md-images/home-page.jpg?raw=true)

## Nota

Si no arranca bien la aplicación, puede ser un problema de versiones de Node o npm.

- En Mac las versiones que tengo instaladas en el momento de hacer el taller son Node v10.13.0 y npm v6.4.1.

- En Windows 10 realicé los siguientes pasos para tener versiones actualizadas:

    - Arrancar terminal:
        - Ejecutar `wsl` y tienes zsh
    - Actualizar npm:
        ```
        npm cache clean
        npm update -g
        ```
    - Instalar versión Node más actual:
        - Instalar [nvm](https://github.com/creationix/nvm/blob/master/README.md) para usar una versión concreta de Node:
        ```
        curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
        source ~/.nvm/nvm.sh
        nvm install stable
        nvm use stable
        ```
    - Versiones  Node (ej. 11.9.0) y npm (6.5.0)
    - Volver al paso 3) para hacer de nuevo `npm install` y `npm run dev`.