<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-body">
            <slot name="body">
              <div class="left-part">
                <img :src="project.image" alt="test-image">
              </div>
              <div class="right-part">
                <div class="close-icon">
                  <fa
                    :icon="closeIcon"
                    @click="clickOutside"
                  />
                </div>
                <div class="_content-wrapper">
                  <h2 class="right-part__title"> {{ project.title }} </h2>
                  <p class="right-part__text"> {{ project.text }} </p>
                </div>
              </div>
            </slot>
          </div>

        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { faTimes } from '@fortawesome/fontawesome-free-solid'
import { mapMutations, mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState({
      show: state => state.uix.showModal,
      modal: state => state.uix.modalName
    }),
    ...mapGetters(['project']),
    closeIcon: () => faTimes
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
  .close-icon
    position absolute
    top 20px
    right 20px

    svg
      cursor pointer

      &:hover
        color #7b1212

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
    width calc(100% - 155px)
    height 86vh
    margin -55px auto auto auto
    padding 0
    border-radius 2px
    background rgba(31, 34, 36, 0.925)
    box-shadow 0 2px 8px rgba(0, 0, 0, .33)
    transition all .3s ease

  .modal-header h3
    margin-top 0
    color #fff

  .left-part
    float left
    width 50%
    height 86vh
    overflow-y scroll
    overflow-x hidden
    position relative

  .left-part img
    width 100%
    min-height 100%

  .right-part
    float right
    width 50%
    height 86vh
    display flex
    flex-direction column
    justify-content center
    align-items center
    overflow-y scroll
    overflow-x hidden
    position relative

  ._content-wrapper
    max-width 80%

  .right-part__title
    font-size 32px

  .right-part__text
    font-size 22px

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

  @media screen and (min-width: 320px) and (max-width: 767px)
    .close-icon
      position fixed
      top 25px
      background #000
      right 20px
      padding 10px
      border-radius 5689px

  @media screen and (min-width: 500px) and (max-width: 768px)
    .modal-container
      width calc(100% - 55px)

    .left-part
      float none
      width 100%
      height 70vh
      overflow-y scroll
      overflow-x hidden
      position relative

    .right-part
      float none
      width 100%
      height 16vh

    ._content-wrapper
      height calc(100% - 10px)
      padding 10px 0

    .right-part__title
      font-size 22px

    .right-part__text
      font-size 16px
      margin-bottom 20px
  @media screen and (min-width: 320px) and (max-width: 500px)
    .modal-container
      width calc(100% - 15px)

    .left-part
      float none
      width 100%
      height 60vh
      overflow-y scroll
      overflow-x hidden
      position relative

    .right-part
      float none
      width 100%
      height 26vh

    ._content-wrapper
      height calc(100% - 10px)
      padding 10px 0

    .right-part__title
      font-size 20px

    .right-part__text
      font-size 14px
      margin-bottom 20px

</style>
