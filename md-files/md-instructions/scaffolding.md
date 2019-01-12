# Scaffolding con las dependencias del proyecto

Para crear el scaffolding de la aplicación se usó:

- La herramienta de scaffolding [create-nuxt-app](https://github.com/nuxt/create-nuxt-app).
- El paquete npm `spotify-web-api-js` para conectar con el API de Spotify. 
- Los linters de JavaScript y CSS `eslint` y `stylelint`. Para el linter de JavaScript se parte del linter de Airbnb y se añade el linter para Vue. Se pueden ver todos los paquetes instalados en las `devDependencies` del `package.json` y la configuración en `.eslintrc.js` y `.stylelintrc`. Para que en vez de errores salten warnings en consola se añadió `emitWarning: true` en el `eslint-loader` de `nuxt.config.js`.

Puede verse la explicación de la instalación completa justo con una prueba de la API de Spotify en el [README](https://github.com/cristinafsanz/taller-nuxt/blob/nuxt0/README.md) de la rama `nuxt0`.