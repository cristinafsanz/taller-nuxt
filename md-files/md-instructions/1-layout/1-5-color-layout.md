Color al layout
=================

Cada página tiene un `background-color` y también incluye al footer y al header, así que habrá que pasarlo al layout a partir de las rutas. Hay que quitar primero los `background-color` de prueba en `main.css`.

default.vue:

```html
<template>
  <div class="container">
    <the-header :background-color="backgroundColor" />
    <nuxt/>
    <the-footer :background-color="backgroundColor"/>
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
    data() {
        return {
            backgroundColor: '#fff',
        };
    },
    watch: {
        $route: 'routeChanged',
    },
    created() {
        this.routeChanged();
    },
    methods: {
        /* Solution from conditional logic issue:
        https://github.com/nuxt/nuxt.js/issues/180
        */
        routeChanged() {
            this.setBackgroundColor();
        },

        setBackgroundColor() {
            const routePath = this.$route.path;
            const pageRoot = 'my-music-';
            const [, currentPage] = routePath.split(pageRoot);
            const backgroundList = ['#638de8', '#ffc965', '#b79cc9'];
            const isPage = [routePath === '/', currentPage === '1', currentPage === '2'];

            isPage.forEach((isPageItem, index) => {
                if (isPageItem) {
                    this.backgroundColor = backgroundList[index];
                }
            });
        },
    },
};
</script>
```

TheHeader.vue:

```html
<template>
  <header :style="{ backgroundColor: backgroundColor }">
    <div class="logo">
      <img src="~assets/images/wecodefy-logo.png" >
    </div>
  </header>
</template>

<script>
export default {
    props: {
        backgroundColor: {
            type: String,
            required: false,
            default: '#fff',
        },
    },
};
</script>

<style>
header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.logo {
  margin-left: 2rem;
}
</style>

```

Hay que hacer lo mismo para `TheFooter.vue`, añadir el estilo en la etiqueta `<footer>` y la prop `backgroundColor`.

En las páginas ya se puede añadir el mismo `background-color` añadido en el layout:

- index.vue: `background-color: #638de8;`

- my-music-1.vue: `background-color: #ffc965;`

- my-music-2.vue: `background-color: #b79cc9;`

Podemos comprobar que `http://localhost:3000/` se ve todo azul, `http://localhost:3000/my-music-1` todo amarillo y `http://localhost:3000/my-music-2` todo violeta.

