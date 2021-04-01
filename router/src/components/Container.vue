<template>
  <div class="container">
    <Roles />
    <CNav><router-view /></CNav>
  </div>
</template>

<script>
import CNav from '@/components/CNav';
import Roles from '@/components/Roles';

export default {
  name: 'App',

  components: {
    CNav,
    Roles
  }
};
</script>

<style scoped>
.container {
  margin: 0 10%;
}
</style>
