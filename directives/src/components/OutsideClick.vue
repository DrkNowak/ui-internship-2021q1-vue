<template>
  <div
    v-outclick="{ handler: clickHandler, middleware: middlewareMethod }"
    class="outer"
  >
    div with directive
    <div class="red" />
  </div>
</template>

<script>
export default {
  name: 'OutsideClick',

  methods: {
    clickHandler(el, event) {
      alert('outside click');
    },
    middlewareMethod() {
      return false;
    }
  }
};
</script>

<style scoped>
.outer {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 500px;
  background-color: green;
}

.red {
  width: 100px;
  height: 100px;
  background-color: red;
}
</style>
