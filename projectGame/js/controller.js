import pokiAPIHandler from './pokiAPIHandler.js'
import mainView from './view.js'

const pokiAPI = new pokiAPIHandler;
const view = new mainView;

export default class mainController {
   
   addActions() {
      document.getElementById('addRando').addEventListener('click', this.addRandomPoke)
   }

   async addRandomPoke() {
      //get a random number to represent a pokemon
      let num = Math.floor(1098 * Math.random()) + 1;
      console.log(num);
      //get pokemon using number
      const data = await pokiAPI.getPokiWithNum(num);
      //pass data to view
      view.addPokeToPlay(data);
   }
}