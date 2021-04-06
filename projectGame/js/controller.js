import pokeAPIHandler from './pokeAPIHandler.js'
import mainView from './view.js'
import pokeModel from './pokeModel.js'

const pokiAPI = new pokeAPIHandler;
const view = new mainView;
let player;
let choice = [];
let enemy;
let difficulty = .1;

export default class mainController {
   
   addActions() {
      document.getElementById('continue').addEventListener('click', this.addRandomPoke);
      document.getElementById('play').addEventListener('click', this.startGame);
   }

   async startGame() {
      //Bring areas out of hidden state
      if(document.getElementById("playArea").classList.contains("hidden")) {
         document.getElementById("instructions").classList.remove("hidden");
         document.getElementById("playArea").classList.remove("hidden");
         document.getElementById("actions").classList.remove("hidden");
      }

      //put in base instrucitons
      view.addInstruction("SELECT YOUR STARTER!");

      //generate poke number ids
      let pokeNums = [];
      let num;
      for (let i = 0; i < 3; i++) {
         num = Math.floor(897 * Math.random()) + 1;
         pokeNums.push(num);
      }

      //get pokemon info with id nums, push through model, add to mat
      view.emptyPlayArea();
      pokeNums.forEach(async poke => {
         const info = await pokiAPI.getPokiWithNum(poke);
         const convertToModel = new pokeModel(info);
         choice.push(convertToModel);
         let num = choice.length-1;
         let loc = view.addPokeToPlay(convertToModel);
         loc.then((data) => {
            data.id = num;
            data.addEventListener('click', () => {view.showInfo(data, choice, num)});
         })
      })
      
      //input new buttons
      view.emptyButtonArea();
      let select = view.buildButton("Select");
      select.addEventListener('click', selectStarter);
      view.addGameButton(select);
   }
}

function selectStarter() {
   //grab selected item
   const selected = document.querySelector('.selected');
   //use ID to set choice to player
   player = choice[selected.id];
   //setup opponent
   getOpponent();
}

async function getOpponent() {
   //empty play area & actions
   view.emptyPlayArea();
   view.emptyActionsArea();
   //add player
   await view.addPokeToPlay(player);
   //add vs
   view.addVS();
   //get opponent
   const num = Math.floor(897 * Math.random()) + 1;
   const info = await pokiAPI.getPokiWithNum(num);
   //build opponent
   const convertToModel = new pokeModel(info);
   convertToModel.enemyModifier(difficulty);
   enemy = convertToModel;
   //add opponent
   view.addPokeToPlay(enemy);
}