Maquetación de la página "My music 1"
=================

my-music-1:

```html
<template>
  <main class="my-music-1">
    <h1>
      Listas de éxitos
    </h1>
    <section class="my-music-section">
      <img
        class="my-music-section__image"
        src="~assets/images/image-last-month.jpg" />
      <div class="my-music-section__list">
        <p>Como tu playlist, ninguna.</p>
        <div class="my-music-section__artists-songs">
          <div class="my-music-section__list--artists">
            <p>Artistas favoritos</p>
            <ul>
              <li>Sufjan Stevens</li>
              <li>Kisses</li>
              <li>Dua Lipa</li>
              <li>The Cranberries</li>
              <li>Alexis Ffrench</li>
            </ul>
          </div>
          <div class="my-music-section__list--songs">
            <p>Canciones favoritas</p>
            <ul>
              <li>Funny Heartbeat</li>
              <li>IDGAF</li>
              <li>Eugene</li>
              <li>Should Have Known...</li>
              <li>The Theory of Eve...</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
  main {
    background-color: #ffc965;
  }
  h1 {
    font-size: 7.5em;
    text-align: center;
    margin-top: 4rem;
  }
  .my-music-section {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .my-music-section__image {
    max-width: 300px;
  }
  .my-music-section__list {
    margin-left: 2rem;
    font-size: 1.2em;
  }
  .my-music-section__list > p {
    margin-bottom: 1rem;
  }
  .my-music-section__list ul {
    padding: 0;
    list-style-type: none;
  }
  .my-music-section__artists-songs {
    display: flex;
    justify-content: space-between;
  }
  .my-music-section__list--artists {
    margin-right: 2rem;
  }
  .my-music-section__list--artists p,
  .my-music-section__list--songs p {
    font-weight: 600;
    margin-bottom: 1rem;
  }
</style>
```