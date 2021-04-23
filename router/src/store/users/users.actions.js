import userService from '@/services/userService';

export default {
  async fetchUsers({ commit }) {
    const { data = {} } = (await userService.getUsers()) || {};

    commit('SET_USER', data);
  },

  async deleteUser({ commit }, id) {
    await userService.deleteUser(id);
  }
};
