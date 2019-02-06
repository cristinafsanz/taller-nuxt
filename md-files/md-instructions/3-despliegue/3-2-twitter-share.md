Compartir por twitter
=================

Para esta funcionalidad pensé en generar una imagen a partir de la portada de la última página, pero no llegué a hacer la funcionalidad (se va del tema de Nuxt, pero estaría bien, ¿a que sí?).

En vez de eso comparto la url del repositorio de GitHub para si animar a hacer el taller a otros :)

my-music-2.vue:

```html
<p class="twitter-share-button">
    <a
        :href="`https://twitter.com/intent/tweet?text=${tweetText}&url=${tweetUrl}&via=${tweetVia}`"
        target="_blank"
    >
        <img src="~assets/images/twitter-icon.png">
    </a>
</p>

<script>
export default {
    data() {
        return {
            tweetText: 'Descubre tus artistas y canciones favoritos en Wecodefy. Haz el taller de Nuxt en Wecodefest :)',
            tweetUrl: 'https://github.com/cristinafsanz/taller-nuxt',
            tweetVia: 'cristinafsanz',
        };
    },
};
</script>
```