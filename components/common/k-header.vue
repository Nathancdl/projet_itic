<template>
  <sly-cell class="k-header flex">
    <sly-cell class="left flex">
      <nuxt-link :to="localePath('index')">
        <img class="part karma-icon icon icon_96x96" style="filter: brightness(0.1%);" src="/icons/brand/icon.png" alt="karma logo"/>
      </nuxt-link>
      <header-menu class="mobile mobile-menu"></header-menu>
    </sly-cell>
    <sly-cell class="center flex column s-between">
      <sly-cell class="input flex">

      </sly-cell>
    
    </sly-cell>
  
    <sly-cell class="right flex a-center">
      <sly-cell class="actions flex j-end a-center">
        <karma-count class="karma-count"></karma-count>
        <header-menu></header-menu>
      </sly-cell>
    </sly-cell>
  </sly-cell>
</template>

<script>
import SlyCell from "~/layouts/common/sly-cell";
import TwButton from "~/components/common/tw-button";
import TwInternalLink from "~/components/common/tw-internal-link";
import HeaderMenu from "@/components/common/header-menu";
import KarmaCount from "@/components/common/karma-count";

import {mapActions, mapGetters} from "vuex";

/*
      <TwInput :label="$t('search')" :forced-value="searchText" v-model="searchText"
               @keypress.native.stop.prevent.enter="newSearch"/>
 */
export default {
  components: { HeaderMenu, TwInternalLink, TwButton, SlyCell, KarmaCount },
  data() {
    return {
      searchText: '',
      showAddKarmaBtn: false
    }
  },
  props: {
    searchPage: {
      type: Boolean,
      default: true
    },
  },
  fetch() {
    if(this.searchPage){
      this.searchText = this.$route.query?.q
    }
  },
  async mounted() {
    this.showAddKarmaBtn = !await this.$store.dispatch('extension/checkIsInstalled')
  },
/*  watch: {
    searchText(){
      if (this.searchText === this.$route.query?.q) return;
      this.newSearch();
    }
  },*/
  computed: {
    ...mapGetters({
      filters: "settings/filters"
    })
  },
  methods: {
    ...mapActions({
      changeStatusFilters: "settings/changeStatusFilters",
      setFreshness: "settings/setFreshness"
    }),
    goToPage(path) {
      return {path: path, query: {q: this.searchText}}
    },
    isActive(page) {
      return page === this.$route.name
    },
    maps() {
      window.open(`https://www.google.com/maps/search/${this.searchText}/`, '_blank');
    },
    google() {
      window.open(`https://www.google.com/search?q=${this.searchText}`, '_blank');
    },
    newSearch() {
      let query = {q: this.searchText}
      if(this.$route.query?.freshness && this.$route.query?.freshness !== 'any') query.freshness = this.$route.query?.freshness
      this.$router.push({
        name: this.searchPage ? this.$route.name : 'search', query: query
      });
    },
  },
}
</script>

<style lang="stylus" scoped>
@require '~assets/style/imports/index.import.styl'

.isPhone {
  .minimal {
    .center {
      padding-bottom MARGIN_SMALLER !important
    }
  }
  
  .no-mobile {
    display none !important
  }
  .tab-mobile {
    margin-right 0 !important
  }
}
.minimal {
  .container {
    display none
  }

  .center {
    padding-bottom 0 !important
    align-items center
    flex-direction inherit
  }

  .input {
    margin-top 0 !important
  }
}

.karma-icon {
    width 42px !important
    height 42px !important
  }
.k-header {
  height 139px
  font-size FONT_SIZE_MEDIUM
  border-bottom 2px solid #CCCCD3
  user-select: none;

  .mobile {
    display none
  }

  & a, & a > * {
    color THEME_COLOR_LINK_BLACK
  }

  .left {
    min-width MARGIN_HUGE
    max-width MARGIN_HUGE
    justify-content center
    align-items center
  }

  .center {
    min-width 590px
    max-width @min-width
    padding-bottom MARGIN_SMALLER

    .input {
      margin-top MARGIN_SMALL
    }

    .container {
      transform translateY(1px)

      .tabs {
        color THEME_COLOR_DARK_GREY
        font-weight FONT_WEIGHT_SEMIBOLD
      }

      .tab {
        margin-right MARGIN_SMALL
        padding-top MARGIN_SMALLER
        padding-bottom @padding-bottom
        font-size FONT_SIZE_SMALL
        border-bottom 2px solid transparent
        display flex
        align-items center

        .icon {
          margin-right 3px
        }
      }
      .filters {
        margin-left MARGIN_SMALL
        padding-left 5px
        padding-right 5px
        cursor pointer
      }
      .filters.active {
        background-color THEME_COLOR_GREY
        border-radius 3px
      }

      .nuxt-link-active {
        color THEME_COLOR_LINK
        border-bottom 2px solid THEME_COLOR_LINK
      }

      .nuxt-link-active > * {
        color THEME_COLOR_LINK
      }
    }
  }

  .right {
    .actions {
      //margin-top -30px
      padding-right MARGIN_MEDIUM_LESS
    }

    .karma-count {
      margin-right MARGIN_SMALL
    }
  }
}

.isPhone {
  .k-header {
    flex-direction column
    align-items center
    height inherit
  }
  .mobile {
    display inherit
  }
  .autocomplete {
    width 100% !important
  }
  .mobile-menu {
    position absolute
    top 20%
    right 0
    margin-right MARGIN_SMALL
  }
  .left {
    min-width auto
    max-width none
    display flex
    align-items center
    justify-content center
  }
  .right {
    display none
  }
  .center {
    align-items center
    min-width 300px
    max-width inherit
    padding-bottom 0
  }
  .tab {
    margin-right MARGIN_SMALLER !important
    font-size FONT_SIZE_SMALLER !important
  }
  .input {
    padding-left MARGIN_SMALLER
    padding-right MARGIN_SMALLER
    width 100%
    margin-top 0 !important
  }
  .google {
    display none !important
  }
}

.isTablet {
  .karma-count {
    display none
  }
}


</style>
