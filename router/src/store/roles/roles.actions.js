import roleService from '@/services/roleService';

export default {
  async fetchRoles({ commit }) {
    try {
      const { data = {} } = (await roleService.getRoles()) || {};

      commit('SET_ROLE', data);
    } catch (err) {
      console.log(err);
    }
  }
};
