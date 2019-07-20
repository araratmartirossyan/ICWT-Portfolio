<template>
  <div class="contact-container">
    <h2>Let's Talk</h2>
    <ContactForm
      :formMock="formMock"
      :formFields="contactForm"
      :formErrors="formErrors"
      @updateValue="handleSetForm"
      @submitForm="handleSendForm"
    />
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import { formMock } from '@/mocks/contactForm.mock'
import ContactForm from './Form'

export default {
  name: 'Contact Page',
  components: {
    ContactForm
  },
  data: () => ({
    formMock
  }),
  computed: {
    ...mapState({
      contactForm: ({ contactForm }) => contactForm.contactForm,
      formErrors: ({ contactForm }) => contactForm.formErrors
    })
  },
  methods: {
    ...mapMutations([
      'handleSetForm'
    ]),
    ...mapActions([
      'handleSendForm'
    ])
  }
}
</script>

<style lang="stylus">
  .contact-container
    display flex
    align-items center
    flex-direction column

    h2
      color #fff
      font-size 3em
</style>

