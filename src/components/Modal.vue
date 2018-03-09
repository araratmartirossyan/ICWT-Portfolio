<template>
  <transition name="modal">
    <div class="modal-mask" @click="clickOutside">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              {{project.tile}}
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              {{project.text}}
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapMutations, mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState({
      show: state => state.uix.showModal,
      modal: state => state.uix.modalName
    }),
    ...mapGetters({
      project: 'project'
    })
  },
  methods: {
    ...mapMutations({
      handleShowModal: 'showModal',
      clickOutside: 'clickOutside'
    })
  }
}
</script>

<style lang="stylus" scoped>
  .modal-mask
    position fixed
    z-index 9998
    top 0
    left 0
    width 100%
    height 100%
    background-color rgba(0, 0, 0, .5)
    display table
    transition opacity .3s ease
    color #fff

  .modal-wrapper
    display table-cell
    vertical-align middle

  .modal-container
    width 300px
    margin 0px auto
    padding 20px 30px
    border-radius 2px
    background rgba(31, 34, 36, 0.925)
    box-shadow 0 2px 8px rgba(0, 0, 0, .33)
    transition all .3s ease
    font-family Helvetica, Arial, sans-serif

  .modal-header h3
    margin-top 0
    color #fff

  .modal-body
    margin 20px 0

  .modal-default-button
    float right

  .modal-enter
    opacity 0

  .modal-leave-active
    opacity 0

  .modal-enter .modal-container,
  .modal-leave-active .modal-container
    -webkit-transform scale(1.1)
    transform scale(1.1)
</style>
