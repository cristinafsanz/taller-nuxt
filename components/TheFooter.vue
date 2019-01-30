<template>
  <footer
    :style="{ backgroundColor: backgroundColor }"
    :class="{'footer--only-nav': !linksEnabled}">
    <the-footer-link-number
      :show="linksEnabled"
      :show-previous-page="previousPage > 0"
      :to-previous="`${pageRoot}${previousPage}`"
      :show-next-page="nextPage > 0"
      :to-next="`${pageRoot}${nextPage}`"
      :current-page="currentPageInt"
      :total-pages="numberedPages"
    />

    <the-footer-link-next
      :show="linksEnabled && !isLastPage"
      :to="`${pageRoot}${nextPage}`"/>

    <the-footer-nav/>
  </footer>
</template>

<script>
import TheFooterLinkNumber from '~/components/TheFooterLinkNumber.vue';
import TheFooterLinkNext from '~/components/TheFooterLinkNext.vue';
import TheFooterNav from '~/components/TheFooterNav.vue';

export default {
    components: {
        TheFooterLinkNumber,
        TheFooterLinkNext,
        TheFooterNav,
    },
    props: {
        backgroundColor: {
            type: String,
            required: false,
            default: '#fff',
        },
    },
    data() {
        return {
            currentPage: 1,
            numberedPages: 2,
            linksEnabled: false,
            isLastPage: false,
            previousPage: 0,
            nextPage: 0,
            pageRoot: 'my-music-',
        };
    },
    computed: {
        currentPageInt() {
            return parseInt(this.currentPage, 10);
        },
    },
    watch: {
        $route: 'routeChanged',
    },
    created() {
        this.routeChanged();
    },
    methods: {
        /* Solution from conditional logic issue:
        https://github.com/nuxt/nuxt.js/issues/180
        */
        routeChanged() {
            const routePath = this.$route.path;

            this.setLinksEnabled(routePath);
            this.setPagesVariables(routePath);
        },

        setLinksEnabled(routePath) {
            this.linksEnabled = routePath !== '/';
        },

        setPagesVariables(routePath) {
            if (this.linksEnabled && routePath) {
                [, this.currentPage] = routePath.split(this.pageRoot);
                this.setPreviousNextPage();
                this.setIsLastPage();
            }
        },

        setIsLastPage() {
            this.isLastPage = this.currentPageInt === this.numberedPages;
        },

        setPreviousNextPage() {
            this.previousPage = 0;
            this.nextPage = 0;

            if (this.currentPageInt === this.numberedPages) {
                this.previousPage = this.currentPageInt - 1;
            } else if (this.currentPageInt === 1) {
                this.nextPage = this.currentPageInt + 1;
            }
        },
    },
};
</script>

<style>
/* Container footer: links and nav */
footer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
@media (min-width: 700px) {
    footer {
        flex-direction: row;
        align-items: center;
    }
    footer.footer--only-nav {
        justify-content: flex-end;
    }
}
</style>
