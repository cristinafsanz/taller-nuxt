Meta tags para el SEO
=================

Se van a añadir meta tags en cada página y los meta tags para compartir en twitter en la última página.

index.vue:

```js
<script>
export default {
    head() {
        return {
            title: 'Tu música en resumen',
            meta: [
                { hid: 'description', name: 'description', content: 'Descubre tus artistas y canciones favoritos en Wecodefy.' },
            ],
        };
    },
};
</script>
```

my-music-1.vue:

```js
<script>
export default {
    head() {
        return {
            title: 'Listas de éxitos',
            meta: [
                { hid: 'description', name: 'description', content: 'La lista de los artistas y las canciones que más has escuchado en Spotify.' },
            ],
        };
    },
};
</script>
```

my-music-2.vue:

```html
<script>
export default {
    head() {
        return {
            title: 'Comparte tu música',
            meta: [
                { hid: 'description', name: 'description', content: 'Comparte tus artistas y canciones favoritos de Wecodefy.' },
                { name: 'twitter:title', content: 'Wecodefy' },
                { name: 'twitter:description', content: 'Descubre tus artistas y canciones favoritos de Wecodefy' },
                { name: 'twitter:image', content: '~assets/images/wecodefy-logo.png' },
                { name: 'twitter:card', content: 'summary_large_image' },
            ],
            link: [
                { rel: 'canonical', href: 'https://github.com/cristinafsanz/taller-nuxt' },
            ],
        };
    },
};
</script>
```

Se ha añadido los parámetros para hacer una twitter card y se ha añadido el canonical link para que sea la url del tweet, aunque será en el paso del despliegue donde veremos si está bien así o hay que cambiar algo para que funcione bien.

Lo que sí podemos ver ya es que aparecen los meta tags dentro de `<head>` en cada una de las páginas con el título y la descripción.

Ej. primera página:
```html
<title data-n-head="true">Tu música en resumen</title>
<meta data-n-head="true" data-hid="description" name="description" content="Descubre tus artistas y canciones favoritos en Spotify.">
```