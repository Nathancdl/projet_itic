<template>
  <div v-click-outside="Hide" class="tw-dropdown bottom-right" :class="{'dark':!light,'light':light}" @click="Toggle">
    <div class="label-container" :class="{opened:isOpen}">
      <img class="label action menu icon icon_20x20" :class="{'filter-black':!light,'filter-white':light}" src="/icons/menu.svg" alt="Ouvrir le menu statique">
    </div>
    <div v-if="isOpen" class="content">
     
      <tw-external-link class="option inherit" target="_self" to="/">
        {{$t('pages.home')}}
      </tw-external-link>
       <tw-internal-link class="option inherit" to="/premium">
        {{$t('pages.settings')}}
      </tw-internal-link>
      <tw-internal-link class="option inherit important" to="/settings">
        {{$t('pages.premium')}}
      </tw-internal-link>

      
    </div>
  </div>
</template>

<script>

import TwInternalLink from "~/components/common/tw-internal-link";
import TwExternalLink from "~/components/common/tw-external-link";


import ClickOutside from 'vue-click-outside'

export default {
  name: 'TwDropdown',
  props: {
    light: {
      type: Boolean,
      default: false
    },
  },
  components: {TwInternalLink, TwExternalLink},
  directives: {
    ClickOutside
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    Toggle() {
      this.isOpen = !this.isOpen
    },
    Hide() {
      this.isOpen = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@require '~assets/style/imports/index.import.styl'

.tw-dropdown {
  display flex
  align-items center

  cursor pointer

  user-select none
}

.dark {
  color THEME_COLOR_DARK_GREY

  .label-container.opened {
    background-color THEME_COLOR_GREY
  }
}

.light {
  color THEME_COLOR_DARK_GREY

  .label-container.opened {
    background-color THEME_COLOR_DARK_GREY
  }
}

.tw-dropdown .label {
  font-size FONT_SIZE_SMALLER
}

.tw-dropdown .label-container {
  display flex
  align-items center
  justify-content center
  border-radius 50%
  width 40px
  height 40px
  
}

.tw-dropdown .content {
  position absolute

  width 200px

  //padding MARGIN_SMALLER

  border-radius 5px

  box-shadow SHADOW_DEFAULT

  //top 100%
  //left 0

  transform translateY(100%)

  background-color THEME_COLOR_LIGHT_BACKGROUND

  z-index 1001
}

.tw-dropdown.bottom-left .content {
  left 0
  bottom 0
}

.tw-dropdown.bottom-right .content {
  right 0
  bottom -10px
}

.tw-dropdown .content .option {
  display block

  padding MARGIN_SMALLER MARGIN_SMALLER MARGIN_SMALLER MARGIN_SMALL_LESS

  font-size FONT_SIZE_SMALLER
  font-weight FONT_WEIGHT_SEMIBOLD
  color THEME_COLOR_TERTIARY

  cursor pointer

  user-select none

  &:first-child {
    border-radius 5px 5px 0 0
  }

  &:hover {
    background-color THEME_COLOR_GREY
  }

}

.tw-dropdown .content .option.important
  background-color THEME_COLOR_PRIMARY
  color white
  border-radius 0 0 5px 5px

  &:hover {
    background-color THEME_COLOR_PRIMARY_DARKER
  }

</style>

