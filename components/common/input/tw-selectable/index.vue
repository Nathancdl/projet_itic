<template>
  <div class="selectable" :class="{ activated: isActivated, selected: isSelected }" @click="onChange">
    <div class="background"></div>
    <div class="label">{{ label }}</div>
    <div class="info">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    isActivated: Boolean,
    isSelected: Boolean,
    label: String,
  },
  data: function () {
    return {};
  },
  methods: {
    onChange: function () {
      if (this.isActivated) {
        this.$emit("change");
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
@require '~assets/style/imports/index.import.styl';
</style>
