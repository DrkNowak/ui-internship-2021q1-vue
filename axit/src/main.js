import Vue from 'vue';
import App from './App.vue';
import router from './router';
import CustomButton from './components/CustomButton';
import getLorem from './mixins/lorems';
import i18n from './i18n';

Vue.config.productionTip = true;

Vue.mixin(getLorem);
Vue.component('CustomButton', CustomButton);

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app');
