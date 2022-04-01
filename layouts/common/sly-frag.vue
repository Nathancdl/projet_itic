<template>
  <div class="sly-frag">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="stylus" scoped>

@require '~assets/style/imports/space/margins.import.styl'
@require '~assets/style/imports/space/common.import.styl'

VERTICAL_MARGIN = 200px

.sly-frag
  display flex
  justify-content flex-start
  flex-wrap wrap
  max-width CONTENT_MAX_WIDTH
  margin-left auto
  margin-right @margin-left
  padding-top MARGIN_SMALL
  padding-right MARGIN_SMALL
  padding-left @padding-right
  padding-bottom @padding-top

.sly-frag.no-max-width
{
    max-width initial
}

.sly-frag.padding-small
{
    padding-top MARGIN_REDUCED_SMALL
    padding-right MARGIN_REDUCED_SMALL
    padding-left @padding-right
    padding-bottom @padding-top
}

.sly-frag.no-padding
{
    padding-top 0px
    padding-right @padding-top
    padding-left @padding-top
    padding-bottom @padding-top
}

.sly-frag.no-padding-w
{
    padding-right 0
    padding-left @padding-right
}

.sly-frag.no-padding-h
{
    padding-top 0px
    padding-bottom @padding-top
}

.sly-frag.small
{
    max-width FORM_MAX_WIDTH
}

.sly-frag.medium
{
    max-width 1000px
}

.sly-frag.test
{
    background-color greenyellow
}

.sly-frag.column
{
    flex-direction column
}

.sly-frag.justify-end
{
    justify-content flex-end
}

.sly-frag.justify-center
{
    justify-content center
}

.sly-frag.justify-space-between
{
    justify-content space-between
}

.sly-frag.justify-space-around
{
    justify-content space-around
}

.sly-frag.justify-space-evenly
{
    justify-content space-evenly
}

.sly-frag.a-end
{
    align-items end
}

.sly-frag.a-center
{
    align-items center
}

.sly-frag.crunch-top
{
    margin-top - VERTICAL_MARGIN
    padding-top VERTICAL_MARGIN
}

.sly-frag.crunch-bottom
{
    margin-bottom - VERTICAL_MARGIN
    padding-bottom VERTICAL_MARGIN
}

.sly-frag.extend-left
{
    margin-left 0
}

.sly-frag.extend-right
{
    margin-right 0
}

.sly-frag.extend-left.extend-right
{
    max-width 100%
}

.isTablet
{
    .sly-frag
    {
        padding-top MARGIN_REDUCED_SMALL
        padding-right MARGIN_REDUCED_SMALL
        padding-left @padding-right
        padding-bottom @padding-top
    }

    .sly-frag.no-padding
    {
        padding-top 0
        padding-right @padding-top
        padding-left @padding-top
        padding-bottom @padding-top
    }
}

.isPhone
{
    .sly-frag
    {
        padding-top MARGIN_REDUCED_SMALLER
        padding-right MARGIN_REDUCED_SMALLER
        padding-left @padding-right
        padding-bottom @padding-top
    }

    .sly-frag.no-padding
    {
        padding-top 0
        padding-right @padding-top
        padding-left @padding-top
        padding-bottom @padding-top
    }
}
</style>
