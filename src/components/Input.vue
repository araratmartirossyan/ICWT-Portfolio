<template>
  <div :class="{
    'form-group': true,
    [position]: position
  }">
    <label v-if="label">{{label}}</label>
    <input
      :class="{
        'form-control': true,
        'is-invalid': isInvalid
      }"
      v-bind="$attrs"
      :name="name"
      :value="value"
      @input="$emit('changeValue', {
        value: $event.target.value,
        key: name
      })"
      v-on="$listeners"
      autocomplete="off"
    />
    <slot />
    <div
      v-show="isInvalid"
      class="invalid-message"
    >{{ isInvalid }}</div>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    value: [String, Number],
    isInvalid: {
      default: false,
      type: [Boolean, String]
    },
    label: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    position: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="stylus">
  .is-invalid
    border 1px solid tomato

  .invalid-message
    color tomato
    font-size 0.8rem

  label
    color #fff
    margin-bottom 10px

  input
    background #34363b
    border 0
    border-radius 0
    color #a0a0a1
    display block
    outline 0
    padding 0 1em
    margin-top 10px
    text-decoration none
    width 100%
    height 2.75em

    &:focus
      border 2px solid #d23232
      

  .md-4
    width 33%

  .md-6
    width 50%

  .md-12
    width 100%
</style>

