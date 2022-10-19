import Vue from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/saga-blue/theme.css"

Vue.use(PrimeVue);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
