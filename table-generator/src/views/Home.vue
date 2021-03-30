<template>
  <div class="home">
    <TableGen :headers="computedData.headers" :content="computedData.content" />
  </div>
</template>

<script>
import TableGen from '@/components/TableGen';

export default {
  name: 'Home',

  components: {
    TableGen
  },

  data() {
    return {
      columnDefs: [{ field: 'make' }, { field: 'model' }, { field: 'price' }],
      rowData: [
        { make: 'Toyota', price: 35000, model: 'Celica' },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 }
      ]
    };
  },

  computed: {
    computedData() {
      const headers = this.columnDefs.map((element) =>
        Object.values(element).toString()
      );
      return {
        headers,
        content: this.rowData.map((row) => headers.map((key) => row[key]))
      };
    }
  }
};
</script>
