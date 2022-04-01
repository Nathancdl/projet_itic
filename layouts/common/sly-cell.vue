<template>
  <div class="sly-cell">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {}
  }
}
</script>

<style lang="stylus" scoped>

@require '~assets/style/imports/space/margins.import.styl'

.sly-cell {
  width 100%
}

.sly-cell.flex {
  display flex
}

.sly-cell.wrap {
  flex-wrap wrap
}

.sly-cell.column {
  flex-direction column
}

.sly-cell.j-center {
  justify-content center
}

.sly-cell.j-s-evenly {
  justify-content space-evenly
}

.sly-cell.j-start {
  justify-content flex-start
}

.sly-cell.j-end {
  justify-content flex-end
}

.sly-cell.a-start {
  align-items flex-start
}

.sly-cell.a-center {
  align-items center
}

.sly-cell.a-end {
  align-items flex-end
}

.sly-cell.t-center {
  text-align center
}

.sly-cell.s-between {
  justify-content space-between
}

.sly-cell.no-wrap {
  flex-wrap nowrap
}

.sly-cell.mr-small {
  margin-right MARGIN_SMALL
}

.sly-cell.opacity-70 {
  opacity 0.7
}


KEYS = (10 10%) (15 15%) (16 calc(100% / 6)) (20 20%) (25 25%) (30 30%) (33 calc(100% / 3)) (40 40%) (50 50%) (60 60%) (66 calc(100% / 3 * 2)) (70 70%) (75 75%) (80 80%) (90 90%) (100 100%)

for i in KEYS
  .sly-cell.w{i[0]}
    width i[1]

for i in KEYS
  .isRegular
    .sly-cell.r{i[0]}
      width i[1]

for i in KEYS
  .isTablet
    .sly-cell.t{i[0]}
      width i[1]

for i in KEYS
  .isPhone
    .sly-cell.p{i[0]}
      width i[1]

.sly-cell.p-tiny
  padding MARGIN_TINY

.sly-cell.pw-tiny
  padding-left MARGIN_TINY
  padding-right @padding-left

.sly-cell.pw-tiny
  padding-top MARGIN_TINY
  padding-bottom @padding-top

.sly-cell.p-very-small
  padding MARGIN_VERY_SMALL

.sly-cell.pw-very-small
  padding-left MARGIN_VERY_SMALL
  padding-right @padding-left

.sly-cell.ph-very-small
  padding-top MARGIN_VERY_SMALL
  padding-bottom @padding-top

.sly-cell.p-smaller
  padding MARGIN_SMALLER

.sly-cell.pw-smaller
  padding-left MARGIN_SMALLER
  padding-right @padding-left

.sly-cell.ph-smaller
  padding-top MARGIN_SMALLER
  padding-bottom @padding-top

.sly-cell.p-small-less // added for serp 0924serp
  padding MARGIN_SMALL_LESS

.sly-cell.pw-small-less // added for serp 0924serp
  padding-left MARGIN_SMALL_LESS
  padding-right @padding-left

.sly-cell.ph-small-less // added for serp 0924serp
  padding-top MARGIN_SMALL_LESS
  padding-bottom @padding-top

.sly-cell.p-small
  padding MARGIN_SMALL

.sly-cell.pw-small
  padding-left MARGIN_SMALL
  padding-right @padding-left

.sly-cell.ph-small
  padding-top MARGIN_SMALL
  padding-bottom @padding-top

.sly-cell.p-medium
  padding MARGIN_MEDIUM

.sly-cell.pw-medium
  padding-left MARGIN_MEDIUM
  padding-right @padding-left

.sly-cell.ph-medium
  padding-top MARGIN_MEDIUM
  padding-bottom @padding-top

.sly-cell.p-large
  padding MARGIN_LARGE

.sly-cell.pw-large
  padding-left MARGIN_LARGE
  padding-right @padding-left

.sly-cell.ph-large
  padding-top MARGIN_LARGE
  padding-bottom @padding-top

.sly-cell.p-larger
  padding MARGIN_LARGER

.sly-cell.pw-larger
  padding-left MARGIN_LARGER
  padding-right @padding-left

.sly-cell.ph-larger
  padding-top MARGIN_LARGER
  padding-bottom @padding-top

.isTablet, .isPhone
  .sly-cell.p-tiny
    padding MARGIN_REDUCED_TINY

  .sly-cell.pw-tiny
    padding-left MARGIN_REDUCED_TINY
    padding-right @padding-left

  .sly-cell.pw-tiny
    padding-top MARGIN_REDUCED_TINY
    padding-bottom @padding-top

  .sly-cell.p-very-small
    padding MARGIN_REDUCED_VERY_SMALL

  .sly-cell.pw-very-small
    padding-left MARGIN_REDUCED_VERY_SMALL
    padding-right @padding-left

  .sly-cell.ph-very-small
    padding-top MARGIN_REDUCED_VERY_SMALL
    padding-bottom @padding-top

  .sly-cell.p-smaller
    padding MARGIN_REDUCED_SMALLER

  .sly-cell.pw-smaller
    padding-left MARGIN_REDUCED_SMALLER
    padding-right @padding-left

  .sly-cell.ph-smaller
    padding-top MARGIN_REDUCED_SMALLER
    padding-bottom @padding-top

  .sly-cell.p-small
    padding MARGIN_REDUCED_SMALL

  .sly-cell.pw-small
    padding-left MARGIN_REDUCED_SMALL
    padding-right @padding-left

  .sly-cell.ph-small
    padding-top MARGIN_REDUCED_SMALL
    padding-bottom @padding-top

  .sly-cell.p-medium
    padding MARGIN_REDUCED_MEDIUM

  .sly-cell.pw-medium
    padding-left MARGIN_REDUCED_MEDIUM
    padding-right @padding-left

  .sly-cell.ph-medium
    padding-top MARGIN_REDUCED_MEDIUM
    padding-bottom @padding-top

  .sly-cell.p-large
    padding MARGIN_REDUCED_LARGE

  .sly-cell.pw-large
    padding-left MARGIN_REDUCED_LARGE
    padding-right @padding-left

  .sly-cell.ph-large
    padding-top MARGIN_REDUCED_LARGE
    padding-bottom @padding-top

  .sly-cell.p-larger
    padding MARGIN_REDUCED_LARGER

  .sly-cell.pw-larger
    padding-left MARGIN_REDUCED_LARGER
    padding-right @padding-left

  .sly-cell.ph-larger
    padding-top MARGIN_REDUCED_LARGER
    padding-bottom @padding-top
</style>
