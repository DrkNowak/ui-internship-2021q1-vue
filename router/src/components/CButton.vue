<template>
  <div class="c-button">
    <p>{{ buttonTitle }}</p>
    <i class="fas" :class="buttonIcon" />
  </div>
</template>

<script>
export default {
  name: 'CButton',

  props: {
    buttonTitle: {
      type: String,
      default: ''
    },
    buttonIcon: {
      type: String,
      default: ''
    }
  }
};
</script>

<style scoped>
.c-button {
  display: flex;
  justify-content: space-between;
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
