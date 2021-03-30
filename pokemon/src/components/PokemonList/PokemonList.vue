<template>
  <div class="pokemon__wrapper">
    <div v-if="!isLoading">
      <ul v-if="!isError" class="pokemon__list">
        <Pokemon
          v-for="{ name, url } in pokemons"
          :key="name"
          :pokemon="name"
          :url="url"
        />
      </ul>
      <h1 v-else>Something went wrong</h1>
    </div>
    <h1 v-else>Loading</h1>
  </div>
</template>

<script>
import PokemonService from '@/services/PokemonService';
import Pokemon from '@/components/Pokemon/Pokemon';

export default {
  name: 'PokemonList',

  components: {
    Pokemon
  },

  data() {
    return {
      pokemons: [],
      isError: false,
      isLoading: true
    };
  },

  async mounted() {
    try {
      this.isLoading = true;
      const response = await PokemonService.getNames();

      this.pokemons = response?.data?.results;
    } catch (error) {
      console.log(error);
      this.isError = !this.isError;
    } finally {
      this.isLoading = false;
    }
  }
};
</script>

<style scoped>
.pokemon__list {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
