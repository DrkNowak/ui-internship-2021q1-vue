import pl from '@/assets/i18n/pl';
import en from '@/assets/i18n/en';
import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

export default new VueI18n({
  locale: localStorage.getItem('lang') || 'en',

  messages: {
    en: en,
    pl: pl
  }
});
