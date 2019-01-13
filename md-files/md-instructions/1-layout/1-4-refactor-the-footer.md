Refactorizar TheFooter
=================

El tamaño del componente es bastante grande, así que para facilitar su lectura por parte de otros desarrolladores se debería separar en otros componentes más pequeños:

- `components/TheFooterLinkNumber.vue`

- `components/TheFooterLinkNext.vue`

- `components/TheFooterNav.vue`

Vamos a añadir en `main.css` los estilos de los arrows (con un nombre más adecuado), ya que el mismo procedimiento se usa para los distintos componentes y es más fácil entender de dónde viene.

main.css:

```css
/* Arrows with CSS: https://codepen.io/tu4mo/pen/BLyGRv */
.arrow-up {
    border-bottom: 2px solid #000;
    border-right: 2px solid #000;
    width: 10px;
    height: 10px;
    transform: rotate(225deg);
}
.arrow-down {
    border-bottom: 2px solid #000;
    border-right: 2px solid #000;
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
}
.arrow-down--double {
    border-bottom: 2px solid #000;
    border-right: 2px solid #000;
    width: 16px;
    height: 16px;
    transform: rotate(45deg);
    margin-bottom: -5px;
}
```

El componente `TheFooter` refactorizado quedaría:

```html
<template>
  <footer :class="{'footer--right': !linksEnabled}">
    <the-footer-link-number
      :show="linksEnabled"
      :show-previous-page="previousPage > 0"
      :to-previous="`${pageRoot}${previousPage}`"
      :show-next-page="nextPage > 0"
      :to-next="`${pageRoot}${nextPage}`"
      :current-page="currentPageInt"
      :total-pages="numberedPages"
    />

    <the-footer-link-next
      :show="linksEnabled && !isLastPage"
      :to="`${pageRoot}${nextPage}`"
    />

    <the-footer-nav />
  </footer>
</template>

<script>
import TheFooterLinkNumber from '~/components/TheFooterLinkNumber.vue';
import TheFooterLinkNext from '~/components/TheFooterLinkNext.vue';
import TheFooterNav from '~/components/TheFooterNav.vue';

export default {
    components: {
        TheFooterLinkNumber,
        TheFooterLinkNext,
        TheFooterNav,
    },
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
    computed: {
        currentPageInt() {
            return parseInt(this.currentPage, 10);
        },
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
                this.setPreviousNextPage();
                this.setIsLastPage();
            }
        },

        setIsLastPage() {
            this.isLastPage = (this.currentPageInt === this.numberedPages);
        },

        setPreviousNextPage() {
            this.previousPage = 0;
            this.nextPage = 0;

            if (this.currentPageInt === this.numberedPages) {
                this.previousPage = this.currentPageInt - 1;
            } else if (this.currentPageInt === 1) {
                this.nextPage = this.currentPageInt + 1;
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
</style>
```

TheFooterLinkNumber.vue:

```html
<template>
  <div
    v-if="show"
    class="footer-link-number">
    <nuxt-link
      v-if="showPreviousPage"
      :to="toPrevious"
      class="arrow-up"/>
    <span>{{ currentPage }} / {{ totalPages }}</span>
    <nuxt-link
      v-if="showNextPage"
      :to="toNext"
      class="arrow-down"/>
  </div>
</template>

<script>
export default {
    props: {
        show: {
            type: Boolean,
            required: true,
        },
        showPreviousPage: {
            type: Boolean,
            required: true,
        },
        toPrevious: {
            type: String,
            required: true,
        },
        showNextPage: {
            type: Boolean,
            required: true,
        },
        toNext: {
            type: String,
            required: true,
        },
        currentPage: {
            type: Number,
            required: true,
        },
        totalPages: {
            type: Number,
            required: true,
        },
    },
};
</script>

<style>
    .footer-link-number {
        /* Links in flex column */
        display: flex;
        flex-direction: column;
        align-items: center;
        font-weight: bold;
        /* Item from footer */
        align-self: flex-start;
        margin-top: 1rem;
    }
</style>
```

TheFooterLinkNext.vue:

```html
<template>
  <div
    v-if="show"
    class="footer-link-next"
  >
    <nuxt-link
      :to="to"
      class="footer-link-next__link"
    >
      <span class="arrow-down--double"/>
      <span class="arrow-down--double"/>
    </nuxt-link>
  </div>
</template>

<script>
export default {
    props: {
        show: {
            type: Boolean,
            required: true,
        },
        to: {
            type: String,
            required: true,
        },
    },
};
</script>

<style>
    .footer-link-next__link {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-weight: bold;
    }
</style>
```

TheFooterNav.vue:

```html
<template>
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
</template>

<script>
export default {

};
</script>

<style scoped>
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

Nota: Se ha añadido un scoped en el style para que sólo se apliquen los estilos en ese componente. Aunque no se tiene otro `nav` en la aplicación, al no ser estilos específicos a un componente determinado se evitar posibles efectos secundarios si al final hubiera más componentes `nav` en otras partes de la aplicación.