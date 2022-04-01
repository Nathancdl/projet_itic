<template>
    <div class='tw-modal-cookies'>
        <p class="description">Lorsque vous naviguez sur notre site internet, des informations sont susceptibles d'être
            enregistrées ou lues sur votre terminal pour permettre son bon fonctionnement.
        <div class="buttons">
            <tw-button class="primary filled" label="Accepter" @validate="Close(true)" :isActivated="true"></tw-button>
            <tw-button class="primary" label="Annuler" @validate="Close(false)" :isActivated="true"></tw-button>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters, mapState} from 'vuex';
  import TwCheckboxOption from '~/components/common/input/checkbox/tw-checkbox-option'
  import TwButton from '~/components/common/tw-button.vue'

  export default {
    name: "TwModalCookies",
    components: {
      TwCheckboxOption,
      TwButton
    },
    props: {},
    data: function () {
      return {
        assistance: false,
        statistics: false
      }
    },
    provide() {
      return {parentValidator: this.$validator}
    },
    mounted() {

    },
    methods: {
      ...mapActions({
        setCookies: 'setCookies'
      }),
      Close(isValidated) {
        this.setCookies(isValidated);
        this.$emit("success");
      }
    }
  }
</script>

<style lang="stylus" scoped>
    @require '~assets/style/imports/space/margins.import.styl'
    @require '~assets/style/imports/fonts/common.import.styl'

    .tw-modal-cookies
    {
        text-align center
    }

    .tw-modal-cookies .description
    {
        margin-top MARGIN_SMALLER
        margin-bottom @margin-top

        font-size FONT_SIZE_SMALL
        text-align left
    }

    .tw-modal-cookies .buttons
    {
        display flex
        justify-content center

        margin-top MARGIN_SMALLER
    }

</style>
