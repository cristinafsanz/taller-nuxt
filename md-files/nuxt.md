Nuxt
===========

- Nuxt.js es un framework de Vue.js:

    - Podemos crear aplicaciones basadas en componentes, usando Vue.js.

    - Cada componente se divide en parte HTML, CSS y JavaScript.

    - Se ejecuta un `starter template` que genera una estructura distinta a la que genera `vue-cli` y trae más configuración por defecto (router, vuex, Babel, Webpack, SSR).

## Modos

- `SPA`: Para usarlo como un framework de Vue.js.

- `Universal`: Para aprovechar las características del Server Side Rendering.

- `Pre-render`: Aprovecha las ventajas que da el SSR pero sin necesidad de servidor (Static site generator). Se desarrolla en modo Universal pero se genera de forma diferente para desplegar en producción.

## Ventajas

- Añadiendo la información en el método `head` de Nuxt añades las meta tags necesarias para cumplir con el `SEO` (Search Engine Optimization).

- `Carga más rápida` al generar el servidor el html inicial (o al generarse el contenido antes de cargar la página).

- `Code splitting`: En cada página se tiene sólo el código necesario para esa página.

- Con Webpack instalado por defecto tenemos `hot-reloading` (como cuando usamos vue-cli). Con cualquier cambio en el código se actualiza el navegador. Además tendremos el código `minificado` para producción.

- Puedes programar en `ES6`, Babel viene incorporado por defecto y te transpila el código para que sea compatible con todos los navegadores.

## Inconvenientes

- Mucha `magia` por detrás. Por ejemplo creas una página y te crea el router automáticamente.

- Error al usar elementos del lado del cliente: `document` is not defined.

    - Usar `if (process.client)`

    - Etiqueta `<no-ssr>`

## Casos de uso

- Aplicación pública, importante el SEO: E-commerce, landing, blog...

## Estructura

Se tiene una estructura de directorios muy autoexplicativa:

- `Assets`: ficheros estáticos que será procesado por Webpack. Ej. fichero SCSS o imagen que puede ser optimizada con Webpack.

- `Static`: ficheros estáticos que no serán procesados por Webpack. Ej. logo de la página.

- `Components`

- `Layouts`. Por defecto se usa `default.vue`.

- `Pages`: Vistas de la aplicación y rutas asociadas (generadas automáticamente)

- `Plugins`

- `Store`: Se activa Vuex al añadir un fichero en esta carpeta.

- `nuxt.config.js`: Donde está toda la configuración de la aplicación.

## Funcionalidad

- `Async data` / `fetch`: Métodos para ejecutar antes de que se cargue el componente. Con el primero se puede inicializar datos que se mergearán con los del método `data`.

- `Nuxt-link`: Para navegar por la aplicación sin que se recargue la página.

- `Global CSS`: Para tener CSS global, si no queremos que esté asociado a un determinado layout o página.

- `Middleware`: Funcionalidad que se ejecutará antes de cargarse cada página o antes de cargarse una página en particular (si se añade sólo en esa página).