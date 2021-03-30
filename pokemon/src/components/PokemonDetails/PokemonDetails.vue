<template>
  <div>
    <div v-if="!isLoading">
      <div v-if="!isError" class="wrapper">
        <div>{{ name }}</div>
        <div>
          <p>
            id :{{ initialDetails.id }} weight:
            {{ initialDetails.weight }} height:
            {{ initialDetails.height }} order: {{ initialDetails.order }}
          </p>
          <img :src="initialDetails.sprite" alt="" />
        </div>
        <div class="certain-details">
          <CertainDetail
            v-for="(item, key, index) in computeDetails"
            :key="detailNames[index]"
            :name="detailNames[index]"
            :details="item"
            class="certain-detail"
          />
        </div>
      </div>
      <h1 v-else>Something went wrong</h1>
      <button><router-link :to="{ name: 'Home' }">home</router-link></button>
    </div>
    <h1 v-else>Loading</h1>
  </div>
</template>

<script>
import PokemonService from '@/services/PokemonService';
import CertainDetail from '@/components/CertainDetail/CertainDetail';


export default {
  name: 'PokemonDetails',
  components: {
    CertainDetail
  },

  props: {
    pokename: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      isError: false,
      isLoading: true,
      name: this.$route.params.pokemon,
      initialDetails: {},
      details: {},
      detailNames: ['Moves', 'Game Indicies', 'Held Items', 'Stats', 'Types']
    };
  },
  computed: {
    computeDetails() {
      const { moves, gameIndices, heldItems, stats, types } = this.details;

      return {
        computedMoves: moves.map(element => {
          return element.move?.name;
        }),
        computedGameIndices: gameIndices.map(element => {
          return `${element.version?.name}: ${element.game_index}`;
        }),
        computedHeldItems: heldItems.map(element => {
          return element.item?.name;
        }),
        computedStats: stats.map(element => {
          return `${element.stat?.name}:  ${element.base_stat}`;
        }),
        computedTypes: types.map(element => {
          return element.type?.name;
        })
      };
    }
  },

  async mounted() {
    try {
      const { data = {} } = (await PokemonService.getDetails(this.name)) || {};

      this.setInitial(data);
      this.setDetails(data);
    } catch (error) {
      console.log(error);

      this.isError = !this.isError;
    } finally {
      this.isLoading = false;
    }
  },

  methods: {
    setInitial(data) {
      this.initialDetails = {
        id: data.id,
        height: data.height,
        weight: data.weight,
        order: data.order,
        sprite: data.sprites?.front_default
      };
    },

    setDetails(data) {
      this.details = {
        moves: data.moves,
        gameIndices: data.game_indices,
        heldItems: data.held_items,
        stats: data.stats,
        types: data.types
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;

  .certain-details {
    display: flex;

    .certain-detail {
      margin-right: 3px;
      padding: 0 10px;
      border-right: solid 1px black;
    }
  }
}
  justify-content: center;
  align-items: center;

  .pokemon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & * {
      margin-bottom: 10px;
    }
  }
}

.details {
  display: flex;

  & * {
    margin-right: 10px;
  }
}
</style>
