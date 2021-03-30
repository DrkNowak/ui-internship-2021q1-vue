<template>
  <button class="button">{{ text }}</button>
</template>

<script>
export default {
  name: 'CustomButton',
  props: {
    text: {
      type: String,
      default: ''
    }
  }
};
</script>

<style scoped lang="scss">
.button {
  display: block;
  width: 132px;
  height: 40px;
  border-radius: 3px;
  border: none;
  font-size: $buttonFontSize;
  font-weight: 600;
  font-family: $openSans;
  color: $white;
  background-color: $orange;
}
</style>
