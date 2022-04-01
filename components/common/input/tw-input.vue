<template>
  <ValidationProvider v-slot="{ errors }" :name="name" :rules="validation" :vid="vid">
    <div
      class="tw-input"
      :class="{
        focus: isFocus,
        hasValue: value !== '', error : errorState === 'DISPLAYED' && errors[0]
      }"
    >
      <div class="container-input" @click="Focus">
        <input
          :ref="reference ? reference : 'input'"
          v-model="value"
          :type="type ? type : 'text'"
          @blur="isFocus = false"
          @focus="isFocus = true"
          @input="OnInput"
        />
        <div class="placeholder">{{ label }}</div>
      </div>
      <tw-error :displayed="errorState === 'DISPLAYED'" :label="errors[0]"></tw-error>
    </div>
  </ValidationProvider>
</template>

<script>
import TwError from "~/components/common/input/tw-error.vue";

export default {
  components: {
    TwError,
  },
  model: {
    prop: "forcedValue",
    event: "input",
  },
  props: ["label", "validation", "vid", "name", "type", "reference", "forcedValue"],
  data: function () {
    return {
      value: this.forcedValue ? this.forcedValue : '',
      isFocus: false,
      errorState: "INIT",
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
  created() {},
  methods: {
    Focus: function () {
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
@require '~assets/style/imports/index.import.styl'

$margin_internal = 5px
$margin_external = 3px

.tw-input {
  text-align left
  user-select none
}

.tw-input .container-input {
  position relative
  display block

  font-size FONT_SIZE_SMALLER
  color white

  cursor text

  border-width 1px
  border-style solid
  border-color rgba(THEME_COLOR_PRIMARY, 0.25)
  border-radius 0 0 MARGIN_TINY 0

  background-color transparent

  transition TRANSITION_DEFAULT

  overflow hidden

  z-index 100
}

.tw-input.focus .container-input {
  box-shadow SHADOW_TINY
}

.tw-input.error .container-input {
  border-color THEME_COLOR_ERROR
}

.tw-input .container-input input {
  width calc(100%)

  padding-top MARGIN_SMALLER + $margin_internal
  padding-left MARGIN_SMALLER
  padding-right @padding-left
  padding-bottom @padding-left - $margin_external

  font-size FONT_SIZE_SMALLER
  color THEME_COLOR_PRIMARY

  background-color rgba(THEME_COLOR_DARK_BACKGROUND, 0.6);

  border-width 0

  overflow hidden
}

.tw-input .container-input .placeholder {
  position absolute
  top 50%
  left MARGIN_SMALLER

  transform translateY(-50%)

  transition TRANSITION_DEFAULT

  pointer-events none

  opacity 0.8
}

.tw-input.focus .container-input .placeholder,
.tw-input.hasValue .container-input .placeholder {
  font-size FONT_SIZE_TINY

  transform translateY(-150%)

  opacity 0.6
}

.tw-input .container-input [type=number]::-webkit-inner-spin-button,
.tw-input .container-input [type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin: 0;
}
</style>
