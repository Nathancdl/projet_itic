<template>
  <div
    class="resolution"
    :class="{
      isPhone: isPhone,
      isTablet: isTablet,
      isRegular: isRegular,
      isWide: isWide
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPhone: false,
      isTablet: false,
      isRegular: false,
      isWide: false
    }
  },
  mounted() {
    this.setResolutionType()
    window.onresize = function() {
      this.setResolutionType()
    }.bind(this)
  },
  methods: {
    setResolutionType() {
      const MAX_RES_PHONE = 768
      const MAX_RES_TABLET = 1200
      const MAX_RES_REGULAR = 1800

      this.isPhone = window.outerWidth < MAX_RES_PHONE
      this.$store.commit('resolution/setIsPhone', this.isPhone)
      this.isTablet =
        MAX_RES_PHONE <= window.outerWidth && window.outerWidth < MAX_RES_TABLET
      this.isRegular =
        MAX_RES_TABLET <= window.outerWidth &&
        window.outerWidth < MAX_RES_REGULAR
      this.isWide = MAX_RES_REGULAR <= window.outerWidth
      this.$store.commit('resolution/setIsRegular', this.isRegular || this.isWide)
    }
  }
}
</script>
