<template>
  <div id="app">
    <div class="text-center">
      <v-dialog v-model="dialog" width="1000">
        <template v-slot:activator="{ on, attrs }">
          <v-btn dark v-bind="attrs" v-on="on"> add Role </v-btn>
        </template>

        <v-card class="modal-dialog">
          <v-card-title> Add role and permissions </v-card-title>
          <div v-if="geos" class="v-card-container">
            <v-select
              v-model="newRole.geos"
              return-object
              class="select"
              :items="geos"
              item-text="name"
              item-value="id"
              label="Geos"
            ></v-select>
            <v-text-field
              v-model="newRole.name"
              label="Role name"
              required
            ></v-text-field>
          </div>

          <v-container v-if="formData" fluid class="perm-container">
            <div v-for="(perms, permName) in formData" :key="permName">
              <v-checkbox
                v-for="permission in perms"
                :key="permission.name"
                v-model="newRole[permName]"
                :value="permission"
                :label="permission.name"
              ></v-checkbox>
            </div>
          </v-container>

          <p>{{ newRole }}</p>

          <v-card-actions>
            <v-spacer />
            <v-btn text @click="dialog = false"> Cancel </v-btn>
            <v-btn text :disabled="!isFulfilled" @click="confirmForm">
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      dialog: false,
      rolesPerms: {},
      newRole: {}
    };
  },

  computed: {
    ...mapGetters('roles', { roles: 'getRoles' }),

    geos() {
      const { geos } = this.roles;
      return geos;
    },

    formData() {
      const { orderTypes, salesOrganizations, businessTypes } = this.roles;

      return { orderTypes, salesOrganizations, businessTypes };
    },

    isFulfilled() {
      return (
        Object.keys(this.newRole).length === Object.keys(this.roles).length + 1
      );
    }
  },

  async mounted() {
    this.fetchRoles();
  },

  methods: {
    ...mapActions('roles', ['fetchRoles']),
    confirmForm() {
      const {
        name,
        geos,
        orderTypes,
        salesOrganizations,
        businessTypes
      } = this.newRole;

      const desiredFormat = {
        name: name,
        geos: { id: geos.id },
        orderTypes: { id: orderTypes.id },
        salesOrganizations: { id: salesOrganizations.id },
        businessTypes: { id: businessTypes.id }
      };

      console.log(desiredFormat);

      this.dialog = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.modal-dialog {
  padding: 10px;
}

.v-card-container {
  display: flex;
  justify-content: space-around;
}

.select {
  flex: 0.3;
}

.perm-container {
  display: flex;
  justify-content: space-between;
}
</style>
