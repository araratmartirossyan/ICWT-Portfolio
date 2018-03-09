<template>
  <div
    class="panel"
    :class="{ active: show }"
  >
    <div class="inner split">
      <h2>Welcome to {{logo}}, the gentleman FrontEnd club.</h2>
      <p>{{aboutText}}</p>
      <h3>Follow me</h3>
      <icon
        iconName="faGithub"
        fontSize="lg"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { aboutText, logo } from '../helpers/bgApi'
import Icon from './Icon'

export default {
  data: () => ({
    logo,
    aboutText
  }),
  computed: mapState({
    show: state => state.uix.showMenu
  }),
  components: {
    Icon
  }
}
</script>

<style lang="stylus">
.panel
  padding 1em 4em 2em 4em
  transform translateY(100vh)
  transition transform 0.5s ease
  -webkit-overflow-scrolling: touch
  background rgba(36, 38, 41, 0.975)
  bottom 4em
  left 0
  max-height calc(80vh - 4em)
  overflow-y auto
  position fixed
  width 100%
  z-index 98

  h2, h3
    color #fff
    font-weight 400

  p
    color #a0a0a1
    margin 0 0 2em 0
    width 75%
    -webkit-margin-after 0

.active
  transform translateY(1px)

.inner
  margin 0 auto
  max-width 100%
  width 75em

  .split
    display flex

    div
      margin-left 4em
      width 50%

.closer
  transition opacity 0.2s ease-in-out
  background-position center
  background-repeat no-repeat
  background-size  3em
  cursor pointer
  height 5em
  opacity 0.25
  position absolute
  right 0
  top 0
  width 5em
  z-index 2

  &:hover
    opacity 1


@media screen and (max-width: 1280px) {
  .panel {
    padding: 1em 3em 1em 3em;
  }

  .panel > .inner.split > div {
    margin-left: 3em;
  }

  .panel > .closer {
    background-size: 2.5em;
    background-position: 75% 25%;
  }
}

@media screen and (max-width: 980px) {
  .panel > .inner.split {
    -moz-flex-direction: column;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  .panel > .inner.split > div {
    margin-left: 0;
    width: 100%;
  }
}

@media screen and (max-width: 736px) {
  .panel {
    transform: translateY(-100vh);
    padding: 4em 2em 2em 2em;
    bottom: auto;
    top: calc(4em - 1px);
  }

  .panel.active {
    transform: translateY(0);
  }
}
</style>
