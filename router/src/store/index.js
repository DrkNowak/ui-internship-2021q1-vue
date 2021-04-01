import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isRoute: false
  },

  mutations: {
    CLICK_ROUTE(state, payload) {
      state.isRoute = payload;
    }
  }
});
