<template>
  <sly-cell class="k-footer flex j-center" :class="{black:black}">
    <div class="k-footer-content">
      <sly-cell class="left flex">
        <sly-cell class="part">
          <span class="content">
            <span class="title">{{$t('pages.sitemap')}}</span>
            <tw-internal-link class="option inherit underline-hover" :to="localePath('index')">{{$t('pages.home')}}</tw-internal-link>
            <tw-internal-link class="option inherit underline-hover" to="/">{{$t('pages.our_mission')}}</tw-internal-link>
            <tw-internal-link class="option inherit underline-hover" to="/what">{{$t('pages.how_it_works')}}</tw-internal-link>
            <tw-external-link class="option inherit important underline-hover" target="_self" :href="$t('pages.partners_url')">
                {{$t('pages.partners')}}
            </tw-external-link>
          </span>
        </sly-cell>
        <sly-cell class="part">
          <span class="content">
            <span class="title">{{$t('pages.ressources')}}</span>
            <tw-external-link class="option inherit important underline-hover" target="_self" :href="$t('pages.faq_url')">
                {{$t('pages.faq')}}
            </tw-external-link>
            <tw-external-link class="option inherit important underline-hover" target="_blank" :href="$t('pages.press_url')">
                {{$t('pages.press')}}
            </tw-external-link>
          </span>
        </sly-cell>
        <sly-cell class="part">
          <span class="content">
            <span class="title">{{$t('pages.app')}}</span>
             <tw-external-link  target="_self" :href="$t('pages.faq_url')">
                 <img class="app-logo" src="/images/home/apple.png" alt="Apple logo"/>
            </tw-external-link>
             <tw-external-link  target="_self" :href="$t('pages.faq_url')">
                 <img class="app-logo" src="/images/home/android.png" alt="Android logo"/>
            </tw-external-link>
          
          
          </span>
        </sly-cell>
      </sly-cell>
     <sly-cell class="right">
         <sly-cell class="part">
          <span class="content">
            <span class="title">{{$t('pages.our_partners')}}</span>
            <div class="partners">
            
            </div>
          </span>
        </sly-cell>
     </sly-cell>
    </div>
  </sly-cell>
</template>

<script>
import SlyCell from "@/layouts/common/sly-cell";
import TwButton from "@/components/common/tw-button";
import TwInternalLink from "@/components/common/tw-internal-link";
import TwExternalLink from "@/components/common/tw-external-link";

export default {
  components: {TwButton, SlyCell, TwExternalLink,  TwInternalLink},
  props: {
    black: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="stylus" scoped>
@require '~assets/style/imports/index.import.styl'

.k-footer.black {
  background-color THEME_COLOR_DARK_GREY
  color white
  a {
    color white !important
  }
}

.k-footer {
  padding-top 78px
  padding-bottom 130px
  font-size FONT_SIZE_MEDIUM
  background-color #EEEEEF
 
  .left {
    width 800px
    justify-content space-between
    .icon {
      min-width 120px
    }
    .mobile {
      padding-bottom MARGIN_VERY_SMALL
      display none !important
    }
    .part {
      display flex
      justify-content flex-start
      padding-top 0
      margin-right: 10px
      width: auto;
      .content {
        display flex
        flex-direction column
        .app-logo{
          margin-bottom: 10px
        }
        .test{
          display inline-block
        }  
        .member-logo, .member-logo-third{
          width 90px
        }
        .member-logo-third{
          margin-left auto
          margin-right auto
          margin-top MARGIN_SMALL
          }
        
        .title{
          font-weight FONT_WEIGHT_BOLD
          margin-bottom MARGIN_VERY_SMALL
        }

        .option {
          line-height 35px
          color rgba(22, 22, 26, 0.7)
        }
      }
    }
    .part.icon {
      transform translateY(-30px)
    }
  }

  .right {
    width 275px
    margin-left 30px
    .title{
      font-weight FONT_WEIGHT_BOLD
      }
    .partners{
      margin-top 10px
      .member-logo{
        margin-right 10px
        }
      }
  }

  .k-footer-content {
    display: flex
  }
}

.isTablet, .isPhone {
  .k-footer {
    height auto
    margin-top MARGIN_VERY_SMALL
    padding-top MARGIN_MEDIUM_LESS
    padding-bottom MARGIN_MEDIUM_LESS
    .left {
      width 100%
      margin-left 0
      flex-direction column
      align-items center

      .mobile {
        display flex !important
      }

      .part {
        width 100%
        margin-bottom MARGIN_SMALL
        justify-content center
        text-align center
      }
      .part.icon {
        transform translateY(0)
      }

    }
    .right {
      display none
    }
  }
}
</style>
