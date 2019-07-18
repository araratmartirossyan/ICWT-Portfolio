<template>
  <div class="footer">
    <h2>{{logo}}</h2>
    <a @click="handleClick">
      {{ $route.path === '/' ? 'Contact us' : 'Portfolio' }}
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
    handleClick() {
      const { path } = this.$route
      const route = path === '/' ? '/contact' : '/'
      this.$router.push(route)
    },
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
      border 1px solid
      width 10%
      height 40px
      margin-right 10px
      border-radius 4px
      display flex
      justify-content center
      align-items center
      cursor pointer

      &:hover
        background #fff
        color #000

      svg
        vertical-align bottom
        margin-left 5px
</style>
