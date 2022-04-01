<template>
  <sly-cell class="settings-page flex column">
    <k-header class="header minimal" :search-page="false"></k-header>
    <sly-cell class="settings-container flex column">
      <sly-cell class="title flex">
        {{$t('premium.title')}}
      </sly-cell>
      <sly-cell class="options flex column">

       

        
      </sly-cell>

    </sly-cell>
    <k-footer class="footer"></k-footer>
  </sly-cell>
</template>

<script>

import SlyFrag from "~/layouts/common/sly-frag";
import SlyCell from "~/layouts/common/sly-cell";
import KFooter from "~/components/common/k-footer";
import KHeader from "~/components/common/k-header";

import moment from "moment";

export default {
  layout: 'default',
  components: {KHeader, SlyCell, SlyFrag, KFooter},
  head () {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    let head = {
      title: this.$t('home_page.seo_title'),
      htmlAttrs: {
        lang: this.$i18n.locale,
        ...i18nHead.htmlAttrs
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('home_page.seo_description')
        },
        ...i18nHead.meta
      ],
      link: [
        ...i18nHead.link
      ]
    }
    return head
  },
}
</script>

<style lang="stylus" scoped>
@require '~assets/style/imports/index.import.styl'

.settings-page {
  background-color THEME_COLOR_LIGHT
}

.settings-container {
  margin-top MARGIN_MEDIUM
  padding-left MARGIN_HUGE
  padding-bottom MARGIN_MEDIUM
}

.isPhone {
  .settings-container {
    margin-top MARGIN_MEDIUM
    padding-left MARGIN_SMALLER
    padding-right @padding-left;
  }
  .options {
    width 100%
  }
  .option {
    flex-direction column
    justify-content flex-start !important
    align-items flex-start !important
  }
  .option-select {
    justify-content flex-start !important
    align-items flex-start !important
  }
  .select {
    margin-left 0
  }
}

.title {
  font-size FONT_SIZE_LARGE
  font-weight FONT_WEIGHT_BOLD
  margin-bottom MARGIN_SMALL
}

.options {
  background-color white
  padding-top MARGIN_MEDIUM
  padding-bottom @padding-top
  padding-left MARGIN_SMALL
  padding-right @padding-left
  width 680px
  border 2px solid THEME_COLOR_LIGHT
  border-radius MARGIN_SMALLER
}

.option-other-than-first {
  margin-top MARGIN_SMALL
}

.option-intels-title {
  font-weight FONT_WEIGHT_BOLD
}

.option-select {
  margin-right MARGIN_MEDIUM
}
</style>
