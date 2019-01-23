Generación del código estático
=================

Para este paso deberías tener un repositorio en `GitHub` para subir el código.

Puedes hacer un fork de `https://github.com/cristinafsanz/taller-nuxt` y partir de la rama `nuxt3`.

Crear una nueva rama `nuxt4` a partir de la anterior y cambiar el clientId por el tuyo en `mixins/spotify-api.js`.

Ejecutar en la raíz del proyecto: `npm run generate`. En mi caso he quitado de `.gitignore` el directorio `dist` para mostrarlo en el repositorio durante el taller.

## Despliegue en [GitHub Pages](https://nuxtjs.org/faq/github-pages/)

- Añadir como router base el nombre del repo en `nuxt.config.js`:

```
export default {
  router: {
    base: '/taller-nuxt/'
  }
}
```

- Ejecutar:

```
npm install push-dir --save-dev
```



- Añadir script en `package.json` para desplegar en gh-pages:

```
"deploy": "push-dir --dir=dist --branch=gh-pages --cleanup"
```

- Subir los cambios a la rama remota (para ejecutar el deploy la rama tiene que estar limpia).

- Añadir en [Spotify Developers](https://developer.spotify.com/dashboard/applications) las `Redirect URIs` de producción, accediendo a la aplicación y editando las propiedades.

En mi caso son:

  - `https://cristinafsanz.github.io/taller-nuxt/`
  - `https://cristinafsanz.github.io/taller-nuxt/my-music-1`
  - `https://cristinafsanz.github.io/taller-nuxt/my-music-2`

- Ejecutar:

```
npm run deploy
```

- Habilitar GitHub Pages en la rama `gh-pages`.

- Visualizar en `https://[[repository-user]].github.io/taller-nuxt/` (ej. `https://cristinafsanz.github.io/taller-nuxt/`).