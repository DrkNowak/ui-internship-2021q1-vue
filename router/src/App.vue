<template>
  <div id="app">
    <CHeader />
    <Container />
  </div>
</template>

<script>
import Container from '@/components/Container';
import CHeader from '@/components/CHeader';

export default {
  name: 'App',

  components: {
    CHeader,
    Container
  }
};
</script>

<style>
body {
  margin: 0;
}
</style>
