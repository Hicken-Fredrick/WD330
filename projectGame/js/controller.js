import pokiAPIHandler from './pokiAPIHandler.js'
import mainView from './view.js'

const pokiAPI = new pokiAPIHandler;
const view = new mainView;

export default class mainController {
   
   addActions() {
      document.getElementById('addRando').addEventListener('click', this.addRandomPoke)
   }

   addRandomPoke() {
      //get a random number to represent a pokemon
      let num = Math.floor(1117 * Math.random()) + 1;
      console.log(num);
      //get pokemon using number
      const data = pokiAPI.getPokiWithNum(num);
      //pass data to view
      console.log(data);
      //view.addPokeToPlay(data);
   }
}