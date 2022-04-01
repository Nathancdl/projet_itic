<template>
  <span
    type="button"
    class="tw-button"
    :class="{
      disabled: isDisabled
    }"
    @click="onClick"
  >
    <div class="label">
      <slot>{{ label }}</slot>
    </div>
  </span>
</template>

<script>
export default {
  name: 'TwButton',
  props: {
    label: String,
    isDisabled: {
      default: false,
      type: Boolean
    }
  },
  data() {
    return {}
  },
  methods: {
    onClick() {
      if (!this.isDisabled) {
        this.$emit('validate')
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @require '~assets/style/imports/index.import.styl'

  .tw-button
    display flex
    align-items center

    padding MARGIN_VERY_SMALL

    background-color THEME_COLOR_PRIMARY
    border-radius MARGIN_MEDIUM

    user-select none
    cursor pointer
    transition opacity TRANSITION_DEFAULT

  .tw-button:focus
    outline 0

  .tw-button.disabled
    pointer-events none
    opacity 0.5

  .tw-button .label
    padding MARGIN_TINY MARGIN_SMALLER
    font-size FONT_SIZE_18PX
    font-weight FONT_WEIGHT_SEMIBOLD
    color THEME_COLOR_SECONDARY
    text-decoration none

  .tw-button.white
    border 2px solid THEME_COLOR_LIGHT
    border-radius MARGIN_MEDIUM
    background-color white
    .label
      font-size FONT_SIZE_16PX
      color THEME_COLOR_DARK_BACKGROUND

  .tw-button.purple
    background-color THEME_COLOR_SECONDARY
    .label
      color white

  .tw-button.bw
    background-color white
    .label
      color THEME_COLOR_DARK_BACKGROUND

  .tw-button.extend {
    .isPhone & {
      display flex
      justify-content center
      width 100%
    }
  }

  .tw-button.front {
    z-index 1
  }

</style>
