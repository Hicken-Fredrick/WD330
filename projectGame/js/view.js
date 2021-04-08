
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

   //same as above but has an HP stat showing
   async addCharacterToPlay(data, id) {
      //get play area
      const destination = document.getElementById('playArea');
      //create holder and populate
      let pokemon = await this.buildCharacterCard(data);
      pokemon.id = id;
      //append to destination
      destination.appendChild(pokemon);
      //send back check for event
      return pokemon;
   }

   async addItemToPlay(itemInfo) {
      //get play area
      const destination = document.getElementById('playArea');
      //create holder and populate
      let item = await this.buildItemCard(itemInfo);
      //append to destination
      destination.appendChild(item);
      //send back check for event
      return item;
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

   //same as above but has an HP stat area
   async buildCharacterCard(data) {
      //create container
      let container = document.createElement('div');
      //fill container
      container.innerHTML = `<p class="pokemonName">${data.name}</p>
      <img src="${data.img}" class="pokeImg">
      <p class="hp">HP: ${data.curHP}</p>
      `
      return container;
   }

   async buildItemCard(item) {
      //create container
      let container = document.createElement('div');
      //fill container
      container.innerHTML = `<p class="itemName">${item.info.name}</p>
      <img src="${item.info.img}" class="itemImage">`
      //return container
      return container;
   }

   showInfoPoke(loc, choice, num) {
      //get selected, remove selected, add selected to new
      moveSelected(loc);
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

   showInfoItem(loc, choice, num) {
      //get selected, remove selected, add selected to new
      moveSelected(loc);
      //empty area
      let outputArea = document.getElementById('actions');
      outputArea.innerHTML = '';
      //grab item info and create container
      let container = document.createElement('div');
      let itemInfo = choice[num];
      //put in item description
      container.innerHTML = `${itemInfo.info.description}`;
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

   redrawHP(hp, id){
      //get hp loc
      document.querySelector(`#${id} .hp`).innerHTML = `HP: ${hp}`;
   }
}

function moveSelected(loc) {
   const old = document.querySelector('.selected');
   if(old != null) {old.classList.remove('selected')};
   loc.classList.add('selected');
}