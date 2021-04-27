<template>
  <div class="text-xs-center" data-app>
    <v-menu offset-y :close-on-click="closeOnClick">
      <template v-slot:activator="{ on }">
        <i class="fas fa-ellipsis-v" v-on="on" />
      </template>
      <v-list>
        <v-list-item
          v-for="{ title } in items"
          :key="title"
          @click="removeUser"
        >
          <v-list-item-title>{{ title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import Vue from 'vue';
import { mapActions } from 'vuex';

export default Vue.extend({
  data() {
    return {
      items: [{ title: 'Delete' }],
      closeOnClick: true
    };
  },

  methods: {
    removeUser() {
      this.deleteUser(this.params.data.id);
      this.fetchUsers();
    },

    ...mapActions('users', ['deleteUser', 'fetchUsers'])
  }
});
</script>
