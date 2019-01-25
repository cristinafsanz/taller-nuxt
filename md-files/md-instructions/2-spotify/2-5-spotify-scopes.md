Spotify Scopes
=================

Para que otros usuarios puedan ver su top de artistas y canciones desde tu aplicación, se puede añadir un [scope](https://developer.spotify.com/documentation/general/guides/scopes/#user-read-private) de acceso lectura para ver estos datos.

En `spotify-api.js` añadir el scope y añadirlo en `apiUrl`:

```js
const scope = 'user-top-read';
const apiUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&scope=${scope}&response_type=token&redirect_uri=${callbackUrl}`;
```