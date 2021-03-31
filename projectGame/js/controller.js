import pokeAPIHandler from './pokeAPIHandler.js'
import mainView from './view.js'
import pokeModel from './pokeModel.js'

const pokiAPI = new pokeAPIHandler;
const view = new mainView;
let player;
let choice = [];
let enemy;

export default class mainController {
   
   addActions() {
      document.getElementById('continue').addEventListener('click', this.addRandomPoke);
      document.getElementById('play').addEventListener('click', this.startGame);
   }

   async addRandomPoke() {
      if(document.getElementById("playArea").classList.contains("hidden")) {
         document.getElementById("playArea").classList.remove("hidden");
         document.getElementById("actions").classList.remove("hidden");
      }
      //get a random number to represent a pokemon
      let num = Math.floor(897 * Math.random()) + 1;
      //get pokemon using number
      const data = await pokiAPI.getPokiWithNum(num);
      //pass data to view
      const poke = new pokeModel(data);
      view.addPokeToPlay(poke);
   }

   async startGame() {
      //hide start buttons add play area in
      document.getElementById("playArea").classList.remove("hidden");
      document.getElementById("actions").classList.remove("hidden");
      document.getElementById("buttons").classList.add("hidden");

      //generate poke number ids
      let pokeNums = [];
      let num;
      for (let i = 0; i < 3; i++) {
         num = Math.floor(897 * Math.random()) + 1;
         pokeNums.push(num);
      }

      //get pokemon info with id nums, push through model, add to mat
      pokeNums.forEach(async poke => {
         const info = await pokiAPI.getPokiWithNum(poke);
         const convertToModel = new pokeModel(info);
         choice.push(convertToModel);
         let num = choice.length-1;
         let loc = view.addPokeToPlay(convertToModel);
         if (num == 2) { showInfo(num) }
         loc.then((data) => {
            console.log(data);
            data.addEventListener('click', () => {showInfo(num)});
         })
      })
   }
}

function showInfo(num) {
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