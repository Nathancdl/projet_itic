<template>
  <sly-cell class="fund">
    <div class="background "></div>
    <sly-cell class="action-add-button flex j-center a-center">
       <tw-internal-link to="/premium">
            <tw-button :label="$t('home_page.try_it')" class="extend"/>
        </tw-internal-link>
    </sly-cell>
    <sly-cell class="content after-separator flex column j-center a-center t-center">
      <h1 class="title-type-one title-promess" v-html="$t('home_page.title_price')"></h1>
    </sly-cell>

    <sly-cell class="part card-container">
      <sly-cell class="card mobile-behavior flex column a-center margin-right">
        <sly-cell class="top-background">
          <img class="icon icon_48x48" src="/icons/home/megaphone.svg" alt="Magaphone icon">
        </sly-cell>
        <sly-cell class="card-title title-type-one" v-html="$t('home_page.year')"></sly-cell>
        <sly-cell class="card-description description-type-one"
                  v-html="$t('home_page.year_price')"></sly-cell>
        <tw-internal-link class="card-cta cta-type-one hover" to="/premium">
          {{$t('home_page.know_more')}}
        </tw-internal-link>
      </sly-cell>
      <sly-cell class="card mobile-behavior flex column a-center margin-right">
        <sly-cell class="top-background">
          <img class="icon icon_48x48" src="/icons/home/megaphone.svg" alt="Magaphone icon">
        </sly-cell>
        <sly-cell class="card-title title-type-one" v-html="$t('home_page._6')"></sly-cell>
        <sly-cell class="card-description description-type-one"
                  v-html="$t('home_page.6_price')"></sly-cell>
        <tw-internal-link class="card-cta cta-type-one hover" to="/premium">
          {{$t('home_page.know_more')}}
        </tw-internal-link>
      </sly-cell>
      <sly-cell class="card mobile-behavior flex column a-center margin-right">
        <sly-cell class="top-background">
          <img class="icon icon_48x48" src="/icons/home/megaphone.svg" alt="Magaphone icon">
        </sly-cell>
        <sly-cell class="card-title title-type-one" v-html="$t('home_page._3')"></sly-cell>
        <sly-cell class="card-description description-type-one"
                  v-html="$t('home_page.3_price')"></sly-cell>
        <tw-internal-link class="card-cta cta-type-one hover" to="/premium">
          {{$t('home_page.know_more')}}
        </tw-internal-link>
      </sly-cell>
      <sly-cell class="card mobile-behavior flex column a-center">
        <sly-cell class="top-background">
          <img class="icon icon_48x48" src="/icons/home/megaphone.svg" alt="Magaphone icon">
        </sly-cell>
        <sly-cell class="card-title title-type-one" v-html="$t('home_page._1')"></sly-cell>
        <sly-cell class="card-description description-type-one"
                  v-html="$t('home_page.1_price')"></sly-cell>
        <tw-internal-link class="card-cta cta-type-one hover" to="/premium">
          {{$t('home_page.know_more')}}
        </tw-internal-link>
      </sly-cell>
    </sly-cell>
    <sly-cell class="part we-believe flex a-center j-center column t-center">
    </sly-cell>
  </sly-cell>
</template>

<script>
import SlyCell from "~/layouts/common/sly-cell";
import TwButton from "~/components/common/tw-button";
import TwInternalLink from "~/components/common/tw-internal-link";


export default {
  components: {TwInternalLink, SlyCell, TwButton}
}
</script>

<style lang="stylus" scoped>
@require '~assets/style/imports/index.import.styl'
@require './common.styl'

.fund {
  padding-top 50px

  color white

  .background {
    position absolute
    top 0
    left @top
    right @top
    bottom @top
    background-color THEME_COLOR_DARK_GREY
  }

  .isPhone & {
    padding-left MARGIN_SMALLER
    padding-right @padding-left;
    width 100%
  }

  .action-add-button {
    top -78px
  }

  .content {
    p {
      font-size FONT_SIZE_LARGE
    }
  }

  .title-promess {
    font-size 36px
    line-height 43px
    max-width 895px
  }

  .part {
    padding-top MARGIN_LARGE
  }

  .part.we-believe {

    .title-type-two {
      line-height 54px
    }

    .text {
      width 600px
      position absolute
      display flex
      flex-direction column
      justify-content center
      align-items center
      transform translateY(- MARGIN_SMALL)

      .action {
        margin-top MARGIN_MEDIUM
      }

      .isPhone & {
        max-width 300px

        .action {
          margin-top MARGIN_SMALL
        }
      }

    }
  }
}

.isTablet {
  .title-promess {
    width 100%
  }
}

.isPhone {
  .part{
    padding-top MARGIN_TINY
  }
  .we-believe {
    padding-top MARGIN_LARGER
    padding-bottom MARGIN_LARGE
    .title-type-two {
      font-size 30px
      line-height 39px
    }
  }

  .title-promess {
    top -25px
    font-size 26px
    line-height 36px
    width 100%
  }
}

</style>
