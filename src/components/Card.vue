<template>
  <div class="card" @click="fetchProject(project.id)">
    <div class="overlay" :style="getBackground()">
      <span>{{pathOr('', ['text'], project)}}</span>
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
    getBackground() {
      return `
        background: url('${pathOr('', ['project', 'image'], this)}'), linear-gradient(white, rgba(58, 58, 58, 0.3215686274509804)); 
        background-size: cover;
        background-position: 100% 100%;
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
</style>
