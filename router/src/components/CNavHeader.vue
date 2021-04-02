<template>
  <div>
    <router-link v-if="isActive" :to="'/'" class="nav-link">
      <CIcon />
      <h1 class="nav-header">Roles & Permissions</h1>
    </router-link>
    <h1 v-else class="nav-header">Roles & Permissions</h1>
  </div>
</template>

<script>
import CIcon from '@/components/CIcon';

export default {
  name: 'Roles',

  components: {
    CIcon
  },
  props: {
    isActive: {
      type: Boolean
    }
  }
};
</script>

<style scoped>
.nav-link {
  position: relative;
  text-decoration: none;
  color: #000;
}

.nav-header {
  font-family: 'Arial Narrow';
  font-weight: 500;
}
</style>
