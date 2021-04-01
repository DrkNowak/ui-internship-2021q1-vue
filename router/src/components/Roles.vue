<template>
  <h1 :class="{ test: isRoute }">Roles & Permissions</h1>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'Roles',

  computed: mapState({
    isRoute: 'isRoute'
  })
};
</script>
<style scoped>
.test {
  background-color: red;
}
</style>
