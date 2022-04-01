<template>
  <ValidationProvider v-slot="{ errors }" :name="name" :rules="validation">
    <div class="tw-textarea" :class="{ resizable: resizable, focus: isFocus, hasValue: value !== '', error : errorState === 'DISPLAYED' && errors[0] }">
      <div class="container-input" @click="SetFocus">
        <textarea
          v-autosize
          ref="input"
          v-model="value"
          @input="OnInput"
          @focus="isFocus = true"
          @blur="isFocus = false"
          rows="1"
          :maxlength="maxLength"
          required
        >
        </textarea>
        <div class="placeholder">{{ label }}</div>
      </div>
      <tw-error v-if="!hideError" :displayed="errorState === 'DISPLAYED'" :label="errors[0]"></tw-error>
    </div>
  </ValidationProvider>
</template>

<script>
import TwError from "~/components/common/input/tw-error.vue";

export default {
  name: "TwTextarea",
  components: {
    TwError,
  },
  model: {
    prop: "forcedValue",
    event: "input",
  },
  props: ["label", "name", "validation", "resizable", "hideError", "forcedValue", "context", "maxLength"],
  data: function () {
    return {
      value: this.forcedValue,
      isFocus: false,
      errorState: "INIT",
      errors: []
    };
  },
  watch: {
    forcedValue: function () {
      this.value = this.forcedValue;
    },
    isFocus: function (isFocus) {
      switch (this.errorState) {
        case "INIT":
          this.errorState = isFocus ? "FIRST_FOCUS" : this.errorState;
          break;
        case "FIRST_FOCUS":
          this.errorState = !isFocus ? "DISPLAYED" : this.errorState;
          break;
        case "DISPLAYED":
          // DO NOTHING
          break;
      }
    },
  },
  created() {
    //this.$validator = this.parentValidator;
  },
  methods: {
    SetFocus: function () {
      this.$refs.input.focus();
      this.isFocus = true;
    },
    OnInput: function () {
      this.$emit("input", this.value);
    },
  },
};
</script>

<style lang="stylus" scoped>
@require '~assets/style/imports/fonts/common.import.styl'
@require '~assets/style/imports/theme/colors.import.styl'
@require '~assets/style/imports/theme/transitions.import.styl'
@require '~assets/style/imports/space/margins.import.styl'
@require '~assets/style/imports/space/common.import.styl'
@require "~assets/style/imports/theme/shadows.import.styl"

$margin_internal = 5px
$margin_external = 3px

.tw-textarea
  margin MARGIN_TINY
  text-align left
  user-select none

.tw-textarea .container-input
{
    font-size FONT_SIZE_SMALLER

    cursor text

    border-width 1px
    border-style solid
    border-color rgba(THEME_COLOR_PRIMARY, 0.25)
    border-radius 0 0 MARGIN_TINY 0

    background-color transparent

    transition TRANSITION_DEFAULT

    z-index 100
}

.tw-textarea.focus .container-input {
  box-shadow SHADOW_TINY
}

.tw-textarea.error .container-input
{
    border-color THEME_COLOR_ERROR
}

.tw-textarea .container-input textarea
{
    width calc(100%)

    min-height 150px

    padding-top MARGIN_SMALLER + $margin_internal
    padding-left MARGIN_SMALLER
    padding-right @padding-left
    padding-bottom @padding-left - $margin_external

    font-family inherit
    font-size FONT_SIZE_SMALLER
    letter-spacing 0
    color THEME_COLOR_PRIMARY

    background-color rgba(THEME_COLOR_DARK_BACKGROUND,0.6);

    border-width 0

    overflow hidden

    resize none
    outline 0
}

.tw-textarea.resizable .container-input textarea
{
    resize vertical

    min-height 150px
}

.tw-textarea.messenger .container-input textarea
{
    max-height 97px
}

.tw-textarea .container-input .placeholder
{
  position absolute
  top 35px
  left MARGIN_SMALLER

  transform translateY(-50%)

  transition TRANSITION_DEFAULT

  pointer-events none

  opacity 0.8
}

.tw-textarea.focus .container-input .placeholder,
.tw-textarea.hasValue .container-input .placeholder
{
    font-size FONT_SIZE_TINY

    transform translateY(-150%)

    opacity 0.6
}

.isTablet
{
    .tw-textarea.messenger .container-input textarea
    {
        max-height 78px
    }
}

.isPhone
{
    .tw-textarea.messenger .container-input textarea
    {
        max-height 58px
    }
}

</style>
