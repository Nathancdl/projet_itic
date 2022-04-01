<template>
  <div class="tw-radio-list">
    <ValidationProvider v-slot="{ errors }" :name="name" :rules="validation">
      <label v-for="(option, i) in options" class="option">
        <div class="tw-radio" :class="{ selected: value === option.value }">
          <input type="radio" :id="name + '_' + option.value" :value="option.value" v-model="value" />
          <div class="container-circle">
            <div class="circle"></div>
          </div>
        </div>
        <div class="container-intel">
          <div class="title">{{ option.title }}</div>
          <slot name="description">{{ option.description }}</slot>
        </div>
      </label>
    </ValidationProvider>
  </div>
</template>

<script>
export default {
  name: "TwRadio",
  components: {},
  model: {
    prop: "forcedSelectedOptionValue",
    event: "input",
  },
  props: ["name", "options", "forcedSelectedOptionValue", "validation"],
  inject: ["parentValidator"],
  data: function () {
    return {
      value: this.forcedSelectedOptionValue,
    };
  },
  methods: {},
  watch: {
    forcedSelectedOptionValue: function () {
      this.value = this.forcedSelectedOptionValue;
    },
    value: function () {
      this.$emit("input", this.value);
    },
  },
};
</script>

<style lang="stylus" scoped>
@require '~assets/style/imports/index.import.styl';

RADIO_WIDTH = 45px

.tw-radio-list {

}

.tw-radio-list .option {
  display flex
  align-items center
  flex-wrap wrap

  width 100%

  padding MARGIN_CONTENT_SMALLER
  padding-top MARGIN_CONTENT_VERY_SMALL
  padding-bottom @padding-top

  text-align left

  cursor pointer
}

.tw-radio-list .option .tw-radio {
  width RADIO_WIDTH

  user-select none
  focusable tab

  opacity 1.0

  transition opacity 100ms ease-in-out
}

.tw-radio-list .option .tw-radio input {
  display none
}

.tw-radio-list .option .tw-radio .container-circle {
  display inline-block
  vertical-align middle

  border-width 3px
  border-style solid
  border-color THEME_COLOR_TERTIARY
  border-radius 25px
}

.tw-radio-list .option .tw-radio .container-circle .circle {
  width 20px
  height @width

  border-radius 25px

  margin -1px

  background-color THEME_COLOR_TERTIARY

  opacity 0

  transition opacity 100ms ease-in-out
}

.tw-radio-list .option .tw-radio.selected .container-circle .circle {
  opacity 1.0
}

.tw-radio-list .option .container-intel {
  width "calc(100% - %s)" % (RADIO_WIDTH)
}

.tw-radio-list .option .container-intel .title {
  font-size FONT_SIZE_SMALLER
  font-weight FONT_WEIGHT_BOLD
}

.tw-radio-list .option .container-intel .description {
  font-size FONT_SIZE_VERY_SMALL
}
</style>
