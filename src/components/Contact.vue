<template>
  <div class="contact-container">
    <h2 v-if="!formSuccess">Let's Talk</h2>
    <h2 v-else>Thank you</h2>
    <ContactForm
      v-if="!formSuccess"
      :formMock="formMock"
      :formFields="contactForm"
      :formErrors="formErrors"
      @updateValue="handleSetForm"
      @submitForm="handleSendForm"
    />
    <div class="contact-success"  v-else>
      <h2>Our manager will contact you soon.</h2>
    </div>

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
      formErrors: ({ contactForm }) => contactForm.formErrors,
      formSuccess: ({ contactForm }) => contactForm.formSuccess
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

