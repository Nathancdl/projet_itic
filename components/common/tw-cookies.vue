<template>
    <sly-frag v-if="getCookiesState" class="tw-cookies padding-small">
      <sly-cell class="message p-tiny w66 t60 p100">En poursuivant votre navigation sur ce site, vous acceptez l’utilisation de
        cookies pour permettre le fonctionnement de celui-ci.
      </sly-cell>
      <sly-cell class="button flex p-tiny j-end w33 t40 p100">
        <tw-button :isActivated="true" class="fs-very-small white" @click.native="modal.cookie = true" @validate="modal.cookie = true">En savoir plus et gérer les cookies</tw-button>
      </sly-cell>
      <tw-modal :isOpen="modal.cookie" @request-closing="modal.cookie = false" title="Gestion des cookies">
          <tw-modal-cookies @input="modal.cookie = false"></tw-modal-cookies>
      </tw-modal>
    </sly-frag>
</template>

<script>
  import SlyFrag from '~/layouts/common/sly-frag.vue'
  import SlyCell from '~/layouts/common/sly-cell.vue'
  import TwButton from '~/components/common/tw-button.vue'
  import TwModal from '~/components/common/modal/tw-modal'
  import TwModalCookies from '~/components/common/modal/tw-modal-cookies'
  import {mapGetters} from "vuex";

  export default {
    name: 'TwCookies',
    components: {
      SlyFrag,
      SlyCell,
      TwButton,
      TwModal,
      TwModalCookies
    },
    data: function () {
      return {
        modal:{
          cookie:false
        }
      }
    },
    computed: {
      ...mapGetters({
        getCookiesState: "getCookies",
      })
    },
  }
</script>

<style lang="stylus" scoped>
@require '~assets/style/imports/index.import.styl'

BUTTON_WIDTH = 325px

.tw-cookies
  position fixed
  left 0
  right @left
  bottom @left

  align-items center

  font-size FONT_SIZE_VERY_SMALL
  color white

  background-color THEME_COLOR_LIGHT_BACKGROUND
  z-index 500
</style>
