<template>
  <div class="home">
    <Columns
      :headers="computedData.headers"
      :sorted-column="sortedColumn"
      :sort-order="sortOrder"
      @sortByColumnName="sortByColumnName"
    />
    <Rows :rows-content="computedData.content" />
  </div>
</template>

<script>
import Columns from '@/components/Columns';
import Rows from '@/components/Rows';
import {
  columnDefs,
  rowData,
  generateColumnNames,
  generateRowContent
} from '@/TableConfig';
import sortOrderNames from '@/common/sortOrderNames';

const { DEFAULT, ASC, DESC } = sortOrderNames;
export default {
  name: 'Home',

  components: {
    Columns,
    Rows
  },

  data() {
    return {
      sortOrder: DEFAULT,
      sortedColumn: '',
      columnDefs: columnDefs,
      rowData: rowData,
      rowDataCopy: [...rowData]
    };
  },

  computed: {
    computedData() {
      const headers = generateColumnNames(this.columnDefs);
      const content = generateRowContent(this.rowDataCopy);

      return {
        headers,
        content
      };
    }
  },

  methods: {
    sortByColumnName(columnName) {
      const shouldBecomeDefault =
        this.sortOrder === DEFAULT || this.sortedColumn !== columnName;

      switch (this.sortOrder) {
        case shouldBecomeDefault ? this.sortOrder : false: {
          this.sortOrder = ASC;
          this.rowDataCopy.sort((firstRowItem, secondRowItem) => {
            const firstColumnName = firstRowItem[columnName];
            const secondColumnName = secondRowItem[columnName];

            return !isNaN(firstColumnName) && !isNaN(secondColumnName)
              ? firstColumnName - secondRowItem[columnName]
              : firstColumnName.localeCompare(secondColumnName);
          });
          break;
        }
        case DESC: {
          this.sortOrder = DEFAULT;
          this.rowDataCopy = [...this.rowData];
          break;
        }
        case ASC: {
          this.sortOrder = DESC;
          this.rowDataCopy.reverse();
          break;
        }
      }

      this.sortedColumn = columnName;
    }
  }
};
</script>
