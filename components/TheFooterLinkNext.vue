<template>
  <div
    v-if="show"
    class="footer-link-next">
    <nuxt-link
      :to="to"
      class="footer-link-next__link">
      <span class="arrow-down--double"/>
      <span class="arrow-down--double"/>
    </nuxt-link>
  </div>
</template>

<script>
export default {
    props: {
        show: {
            type: Boolean,
            required: true,
        },
        to: {
            type: String,
            required: true,
        },
    },
};
</script>

<style>
.footer-link-next__link {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: bold;
}
</style>
