
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

   showInfo(loc, choice, num) {
      //get selected, remove selected, add selected to new
      const old = document.querySelector('.selected');
      console.log(old)
      if(old != null) {old.classList.remove('selected')};
      loc.classList.add('selected');
      //empty area
      let outputArea = document.getElementById('actions');
      outputArea.innerHTML = '';
      //grab poke info and create container
      let container = document.createElement('div');
      let pokeData = choice[num];
      //fill container
      container.innerHTML = `
      <p class="hp">HP: ${pokeData.statHP}</p>
      <p class="atk">ATK: ${pokeData.statATK}</p>
      <p class="def">DEF: ${pokeData.statDEF}</p>
      <p class="spatk">SPATK: ${pokeData.statSPATK}</p>
      <p class="spdef">SPDEF: ${pokeData.statSPDEF}</p>
      <p class="spd">SPEED: ${pokeData.statSPD}</p>
      `;
      outputArea.appendChild(container);
   }

}