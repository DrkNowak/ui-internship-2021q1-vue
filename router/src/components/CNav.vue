<template>
  <div>
    <nav>
      <router-link
        v-for="{ name, path } in routes"
        :key="name"
        :to="path"
        class="nav-link"
        @click.native="updateHeaderAfterRoute"
        >{{ name }}
      </router-link>
    </nav>
    <slot />
  </div>
</template>

<script>
import { routes } from '@/router/index';

export default {
  name: 'CNav',
  data() {
    return {
      routes
    };
  },
  methods: {
    updateHeaderAfterRoute() {
      this.$route.path !== '/'
        ? this.$store.commit('CLICK_ROUTE', true)
        : this.$store.commit('CLICK_ROUTE', false);
    }
  }
};
</script>

<style>
.nav-link {
  text-decoration: none;
  text-transform: uppercase;
  color: #000;
  margin-right: 10px;
}
</style>
