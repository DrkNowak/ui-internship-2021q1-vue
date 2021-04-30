<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="1000">
      <template v-slot:activator="{ on, attrs }">
        <v-btn dark v-bind="attrs" v-on="on"> add Role </v-btn>
      </template>

      <v-card class="modal-dialog">
        <v-btn icon dark color="#000" class="close-btn" @click="dialog = false">
          <v-icon>mdi-close</v-icon></v-btn
        >
        <div class="form-header">
          <h3>Add role & permissions</h3>
        </div>

        <div v-if="geos" class="card-container">
          <v-select
            v-model="newRole.geos"
            :items="geos"
            outlined
            return-object
            class="card-container__geos"
            item-text="name"
            item-value="id"
            label="Geos"
          ></v-select>
          <v-text-field
            v-model="newRole.name"
            outlined
            :rules="[rules.required]"
            label="Role name"
            class="card-container__role-name"
          />
        </div>

        <v-container v-if="formData" fluid class="perm-container">
          <div v-for="(perms, permName) in formData" :key="permName">
            <h3 class="perm-container__headers">
              {{ checkboxHeaders[permName] }}
            </h3>
            <v-checkbox
              v-for="permission in perms"
              :key="permission.name"
              v-model="newRole[permName]"
              :value="permission"
              :label="`${permission.sapId} - ${permission.name}`"
            ></v-checkbox>
          </div>
        </v-container>

        <v-card-actions>
          <v-spacer />
          <v-btn outlined rounded text @click="dialog = false"> Cancel </v-btn>
          <v-btn
            outlined
            rounded
            text
            :disabled="!isFulfilled"
            @click="confirmForm"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      dialog: false,
      checkboxHeaders: {
        salesOrganizations: 'Sales Org',
        businessTypes: 'Business Type',
        orderTypes: 'Order Type'
      },
      newRole: {
        name: '',
        geos: {},
        orderTypes: [],
        salesOrganizations: [],
        businessTypes: []
      },
      rules: {
        required: (value) => !!value || 'Required.'
      }
    };
  },

  computed: {
    ...mapGetters('roles', { roles: 'getRoles' }),

    geos() {
      const { geos } = this.roles;
      return geos;
    },

    formData() {
      const { salesOrganizations, orderTypes, businessTypes } = this.roles;

      return { salesOrganizations, orderTypes, businessTypes };
    },

    isFulfilled() {
      const isFilled = Object.values(this.newRole).every((roleField) => {
        const isPlainObject =
          typeof roleField === 'object' &&
          !Array.isArray(roleField) &&
          roleField;

        return isPlainObject
          ? Object.values(roleField).length
          : roleField.length;
      });

      return isFilled;
    }
  },

  mounted() {
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

      const getIDs = (object) =>
        object.map((objectItem) => ({ id: objectItem.id }));

      const desiredFormat = {
        name,
        geos: { id: geos.id },
        orderTypes: getIDs(orderTypes),
        salesOrganizations: getIDs(salesOrganizations),
        businessTypes: getIDs(businessTypes)
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

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
}

.form-header {
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
  text-transform: uppercase;
}

.card-container {
  display: flex;

  &__geos {
    flex: 0.25;
  }

  &__role-name {
    flex: 0.4;
  }

  .v-text-field.v-text-field--enclosed {
    margin-right: 30px;
  }
}

.perm-container {
  display: flex;
  justify-content: space-between;

  &__headers {
    font-family: sans-serif;
  }
}
</style>
