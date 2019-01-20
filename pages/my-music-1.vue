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
