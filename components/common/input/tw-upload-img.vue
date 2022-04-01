<template>
  <label class="tw-upload-img" :class="{ hasImage: data, error: hasError }">
    <ValidationProvider v-slot="{ validate, errors }" ref="provider" :name="name" :rules="validation">
      <input type="file" @change="previewImage" />
    </ValidationProvider>
    <img v-if="currentImageURL" class="background current" :src="currentImageURL" alt="Image actuelle" />
    <img class="background new" :src="data" alt="Nouvelle image" />
    <div class="layer layer-opacity"></div>
    <div class="container container-intel">
      <img class="icon icon_32x32" src="/icons/svg/camera.svg" alt="" />
      <div class="label">{{ label }}</div>
    </div>
  </label>
</template>

<script>
export default {
  name: "TwUploadImg",
  props: {
    hasError: Boolean,
    currentImageURL: String,
    label: String,
    name: String,
    validation: String
  },
  data() {
    return {
      meta: {},
      data: ""
    };
  },
  async mounted() {
    if (this.meta && this.data) {
      this.$emit("set:fileObject", this.meta);
      this.$emit("input", this.data);
    }
    await this.$refs.provider.validate();
  },
  methods: {
    async previewImage (event) {
      const { valid } = await this.$refs.provider.validate(event);
      if (valid) {
        let input = event.target;
        if (input.files && input.files[0]) {
          let reader = new FileReader();
          reader.onload = (e) => {
            this.meta = input.files[0];
            this.data = e.target.result;
            this.$emit("set:fileObject", this.meta);
            this.$emit("input", this.data);
          };

          reader.readAsDataURL(input.files[0]);
        }
      } else {
        this.$toast.error("Une photo jpeg/png/webp de 10Mb maximum est autorisée !");
      }
    }
  },

};
</script>

<style lang="stylus" scoped>
@require '~assets/style/imports/fonts/common.import.styl'
@require '~assets/style/imports/theme/colors.import.styl'
@require '~assets/style/imports/theme/transitions.import.styl'
@require '~assets/style/imports/space/margins.import.styl'
@require '~assets/style/imports/space/common.import.styl'

.tw-upload-img {
  position absolute
  top 0
  left @top
  right @top
  bottom @top

  user-select none

  cursor pointer

  overflow hidden
}

.tw-upload-img input {
  display none
}

.tw-upload-img .background {
  position absolute
  top 0
  left @top
  display none
  width 100%
  height @width

  object-fit cover
}

.tw-upload-img .background.current
  display block

.tw-upload-img.hasImage .background {
  display block
}

.tw-upload-img .layer {
  position absolute
  top 0
  left @top
  right @top
  bottom @top

  transition opacity TRANSITION_DEFAULT

  opacity 0.5
}

.tw-upload-img:hover .layer {
  opacity 0.75
}

.tw-upload-img.hasImage .layer {
  opacity 0
}

.tw-upload-img.hasImage:hover .layer {
  opacity 0.75
}

.tw-upload-img .layer-opacity {
  background-color rgba(black, 0.75)
}

.tw-upload-img .container-intel {
  position absolute
  top 0
  left @top
  right @top
  bottom @top

  display flex
  flex-direction column
  justify-content center
  align-items center

  color white

  transition opacity TRANSITION_DEFAULT
}

.tw-upload-img.hasImage .container-intel {
  opacity 0
}

.tw-upload-img.hasImage:hover .container-intel {
  opacity 1
}

.tw-upload-img .container-intel .label {
  display block
  margin-top MARGIN_TINY
}

.tw-upload-img:hover .container-intel {
  position absolute
  top 0
  left @top
  right @top
  bottom @top

  display flex
  justify-content center
  align-items center
}

.tw-upload-img .container-error {
  display none
}
</style>
