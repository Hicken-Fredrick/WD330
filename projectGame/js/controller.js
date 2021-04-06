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

   async startGame() {
      //Bring areas out of hidden state
      if(document.getElementById("playArea").classList.contains("hidden")) {
         document.getElementById("playArea").classList.remove("hidden");
         document.getElementById("actions").classList.remove("hidden");
      }

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
            data.addEventListener('click', () => {view.showInfo(data, choice, num)});
         })
      })
   }
}