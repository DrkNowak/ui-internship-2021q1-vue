import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import apiCall from '@/mixins/apiCall';
import outclick from '@/directives/OutClick';
import vuetify from './plugins/vuetify';

Vue.mixin(apiCall);
Vue.directive('outclick', outclick);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount('#app');
