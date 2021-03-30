<template>
  <div>
    <h2 class="stat-name">{{ name }}</h2>
    <ul>
      <li v-for="item in details" :key="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CertainDetail',

  props: {
    name: {
      type: String,
      default: ''
    },
    details: {
      type: Array,
      default: function() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.stat-name {
  margin-bottom: 10px;
  padding-bottom: 5px;
  border-bottom: 1px solid black;
}
</style>
