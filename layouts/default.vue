<template>
  <div class="container">
    <the-header/>
    <nuxt/>
    <the-footer/>
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue';
import TheFooter from '~/components/TheFooter.vue';

export default {
    components: {
        TheHeader,
        TheFooter,
    },
};
</script>

<style>
html {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

/* Flex container of the-header, main content and the-footer */
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
