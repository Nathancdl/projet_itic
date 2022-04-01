<template>
  <sly-cell class="showcase flex column"
  :style="backgroundStyle">
      
    <sly-cell class="header flex j-center a-center"> 
      <sly-cell class="segment left flex">
         <nuxt-link :to="localePath('index')">
          <img class="left-logo" src="/icons/brand/icon.png" alt="Streaming logo">
         </nuxt-link>
      </sly-cell>
      <sly-cell class="segment center flex j-center mobile">
        <img class="logo" src="/icons/brand/icon.png" alt="Streaming logo">
      </sly-cell>
      <sly-cell class="segment right">
        <sly-cell class="actions flex j-end a-center p-center">
          <karma-count class="karma-count mobile-behavior" :light="true"></karma-count>
          <header-menu :light="true"></header-menu>
        </sly-cell>
      </sly-cell>
    </sly-cell>
  </sly-cell>
</template>


<script>
import SlyCell from "~/layouts/common/sly-cell";
import HeaderMenu from "@/components/common/header-menu";
import KarmaCount from "@/components/common/karma-count";
import ImageCredit from "@/components/common/image-credit";

export default {
  components: {SlyCell, HeaderMenu, KarmaCount, ImageCredit},
  data: () => ({
    searchText: ''
  }),
  watch: {
    searchText() {
      this._search();
    }
  },
  computed: {
    backgroundStyle() {
      return {
        backgroundImage:'url(' + this.$t('showcase_image.src' + ((this.$store.state.resolution.isPhone && '_mobile') || '')) + ')',
        backgroundPosition : 'center center',
        backgroundSize : 'cover'
      }
    }
  
  },
  methods: {
    _search() {
      setTimeout(function () {
        this.$router.push({path: '/search', query: {q: this.searchText}})
      }.bind(this), 100)
    }
  }
}
</script>

<style lang="stylus" scoped>
@require '~assets/style/imports/index.import.styl'
@require './common.styl'

.isPhone 
  .image-credit.mobile-behavior, .karma-count.mobile-behavior, .left-logo
    display none
  .mobile
    display flex !important
    justify-content center
    

.showcase {
  height 65vh
  min-height 600px
  //background url('/images/showcase/flamingos.jpg')
  //background-position: center center; /* First value is from left and second is from top. You can use use number as well*/
  //background-size cover
  margin-bottom - MARGIN_MEDIUM

  #myVideo {
    object-fit: cover
    position:absolute
    right 0
    bottom 0
    width 100%
    height 100%
  }
  .mobile{
    display none;
  }
  .header {
    height 139px

    .left {
      .left-logo {
        margin-left: 37px
        width: 42px;
      }
    }

    .actions {
      color FONT_COLOR_LIGHT
      padding-right MARGIN_MEDIUM_LESS
    }

    .image-credit, .karma-count {
      margin-right MARGIN_SMALL
    }
  }

  .search {
    position absolute
    top 60%
    padding-left MARGIN_SMALLER
    padding-right MARGIN_SMALLER
  }
}

</style>
