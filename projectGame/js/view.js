
export default class mainView {

   async addPokeToPlay(data) {
      //get play area
      const destination = document.getElementById('playArea');
      //create holder and populate
      let pokemon = await this.buildPokemonCard(data);
      //append to destination
      destination.appendChild(pokemon);
   }

   async buildPokemonCard(data) {
      //create pieces of card
      let container = document.createElement('div');
      //fill container
      container.innerHTML = `<p class="pokemonName">${data.name}<p>
      <img src="${data.sprites.front_default}" class="pokeImg">
      <p class="hp">${data.stats[0].base_stat}</p>
      `
      return container;
   }

}