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
