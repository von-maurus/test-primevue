import Vue from 'vue'
import App from './App.vue'
// import PrimeVue from 'primevue/config';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/saga-blue/theme.css"

// Vue.use(PrimeVue);
Vue.component("DataTable", DataTable);
Vue.component("ColumnComponent", Column);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
