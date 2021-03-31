<template>
  <div class="cars">
    <div class="cars__table cars__table--headers">
      <div
        v-for="[columnName, sortable] in headers"
        :key="columnName"
        class="cars__header"
        :class="{ 'cars__header--sortable': sortable }"
        @click="sortByColumnName(columnName, sortable)"
      >
        <p>
          {{ columnName }}
        </p>
        <i
          class="fas"
          :class="{ [assignSortClass]: sortedColumn === columnName }"
        ></i>
      </div>
    </div>
  </div>
</template>

<script>
import sortOrderNames from '@/common/sortOrderNames';

export default {
  name: 'Columns',

  props: {
    headers: {
      type: Array,
      default: () => []
    },

    sortedColumn: {
      type: String,
      default: ''
    },

    sortOrder: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      classes: {
        asc: 'fa-chevron-up',
        desc: 'fa-chevron-down'
      }
    };
  },

  computed: {
    assignSortClass() {
      const { ASC, DESC } = sortOrderNames;

      switch (this.sortOrder) {
        case ASC:
          return this.classes.asc;
        case DESC:
          return this.classes.desc;
        default:
          return '';
      }
    }
  },

  methods: {
    sortByColumnName(header, sortable) {
      if (sortable) {
        this.$emit('sortByColumnName', header);
      }
    }
  }
};
</script>

<style>
.cars__table {
  width: 50%;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  justify-items: center;
  border: 1px solid black;
  border-top: none;
}
</style>

<style scoped>
.cars__table--headers {
  background-color: #ccc;
  border-top: 1px solid black;
}

.cars__header {
  display: flex;
  align-items: center;
}

.cars__header--sortable {
  cursor: pointer;
  user-select: none;
}
</style>
