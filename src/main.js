import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
import Spinner from 'vue-simple-spinner';

Vue.config.productionTip = false
Vue.component("Spinner", Spinner);
new Vue({
  router,
  store,
  components: {
    Spinner
  },
  render: h => h(App)
}).$mount('#app')
