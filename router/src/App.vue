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
body,
p,
h3 {
  margin: 0;
}

* {
  font-family: 'Squada One', cursive;
}
</style>
