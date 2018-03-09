<template>
  <div class="footer">
    <h2>{{logo}}</h2>
    <a @click="handleShowMenu">
      About us
      <fa :icon="icon" />
    </a>
  </div>
</template>

<script>
import { faInfoCircle } from '@fortawesome/fontawesome-free-solid'
import { mapMutations } from 'vuex'

export default {
  data: () => ({
    logo: '<InCodeWeTrust />'
  }),
  computed: {
    icon: () => faInfoCircle
  },
  methods: {
    ...mapMutations({
      handleShowMenu: 'showMenu'
    })
  }
}
</script>

<style lang="stylus">
  .footer
    background #1f2224
    height 4em
    display flex
    justify-content  space-between
    position fixed
    bottom 0
    z-index 999
    align-items center
    width 100%

    h2
      color #fff
      margin 0
      font-weight 400
      padding-left 15px

    a
      color #fff
      margin 0
      cursor pointer
      padding-right 15px

      &:hover
        color #d23232

      svg
        vertical-align: bottom;

</style>
