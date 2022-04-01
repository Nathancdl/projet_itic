<template>
  <sly-cell class="partnership">
    <sly-cell class="content flex j-center a-center t-center">
      <h1 class="title-type-one" v-html="$t('home_page.recent_film')"></h1>
    </sly-cell>
   <VueSlickCarousel v-bind="settings">
        <div v-for="(film, index) in $t('films')" :key="'film'+index" >  
         <div>
          <div class="gallery-item">
            <sly-cell class="left">
              <img class="image" :src="film.image" :alt="film.name">
            </sly-cell> 
            <sly-cell class="right">         
            <sly-cell class="title-type-one" v-html="film.name"></sly-cell>
            <sly-cell class="description-type-two" v-html="film.description"></sly-cell>
            <sly-cell class="cta-type-one"> <tw-internal-link class="option inherit" :to="film.link">Voir le film</tw-internal-link></sly-cell>     
            </sly-cell> 
            </div>
           
          </div>
        </div> 
  </VueSlickCarousel>
   <sly-cell class="content flex j-center a-center t-center">
      <h1 class="title-type-one" v-html="$t('home_page.action_film')"></h1>
    </sly-cell>
 <VueSlickCarousel v-bind="settings">
        <div v-for="(film, index) in $t('films')" :key="'film'+index" >  
         <div>
          <div class="gallery-item">
            <sly-cell class="left">
              <img class="image" :src="film.image" :alt="film.name">
            </sly-cell> 
            <sly-cell class="right">         
            <sly-cell class="title-type-one" v-html="film.name"></sly-cell>
            <sly-cell class="description-type-two" v-html="film.description"></sly-cell>
            <sly-cell class="cta-type-one"> <tw-internal-link class="option inherit" :to="film.link">Voir le film</tw-internal-link></sly-cell>     
            </sly-cell> 
            </div>
           
          </div>
        </div> 
  </VueSlickCarousel>
  
    </sly-cell>
</template>

<script>
import SlyCell from "~/layouts/common/sly-cell";
import TwButton from "~/components/common/tw-button";
import TwExternalLink from "@/components/common/tw-external-link";
import TwInternalLink from "@/components/common/tw-internal-link";
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'MyComponent',
  components: {TwInternalLink, TwExternalLink, SlyCell, TwButton, VueSlickCarousel},

 
   
   
      data() {
      return {
        settings: {
          "arrows": true,
          "infinite": true,
          "slidesToShow": 1,
          "focusOnSelect": true,
          "slidesToScroll": 1,
          "touchThreshold": 5,
          "initialSlide": 1,
          "centerMode" : true,
          "centerPadding" : '25%',
          "autoplay": true,
          "speed": 3000,
          "autoplaySpeed": 5000,
          "pauseOnFocus": true,
          "pauseOnHover": true,

          
  "responsive": [
    {
      "breakpoint": 1800,
      "settings": {
          "arrows": true,
          "infinite": true,
          "slidesToShow": 1,
          "focusOnSelect": true,
          "slidesToScroll": 1,
          "touchThreshold": 5,
          "initialSlide": 1,
          "centerMode" : true,
          "centerPadding" : '20%',
          "autoplay": true,
          "speed": 3000,
          "autoplaySpeed": 5000,
          "pauseOnFocus": true,
          "pauseOnHover": true,
      }
    },
    {
      "breakpoint": 1224,
      "settings": {
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "infinite": true,
        "arrows": true,
        "centerMode" : false,
        "autoplay": true,
        "speed": 3000,
        "autoplaySpeed": 5000,
        "pauseOnFocus": true,
        "pauseOnHover": true,
      }
    },
    {
      "breakpoint": 800,
      "settings": {
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "initialSlide": 1,
        "centerMode" : false,
        "autoplay": true,
        "speed": 3000,
        "autoplaySpeed": 5000,
        "pauseOnFocus": true,
        "pauseOnHover": true,
      }
    },
    {
      "breakpoint": 480,
      "settings": {
      "slidesToShow": 1,
      "slidesToScroll": 1,
      "centerMode" : false,
      "autoplay": true,
      "speed": 3000,
      "autoplaySpeed": 5000,
      "pauseOnFocus": true,
      "pauseOnHover": true,
      }
    }
  ]
        },
      }
    },
  }




</script>

<style lang="stylus" scoped>
@require '~assets/style/imports/index.import.styl'
@require '~assets/style/global/fonts/KGSecondChances.import.styl'
@require './common.styl'

.isTablet{
   .partnership {  
     .gallery-item{
       .left{
          justify-content center
         }
      
  }
}
}
.isPhone {
  .partnership {  
    .gallery-item{
    display table
    border-radius: 10px
    height auto
    width auto
    justify-content center
    text-align center
    img{
      width 150px
      height 150px

    }
    .left{
      display inline-table
      width 90%
    }
    .right{
      padding-top inherit
      display inline-table
      width 100% 
      .description-type-two{
        padding 20px
      }
    }
  }
}}

.partnership {
  background-color THEME_COLOR_LIGHT_2  
  padding-top MARGIN_MEDIUM
  color white
  z-index 1
  .content {
    .title-type-one {
      color black
      font-size 42px
      line-height 42px
      font-weight FONT_WEIGHT_BOLD
      padding-bottom MARGIN_MEDIUM
    }
  }
.gallery-item{
  height 300px
  width 95%
  display flex
  margin 25px
  border-radius 10px
  background-color THEME_COLOR_LIGHT
  box-shadow rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 2px 2px, rgba(0, 0, 0, 0.09) 0px 4px 4px, rgba(0, 0, 0, 0.09) 0px 8px 8px, rgba(0, 0, 0, 0.09) 0px 16px 16px;
  color THEME_COLOR_DARK_GREY !important
  justify-content center
  img{
    width 226px
    height 246px
    margin MARGIN_SMALL
    vertical-align middle
    filter: brightness(0.1%)
    
  }
  .left{
    justify-content center
    display flex
    width 35%
  }
  .right{   
    display inline-table
    float right
    width 65%  
    padding-top MARGIN_MEDIUM
    .description-type-two{
      text-align justify
      padding-right MARGIN_SMALL
      padding-top MARGIN_SMALL
    }
    .cta-type-one{
      padding-top MARGIN_SMALL
      padding-bottom MARGIN_SMALL
    }
    .title-type-one{
      font-family "KGSecondChances"
    }
  }    
}}


</style>


