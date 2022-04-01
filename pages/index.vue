<template>
  <div>
    <showcase></showcase>
    <fund></fund>
    <partnership v-if="this.$i18n.locale === 'fr'"></partnership>

    <k-footer :black="true" :separator="true"></k-footer>
  </div>
</template>

<script>
import SlyCell from "~/layouts/common/sly-cell";
import Showcase from "@/components/homePage/showcase";
import Fund from "@/components/homePage/fund";
import Partnership from "@/components/homePage/partnership";




import KFooter from "@/components/common/k-footer";


export default {
  name: "default",
  layout: 'home',
  components: { SlyCell, Showcase, Fund, Partnership, KFooter},
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
  }
}
</script>

<style lang="stylus" scoped>
@require '~assets/style/imports/index.import.styl'
@require './../components/homePage/common.styl'

.separator-up {
  transform translateY(10px)
}

</style>
