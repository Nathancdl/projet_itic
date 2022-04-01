<template>
    <div class='tw-modal' v-if="isOpen">
        <div class="layer-opacity" @click="RequestClosing"></div>
        <div class="container" v-scroll-lock="isOpen">
            <div class="title" v-if="title">{{title}}</div>
            <slot></slot>
            <img class="close icon icon_24x24"
                 src="/icons/svg/cross.svg"
                 @click="RequestClosing">
        </div>
    </div>
</template>

<script>
  import SlyFrag from '~/layouts/common/sly-frag'

  export default {
    name: "TwModal",
    components: {
      SlyFrag
    },
    props: {
      isOpen: Boolean,
      title: undefined
    },
    data: function () {
      return {
        open: true
      }
    },
    methods:
      {
        RequestClosing() {
          this.$emit("request-closing");
        }
      }
  }
</script>

<style lang="stylus" scoped>

@require '~assets/style/imports/fonts/common.import.styl'
@require '~assets/style/imports/theme/colors.import.styl'
@require '~assets/style/imports/theme/transitions.import.styl'
@require '~assets/style/imports/space/margins.import.styl'
@require '~assets/style/imports/space/common.import.styl'

.tw-modal
{
  position fixed
  top 0
  left @top
  right @top
  bottom @top
  display flex
  justify-content center
  align-items center

  z-index 200
}

.tw-modal .layer-opacity
{
  position fixed
  top 0
  left @top
  right @top
  bottom @top

  background-color black
  opacity 0.5
}

.tw-modal .container
{
  width FORM_MAX_WIDTH
  height 100vh

  padding MARGIN_SMALL
  padding-top MARGIN_MEDIUM
  padding-bottom @padding-top

  color white

  background-color THEME_COLOR_DARK_BACKGROUND

  overflow-y auto

  z-index 102
}

.close
  position absolute
  top MARGIN_SMALLER
  right @top
  cursor pointer

.tw-modal.no-padding .container
  padding 0

.title
{
  font-size FONT_SIZE_LARGE
  font-weight FONT_WEIGHT_BOLD
  text-align center

  margin-bottom MARGIN_SMALL
}

.isTablet
{
  .tw-modal .container
  {
    margin-top MARGIN_CONTENT_SMALL
    margin-bottom @margin-top
  }
}

.isPhone
{
  .tw-modal .container
  {
    margin-top MARGIN_CONTENT_SMALLER
    margin-bottom @margin-top
  }
}

</style>
