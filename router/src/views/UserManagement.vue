<template>
  <div>
    <v-app>
      <AgGridVue
        class="ag-theme-alpine grid"
        :column-defs="columnDefs"
        :row-data="rowData"
        :grid-options="renderOptions"
      />
    </v-app>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { AgGridVue } from 'ag-grid-vue';

import TabMenu from '@/components/TabMenu';

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
        ({ id, email = '', geos = {}, roleToAccess = {}, teams = {} }) => ({
          id,
          email,
          geography: geos.map(({ name }) => name),
          roles: roleToAccess.map(({ role }) => role?.name),
          teams: teams.map(({ name }) => name)
        })
      );

      const countedRows = rows.map((row) => {
        return Object.keys(row).reduce((countedRow, field) => {
          const rowItem = row[field];
          const isAmount = Array.isArray(rowItem) && rowItem.length > 1;

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
    this.defaultColDef = {
      resizable: true,
      sortable: true,
      filter: true,
      flex: 1
    };

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
      },
      {
        cellRendererFramework: TabMenu,
        resizable: false,
        sortable: false,
        filter: false,
        singleClickEdit: true,
        flex: 0,
        width: 40
      }
    ];

    const columnDefsTooltips = this.columnDefs.map((column) => ({
      ...column,
      tooltipField: column.field
    }));

    this.columnDefs = columnDefsTooltips;

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
    ...mapActions('users', ['fetchUsers'])
  }
};
</script>

<style scoped>
.grid {
  height: 600px;
}
</style>
