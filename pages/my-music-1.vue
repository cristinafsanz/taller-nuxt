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
export default {
    middleware: 'store-data-spotify',
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

<style scoped>
main {
    background-color: #ffc965;
}
h1 {
    font-size: 4em;
    text-align: center;
    margin-top: 1rem;
}
.my-music-1-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.my-music-1-section__image {
    margin-top: 1rem;
    margin-bottom: 2rem;
    max-width: 80%;
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
    flex-direction: column;
    justify-content: space-between;
}
.my-music-1-section__list--artists {
    margin-right: 2rem;
}
.my-music-1-section__list--songs {
    margin-top: 1rem;
}
.my-music-1-section__list--artists p,
.my-music-1-section__list--songs p {
    font-weight: 600;
    margin-bottom: 1rem;
}
@media (min-width: 1000px) {
    h1 {
        font-size: 7.5em;
    }
    .my-music-1-section {
        flex-direction: row;
    }
    .my-music-1-section__image {
        max-width: 300px;
        margin-top: 0;
        margin-bottom: 0;
    }
    .my-music-1-section__artists-songs {
        flex-direction: row;
    }
    .my-music-1-section__list--songs {
        margin-top: 0;
    }
}
</style>
