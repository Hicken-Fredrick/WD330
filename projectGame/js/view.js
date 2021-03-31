
export default class mainView {

   async addPokeToPlay(data) {
      //get play area
      const destination = document.getElementById('playArea');
      //create holder and populate
      let pokemon = await this.buildPokemonCard(data);
      //append to destination
      destination.appendChild(pokemon);
      //send back check for event
      return pokemon;
   }

   async buildPokemonCard(data) {
      //create pieces of card
      let container = document.createElement('div');
      //fill container
      container.innerHTML = `<p class="pokemonName">${data.name}<p>
      <img src="${data.img}" class="pokeImg">
      `
      return container;
   }

   async chooseStarter() {

   }

}