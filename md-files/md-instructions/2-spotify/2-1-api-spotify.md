Conexión con el API de Spotify
=================

Para ver cómo funciona el Spotify Wrapped, miré en la consola de JavaScript a ver qué llamadas hacía. El resultado se puede ver en [spotify API](../../spotify-api.md).

En la rama [nuxt0](https://github.com/cristinafsanz/taller-nuxt/blob/nuxt0/pages/index.vue) se hizo una prueba de llamada a la API de Spotify, la usaremos para `my-music-1.vue` y `my-music-2.vue`.

Importante: Cada usuario tiene que cambiar el `clientId` al suyo para poder recuperar su lista de artistas y canciones favoritos. Hay que seguir los pasos de la [instalación](../instalacion.md) si no se ha hecho antes.

Se puede cambiar el [`time-range`](https://developer.spotify.com/documentation/web-api/reference/personalization/get-users-top-artists-and-tracks/) para mostrar los últimos años (`long_term`), los últimos 6 meses (`medium_term`) o el último mes (`short_term`).

my-music-1.vue:

```html
<template>
  <main class="my-music-1">
    <h1>Listas de éxitos</h1>
    <section class="my-music-1-section">
      <img
        :src="topArtistImage"
        class="my-music-1-section__image">
      <div class="my-music-1-section__list">
        <p>Como tu playlist, ninguna.</p>
        <p>Tus artistas favoritos y las canciones más escuchadas el último mes.</p>
        <div class="my-music-1-section__artists-songs">
          <div class="my-music-1-section__list--artists">
            <p>Artistas favoritos</p>
            <ul>
              <li
                v-for="artist in artists.items"
                :key="artist.name">
                {{ artist.name }}
              </li>
            </ul>
          </div>
          <div class="my-music-1-section__list--songs">
            <p>Canciones favoritas</p>
            <ul>
              <li
                v-for="track in tracks.items"
                :key="track.name">
                {{ track.name }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
const SpotifyWebApi = require('spotify-web-api-js');

const spotifyApi = new SpotifyWebApi();

export default {
    head() {
        return {
            title: 'Listas de éxitos',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content:
                        'La lista de los artistas y las canciones que más has escuchado en Spotify.',
                },
            ],
        };
    },
    data() {
        return {
            artists: [],
            tracks: [],
            topArtistImage: '',
        };
    },
    async mounted() {
        await this.setSpotifyAccessToken();
        await this.getArtists();
        await this.getTracks();
    },
    methods: {
        async setSpotifyAccessToken() {
            const callbackUrl = window.location.href;
            const clientId = '9ce0744ff4a04334966cbcf3fb7e312d';
            const apiUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${callbackUrl}`;
            let hash;
            if (!window.location.hash) {
                window.location.replace(apiUrl);
            } else {
                const url = window.location.href;
                [, hash] = url.split('#');
                [hash] = hash.split('&');
                [, hash] = hash.split('=');
            }
            const accessToken = hash;
            if (accessToken) {
                await spotifyApi.setAccessToken(accessToken);
            }
        },
        async getArtists() {
            this.artists = await spotifyApi.getMyTopArtists({
                limit: 5,
                time_range: 'medium_term',
            });
            this.setArtistImage();
        },
        setArtistImage() {
            const { items } = this.artists;
            if (items && items.length > 0) {
                const firstItem = items[0];
                const { images } = firstItem;
                if (images && images.length > 0) {
                    const firstImageUrl = images[0].url;
                    this.topArtistImage = firstImageUrl;
                }
            }
        },
        async getTracks() {
            this.tracks = await spotifyApi.getMyTopTracks({
                limit: 5,
                time_range: 'short_term',
            });
        },
    },
};
</script>

<style scoped>
main {
    background-color: #ffc965;
}
h1 {
    font-size: 7.5em;
    text-align: center;
    margin-top: 4rem;
}
.my-music-1-section {
    display: flex;
    justify-content: center;
    align-items: center;
}
.my-music-1-section__image {
    max-width: 300px;
}
.my-music-1-section__list {
    margin-left: 2rem;
    font-size: 1.2em;
}
.my-music-1-section__list > p {
    margin-bottom: 1rem;
}
.my-music-1-section__list ul {
    padding: 0;
    list-style-type: none;
}
.my-music-1-section__artists-songs {
    display: flex;
    justify-content: space-between;
}
.my-music-1-section__list--artists {
    margin-right: 2rem;
}
.my-music-1-section__list--artists p,
.my-music-1-section__list--songs p {
    font-weight: 600;
    margin-bottom: 1rem;
}
</style>
```

my-music-2.vue:

```html
<template>
  <main class="my-music-2">
    <div class="my-music-2__jacket">
      <div class="my-music-2__image-genre">
        <img :src="topArtistImage">
        <div class="my-music-2__genre">
          <p class="my-music-2__header">Géneros favoritos</p>
          <ul>
            <li>{{ topGenre }}</li>
          </ul>
        </div>
      </div>
      <div class="my-music-2__artists-songs">
        <div class="my-music-2__artists">
          <p class="my-music-2__header">Artistas favoritos</p>
          <ul>
            <li
              v-for="artist in artists.items"
              :key="artist.name">
              {{ artist.name }}
            </li>
          </ul>
        </div>
        <div class="my-music-2__songs">
          <p class="my-music-2__header">Canciones favoritas</p>
          <ul>
            <li
              v-for="track in tracks.items"
              :key="track.name">
              {{ track.name }}
          </li></ul>
        </div>
      </div>
    </div>
    <div class="my-music-2__share">
      <h1>Comparte tu música</h1>
      <p class="my-music-2__share--description">
        Si llevas tiempo disfrutando de temazos,
        ¿por qué no lo compartes?
      </p>
      <p class="twitter-share-button">
        <a
          target="_blank"
          href="https://twitter.com/intent/tweet?text=Mis%20canciones%20en%20Wecodefy"
        >
          <img src="~assets/images/twitter-icon.png">
        </a>
      </p>
    </div>
  </main>
