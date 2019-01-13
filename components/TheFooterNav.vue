<template>
  <nav>
    <ul>
      <li>
        <nuxt-link to="/aviso-legal">
          Aviso legal
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/privacidad">
          Privacidad
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/cookies">
          Cookies
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {

};
</script>

<style scoped>
    /* Menú */
     nav {
          align-self: flex-end;
          margin-bottom: 1rem;
     }
     nav ul {
          display: flex;
          list-style: none;
     }
     nav li {
          margin: 0 5px;
     }
     nav a {
          font-size: 0.9em;
          text-decoration: none;
          color: #000;
     }
     nav a:hover {
          color: #555;
     }
</style>
