<template>
  <div
    class="card"
    @click="fetchProject(project.id)"
  >
      <div
        class="overlay"
        :style="getBackground()"
      >
        <div :style="getLogo()" />
        <span>{{ pathOr('', ['description'], project) }}</span>
      </div>
  </div>
</template>

<script>
import { pathOr } from 'ramda'
import { mapActions } from 'vuex'

export default {
  name: 'card',
  data: () => ({ pathOr }),
  props: {
    project: Object
  },
  methods: {
    ...mapActions(['fetchProject']),
    getLogo() {
      return `
        background-image: url('${pathOr('', ['project', 'logo'], this)}'); 
        background-size: contain;
        width: 200px;
        height: 160px;
        background-position: center;
        position: absolute;
        background-repeat: no-repeat;
      `
    },
    getBackground() {
      return `
        background: linear-gradient(rgba(0, 0, 0, .5), rgba(58, 58, 58, 1)), url('${pathOr('', ['project', 'image'], this)}'); 
        background-size: cover;
        background-position: top;
      `
    }
  }
}
</script>

<style lang="stylus">
  .card
    cursor pointer
    width 33.33333%
    transition-delay 0.65s
    transition color 0.2s ease-in-out, border-bottom-color 0.2s ease-in-out
    flex 1 auto

    span
      bottom 0
      color #fff
      text-transform uppercase
      align-self flex-end
      margin-left 10px
      margin-bottom 10px
      font-size 0.8em

  .overlay
    display flex
    height calc(40vh - 2em)
    background-blend-mode multiply
    align-items center
    justify-content center

  @media screen and (min-width: 768px) and (max-width: 1199px)
    .card
      width 50%

  @media screen and (min-width: 320px) and (max-width: 767px)
    .card
      width 100%
</style>
