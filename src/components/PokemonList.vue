<template>
  <div>
    <pokemon-list-item
      v-for="(pokemon, index) in allPokemon"
      :key="index"
      :pokemon="pokemon"
    ></pokemon-list-item>
  </div>
</template>

<script>
import PokemonListItem from "./PokemonListItem.vue";

export default {
  name: "PokemonList",
  props: ["allPokemon"],
  components: {
    "pokemon-list-item": PokemonListItem,
  },
};
</script>

<style>
</style>