import userService from '@/services/userService';

export default {
  async fetchUsers({ commit }) {
    try {
      const { data = {} } = (await userService.getUsers()) || {};

      commit('SET_USER', data);
    } catch (err) {
      console.log(err);
    }
  },

  async deleteUser({ commit }, id) {
    try {
      await userService.deleteUser(id);
    } catch (err) {
      console.log(err);
    }
  }
};
