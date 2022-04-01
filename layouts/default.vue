<template>
  <div id="default" class="layout">
    <resolution>
      <nuxt/>
    </resolution>
  </div>
</template>

<script>
import Resolution from '~/layouts/resolution.vue'

export default {
  scrollToTop: true,
  components: {
    Resolution
  },
  data() {
    return {}
  },
  created() {
    console.log(this.$route);
  },
  methods: {}
}
</script>

<style lang="stylus" scoped>

@require '~assets/style/imports/index.import.styl'

#default
  width 100vw
  min-height: 100vh;

</style>
