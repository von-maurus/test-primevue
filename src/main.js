import Vue from 'vue'
import App from './App.vue'
// import Buefy from 'buefy'
import { Table } from 'buefy'
import 'buefy/dist/buefy.css'

Vue.config.productionTip = false

// Vue.use(Buefy) 
Vue.use(Table) 

new Vue({
  render: h => h(App),
}).$mount('#app')
