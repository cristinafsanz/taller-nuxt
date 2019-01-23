Layout
=================

La aplicación va a contener 3 páginas con un header y un footer.

### Header

![Imagen header con logo a la izquierda](../../md-images/header.jpg?raw=true)

El header en todas las páginas tendrá el mismo logo a la izquierda.

### Footer

![Imagen footer con enlaces página anterior y siguiente y nav](../../md-images/footer.jpg?raw=true)

El footer en todas las páginas tendrá una navegación. Los enlaces a página siguiente y anterior sólo se mostrarán en las páginas a partir de la home y sólo en caso necesario.

### Pages

Cada fichero creado en el directorio `pages/` será una página de la aplicación y tendrá una ruta asociada de forma automática.

En nuestra aplicación tendremos:

- `pages/index.vue`: la página inicial de la aplicación (ruta `/`)

- `pages/my-music-1.vue`: primera página con mis datos de música (ruta `/my-music-1`).

- `ages/my-music-2.vue`: segunda y última página con mis datos de música (ruta `/my-music-2`).

### Layouts

Todas las páginas utilizan el layout por defecto `layouts/default.vue`, a no ser que especifiquemos uno distinto en las páginas. En nuestra aplicación usaremos el layout por defecto.

Vamos a crear los componentes `TheHeader` y `TheFooter` para usarlos en el layout por defecto. El componente `TheFooter` mostrará sólo los elementos que necesitemos dependiendo de la ruta de la aplicación. Todos los componentes estarán en la carpeta `components`.

Un ejemplo de componente lo podemos ver en `components/Logo.vue`, que tendremos que adaptar. En este caso sólo tiene las etiquetas `<template>` y `<style>` ya que sólo contiene HTML y CSS.

#### Componentes TheHeader y TheFooter

Crea los ficheros `TheHeader.vue` y `TheFooter.vue` dentro de la carpeta `components`. 

`Consejo`: Si escribes [`scaffold`](https://vuejs.github.io/vetur/snippet.html#scaffold-snippets) o pones `:` en el fichero te añade el scaffolding del component vue.

Añadimos un texto y un background-color para hacer una prueba inicial con el layout.

TheHeader.vue:

```html
<template>
  <header>
    <div class="logo">
      Logo
    </div>
  </header>
</template>

<script>
export default {

};
</script>

<style>
header {
    background-color: aquamarine;
    height: 7rem;
}
</style>
```

TheFooter.vue:

```html
<template>
  <footer>
    <nav>
      <ul>
        <li><a href="#">Un enlace</a></li>
      </ul>
    </nav>
  </footer>
</template>

<script>
export default {

};
</script>

<style>
footer {
    background-color: aqua;
    height: 7rem;
}
</style>

```

#### Index

Abrir `pages/index.vue` y modificar el código para la prueba:

```html
<template>
  <main>
    <h1>
      Wecodefy
    </h1>
  </main>
</template>

<style>
main {
  /* Item inside flex container in layout/default */
  flex-grow: 1;

  /* Elements inside main */
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
```

#### Default layout

Abrir `layouts/default.vue` y añadir los componentes del header y el footer:

```html
<template>
  <div class="container">
    <the-header/>
    <nuxt/>
    <the-footer/>
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue';
import TheFooter from '~/components/TheFooter.vue';

export default {
    components: {
        TheHeader,
        TheFooter,
    },
};
</script>

<style>
html {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

/* Flex container of the-header, main content and the-footer */
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>

```

Al acceder a la url `http://localhost:3000/` en el navegador con la aplicación arrancada deberías ver:

![Layout con header, título en main y footer](../../md-images/layout-prueba-inicial.jpg?raw=true)

En el screenshot tenía abierta la consola de JavaScript para mostrar la pestaña `Vue` que aparece después de instalar la extensión de Chrome [Vue.js devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en). En la primera pestaña se pueden ver componentes que contiene el layout por defecto: `<TheHeader`, `<Nuxt>` y `<TheFooter>`. `<Nuxt>` será el contenido específico de cada página. 