Middleware y Vuex
=================

Se va a llamar una vez a la API para recoger todos los datos y guardarlos en el store de Vuex desde el lado del cliente. También se va a guardar el `accessToken` para no tener que cogerlo siempre de la url, sólo la primera vez.

Como no se van a devolver datos desde `asyncData`, se va a usar el `middleware` para hacer la llamada antes de cargar `my-music-1.vue`.

Vamos a usar `vuex-persist` para mantener los datos aunque se recargue la página.

- Instalar:

```
npm install vuex-persist --save
```

- Crear el fichero `plugins/vuex-persist.js` y añadir:

```js
import VuexPersistence from 'vuex-persist';

export default ({
    store,
}) => {
    window.onNuxtReady(() => {
        new VuexPersistence({
            /* your options */
        }).plugin(store);
    });
};
```

- En `nuxt.config.js` añadir el plugin:

```
plugins: [
        {
            src: '~/plugins/vuex-persist',
            ssr: false,
        },
    ],
```

- Recargar la aplicación para que se cargue el plugin.

- Añadir el fichero `store/index.js`:
```js
export const mutations = {
    // TODO
    setData(state, data) {
        // eslint-disable-next-line
        state[data.key] = data.value;
    },
};

export const state = () => ({
    // my music 1
    artists: [],
    topArtistImage: '',
    tracks: [],

    // my music 2
    artistsYears: [],
    topArtistImageYears: '',
    tracksYears: [],
    topGenreYears: '',

    // token connect spotify
    accessToken: '',
});
```


- Crear el fichero `middleware/store-data-spotify.js` para acceder al api de spotify y guardar todos los datos en el store de Vuex:

```js
import {
    setSpotifyAccessToken,
    getArtists,
    getTracks,
    getTopGenre,
} from '~/mixins/spotify-api';

async function setAndStoreAccessToken(store) {
    const accessToken = await setSpotifyAccessToken(store.state.accessToken);
    if (!store.state.accessToken) {
        store.commit('setData', {
            key: 'accessToken',
            value: accessToken,
        });
    }
}

async function getAndStoreDate(store) {
    // data since last 6 months
    const {
        artists,
        topArtistImage,
    } = await getArtists('medium_term');
    const {
        tracks,
    } = await getTracks('medium_term');
    // data since last years
    const {
        artists: artistsYears,
        topArtistImage: topArtistImageYears,
    } = await getArtists('long_term');
    const {
        tracks: tracksYears,
    } = await getTracks('long_term');
    const topGenreYears = getTopGenre(artistsYears);


    // save all data 6 months
    store.commit('setData', {
        key: 'artists',
        value: artists,
    });
    store.commit('setData', {
        key: 'topArtistImage',
        value: topArtistImage,
    });
    store.commit('setData', {
        key: 'tracks',
        value: tracks,
    });

    // save all data last years
    store.commit('setData', {
        key: 'artistsYears',
        value: artistsYears,
    });
    store.commit('setData', {
        key: 'topArtistImageYears',
        value: topArtistImageYears,
    });
    store.commit('setData', {
        key: 'tracksYears',
        value: tracksYears,
    });
    store.commit('setData', {
        key: 'topGenreYears',
        value: topGenreYears,
    });
}
export default async function (context) {
    const { store } = context;
    setAndStoreAccessToken(store);
    getAndStoreDate(store);
}
```

- Añadir middleware en `my-music-1.vue`, junto con las propiedades computadas para pintar los datos de spotify desde el store:

```js
export default {
    middleware: 'store-data-spotify',
    computed: {
        artists() {
            return this.$store.state.artists;
        },
        topArtistImage() {
            return this.$store.state.topArtistImage;
        },
        tracks() {
            return this.$store.state.tracks;
        },
    },
};
</script>
```

- Añadir propiedades computadas en `my-music-2.vue`:

```js
export default {
    computed: {
        artists() {
            return this.$store.state.artistsYears;
        },
        topArtistImage() {
            return this.$store.state.topArtistImageYears;
        },
        tracks() {
            return this.$store.state.tracksYears;
        },
        topGenre() {
            return this.$store.state.topGenreYears;
        },
    },
};
</script>
```

En ambos hay que quitar la importación de `mixins/spotify-api`.

Con esta solución no se pierden los datos al recargar y se muestran más rápidamente que cuando hacíamos la llamada desde `mounted`.

Además, así hemos visto cómo usar `middleware` (también funcionaría con una llamada `fetch` en `my-music-1.vue`), añadir un plugin y ver un caso sencillo de Vuex con datos persistidos con `vuex-persist`.