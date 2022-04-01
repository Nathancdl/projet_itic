<template>
  <div v-click-outside="Hide" class="tw-dropdown bottom-right" :class="{'dark':!light,'light':light}">
    <div class="label-container" :class="{opened:isOpen}" @click="Toggle">
      <div class="label action">
        <img class="icon icon_24x24" :class="{'filter-black':!light,'filter-white':light}" src="/icons/knot.svg" alt="Nombre de requêtes">
        <span class="count">{{ searchCount }}</span>
      </div>
    </div>
    <div v-if="isOpen" class="content flex column">
      <img class="icon icon_64x64 filter-green" src="/icons/knot.svg" alt="Nombre de requêtes">
      <div class="description">
        {{ $t('general.streaming_counter_description') }}
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'
import {mapGetters} from "vuex";

export default {
  name: 'TwDropdown',
  props: {
    light: {
      type: Boolean,
      default: false
    },
  },
  components: {},
  directives: {
    ClickOutside
  },
  data() {
    return {
      isOpen: false
    }
  },
  computed: {
    searchCount(){
      let searchCount = this.$cookies.get('karma_searchCount')
      if(!searchCount) searchCount = "000"
      searchCount = searchCount + ""
      if(searchCount.length === 1) searchCount = "00" + searchCount
      if(searchCount.length === 2) searchCount = "0" + searchCount
      return searchCount;
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

.dark {
  color THEME_COLOR_DARK_GREY

  .label-container.opened {
    background-color THEME_COLOR_GREY
  }
}

.light {
  color white

  .label-container.opened {
    background-color THEME_COLOR_DARK_GREY
  }

  .content {
    color THEME_COLOR_DARK_GREY
  }
}

.tw-dropdown {
  display flex
  align-items center
}

.tw-dropdown .label {
  font-size FONT_SIZE_SMALLER
}

.tw-dropdown .label-container {
  cursor pointer
  display flex
  align-items center
  justify-content center
  border-radius 20px
  padding 10px
  user-select none

  .label {
    display flex
    align-items center
    justify-content center

    .icon {
      transform translateY(-1px)
    }

    .count {
      padding-left MARGIN_TINY
    }
  }
}

.tw-dropdown .content {
  position absolute
  width 250px
  padding 20px
  border-radius 5px
  box-shadow SHADOW_DEFAULT
  //top 100%
  //left 0
  transform translateY(100%)
  background-color THEME_COLOR_LIGHT_BACKGROUND
  z-index 1000

  font-size FONT_SIZE_SMALLER
  line-height: 140%;

  .description {
    margin-top MARGIN_VERY_SMALL
  }
}

.tw-dropdown.bottom-left .content {
  left 0
  bottom 0
}

.tw-dropdown.bottom-right .content {
  right 0
  bottom -10px
}


</style>

