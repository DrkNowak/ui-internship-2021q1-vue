<template>
  <div>
    <AgGridVue
      class="ag-theme-alpine grid"
      :column-defs="columnDefs"
      :row-data="rowData"
      :grid-options="renderOptions"
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
      renderOptions: {}
    };
  },

  computed: {
    ...mapGetters('users', { users: 'getUsers' }),

    rowData() {
      const rows = this.users.map(({ email, geos, roleToAccess, teams }) => ({
        email: email,
        geography: geos.map((geoItem) => geoItem?.name),
        roles: roleToAccess.map((roleItem) => roleItem?.role?.name),
        teams: teams.map((teamItem) => teamItem?.name)
      }));

      const countedRows = rows.map((row) => {
        return Object.keys(row).reduce((countedRow, field) => {
          const isAmount =
            typeof row[field] === 'object' && row[field].length > 1;

          isAmount
            ? (countedRow[field] = `${row[field].length} (${row[field]})`)
            : (countedRow[field] = row[field]);
          return countedRow;
        }, {});
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

    this.renderOptions = {
      pagination: 'true',
      paginationAutoPageSize: 'true',
      defaultColDef: this.defaultColDef
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
