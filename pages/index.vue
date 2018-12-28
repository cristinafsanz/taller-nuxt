<template>
  <section class="container">
    <div>
      <img src="~/assets/images/wecodefy-logo.png" >
      <h1 class="title">
        Tu música en resumen
      </h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
const SpotifyWebApi = require('spotify-web-api-js');
const spotifyApi = new SpotifyWebApi()

export default {

  mounted() {
    // https://gist.github.com/igorPhelype/68239ecab9afcc50230ce0c61c3bac2f
    const callback_url = window.location.href
    const client_id = '9ce0744ff4a04334966cbcf3fb7e312d'
    const api_url = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&redirect_uri=${callback_url}`;
    let access_token
    let hash
    if(!window.location.hash) {
        window.location.replace(api_url)
    } else {
        const url = window.location.href
        hash = url.split('#')[1]
        hash = hash.split('&')[0]
        hash = hash.split('=')[1]
    }
    access_token = hash
    if (access_token) {
      spotifyApi.setAccessToken(access_token)
    }
    // Get Elvis' albums (initial test)
    spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE').then(
      function(data) {
        console.log('Artist albums', data.items)
      },
      function(err) {
        console.error(err)
      }
    )
    // Get my top Artists
    spotifyApi.getMyTopArtists({
      limit: 5,
      time_range: 'medium_term'
    }).then(
      function(data) {
        console.log('getMyTopArtists', data)
      },
      function(err) {
        console.error(err)
      }
    )
    // Get my top tracks
    spotifyApi.getMyTopTracks({
      limit: 5,
      time_range: 'medium_term'
    }).then(
      function(data) {
        console.log('getMyTopTracks', data)
      },
      function(err) {
        console.error(err)
      }
    )
  }
}
</script>

<style>

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
