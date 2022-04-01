<template>
  <NuxtLink class="link" :to="to">
    <slot></slot>
  </NuxtLink>
</template>

<script>
export default {
  components: {},
  props: {
    to: String
  }
}
</script>

<style scoped lang="stylus">

@require '~assets/style/imports/index.import.styl'

.link.inherit{
  color inherit
  text-decoration inherit

  &:hover {
    color inherit
  }
}

.link.hover {
  &:hover {
    color white
  }
}

.underline-hover:hover {
  text-decoration underline
}

</style>
