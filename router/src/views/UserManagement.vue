<template>
  <div class="user-management" @click="showUsers"></div>
</template>

<script>
export default {
  name: 'UserManagemenet',

  computed: {
    getUsers() {
      return this.$store.getters.getUsers;
    }
  },

  async mounted() {
    this.$store.dispatch('fetchUsers');
  },

  methods: {
    showUsers() {
      console.log(this.getUsers);
    }
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
