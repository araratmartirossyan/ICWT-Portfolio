import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

const GlobalComponents = {
  install(Vue) {
    Vue.component('fa', FontAwesomeIcon)
  }
}

export default GlobalComponents
