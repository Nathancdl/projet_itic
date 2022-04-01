<template>
  <div class="tw-checkbox-option" :class="{ selected: value, activated: isActivated, hasPrice: price }">
    <ValidationProvider v-slot="{ errors }" :name="name" :rules="validation">
      <tw-checkbox v-model="value" :forcedValue="forcedValue" @input="OnInput"> </tw-checkbox>
    </ValidationProvider>
    <div class="container-intel">
      <div class="title">{{ title }}</div>
      <slot name="description">{{ description }}</slot>
    </div>
    <div class="price" v-if="price">{{ price }}€</div>
    <slot></slot>
  </div>
</template>

<script>
import TwCheckbox from "./tw-checkbox";

export default {
  name: "TwCheckboxOption",
  components: {
    TwCheckbox,
  },
  model: {
    prop: "forcedValue",
    event: "input",
  },
  props: ["name", "isActivated", "forcedValue", "title", "description", "price", "validation"],
  provide() {
    return { parentValidator: this.parentValidator };
  },
  data: function () {
    return {
      value: this.forcedValue,
    };
  },
  watch: {
    forcedValue: function () {
      this.value = this.forcedValue;
    },
  },
  methods: {
    OnInput: function () {
      this.$emit("input", this.value);
    },
  },
};
</script>

<style lang="stylus" scoped>
@require '~assets/style/imports/fonts/common.import.styl'
@require '~assets/style/imports/theme/colors.import.styl'
@require '~assets/style/imports/space/margins.import.styl'
@require '~assets/style/imports/space/common.import.styl'

CHECKBOX_WIDTH = 65px
PRICE_WIDTH = 100px

.tw-checkbox-option {
  display flex

  align-items center

  text-align left

  margin MARGIN_TINY
  padding MARGIN_VERY_SMALL

  border-width 1px
  border-style solid
  border-color rgba(black, 0.1)
  border-radius 5px

  box-shadow SHADOW_INPUT

  transition TRANSITION_DEFAULT

  pointer-events none

  opacity 0.5
}

.tw-checkbox-option.activated {
  pointer-events auto

  opacity 1.0
}

.tw-checkbox-option.selected {
  border-color rgba(THEME_COLOR_SECONDARY, 1.0)
}

.tw-checkbox-option .container-intel {
  margin-left MARGIN_SMALLER
}

.tw-checkbox-option.hasPrice .container-intel {
  margin-left MARGIN_SMALLER
}

.tw-checkbox-option .container-intel .title {
  font-size FONT_SIZE_SMALLER
  font-weight FONT_WEIGHT_BOLD
}

.tw-checkbox-option .container-intel .description {
  font-size FONT_SIZE_VERY_SMALL
}

.tw-checkbox-option .price {
  width PRICE_WIDTH

  font-size FONT_SIZE_SMALL
  font-weight FONT_WEIGHT_SEMIBOLD
  text-align right
}
</style>
