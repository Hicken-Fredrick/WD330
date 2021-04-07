import pokeAPIHandler from './pokeAPIHandler.js'
import mainView from './view.js'
import pokeModel from './pokeModel.js'

const pokiAPI = new pokeAPIHandler;
const view = new mainView;
let player;
let choice = [];
let enemy;
let difficulty = 1;

export default class mainController {
   //add game start
   addActions() {
      document.getElementById('play').addEventListener('click', startGame);
   }

}

async function startGame() {
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
   putButtons("selectStarter");
}

function putButtons(type) {
   switch(type) {
      //creates buttons and add events for choosing you character
      case "selectStarter": {
         view.emptyButtonArea();
         let select = view.buildButton("I CHOOSE YOU!");
         select.addEventListener('click', selectStarter);
         view.addGameButton(select);
         break;
      }
      //creates buttons and adds events  for fighting
      case "fight": {
         view.emptyButtonArea();
         let attack = view.buildButton("ATTACK");
         attack.addEventListener('click', handleAttack);
         view.addGameButton(attack);
         let SPattack = view.buildButton("SPECIAL ATTACK");
         SPattack.addEventListener('click', handleSPAttack);
         view.addGameButton(SPattack);
         break;
      }
      //creates buttons and adds event for selecting item reward
      case "selectItem": {
         view.emptyButtonArea();
         let selectItem = view.buildButton("Select");
         view.addGameButton(selectItem);
         break;
      }
      //new game
      case "newGame": {
         view.emptyButtonArea();
         let newGame = view.buildButton("New Game");
         newGame.addEventListener('click', startGame);
         view.addGameButton(newGame);
         break;
      }
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
   //empty play area & actions, add instructions
   view.emptyPlayArea();
   view.emptyActionsArea();
   view.addInstruction("FIGHT!");
   //add player
   await view.addCharacterToPlay(player, "player");
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
   view.addCharacterToPlay(enemy, "enemy");
   //add attack button
   putButtons("fight");
}

//handles basic attack
function handleAttack() {
   //clear buttons
   view.emptyButtonArea();
   //choose enemy attack
   const enemyAttack = getEnemyAttack();
   //complete outcome
   turnOutcome(player.statATK, enemyAttack);
}

//handles special attack
function handleSPAttack(){
   //clear buttons
   view.emptyButtonArea();
   //choose enemy attack
   const enemyAttack = getEnemyAttack();
   //complete outcome
   turnOutcome(player.statSPATK, enemy.statSPATK);
}

function getEnemyAttack() {
   //decide highest
   if(enemy.statATK > enemy.statSPATK) {return enemy.statATK}
   else {return enemy.statSPATK}
}

function turnOutcome(playerAttack, enemyAttack) {
   //if player is faster than enemy
   if(player.statSPD >= enemy.statSPD){
      const isEnemyAlive = enemy.takeHit(playerAttack, "atk");
      //enemy survives attack
      if(isEnemyAlive) {
         const isPlayerAlive = player.takeHit(enemyAttack, "atk");
         //player survives attack
         if(isPlayerAlive) {
            //next round redraw hp
            view.redrawHP(player.curHP, "player");
            view.redrawHP(enemy.curHP, "enemy");
            //put fight buttons back
            putButtons("fight");
         }
         //player dies
         else {
            //game over
            view.addInstruction(`GAME OVER! You Beat ${difficulty-1} Opponents`);
            putButtons("newGame");
         }
      }
      //enemy dies
      else {
         //win
      }
   }
   //if player is slower than enemy
   else {
      const isPlayerAlive = player.takeHit(enemyAttack, "spatk");
      //player survives attack
      if(isPlayerAlive) {
         const isEnemyAlive = enemy.takeHit(playerAttack, "spatk");
         //enemy survives attack
         if(isEnemyAlive) {
            //next round redraw hp
            view.redrawHP(player.curHP, "player");
            view.redrawHP(enemy.curHP, "enemy");
            //put fight buttons back
            putButtons("fight");
         }
         //enemy dies
         else {
            //win
         }
      }
      //player dies
      else {
         //game over
         view.addInstruction(`GAME OVER! You Beat ${difficulty-1} Opponents`);
         putButtons("newGame");
      }
   }
}