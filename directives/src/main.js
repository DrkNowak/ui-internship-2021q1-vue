import Vue from 'vue';
import App from './App.vue';
import router from './router';
import outclick from './directives/OutClick';

Vue.config.productionTip = false;

Vue.directive('outclick', outclick);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
