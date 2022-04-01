<template>
    <div class='tw-modal-confirmation'>
        <h3 class = "h4">
            <slot name="title"></slot>
        </h3>
        <p>
            <slot name="description"></slot>
        </p>
        <div class="buttons">
            <tw-button :isActivated="true" label="Valider" @validate="Close(true)"></tw-button>
            <tw-button class="secondary" :isActivated="true" label="Annuler" @validate="Close(false)"></tw-button>
        </div>
    </div>
</template>

<script>
  import TwButton from '~/components/common/tw-button.vue'

  export default {
    name: "TwModalConfirmation",
    components: {
      TwButton
    },
    props: {},
    data: function () {
      return {}
    },
    methods:
      {
        Close(isValidated) {
          this.$emit("input", isValidated);
        }
      }
  }
</script>

<style lang="stylus" scoped>
@require '~assets/style/imports/index.import.styl';


    .tw-modal-confirmation
    {
        text-align center
    }

    .tw-modal-confirmation .buttons
    {
        display flex
        justify-content center

        margin-top MARGIN_CONTENT_SMALLER
    }

</style>
