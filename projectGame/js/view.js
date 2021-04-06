
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

   addVS() {
      //get play area
      const destination = document.getElementById('playArea');
      //container
      let vsContainer = document.createElement('div');
      vsContainer.id = "vs";
      //fill
      vsContainer.innerHTML = `<p> VS! </p>`
      //add
      destination.appendChild(vsContainer);
   }

   async buildPokemonCard(data) {
      //create pieces of card
      let container = document.createElement('div');
      //fill container
      container.innerHTML = `<p class="pokemonName">${data.name}</p>
      <img src="${data.img}" class="pokeImg">
      `
      return container;
   }

   showInfo(loc, choice, num) {
      //get selected, remove selected, add selected to new
      const old = document.querySelector('.selected');
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

   emptyPlayArea() {
      //empty play area
      document.getElementById("playArea").innerHTML = '';
   }

   emptyButtonArea() {
      //empty button area
      document.getElementById("buttons").innerHTML = '';
   }

   emptyActionsArea() {
      //empty actions area
      document.getElementById("actions").innerHTML = '';
   }

   buildButton(text) {
      //build button
      let container = document.createElement('button');
      container.innerHTML = text;

      //return button for adding event
      return container;
   }

   addGameButton(button) {
      //add button to button area
      document.getElementById("buttons").appendChild(button);
   }

   addInstruction(text) {
      //Empty instruction area
      document.getElementById("instructions").innerHTML = '';
      //Add new text to instruction area
      document.getElementById("instructions").innerHTML = `${text}`;
   }

}