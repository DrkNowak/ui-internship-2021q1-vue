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
      const rows = this.users.map(
        ({ email = '', geos = {}, roleToAccess = {}, teams = {} }) => ({
          email,
          geography: geos.map(({ name }) => name),
          roles: roleToAccess.map(({ role }) => role?.name),
          teams: teams.map(({ name }) => name)
        })
      );

      const countedRows = rows.map((row) => {
        return Object.keys(row).reduce((countedRow, field) => {
          const rowItem = row[field];
          const isAmount = typeof rowItem === 'object' && rowItem.length > 1;

          countedRow[field] = isAmount
            ? `${rowItem.length} (${rowItem})`
            : rowItem;

          return countedRow;
        }, {});
      });

      return countedRows;
    }
  },

  beforeMount() {
    this.columnDefs = [
      {
        field: 'email'
      },
      {
        field: 'geography'
      },
      {
        field: 'roles'
      },
      {
        field: 'teams'
      }
    ];

    const columnDefsTooltips = this.columnDefs.map((column) => ({
      ...column,
      tooltipField: column.field
    }));

    this.columnDefs = columnDefsTooltips;

    this.defaultColDef = {
      resizable: true,
      sortable: true,
      filter: true,
      flex: 1
    };

    this.renderOptions = {
      pagination: true,
      paginationAutoPageSize: true,
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
