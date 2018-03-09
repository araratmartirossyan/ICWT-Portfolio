<template>
  <div class="container">
    <card
      v-for="(index, key) in projects"
      :key="key"
      :project="index"
    >
    </card>
  </div>
</template>

<script>
import Card from '@/components/Card'
import { mapGetters } from 'vuex'

export default {
  name: 'Portfolio',
  components: {
    Card
  },
  computed: {
    ...mapGetters(['projects'])
  }
}
</script>

<style lang="stylus">
    .container
      display flex
      justify-content space-around
      flex-wrap wrap
</style>
