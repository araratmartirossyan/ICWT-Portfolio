import Vue from 'vue'
import firebase from 'firebase'
import 'normalize.css'
import App from './App'
import GlobalComponents from './utils/globalComponents'
import GlobalDirectives from './utils/globalDirectives'
import router from './router'
import store from './stores/index'

Vue.config.productionTip = false

Vue.use(GlobalComponents)
Vue.use(GlobalDirectives)

const config = {
  apiKey: 'AIzaSyBGUFqcgteKTi2J41jNmhZV4o_EcbA39Vc',
  authDomain: 'portfolio-2efc6.firebaseapp.com',
  databaseURL: 'https://portfolio-2efc6.firebaseio.com',
  projectId: 'portfolio-2efc6',
  storageBucket: 'portfolio-2efc6.appspot.com',
  messagingSenderId: '512385115184'
}
firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
