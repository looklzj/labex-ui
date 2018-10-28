import Vue from 'vue'
import App from './App.vue'
import router from './examples/router'
import demoBlock from './examples/components/demo-block.vue'

import Example from './Example.vue'

import LabexUI from './index.js'

Vue.component('demo-block', demoBlock)
Vue.use(LabexUI)

new Vue({
  el: '#app',
  router,
  render: h => h(Example)
})
