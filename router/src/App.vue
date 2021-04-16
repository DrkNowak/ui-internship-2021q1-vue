<template>
  <div id="app">
    <CHeader />
    <CNavContainer>
      <router-view />
    </CNavContainer>
  </div>
</template>

<script>
import CNavContainer from '@/components/CNavContainer';
import CHeader from '@/components/CHeader';

export default {
  name: 'App',

  components: {
    CHeader,
    CNavContainer
  }
};
</script>

<style lang="scss">
@import '../node_modules/ag-grid-community/dist/styles/ag-grid.css';
@import '../node_modules/ag-grid-community/dist/styles/ag-theme-alpine.css';

* {
  font-family: 'Squada One', cursive;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.tab {
  text-transform: uppercase;
}
</style>
