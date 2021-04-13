<template>
  <div
    class="nav-home-btn"
    :class="{ 'nav-home-btn-clickable': !isHomePage }"
    @click="returnHome"
  >
    <CIcon v-if="!isHomePage" />
    <h1 class="nav-header">Roles & Permissions</h1>
  </div>
</template>

<script>
import CIcon from '@/components/CIcon';

export default {
  name: 'CNavHeader',

  components: {
    CIcon
  },

  computed: {
    isHomePage() {
      return this.$route.path === '/';
    }
  },

  methods: {
    returnHome() {
      if (!this.isHomePage) this.$router.push('/');
    }
  }
};
</script>

<style scoped>
.nav-home-btn {
  margin: 30px 0;
  position: relative;
  color: #000;
  text-decoration: none;
}

.nav-header {
  font-family: 'Arial Narrow';
  letter-spacing: 2px;
  font-weight: 500;
}
.nav-home-btn-clickable {
  cursor: pointer;
}
</style>
