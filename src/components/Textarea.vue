<template>
  <div :class="{
    'form-group': true,
    [position]: position
  }">
    <label v-if="label">
      {{label}}
    </label>
    <textarea
      :class="{
        'form-control border-input': true,
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
      rows="10"
    />
    <div
      v-show="isInvalid"
      class="invalid-message"
    >
      {{ isInvalid }}
    </div>
  </div>
</template>
<script>
export default {
  inheritAttrs: false,
  props: {
    value: [String, Number],
    label: {
      default: '',
      type: String
    },
    name: {
      type: String,
      default: ''
    },
    position: {
      default: '',
      type: String
    },
    isInvalid: {
      default: false,
      type: [Boolean, String]
    },
  }
}
</script>

<style lang="stylus">
  .is-invalid
    border 1px solid tomato

  .invalid-message
    color tomato
    font-size 0.8rem

  textarea
    background #34363b
    border 0
    border-radius 0
    color #a0a0a1
    display block
    outline 0
    padding 1em
    text-decoration none
    margin-top 10px
    width 100%

    &:focus
      border 2px solid #d23232
</style>
