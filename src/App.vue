<template>
  <div id="app" >
    <Modal v-if="showModal" />
    <div :class="{ blur: showModal || showMenu  }">
      <router-view/>
    </div>
    <div :class="{ blur: showModal }">
      <Menu :click-outside="clickOutside" />
      <BodyFooter />
    </div>
    <Preloader v-if="isLoading" />
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import BodyFooter from '@/components/Footer'
import Menu from '@/components/Menu'
import Modal from '@/components/Modal'
import Preloader from '@/components/Preloader'

export default {
  name: 'App',
  components: {
    BodyFooter,
    Menu,
    Modal,
    Preloader
  },
  computed: mapState({
    showModal: state => state.uix.showModal,
    showMenu: state => state.uix.showMenu,
    isLoading: state => state.uix.isLoading
  }),
  methods: {
    ...mapMutations(['clickOutside']),
    ...mapActions(['fetchProjects'])
  },
  watch: {
    showModal() {
      const body = document.getElementById('body')
      const style = this.showModal ? 'overflow: hidden' : 'overflow: auto'
      body.setAttribute('style', style)
    }
  },
  mounted() {
    this.fetchProjects()
  }
}
</script>

<style>
  @import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,600,700");

  body {
    margin-bottom: 4em;
  }

  #app {
    font-family: 'Source Sans Pro', Arial, sans-serif;
    margin-bottom: 2em;
  }

  .blur {
    filter: blur(2px);
    transition: ease .5s;
  }
</style>
