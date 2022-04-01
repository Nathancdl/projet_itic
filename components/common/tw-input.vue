<template>
  <div class="k-input" @keydown="KeyboardEnter">
    <div class="container-input">
      <input
          ref='input'
          v-model="value"
          type='text'
          @input="OnInput"
      />
      <div class="placeholder"
           v-if="!value">
        {{ placeholder }}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  model: {
    prop: "forcedValue",
    event: "input",
  },
  props: {
    placeholder: {
      type: String
    },
    forcedValue: {
      type: String
    },
  },
  data: function () {
    return {
      value: this.forcedValue ? this.forcedValue : '',
      isFocus: false,
    };
  },
  watch: {
    forcedValue: function () {
      this.value = this.forcedValue;
    },
  },
  computed: {
    inputNotNull() {
      return this.value.length > 0
    },
  },
  methods: {
    Focus: function () {
      this.$refs.input.focus();
    },
    KeyboardEnter: function (e) {
      switch (e.keyCode) {
        case 13: //Enter
          //this.$emit("validate", this.value);
          this.$emit("enter");
          break;
      }
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

.k-input {
  user-select none
  z-index 999

  .container-input.focus {
    border-top-left-radius MARGIN_SMALL
    border-top-right-radius @border-top-left-radius
    border-bottom-left-radius 0
    border-bottom-right-radius 0
  }

  .container-input {
    min-width 300px
    max-width 540px
    width @max-width
    cursor text
    border-top-left-radius MARGIN_SMALL
    border-top-right-radius 0
    border-bottom-left-radius @border-top-left-radius
    border-bottom-right-radius 0
    background-color white
    overflow hidden

    input {
      width 100%
      padding MARGIN_SMALLER
      padding-left MARGIN_SMALL
      padding-right @padding-left
      font-size FONT_SIZE_MEDIUM
      border-width 0
      overflow hidden
      //caret-color: transparent;
    }

    .placeholder {
      position absolute
      top 50%
      left MARGIN_SMALL
      font-size FONT_SIZE_MEDIUM
      color #94A1B2
      transform translateY(-50%)
      pointer-events none
    }

  }
}

.isPhone {
  .k-autocomplete {
    width 70% !important
  }
  .container-input {
    min-width 200px
    max-width none
    width 100%
  }
}

</style>
