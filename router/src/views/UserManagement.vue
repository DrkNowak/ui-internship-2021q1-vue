<template>
  <div class="user-management" @click="showUsers"></div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'UserManagement',

  computed: {
    ...mapGetters({ getUsers: 'users/getUsers' })
  },

  async mounted() {
    this.fetchUsers();
  },

  methods: {
    showUsers() {
      console.log(this.getUsers);
    },

    ...mapActions({ fetchUsers: 'users/fetchUsers' })
  }
};
</script>

<style scoped>
.user-management {
  width: 400px;
  height: 400px;
  background-color: red;
}
</style>
