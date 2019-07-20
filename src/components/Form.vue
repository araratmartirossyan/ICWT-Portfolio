<template>
  <div class="form">
    <form class="form--fieldset">
      <component
        v-for="({
          name,
          label,
          placeholder,
          type,
          position
        }, key) in formMock"
        :is="type"
        :key="key"
        :label="label"
        :name="name"
        :value="formFields[name]"
        :placeholder="placeholder"
        :position="position"
        :isInvalid="formErrors[name]"
        @changeValue="handleUpdateForm"
      />
      <button class="submit-btn btn" @click.prevent="$emit('submitForm')">
        Send request
      </button>
    </form>
  </div>
</template>

<script>
import Input from './Input'
import Textarea from './Textarea'

export default {
  name: 'Form',
  props: {
    formMock: {
      type: Array,
      default: () => []
    },
    formFields: {
      type: Object,
      default: () => {}
    },
    formErrors: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    Input,
    Textarea
  },
  methods: {
    handleUpdateForm(field) {
      this.$emit('updateValue', field)
    }
  }
}
</script>

<style lang="stylus">
  .form
    width 50%
    margin-top 10px

  .form--fieldset
    display flex
    border none
    flex-flow row wrap
    padding 20px

  .form-group
    margin-bottom 10px
    margin-right 10px

  form .submit-btn
    color #000
    height 2.75em
    border-radius 0
    width 30%
    float right

  @media screen and (max-width: 600px)
    .form
      width 90%

      .submit-btn
        width 100%

      .form--fieldset
        padding 0
</style>
