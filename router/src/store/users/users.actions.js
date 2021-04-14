import userService from '@/services/userService';

export default {
  async fetchUsers({ commit }) {
    try {
      const { data = {} } = (await userService.getUsers()) || {};

      commit('SET_USER', data);
    } catch (error) {
      console.log(error);
      this.isError = !this.isError;
    } finally {
      this.isLoading = false;
    }
  }
};
