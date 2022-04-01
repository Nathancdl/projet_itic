<template>
  <sly-cell class="settings-page flex column">
    <k-header class="header minimal" :search-page="false"></k-header>
    <sly-cell class="settings-container flex column">
      <sly-cell class="title flex">
        {{$t('settings.settings')}}
      </sly-cell>
      <sly-cell class="options flex column">

        <sly-cell class="option flex s-between">
          <sly-cell class="option-intels flex column">
            <sly-cell class="option-intels-title">
              {{$t('settings.darkmode_interface')}}
            </sly-cell>
            <sly-cell class="option-intels-description">
              {{$t('settings.darkmode_interface_description')}}
            </sly-cell>
          </sly-cell>
          <sly-cell class="option-select flex j-end a-end">
            <tw-select class="select" v-model="darkmode" name="darkmode" :options="yesno"></tw-select>
          </sly-cell>
        </sly-cell>

         <sly-cell class="option flex s-between">
          <sly-cell class="option-intels flex column">
            <sly-cell class="option-intels-title">
              {{$t('settings.safesearch_interface')}}
            </sly-cell>
            <sly-cell class="option-intels-description">
              {{$t('settings.safesearch_interface_description')}}
            </sly-cell>
          </sly-cell>
          <sly-cell class="option-select flex j-end a-end">
            <tw-select class="select" v-model="safesearch" name="safesearch" :options="safesearches"></tw-select>
          </sly-cell>
        </sly-cell>

        <sly-cell class="option flex s-between">
          <sly-cell class="option-intels flex column">
            <sly-cell class="option-intels-title">
              {{$t('settings.personalized_results_interface')}}
            </sly-cell>
            <sly-cell class="option-intels-description">
              {{$t('settings.personalized_results_interface_description')}}
            </sly-cell>
          </sly-cell>
          <sly-cell class="option-select flex j-end a-end">
            <tw-select class="select" v-model="personalized_results" name="personalized_results" :options="yesno"></tw-select>
          </sly-cell>
        </sly-cell>

        <sly-cell class="option flex s-between">
          <sly-cell class="option-intels flex column">
            <sly-cell class="option-intels-title">
              {{$t('settings.language_interface')}}
            </sly-cell>
            <sly-cell class="option-intels-description">
              {{$t('settings.language_interface_description')}}
            </sly-cell>
          </sly-cell>
          <sly-cell class="option-select flex j-end a-end">
            <tw-select class="select" v-model="language" name="language" :options="languages"></tw-select>
          </sly-cell>
        </sly-cell>

        <sly-cell class="option option-other-than-first flex s-between">
          <sly-cell class="option-intels flex column">
            <sly-cell class="option-intels-title">
              {{$t('settings.language_search_region')}}
            </sly-cell>
            <sly-cell class="option-intels-description">
              {{$t('settings.language_search_region_description')}}
            </sly-cell>
          </sly-cell>
          <sly-cell class="option-select flex j-end a-end">
            <tw-select class="select" v-model="country" name="countryCodes" :options="countryCodes" :isFirstValue="true"></tw-select>
          </sly-cell>
        </sly-cell>
      </sly-cell>

    </sly-cell>
    <k-footer class="footer"></k-footer>
  </sly-cell>
</template>

<script>
import TwInput from "~/components/common/input/tw-input";
import TwSelect from "~/components/common/input/tw-select";
import TwButton from "~/components/common/tw-button";
import SlyFrag from "~/layouts/common/sly-frag";
import SlyCell from "~/layouts/common/sly-cell";
import KFooter from "~/components/common/k-footer";
import KHeader from "~/components/common/k-header";
import {countryCodes, languages, yesno, safesearches} from "~/utils/constants";
import moment from "moment";

export default {
  layout: 'default',
  components: {KHeader, SlyCell, SlyFrag, TwButton, TwInput, KFooter, TwSelect},
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
  data: () => ({
    pagination: {
      currentPage: null,
    },
    country: '',
    language: '',
    darkmode: '',
    safesearch: '',
    personalized_results: '',
  }),
  mounted() {
    //this.language = this.$cookies.get("karma_language") === 'fr'?  'fr' : this.$cookies.get("i18n_redirected") || 'en'

    this.language = this.$cookies.get("i18n_redirected");
    this.country = this.getCurrentCountry();
    this.darkmode = this.initDark();
    this.safesearch = this.initSafe();
    this.personalized_results = this.initPerso();
  },
  computed:{
    countryCodes(){
      return countryCodes;
    },
    languages(){
      return languages;
    },
    yesno(){
      return yesno;
    },
    safesearches(){
      return safesearches;
    }
  },
  watch:{
     country() {
       this.$cookies.set("karma_countryCode", this.country)
     },
    language() {
      this.$i18n.setLocale(this.language)
      moment.locale(this.language);
      //this.$cookies.set("karma_language", this.language)
    },
    darkmode() {
      this.$cookies.set("darkmode", this.darkmode)
      
    },
    safesearch() {
      this.$cookies.set("safesearch", this.safesearch)
      
    },
    personalized_results() {
      this.$cookies.set("personalized_results", this.personalized_results)
      
    }
  },
  methods: {
    getCurrentCountry() {
      const countryCode = this.$cookies.get("karma_countryCode");
      if (countryCode) {
        return countryCode
      } else if (this.language === 'fr') {
        return 'fr-FR'
      }
      return 'en-US'
    },

    initDark() {
      const safe = this.$cookies.get("safesearch");
      const perso = this.$cookies.get("personalized_results");
      const dark = this.$cookies.get("darkmode");
      if (dark) {
        return dark
      } else {
        return '0'
      }
    },
    initPerso() {
      const perso = this.$cookies.get("personalized_results");
      if (perso) {
        return perso
      } else {
        return '0'
      }
    },
     initSafe() {
      const safe = this.$cookies.get("safesearch");
      if (safe) {
        return safe
      } else {
        return '0'
      }
    },
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
