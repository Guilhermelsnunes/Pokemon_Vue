<template>
  <div>
    <p>{{pokemon.name}}</p>
    <img :src="pokemon.sprites.other['official-artwork'].front_default" 
    alt="pokemon"/>
  </div>

</template>

<script>
export default {
    name:"SelectedPokemon",
    props: ["pokemon"],
};
</script>

<style>

</style>