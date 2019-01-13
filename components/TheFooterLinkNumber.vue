<template>
  <div
    v-if="show"
    class="footer-link-number">
    <nuxt-link
      v-if="showPreviousPage"
      :to="toPrevious"
      class="arrow-up"/>
    <span>{{ currentPage }} / {{ totalPages }}</span>
    <nuxt-link
      v-if="showNextPage"
      :to="toNext"
      class="arrow-down"/>
  </div>
</template>

<script>
export default {
    props: {
        show: {
            type: Boolean,
            required: true,
        },
        showPreviousPage: {
            type: Boolean,
            required: true,
        },
        toPrevious: {
            type: String,
            required: true,
        },
        showNextPage: {
            type: Boolean,
            required: true,
        },
        toNext: {
            type: String,
            required: true,
        },
        currentPage: {
            type: Number,
            required: true,
        },
        totalPages: {
            type: Number,
            required: true,
        },
    },
};
</script>

<style>
    .footer-link-number {
        /* Links in flex column */
        display: flex;
        flex-direction: column;
        align-items: center;
        font-weight: bold;
        /* Item from footer */
        align-self: flex-start;
        margin-top: 1rem;
    }
</style>
