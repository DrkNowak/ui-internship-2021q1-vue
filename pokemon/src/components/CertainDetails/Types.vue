<template>
  <div>
    <h1>{{ detail }}</h1>
    <ul class="Types">
      <li v-for="item in items" :key="item.type.name">{{ item.type.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Types',

  props: {
    detail: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: function() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.items {
  display: flex;
  flex-direction: column;
}
</style>
