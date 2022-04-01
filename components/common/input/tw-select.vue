<template>
    <div class='tw-select' :class='{focus: isFocus, hasValue : value !== ""/*, error : errorState === "DISPLAYED" && errors.first(name)*/}'>
      <ValidationProvider v-slot="{ errors }" :name="name" :rules="validation">
        <div class="container-select" @click="Focus">
            <select v-model="value"
                    ref="select"
                    @focus="isFocus = true"
                    @blur="isFocus = false">
                <option v-if="isFirstValue" value=""></option>
                <option v-for="option in options" :value="option.value">
                    {{ option.label }}
                </option>
            </select>
            <div class="placeholder">{{label}}</div>
            <img class="arrow icon icon_24x24 filter-black" src="/icons/down.svg" alt="">
        </div>
        <tw-error :displayed="errorState === 'DISPLAYED'" :label="errors[0]"></tw-error>
      </ValidationProvider>
    </div>
</template>

<script>
import TwError from '~/components/common/input/tw-error.vue';

  export default {
    name: 'TwSelect',
    components:{
      TwError
    },
    model: {
      prop: 'forcedValue',
      event: 'input'
    },
    props: [
      "label",
      "name",
      "options",
      "validation",
      "forcedValue",
      "isFirstValue"
    ],
    data: function () {
      return {
        value: this.forcedValue,
        errorState: 'INIT',
        isFocus: false
      }
    },
    created() {

    },
    watch:
      {
        forcedValue: function () {
          this.value = this.forcedValue;
          this.InitValue();
        },
        isFocus: function (isFocus) {
          switch (this.errorState) {
            case 'INIT':
              this.errorState = isFocus ? 'FIRST_FOCUS' : this.errorState;
              break;
            case 'FIRST_FOCUS':
              this.errorState = !isFocus ? 'DISPLAYED' : this.errorState;
              break;
            case 'DISPLAYED':
              // DO NOTHING
              break;
          }
        },
        value: function (value) {
          this.$emit('input', value);
        }
      },
    methods:
      {
        InitValue() {
          this.options.forEach(function (option) {
            if (this.forcedValue === option.value) {
              this.value = this.forcedValue;
            }
          }.bind(this));
        },
        Focus() {
          this.$refs.select.focus();
          this.isFocus = true;
        },
        OnClose()
        {
          this.value = '';
        }
      },
    mounted() {
      this.InitValue();
    }
  }
</script>

<style lang="stylus" scoped>
@require '~assets/style/imports/index.import.styl'

$margin_internal = 5px
$margin_external = 3px

CLOSE_WIDTH = 30px;

.tw-select
  margin MARGIN_TINY
  text-align left
  user-select none

.tw-select .container-select
{
  position relative
  display block

  font-size FONT_SIZE_SMALLER
  color white

  cursor pointer

  min-width MARGIN_HUGER

  border-width 1px
  border-style solid
  border-color rgba(THEME_COLOR_DARK_GREY, 0.25)
  border-radius MARGIN_VERY_SMALL

  background-color rgba(THEME_COLOR_LIGHT_BACKGROUND,0.6);

  transition TRANSITION_DEFAULT

  overflow hidden

  z-index 100
}

.tw-select.error .container-select
{
  border-bottom-width 0px
  border-color THEME_COLOR_ERROR
  border-radius 5px 5px 0px 0px
}

.tw-select.focus .container-select {
  //box-shadow SHADOW_TINY
}

.tw-select .container-select select
{
  width 100%

  padding-top MARGIN_VERY_SMALL
  padding-left MARGIN_SMALLER
  padding-right @padding-left
  padding-bottom @padding-left - $margin_external

  font-size FONT_SIZE_SMALLER
  color THEME_COLOR_DARK_GREY

  background-color transparent

  border-width 0

  overflow hidden

  -webkit-appearance none

  &:focus { outline: none !important; }
}

.tw-select.hasValue .container-select select
{
    width 100%
    //padding-right MARGIN_MEDIUM_LESS
}

.tw-select .container-select option
{
  color white
  background-color THEME_COLOR_LIGHT_BACKGROUND
}

.tw-select .container-select .placeholder
{
    position absolute
    top 50%
    left MARGIN_SMALLER

    transform translateY(-50%)

    transition TRANSITION_DEFAULT

    pointer-events none

    opacity 0.8
}

.tw-select.focus .container-select .placeholder,
.tw-select.hasValue .container-select .placeholder
{
    font-size FONT_SIZE_TINY

    transform translateY(-150%)

    opacity 0.6
}

.tw-select .container-select .arrow
{
    position absolute
    top 50%
    right $margin_internal

    transform translateY(-50%)

    pointer-events none
}

.tw-select.hasValue .container-select .arrow
{
    right $margin_internal
}

</style>
