CSS Global
=================

Crea una carpeta `css` dentro del directorio `assets`. Crea un archivo `main.css` dentro de `assets/css`.

Mover los estilos globales de `layouts/default.vue` y los estilos del layout de `TheHeader.vue`, `TheFooter.vue`, `layouts/default.vue` y `pages/index.vue`.

main.css:

```css
/*
Global styles
*/
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

/*
Layout container: header, main, footer
*/
.container {
    display: flex;
    flex-direction: column;
    height: 100vh;
}
/*
Header
*/
header {
    background-color: aquamarine;
    height: 7rem;
}
/*
Main 
Item from container: get all space available
*/
main {
    flex-grow: 1;
}
/*
Footer
*/
footer {
    background-color: aqua;
    height: 7rem;
}
```

Por ahora sólo quedarían los estilos propios de la página inicial que no pertenecen al layout:

index.vue:

```css
<style>
/*
Flex container items inside main
*/
main {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
```

Abrir `nuxt.config.js` y añadir ese fichero en la propiedad `css`:

```js
css: [
    '~assets/css/main.css'
],
```

Recargar la aplicación (Control + C y de nuevo `npm run dev`) para que se apliquen los cambios.

Se debería ver la aplicación igual que antes de añadir el CSS global.