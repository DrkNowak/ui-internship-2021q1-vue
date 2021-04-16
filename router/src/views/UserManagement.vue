<template>
  <div>
    <AgGridVue
      class="ag-theme-alpine grid"
      :column-defs="columnDefs"
      :row-data="rowData"
      :grid-options="gridOptions"
      :pagination="true"
      :pagination-auto-page-size="true"
      :suppress-auto-size="true"
      :default-col-def="defaultColDef"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { AgGridVue } from 'ag-grid-vue';

export default {
  name: 'UserManagement',

  components: {
    AgGridVue
  },

  data() {
    return {
      columnDefs: [],
      gridOptions: {}
    };
  },

  computed: {
    ...mapGetters('users', { users: 'getUsers' }),

    rowData() {
      const rows = this.users.map((itemField) => ({
        email: itemField?.email,
        geography: itemField?.geos.map((geoItem) => geoItem?.name),
        roles: itemField?.roleToAccess.map((roleItem) => roleItem?.role?.name),
        teams: itemField?.teams.map((teamItem) => teamItem?.name)
      }));

      const countedRows = rows.map((row) => {
        const countedRow = {};

        Object.keys(row).forEach((field) => {
          const isAmount =
            typeof row[field] === 'object' && row[field].length > 1;

          isAmount
            ? (countedRow[field] = `${row[field].length} (${row[field]})`)
            : (countedRow[field] = row[field]);
        });

        return countedRow;
      });

      return countedRows;
    }
  },

  beforeMount() {
    this.columnDefs = [
      {
        field: 'email',
        tooltipField: 'email'
      },
      {
        field: 'geography',
        tooltipField: 'geography'
      },
      {
        field: 'roles',
        tooltipField: 'roles'
      },
      {
        field: 'teams',
        tooltipField: 'teams'
      }
    ];

    this.defaultColDef = {
      resizable: true,
      sortable: true,
      filter: true,
      flex: 1
    };
  },

  async mounted() {
    this.fetchUsers();
  },

  methods: {
    showUsers() {
      console.log(this.users);
    },

    ...mapActions('users', ['fetchUsers'])
  }
};
</script>

<style scoped>
.grid {
  height: 600px;
}
</style>
