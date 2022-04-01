<template>
  <div class="tw-error" :class='{displayed: displayed && label}'>
    <div class="label">{{ label }}</div>
  </div>
</template>

<script>
export default {
  props: [
    "displayed",
    "label"
  ],
  data: function () {
    return {

    }
  },
  methods:
  {

  }
}
</script>

<style lang="stylus" scoped>
@require "~assets/style/imports/fonts/common.import.styl"
@require "~assets/style/imports/theme/colors.import.styl"

.tw-error {
  padding-top 5px
  padding-left 10px
  padding-right 10px
  padding-bottom 3px

  font-size FONT_SIZE_VERY_SMALL
  color THEME_COLOR_ERROR

  pointer-events none

  border-radius 0px 0px 5px 5px

  transition opacity 100ms ease-in-out

  opacity 0

  z-index 99
}

.tw-error.displayed {
  opacity 1
}

.tw-error .label {
  min-height 17px
}

</style>
