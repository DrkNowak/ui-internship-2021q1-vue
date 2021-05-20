<template>
  <div>
    <v-card
      :id="barId"
      height="200px"
      color="rgba(0,0,0,0)"
      class="rounded-0"
      @click="show"
    ></v-card>

    <v-menu
      v-model="showMenu"
      :position-x="x"
      :position-y="y"
      absolute
      offset-y
    >
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  props: {
    barId: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      showMenu: false,
      x: 0,
      y: 0,
      items: [{ title: 'Edit' }, { title: 'Close' }]
    };
  },

  methods: {
    show(e) {
      e.preventDefault();
      this.showMenu = false;
      this.x = e.clientX;
      this.y = e.clientY;
      this.$nextTick(() => {
        this.showMenu = true;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.v-card {
  cursor: pointer;
}

.v-list-item {
  cursor: pointer;
}
</style>
