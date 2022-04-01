<template>
  <a class="link" :href="href" :target="target" rel="nofollow noreferrer noopener">
    <slot></slot>
  </a>
</template>

<script>
export default {
  components: {},
  props: {
    href: String,
    target: {
      type: String,
      default: "_blank"
    },
  },
}
</script>

<style scoped lang="stylus">
@require '~assets/style/imports/index.import.styl'

.link{
  width auto !important
  color inherit
  text-decoration inherit

  &:hover {
    color inherit
  }
}

.underline-hover:hover {
  text-decoration underline
}

</style>