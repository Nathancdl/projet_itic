<template>
  <sly-cell class="title" data-aos="fade-up">
    <h4>{{ label }}</h4>
    <h2>{{ value }}</h2>
  </sly-cell>
</template>

<script>
import SlyCell from '~/layouts/common/sly-cell'

export default {
  name: 'TwTitle',
  components: {
    SlyCell
  },
  props: {
    value: String,
    label: String
  },
  data() {
    return {}
  }
}
</script>

<style lang="stylus" scoped>
@require '~assets/style/imports/index.import.styl'

.title
{
  padding MARGIN_SMALL
  padding-left MARGIN_SMALLER
  padding-right @padding-left
}

.title.center
{
  text-align center
}

.title.right
{
  text-align right
}

.title h4
{
  margin-bottom MARGIN_VERY_SMALL
}
</style>
