AsyncData
=================

La página `my-music-1.vue` tarda un poco en cargar, sobre todo la imagen. Podemos usar `asyncData` para hacer un pre-render de los datos y que se tengan al cargarse la página.

Para poder usar los métodos de spotify api, cambiamos el mixins para que sean funciones normales (con asyncData no se pueden usar los métodos del componente de Vue, no están disponibles todavía).

`mixins/spotify-api.js`:

```js
const SpotifyWebApi = require('spotify-web-api-js');

const spotifyApi = new SpotifyWebApi();

export async function setSpotifyAccessToken() {
    if (process.client) {
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
    }
}

function getArtistImage(artists) {
    const {
        items,
    } = artists;
    let topArtistImage = '';
    if (items && items.length > 0) {
        const firstItem = items[0];
        const {
            images,
        } = firstItem;
        if (images && images.length > 1) {
            // second image 320x320
            const firstImageUrl = images[1].url;
            topArtistImage = firstImageUrl;
        }
    }
    return topArtistImage;
}

export async function getArtists(timeRange) {
    let artists = [];
    let topArtistImage = '';
    if (process.client) {
        artists = await spotifyApi.getMyTopArtists({
            limit: 5,
            time_range: timeRange,
        });
        artists = Object.freeze(artists);
        topArtistImage = getArtistImage(artists);
    }
    return { artists, topArtistImage };
}

export async function getTracks(timeRange) {
    let tracks = [];
    if (process.client) {
        tracks = await spotifyApi.getMyTopTracks({
            limit: 5,
            time_range: timeRange,
        });
        tracks = Object.freeze(tracks);
    }
    return { tracks };
}

function mostFrequent(arr) {
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
    const mostFrequentWord = Object.entries(pairsObj)[i];
    return mostFrequentWord.length > 1 ? mostFrequent[0] : '';
}

function getCapitalizeWord(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

export function getTopGenre(artists) {
    let topGenre = '';
    if (artists && artists.items && artists.items.length > 0) {
        const genreList = artists.items.reduce(
            (acc, item) => acc.concat(item.genres), [],
        );
        const genreWordsList = genreList.reduce(
            (acc, item) => acc.concat(item.split(/\s+/)), [],
        );
        topGenre = mostFrequent(genreWordsList);
        if (topGenre) {
            topGenre = getCapitalizeWord(topGenre);
        }
    }
    return topGenre;
}
```

my-music-1.vue:

```js
<script>
import {
    setSpotifyAccessToken, getArtists, getTracks,
} from '~/mixins/spotify-api';

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
    async asyncData() {
        await setSpotifyAccessToken();
        // data since last 6 months
        const { artists, topArtistImage } = await getArtists('medium_term');
        const { tracks } = await getTracks('medium_term');
        return { artists, topArtistImage, tracks };
    },
};
</script>
```

my-music-2.vue:

```js
<script>
import {
    setSpotifyAccessToken, getArtists, getTracks, getTopGenre,
} from '~/mixins/spotify-api';

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
    async asyncData() {
        await setSpotifyAccessToken();
        // data since last years
        const { artists, topArtistImage } = await getArtists('long_term');
        const { tracks } = await getTracks('long_term');
        const topGenre = getTopGenre(artists);
        return {
            artists, topArtistImage, tracks, topGenre,
        };
    },
};
</script>
```

El problema es que si se recarga la página, el asyncData se haría desde el lado del servidor y como vamos a crear una aplicación solo del lado del cliente, nos devuelve datos vacíos.