<template>
  <div class="home">
    <Columns
      :headers="computedData.headers"
      :sorted-column="sortedColumn"
      :sort-order="sortOrder"
      @columnHandler="sortByColumnName"
    />
    <Rows :rows-content="computedData.content" />
  </div>
</template>

<script>
import Columns from '@/components/Columns';
import Rows from '@/components/Rows';
import { columnDefs, rowData } from '@/TableConfig';
import sortOrderNames from '@/common/sortOrderNames';

export default {
  name: 'Home',

  components: {
    Columns,
    Rows
  },

  data() {
    return {
      sortOrder: sortOrderNames.DEFAULT,
      sortedColumn: '',
      columnDefs: columnDefs,
      rowData: rowData,
      rowDataCopy: [...rowData]
    };
  },

  computed: {
    computedData() {
      const headers = this.columnDefs.map((element) => Object.values(element));

      return {
        headers,
        content: this.rowDataCopy.map((row) =>
          columnDefs.map((key) => row[key.field])
        )
      };
    }
  },

  methods: {
    sortByColumnName(columnName) {
      switch (true) {
        case this.sortOrder === sortOrderNames.DEFAULT ||
          this.sortedColumn !== columnName:
          this.sortOrder = sortOrderNames.ASC;
          this.rowDataCopy.sort((firstItem, secondItem) =>
            !isNaN(firstItem[columnName]) && !isNaN(secondItem[columnName])
              ? firstItem[columnName] - secondItem[columnName]
              : firstItem[columnName].localeCompare(secondItem[columnName])
          );
          break;

        case this.sortOrder === sortOrderNames.DESC:
          this.sortOrder = sortOrderNames.DEFAULT;
          this.rowDataCopy = [...this.rowData];
          break;

        case this.sortOrder === sortOrderNames.ASC:
          this.sortOrder = sortOrderNames.DESC;
          this.rowDataCopy.reverse();
          break;
      }

      this.sortedColumn = columnName;
    }
  }
};
</script>
