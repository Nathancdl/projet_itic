<template>
  <ValidationProvider v-slot="{ errors }" :name="name" :rules="validation">
    <label class="tw-checkbox" :class="{ selected: value }">
      <input type="checkbox" v-model="value" />
      <div class="container-square">
        <div class="square"></div>
      </div>
    </label>
  </ValidationProvider>
</template>

<script>
export default {
  name: "TwCheckbox",
  model: {
    prop: "forcedValue",
    event: "input",
  },
  props: ["name", "forcedValue", "validation"],
  created() {},
  data: function () {
    return {
      value: this.forcedValue,
    };
  },
  watch: {
    forcedValue: function () {
      this.value = this.forcedValue;
    },
    value: function () {
      this.$emit("input", this.value);
    },
  },
  methods: {},
};
</script>

<style lang="stylus" scoped>
@require '~assets/style/imports/fonts/common.import.styl'
@require '~assets/style/imports/theme/colors.import.styl'
@require '~assets/style/imports/space/margins.import.styl'
@require '~assets/style/imports/space/common.import.styl'

$color = #b56969;

.tw-checkbox {
  display inline-block

  user-select none
  focusable tab

  opacity 1.0

  transition opacity 100ms ease-in-out
}

.tw-checkbox:hover {
  cursor pointer
}

.tw-checkbox input {
  display none
}

.tw-checkbox .container-square {
  width 45px

  padding 2px

  border-width 2px
  border-style solid
  border-color white
  border-radius @width

  transition TRANSITION_DEFAULT

  background-color THEME_COLOR_BACKGROUND

  opacity 0.3

  overflow hidden
}

.tw-checkbox.selected .container-square {
  border-color THEME_COLOR_SECONDARY

  background-color THEME_COLOR_SECONDARY

  opacity 1.0
}

.tw-checkbox .container-square .square {
  display block
  width 20px
  height @width

  background-color white

  border-radius @width

  transition TRANSITION_DEFAULT
}

.tw-checkbox.selected .container-square .square {
  margin-left auto
}
</style>
