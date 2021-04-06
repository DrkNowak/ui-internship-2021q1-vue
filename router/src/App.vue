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

<style>
body {
  margin: 0;
}
</style>
