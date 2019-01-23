Header y footer
=================

Para probar todas las posibilidades de `TheFooter` vamos a crear las 2 páginas que nos faltan: `pages/my-music-1.vue` y `pages/my-music-2.vue`.

my-music-1.vue: 

```html
<template>
  <main>
    <h1>
      My music 1
    </h1>
  </main>
</template>
```

my-music-2.vue:

```html
<template>
  <main>
    <h1>
      My music 2
    </h1>
  </main>
</template>
```

Vamos a adaptar el header y el footer al diseño de Spotify. Borramos el componente `Logo.vue` porque añadiremos la imagen directamente en el componente `TheHeader.vue`.

## TheHeader

Abrimos el fichero `components/TheHeader.vue` y añadimos la imagen y la colocamos a la izquierda.

```html
<template>
  <header>
    <div class="logo">
      <img src="~assets/images/wecodefy-logo.png" >
    </div>
  </header>
</template>

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

## TheFooter

Abrimos el fichero `components/TheFooter.vue` y añadimos los enlaces al resto de páginas y los enlaces de navigación. Para navegar por la aplicación vamos a usar el componente de nuxt `<nuxt-link>` (por ejemplo para enlazar a la última página sería `<nuxt-link to="/my-music-2">`).

TheFooter.vue:

```html
<template>
  <footer :class="{'footer--right': !linksEnabled}">
    <div
      v-if="linksEnabled"
      class="footer__link footer__link-number">
      <nuxt-link
        v-if="previousPage"
        :to="`${pageRoot}${previousPage}`"
        class="footer__link--up"/>
      <span>{{ currentPage }} / {{ numberedPages }}</span>
      <nuxt-link
        v-if="nextPage"
        :to="`${pageRoot}${nextPage}`"
        class="footer__link--down"/>
    </div>

    <div v-if="linksEnabled && !isLastPage">
      <nuxt-link
        :to="`${pageRoot}${nextPage}`"
        class="footer__link footer__link-next"
      >
        <span class="footer__link--down-double"/>
        <span class="footer__link--down-double"/>
      </nuxt-link>
    </div>

    <nav>
      <ul>
        <li>
          <nuxt-link to="/aviso-legal">
            Aviso legal
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/privacidad">
            Privacidad
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/cookies">
            Cookies
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<script>
export default {
    data() {
        return {
            currentPage: 1,
            numberedPages: 2,
            linksEnabled: false,
            isLastPage: false,
            previousPage: 0,
            nextPage: 0,
            pageRoot: 'my-music-',
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
            const routePath = this.$route.path;

            this.setLinksEnabled(routePath);
            this.setPagesVariables(routePath);
        },

        setLinksEnabled(routePath) {
            this.linksEnabled = (routePath !== '/');
        },

        setPagesVariables(routePath) {
            if (this.linksEnabled && routePath) {
                [, this.currentPage] = routePath.split(this.pageRoot);
                const currentPageInt = parseInt(this.currentPage, 10);
                this.setPreviousNextPage(currentPageInt);
                this.setIsLastPage(currentPageInt);
            }
        },

        setIsLastPage(currentPageInt) {
            this.isLastPage = (currentPageInt === this.numberedPages);
        },

        setPreviousNextPage(currentPageInt) {
            this.previousPage = 0;
            this.nextPage = 0;

            if (currentPageInt === this.numberedPages) {
                this.previousPage = currentPageInt - 1;
            } else if (currentPageInt === 1) {
                this.nextPage = currentPageInt + 1;
            }
        },
    },
};
</script>

<style>
     /* Container footer: links and nav */
     footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 2rem;
     }
     footer.footer--right {
          justify-content: flex-end;
     }
     /* Links in flex column */
     .footer__link {
          display: flex;
          flex-direction: column;
          align-items: center;
          font-weight: bold;
     }
     /* Link numbered */
     .footer__link-number {
          /* Item from footer */
          align-self: flex-start;
          margin-top: 1rem;
     }

     /* Link middle */
     .footer__link footer__link-next {
          align-self: center;
     }

     /* Arrows with CSS: https://codepen.io/tu4mo/pen/BLyGRv */
     .footer__link--up {
          border-bottom: 2px solid #000;
          border-right: 2px solid #000;
          width: 10px;
          height: 10px;
          transform: rotate(225deg);
     }
     .footer__link--down {
          border-bottom: 2px solid #000;
          border-right: 2px solid #000;
          width: 10px;
          height: 10px;
          transform: rotate(45deg);
     }
     .footer__link--down-double {
          border-bottom: 2px solid #000;
          border-right: 2px solid #000;
          width: 16px;
          height: 16px;
          transform: rotate(45deg);
          margin-bottom: -5px;
     }
     /* Menú */
     nav {
          align-self: flex-end;
          margin-bottom: 1rem;
     }
     nav ul {
          display: flex;
          list-style: none;
     }
     nav li {
          margin: 0 5px;
     }
     nav a {
          font-size: 0.9em;
          text-decoration: none;
          color: #000;
     }
     nav a:hover {
          color: #555;
     }
</style>
```

Para visualizar todos los enlaces ir a la segunda página en el navegador: `http://localhost:3000/my-music-1`.

El resultado de cada página sería:

Home:

![Página home en navegador](../../md-images/header-footer-home.jpg?raw=true)

My music 1:

![Página my music 1 en navegador](../../md-images/header-footer-my-music-1.jpg?raw=true)

My music 2:

![Página my music 2 en navegador](../../md-images/header-footer-my-music-2.jpg?raw=true)