</template>

<script>
const SpotifyWebApi = require('spotify-web-api-js');

const spotifyApi = new SpotifyWebApi();

export default {
    head() {
        return {
            title: 'Comparte tu música',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content:
                        'Comparte tus artistas y canciones favoritos de Wecodefy.',
                },
                { name: 'twitter:title', content: 'Wecodefy' },
                {
                    name: 'twitter:description',
                    content:
                        'Descubre tus artistas y canciones favoritos de Wecodefy',
                },
                {
                    name: 'twitter:image',
                    content: '~assets/images/wecodefy-logo.png',
                },
                { name: 'twitter:card', content: 'summary_large_image' },
            ],
            link: [
                {
                    rel: 'canonical',
                    href: 'https://github.com/cristinafsanz/taller-nuxt',
                },
            ],
        };
    },
    data() {
        return {
            artists: [],
            tracks: [],
            topGenre: '',
            topArtistImage: '',
        };
    },
    async mounted() {
        await this.setSpotifyAccessToken();
        await this.getArtists();
        await this.getTracks();
        this.getTopGenre();
    },
    methods: {
        async setSpotifyAccessToken() {
            const callbackUrl = window.location.href;
            const clientId = '9ce0744ff4a04334966cbcf3fb7e312d';
            const apiUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${callbackUrl}`;
            let hash;
            if (!window.location.hash) {
                window.location.replace(apiUrl);
            } else {
                const url = window.location.href;
                [, hash] = url.split('#');
                [hash] = hash.split('&');
                [, hash] = hash.split('=');
            }
            const accessToken = hash;
            if (accessToken) {
                await spotifyApi.setAccessToken(accessToken);
            }
        },
        async getArtists() {
            this.artists = await spotifyApi.getMyTopArtists({
                limit: 5,
                time_range: 'medium_term',
            });
            this.setArtistImage();
        },
        setArtistImage() {
            const { items } = this.artists;
            if (items && items.length > 0) {
                const firstItem = items[0];
                const { images } = firstItem;
                if (images && images.length > 0) {
                    const firstImageUrl = images[0].url;
                    this.topArtistImage = firstImageUrl;
                }
            }
        },
        async getTracks() {
            this.tracks = await spotifyApi.getMyTopTracks({
                limit: 5,
                time_range: 'medium_term',
            });
        },
        getTopGenre() {
            if (this.artists.items.length > 0) {
                const genreList = this.artists.items.reduce(
                    (acc, item) => acc.concat(item.genres), [],
                );
                const genreWordsList = genreList.reduce(
                    (acc, item) => acc.concat(item.split(/\s+/)), [],
                );
                const topGenre = this.mostFrequent(genreWordsList);
                if (topGenre) {
                    this.topGenre = this.getCapitalizeWord(topGenre);
                }
            }
        },
        mostFrequent(arr) {
            const pairsObj = arr.reduce((obj, value) => {
                const objCloned = Object.assign({}, obj);
                if (!obj[value]) {
                    objCloned[value] = 1;
                } else {
                    objCloned[value] += objCloned[value];
                }
                return objCloned;
            }, {});
            const values = Object.values(pairsObj);

            const i = values.findIndex(el => el === Math.max(...values));
            const mostFrequent = Object.entries(pairsObj)[i];
            return mostFrequent.length > 1 ? mostFrequent[0] : '';
        },
        getCapitalizeWord(word) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        },
    },
};
</script>

<style scoped>
main {
    background-color: #b79cc9;
}
.my-music-2 {
    display: flex;
    justify-content: center;
    align-items: center;
}
/* Same width 2 items and 1/3 of the space */
.my-music-2__jacket,
.my-music-2__share {
    flex-basis: 33%;
    margin-right: 2rem;
}
/* Jacket section */
.my-music-2__jacket {
    background-color: #000;
    color: #b79cc9;
    display: flex;
    padding: 1.5rem;
    font-size: 1.2em;
    line-height: 1.4em;
}
.my-music-2__image-genre img {
    max-width: 200px;
}
.my-music-2 ul {
    padding: 0;
    list-style-type: none;
}
.my-music-2__header {
    font-size: 1.1em;
    font-weight: 600;
    margin-bottom: 0.75rem;
}
.my-music-2__songs {
    margin-top: 1.25rem;
}
.my-music-2__genre {
    margin-top: 1rem;
}
.my-music-2__genre li {
    font-size: 2em;
    font-weight: bold;
}
.my-music-2__artists-songs {
    margin-left: 1.5rem;
}

/* Share section */
.my-music-2__share {
    color: #fff;
}
.my-music-2__share h1 {
    font-size: 6em;
}
.my-music-2__share .my-music-2__share--description {
    font-size: 1.5em;
    margin-bottom: 1rem;
}
.twitter-share-button {
    text-align: center;
}
</style>
```