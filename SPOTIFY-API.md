# Spotify-API Data

## Spotify Wrapped

![Imagen consola JS network Spotify API](md-images/spotify-api-consumer.jpg?raw=true)

- Situarse en llamada "https://generic.wg.spotify.com/wrapped-service/v1/consumer".

- Botón derecho en el objeto en Preview y hacer click en "Store as Global Object".

- En la consola escribir: `JSON.stringify(temp1)`.

- Copiar objeto JSON: [spotify-api-example](spotify-api-example.json)

## Mismos datos con Spotify API

```js
const spotifyApi = new SpotifyWebApi()

const token = process.env.SPOTIFY_ACCESS_TOKEN
if (token) {
    spotifyApi.setAccessToken(token);
}
```

### TOP Artists and Tracks

[Get User's Top Artists and Tracks](https://developer.spotify.com/console/get-current-user-top-artists-and-tracks/?type=artists&time_range=&limit=&offset=)

- Required scopes for this endpoint: 'user-top-read' (añadirlo en el `authorization_code/app.js` de [web-api-auth-examples](https://github.com/spotify/web-api-auth-examples))

```js
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
```

```js
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
```

Cambiar "time_range" para coger 6 meses y el último mes.

## Adaptar estas páginas

![Imagen página inicial desktop](md-images/home-desktop-hover.button.jpg?raw=true)

![Imagen página 4/8](md-images/4-8-desktop.jpg?raw=true)

![Imagen página 8/8](md-images/8-8-desktop.jpg?raw=true)


