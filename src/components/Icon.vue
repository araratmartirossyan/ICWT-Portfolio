<template>
  <div class="follow">
    <fa
      :icon="icon()"
      :size="fontSize"
    />
  </div>
</template>

<script>
import icons from '@fortawesome/fontawesome-free-brands'

export default {
  props: {
    iconName: String,
    fontSize: String
  },
  methods: {
    icon() {
      return icons[this.iconName]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .follow
    display inline-flex
    color #fff
</style>
