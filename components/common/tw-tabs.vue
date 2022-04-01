<template>
    <div class="tw-tabs" :class='{activated: isActivated}'>
        <div class = "tabs" ref = "tabs">
            <div v-for="(tab, i) in tabList" :key="'tab'+i" class='tab' :class="{ activated: activatedTabIndex === i}" @click="OnClick(i)">{{tab.dataset.name}}</div>
        </div>
        <div class = "views" ref = "views">
            <slot :activatedTabIndex = "activatedTabIndex"></slot>
        </div>
    </div>
</template>

<script>
export default {
  name: 'TwTabs',
  components: {},
  model: {
      prop: 'forcedTabIndex',
      event: 'change'
  },
  props: {
    forcedTabIndex : Number,
    tabs: Array,
    isActivated: Boolean
  },
  data: function () {
    return {
        tabList : [],
        activatedTabIndex : this.forcedTabIndex
    }
  },
    watch:
    {
        forcedTabIndex : function()
        {
            this.activatedTabIndex = this.forcedTabIndex;
        },
        activatedTabIndex: function()
        {
            this.$emit('change', this.activatedTabIndex);
        }
    },
  methods:
  {
      OnClick(i)
      {
          this.activatedTabIndex = i;
      },
  },
    mounted()
    {
      console.log(this.$refs);
      Array.from(this.$refs.views.children).forEach(function(tab){
            this.tabList.push(tab);
        }.bind(this));
    }
}
</script>

<style lang="stylus" scoped>
@require '~assets/style/imports/index.import.styl'

.tw-tabs
    width 100%

.tw-tabs .tabs
    display flex
    flex-direction row
    margin-bottom MARGIN_CONTENT_SMALLER
    overflow-y auto

.tw-tabs.justify-center .tabs
    justify-content center

.tw-tabs .tabs .tab
    font-size FONT_SIZE_SMALLER
    font-weight FONT_WEIGHT_SEMIBOLD
    text-transform uppercase
    letter-spacing 2px
    padding MARGIN_CONTENT_SMALLER
    border-bottom 2px solid transparent
    cursor pointer

.tw-tabs .tabs .tab.activated
    border-bottom-color THEME_COLOR_PRIMARY

.isPhone
  .tw-tabs .tabs .tab
    font-size FONT_SIZE_VERY_SMALL
    letter-spacing 0

</style>
