<template>
  <div class="home">
    <PokemonList />
  </div>
</template>

<script>
import PokemonList from '@/components/PokemonList/PokemonList';

export default {
  name: 'Home',
  components: {
    PokemonList
  }
};
</script>
