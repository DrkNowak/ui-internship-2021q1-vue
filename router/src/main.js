import Vue from 'vue';

import apiCall from '@/mixins/apiCall';
import vuetify from './plugins/vuetify';

import App from './App.vue';
import router from './router';
import store from './store/index';

Vue.mixin(apiCall);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount('#app');
