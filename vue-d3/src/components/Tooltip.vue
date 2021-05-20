<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on }">
      <p class="tooltip-text" v-on="on"><slot /></p>
    </template>
    <span>{{ labelName }}</span>
  </v-tooltip>
</template>

<script>
export default {
  props: {
    labelName: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped>
.tooltip-text {
  font-size: 10px;
  text-align: center;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.v-tooltip__content {
  height: 20px;
  margin-top: -10px;
  padding: 0px 5px 0px 5px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
  font-size: 12px;
  border-radius: 2px;
  opacity: 1 !important;
  color: #555;
  background-color: #eee;
}
</style>
