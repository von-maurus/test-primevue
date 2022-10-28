import Vue from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
// import DataTable from 'primevue/datatable';
// import TreeTable from 'primevue/treetable';
// import Column from 'primevue/column';
// import ColumnGroup from 'primevue/columngroup';     //optional for column grouping
// import Row from 'primevue/row';                     //optional for row
import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/saga-blue/theme.css"
import 'primeicons/primeicons.css';

Vue.use(PrimeVue);
// Vue.use(PrimeVue);
// Vue.component("DataTable", DataTable);
// Vue.component("ColumnComponent", Column);
// Vue.component("TreeTable", TreeTable);
// Vue.component("ColumnGroup", ColumnGroup);
// Vue.component("RowComponent", Row);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
