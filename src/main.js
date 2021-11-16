import Vue from 'vue'
import App from './App.vue'

import store from './store'
import router from './router'

import AddTask from "./components/AddTask"
import List from "./components/List"

Vue.component('add-task', AddTask)
Vue.component('own-list', List)

new Vue({
  el: '#app',
  router: router,
  store: store,
  components: { App },
  template: '<App/>',
  created () {
    let list = JSON.parse(localStorage.getItem('list'))
    if (list) {
      this.$store.commit('setCheckList', list);
    }
  },
  mounted () {
      document.addEventListener('keydown', e => {
        if (e.keyCode == 13 ? true : false)
          this.$store.commit('setModal', true)
      })
  }
})