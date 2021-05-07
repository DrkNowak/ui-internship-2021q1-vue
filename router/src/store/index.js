import Vue from 'vue';
import Vuex from 'vuex';
import users from './users/index';
import roles from './roles/index';

Vue.use(Vuex);

export default new Vuex.Store({ modules: { users, roles } });
